"use client";

import { useState, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";

import { COMPARISON_ROWS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="rgba(74, 222, 128, 0.15)" />
      <path d="M6 10l3 3 5-6" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animated-contour" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="rgba(239, 68, 68, 0.15)" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" className="animated-contour" />
    </svg>
  );
}

export default function ComparisonTable() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!tableRef.current) return;
      gsap.from(tableRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, tableRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: "var(--bg)" }}>
      <Container>
        <h2
          className="text-section mt-4 font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          Ирактис vs Jira Data Center
        </h2>
        <p
          className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Детальное сравнение возможностей двух платформ. Ирактис создан специально для российского рынка и закрывает все потребности, которые Jira больше не может обеспечить после ухода Atlassian из России.
        </p>

        <div
          ref={tableRef}
          className="mt-12 overflow-hidden rounded-xl border"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-3 gap-4 border-b px-6 py-4 text-sm font-semibold"
            style={{ borderColor: "var(--border)" }}
          >
            <span style={{ color: "var(--text-secondary)" }}>Функция</span>
            <span className="text-center" style={{ color: "var(--accent-light)" }}>
              Ирактис
            </span>
            <span className="text-center" style={{ color: "var(--text-muted)" }}>
              Jira
            </span>
          </div>

          {/* Rows */}
          {COMPARISON_ROWS.map((row, i) => (
            <div key={i}>
              <button
                onClick={() => setExpandedRow(expandedRow === i ? null : i)}
                className={cn(
                  "grid w-full cursor-pointer grid-cols-3 gap-4 border-b px-6 py-4 text-left text-sm transition-colors duration-200",
                  i === COMPARISON_ROWS.length - 1 && !expandedRow && "border-b-0"
                )}
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--surface-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <span className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={cn(
                      "shrink-0 transition-transform duration-300",
                      expandedRow === i && "rotate-90"
                    )}
                  >
                    <path d="M6 4l4 4-4 4" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {row.feature}
                </span>
                <span className="flex justify-center">
                  {row.iractis ? <CheckIcon /> : <CrossIcon />}
                </span>
                <span className="flex justify-center">
                  {row.jira ? <CheckIcon /> : <CrossIcon />}
                </span>
              </button>

              {/* Expandable details */}
              <div
                className={cn(
                  "accordion-content border-b",
                  expandedRow === i && "open"
                )}
                style={{ borderColor: "var(--border)" }}
              >
                <div className="mx-6 my-4 rounded-xl p-5" style={{ backgroundColor: "rgba(0, 240, 255, 0.03)" }}>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(0, 240, 255, 0.1)" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 2v8M2 6h8" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {row.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
