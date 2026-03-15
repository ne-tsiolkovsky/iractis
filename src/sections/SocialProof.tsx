"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/Marquee";
import { CountUp } from "@/components/CountUp";
import { INTEGRATIONS, STATS, TESTIMONIALS } from "@/lib/constants";

function IntegrationPill({ name }: { name: string }) {
  return (
    <span
      className="mx-3 inline-flex shrink-0 items-center rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300"
      style={{
        borderColor: "var(--border)",
        color: "var(--text-muted)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--text-primary)";
        e.currentTarget.style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--text-muted)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      {name}
    </span>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  company,
  variant,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
  variant: "light" | "accent";
}) {
  const isAccent = variant === "accent";

  return (
    <div
      className="relative flex flex-col justify-between overflow-hidden rounded-2xl p-8 md:p-10"
      style={{
        backgroundColor: isAccent ? "var(--accent)" : "#E8E5F0",
        color: isAccent ? "#0A0A0B" : "#111113",
        minHeight: 360,
      }}
    >
      {/* Background watermark */}
      <div
        className="pointer-events-none absolute right-[-40px] top-1/2 -translate-y-1/2 opacity-[0.08]"
        style={{ fontSize: 280, fontWeight: 900, lineHeight: 1 }}
      >
        &ldquo;
      </div>

      <p className="relative z-10 text-xl font-semibold leading-snug md:text-2xl lg:text-[1.75rem]">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="relative z-10 mt-8 flex items-center gap-4">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
          style={{
            backgroundColor: isAccent
              ? "rgba(0,0,0,0.15)"
              : "rgba(0,0,0,0.08)",
          }}
        >
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-sm opacity-60">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!statsRef.current) return;
      const items = statsRef.current.querySelectorAll("[data-stat]");
      gsap.from(items, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const allNames = [...INTEGRATIONS.map((i) => i.name), "LDAP", "SSO", "REST API", "Webhooks"];

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Testimonial cards — Linear style */}
      <Container>
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        <p
          className="mb-20 text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          Ирактис используется <strong className="text-text-primary">50+ компаниями</strong> по всей России.
          От стартапов до крупнейших госкорпораций.
        </p>
      </Container>

      {/* Logo marquee */}
      <div className="mb-20 overflow-hidden">
        <Marquee direction="left">
          {allNames.map((name) => (
            <IntegrationPill key={name} name={name} />
          ))}
        </Marquee>
      </div>

      {/* Stats row */}
      <Container>
        <div
          ref={statsRef}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {STATS.map((stat) => {
            const isPlainText = /[/]/.test(stat.value);
            return (
              <div key={stat.label} data-stat className="text-center">
                {isPlainText ? (
                  <div>
                    <p className="text-4xl font-bold" style={{ color: "var(--accent)" }}>{stat.value}</p>
                    <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>{stat.label}</p>
                  </div>
                ) : (
                  <CountUp
                    target={parseInt(stat.value) || 0}
                    suffix={stat.value.replace(/\d+/g, "")}
                    label={stat.label}
                  />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
