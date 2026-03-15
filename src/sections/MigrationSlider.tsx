"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";

import { Button } from "@/components/ui/Button";
import { MIGRATION_STEPS } from "@/lib/constants";

function StepCard({ step }: { step: (typeof MIGRATION_STEPS)[number] }) {
  return (
    <div
      className="card-surface mb-4 rounded-2xl p-6"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <span
        className="text-4xl font-bold"
        style={{ color: "var(--accent)" }}
      >
        {step.number}
      </span>
      <h4
        className="mt-3 text-lg font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        {step.title}
      </h4>
      <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
        {step.description}
      </p>
    </div>
  );
}

export default function MigrationSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.from(leftRef.current, {
          x: -30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      if (rightRef.current) {
        gsap.from(rightRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Duplicate steps for seamless loop
  const allSteps = [...MIGRATION_STEPS, ...MIGRATION_STEPS];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32" style={{ backgroundColor: "var(--bg)" }}>
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left column — text */}
          <div ref={leftRef}>
            <h2
              className="text-section mt-4 font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Миграция без потерь
            </h2>
            <p className="text-body mt-4 max-w-[480px]">
              Переход с Jira Data Center на Ирактис за считанные дни.
              Автоматизированный процесс миграции с полной сохранностью данных,
              workflow и пользовательских настроек.
            </p>
            <div className="mt-8">
              <a href="#contacts">
                <Button variant="filled" size="lg">
                  Начать миграцию
                </Button>
              </a>
            </div>
          </div>

          {/* Right column — vertical slider */}
          <div
            className="relative max-h-[480px] overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div ref={rightRef} className="vertical-slider">
              {allSteps.map((step, i) => (
                <StepCard key={`${step.number}-${i}`} step={step} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
