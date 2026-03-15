"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";
import { ProductMockup } from "@/components/effects/ProductMockup";
import { HERO } from "@/lib/constants";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, { opacity: 0, y: 10, duration: 0.4 })
        .from(headlineRef.current, { opacity: 0, y: 30, duration: 0.6 }, "-=0.1")
        .from(subtitleRef.current, { opacity: 0, duration: 0.4 }, "-=0.2")
        .from(ctaRef.current, { opacity: 0, scale: 0.95, duration: 0.3 }, "-=0.1")
        .from(mockupRef.current, { opacity: 0, y: 60, duration: 0.8 }, "-=0.3");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Background glow */}
      <div className="section-glow" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1000px] px-6 text-center">
        <p
          ref={badgeRef}
          className="hero-subtitle mb-6 text-sm md:text-base font-semibold tracking-wide"
        >
          Единственная сертифицированная альтернатива Jira DC в России
        </p>

        <h1 ref={headlineRef} className="text-hero">
          <span className="block font-light text-text-primary lg:whitespace-nowrap">Система управления</span>
          <span className="block font-bold text-text-primary">проектами</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-body mx-auto mt-6 max-w-[520px]"
          style={{ color: "var(--text-secondary)" }}
        >
          {HERO.description}
        </p>

        <div ref={ctaRef} className="mt-10 flex items-center justify-center gap-4">
          <a href="#cta">
            <Button variant="filled" size="md">
              Запросить демо
            </Button>
          </a>
          <a href="#features">
            <Button variant="ghost" size="md">
              Узнать больше
            </Button>
          </a>
        </div>
      </div>

      {/* Product mockup — 3D perspective, standing on floor */}
      <div ref={mockupRef} className="relative z-10 mx-auto mt-16 w-full max-w-[1100px] px-6">
        <div className="mockup-scene">
          <div className="mockup-screen">
            <ProductMockup variant="kanban" />
          </div>
          {/* Floor glow */}
          <div className="mockup-floor-glow" />
        </div>
      </div>
    </section>
  );
}
