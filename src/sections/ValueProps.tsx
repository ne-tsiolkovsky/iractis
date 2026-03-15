"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";

import { VALUE_PROPS } from "@/lib/constants";
import { IsoShield, IsoServer, IsoSpeed } from "@/components/icons/IsometricIcons";
import { cn } from "@/lib/utils";

const LABELS = ["0.1", "0.2", "0.3"];
const ICONS = [IsoShield, IsoServer, IsoSpeed];

export default function ValueProps() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll("[data-value-card]");

      gsap.from(cards, {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: "var(--bg)" }}>
      <Container>
        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-3"
        >
          {VALUE_PROPS.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                data-value-card
                className={cn(
                  "p-8 lg:p-12",
                  i > 0 && "lg:border-l lg:border-[var(--border)]",
                  i !== 0 && "border-t border-[var(--border)] lg:border-t-0"
                )}
              >
                <span className="text-label">{LABELS[i]}</span>
                <div className="my-8 flex items-center justify-center">
                  <Icon className="h-48 w-48" />
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                  {item.title}
                </h3>
                <p className="text-body">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
