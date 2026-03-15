"use client";

import { FOOTER_LINKS } from "@/lib/constants";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Column 1: Logo + description */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Logo size={24} />
              <span className="text-lg font-bold text-text-primary">Ирактис</span>
              <span className="text-lg font-bold text-accent">Трекер</span>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Системное программное обеспечение для управления проектами. Цифровой суверенитет без компромиссов.
            </p>
          </div>

          {/* Columns 2-6: Link groups from FOOTER_LINKS */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold text-text-primary">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-text-muted transition-colors duration-200 hover:text-text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-sm font-semibold text-text-primary">
                Будьте в курсе обновлений
              </h4>
              <p className="mt-1 text-sm text-text-muted">
                Новые возможности, релизы и советы по миграции.
              </p>
            </div>
            <form
              className="flex w-full max-w-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="email@company.ru"
                className="flex-1 rounded-l-xl border border-border bg-bg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-200 focus:border-accent focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="rounded-r-xl bg-accent px-5 py-2.5 text-sm font-semibold text-[#0A0A0B] transition-colors duration-200 hover:bg-accent-light"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} ООО «Ирактис Трекер». Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#contacts"
              className="text-xs text-text-muted transition-colors duration-200 hover:text-text-primary"
            >
              Конфиденциальность
            </a>
            <a
              href="#contacts"
              className="text-xs text-text-muted transition-colors duration-200 hover:text-text-primary"
            >
              Условия
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
