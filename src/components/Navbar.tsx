"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

const NAV_LINKS = [
  { label: "Возможности", href: "#features" },
  { label: "Сравнение", href: "#comparison" },
  { label: "Миграция", href: "#migration" },
  { label: "О нас", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "navbar-glass" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <Logo size={24} />
          <span className="text-lg font-bold text-text-primary">Ирактис</span>
          <span className="text-lg font-bold text-accent">Трекер</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-[#0A0A0B] transition-colors duration-200 hover:bg-accent-light"
          >
            Демо
          </a>
        </div>
      </nav>
    </header>
  );
}
