"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";

import { RadialGlow } from "@/components/effects/RadialGlow";
import { ProductMockup } from "@/components/effects/ProductMockup";

interface SubFeature {
  id: string;
  title: string;
  description: string;
}

interface SectionData {
  number: string;
  label: string;
  title: string;
  description: string;
  subFeatures: SubFeature[];
}

interface ProductSectionProps {
  section: SectionData;
  mockupVariant: "kanban" | "timeline" | "project" | "analytics";
}

export default function ProductSection({ section, mockupVariant }: ProductSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;
      const cards = Array.from(cardsRef.current.children) as HTMLElement[];

      cards.forEach((el) => {
        const glow = el.querySelector("[data-glow]") as HTMLElement;
        if (!glow) return;

        el.addEventListener("mousemove", (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          gsap.to(glow, {
            x: x - 150,
            y: y - 150,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(glow, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 lg:py-32 overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      <RadialGlow />

      <Container>
        {/* Header — minimal */}
        <div className="max-w-3xl mx-auto mb-10 lg:mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="font-mono text-sm text-zinc-500 tracking-wider">{section.number}</span>
            <span className="text-sm font-medium text-zinc-300">{section.label}</span>
          </div>

          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-white">
            {section.title}
          </h2>

          <p className="text-center mt-4 text-base md:text-lg text-zinc-400 leading-relaxed">
            {section.description}
          </p>
        </div>

        {/* Sub-features — minimal style */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-px mb-12 lg:mb-16 rounded-xl overflow-hidden border border-white/5">
          {section.subFeatures.map((f) => (
            <div
              key={f.id}
              className="group relative px-5 py-5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 overflow-hidden"
            >
              {/* Cursor-following glow */}
              <div
                data-glow
                className="absolute w-[300px] h-[300px] rounded-full pointer-events-none opacity-0"
                style={{
                  background: "radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <span className="font-mono text-[11px] text-zinc-500 tracking-wider">{f.id}</span>
                <h3 className="mt-1 text-[15px] font-medium text-white leading-snug">{f.title}</h3>
                <p className="mt-2 text-zinc-500 leading-relaxed text-[13px]">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mockup */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-accent/8 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative rounded-2xl border border-white/8 bg-black/30 backdrop-blur-xl overflow-hidden shadow-xl ring-1 ring-white/5">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <ProductMockup variant={mockupVariant} />
          </div>
        </div>
      </Container>
    </section>
  );
}
