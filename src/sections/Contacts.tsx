"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22V12h6v10M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01" />
    </svg>
  );
}

export default function Contacts() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!contentRef.current) return;
      const children = contentRef.current.querySelectorAll("[data-animate]");
      gsap.from(children, {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
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
      className="py-20 lg:py-32 border-t"
      style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
    >
      <Container>
        <div ref={contentRef}>
          {/* Section header */}
          <div data-animate className="mb-12 lg:mb-16">
            <p className="text-label mb-4">Контакты</p>
            <h2
              className="text-section font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Свяжитесь с нами
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: Contact person */}
            <div data-animate>
              <div className="mb-8 rounded-2xl p-6 lg:p-8" style={{ backgroundColor: "var(--surface)" }}>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">Роман Третьяков</h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    Сооснователь и руководитель направления партнёрств
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Phone */}
                  <a
                    href="tel:+74953801133"
                    className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: "rgba(0, 240, 255, 0.08)", color: "var(--accent)" }}>
                      <PhoneIcon />
                    </span>
                    +7 (495) 380-11-33
                  </a>

                  {/* Telegram */}
                  <a
                    href="https://t.me/RVTretyakov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: "rgba(0, 240, 255, 0.08)", color: "var(--accent)" }}>
                      <TelegramIcon />
                    </span>
                    @RVTretyakov
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:tretyakovrv@iractis.ru"
                    className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: "rgba(0, 240, 255, 0.08)", color: "var(--accent)" }}>
                      <MailIcon />
                    </span>
                    tretyakovrv@iractis.ru
                  </a>
                </div>
              </div>

              {/* Company name + technopark */}
              <div data-animate className="rounded-2xl p-6 lg:p-8" style={{ backgroundColor: "var(--surface)" }}>
                <div className="flex items-start gap-3 mb-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl mt-0.5" style={{ backgroundColor: "rgba(0, 240, 255, 0.08)", color: "var(--accent)" }}>
                    <BuildingIcon />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">ООО «Ирактис Трекер»</h3>
                    <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                      Резидент ГАУ «Технопарк в сфере высоких технологий «ИТ-парк»
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: "rgba(0, 240, 255, 0.08)", color: "var(--accent)" }}>
                    <MapPinIcon />
                  </span>
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>г. Казань</span>
                </div>
              </div>
            </div>

            {/* Right: Legal details */}
            <div data-animate>
              <div className="rounded-2xl p-6 lg:p-8 h-full" style={{ backgroundColor: "var(--surface)" }}>
                <h3 className="text-lg font-bold text-white mb-6">Реквизиты компании</h3>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                      Наименование
                    </p>
                    <p className="text-sm font-medium text-white">ООО «ИРАКТИС ТРЕКЕР»</p>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                        ИНН
                      </p>
                      <p className="text-sm font-mono text-white">1684028109</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                        КПП
                      </p>
                      <p className="text-sm font-mono text-white">168401001</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                      ОГРН
                    </p>
                    <p className="text-sm font-mono text-white">1251600041230</p>
                  </div>

                  <div className="border-t pt-5" style={{ borderColor: "var(--border)" }}>
                    <p className="text-xs font-medium uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                      Юридический и фактический адрес
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      422623, Республика Татарстан, Лаишевский р-н, с. Малые Кабаны, пер. Строителей, д. 7
                    </p>
                  </div>

                  <div className="border-t pt-5" style={{ borderColor: "var(--border)" }}>
                    <p className="text-xs font-medium uppercase tracking-wider mb-1.5" style={{ color: "var(--text-muted)" }}>
                      Основной вид деятельности
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      Разработка компьютерного программного обеспечения (62.01)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
