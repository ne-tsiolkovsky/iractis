"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";
import { RadialGlow } from "@/components/effects/RadialGlow";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!contentRef.current) return;
      gsap.from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <RadialGlow />

      <div ref={contentRef} className="relative z-10 text-center px-6">
        <h2 className="text-section font-bold" style={{ color: "var(--text-primary)" }}>
          Построен для будущего.
        </h2>
        <p className="text-section mt-2 font-light" style={{ color: "var(--text-secondary)" }}>
          Доступен сегодня.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <a href="#contacts">
            <Button variant="filled" size="md">
              <span className="whitespace-nowrap">Запросить демо</span>
            </Button>
          </a>
          <a href="#contacts">
            <Button variant="ghost" size="md">
              <span className="whitespace-nowrap">Связаться с нами</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
