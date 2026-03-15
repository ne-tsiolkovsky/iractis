"use client";

import { useState, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";
import { TabSwitcher } from "@/components/TabSwitcher";
import { BENTO_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const TABS = ["Технологии", "Интеграции", "Платформы"];

function BentoCard({ 
  title, 
  items, 
  icon: Icon,
  color, 
  className, 
  index 
}: { 
  title: string; 
  items: string[]; 
  icon: LucideIcon;
  color: string; 
  className?: string;
  index: number;
}) {
  // Extract colors from the gradient string (e.g., "from-blue-500 to-cyan-400")
  const gradientMatch = color.match(/from-(\w+)-(\d+)\s+to-(\w+)-(\d+)/);
  let glowColor = "rgba(0, 240, 255, 0.5)"; // default cyan
  
  if (gradientMatch) {
    const [, fromColor] = gradientMatch;
    // Simple mapping for glow colors based on tailwind color names
    const colorMap: Record<string, string> = {
      blue: "rgba(59, 130, 246, 0.5)",
      emerald: "rgba(16, 185, 129, 0.5)",
      purple: "rgba(168, 85, 247, 0.5)",
      orange: "rgba(249, 115, 22, 0.5)",
      indigo: "rgba(99, 102, 241, 0.5)",
      sky: "rgba(14, 165, 233, 0.5)",
      violet: "rgba(139, 92, 246, 0.5)",
      red: "rgba(239, 68, 68, 0.5)",
      cyan: "rgba(6, 182, 212, 0.5)",
      amber: "rgba(245, 158, 11, 0.5)",
    };
    glowColor = colorMap[fromColor] || glowColor;
  }

  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/5 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10 flex flex-col",
        className
      )}
    >
      {/* Hover Gradient Background */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${glowColor}, transparent 70%)`
        }}
      />

      {/* Large Background Icon */}
      <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-6">
        <Icon size={160} strokeWidth={1} />
      </div>

      <div className="p-8 flex-1 flex flex-col relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br shadow-lg",
            color
          )}>
            <Icon size={24} className="text-white" />
          </div>
          <span className="text-white/20 font-mono text-sm font-medium">{String(index + 1).padStart(2, '0')}</span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{title}</h3>
        
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {items.map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-sm text-zinc-300 font-medium backdrop-blur-sm transition-colors group-hover:bg-white/[0.06] group-hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BentoGrid() {
  const [activeTab, setActiveTab] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const initialAnimDone = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!gridRef.current) return;
      const cards = gridRef.current.children;

      if (!initialAnimDone.current) {
        // Initial scroll-triggered entrance — only once
        gsap.fromTo(cards,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              once: true,
            },
            onComplete: () => { initialAnimDone.current = true; },
          }
        );
      } else {
        // Tab switch — quick fade, no Y movement
        gsap.fromTo(cards,
          { opacity: 0, scale: 0.97 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.35,
            stagger: 0.06,
            ease: "power2.out",
          }
        );
      }
    }, gridRef);

    return () => ctx.revert();
  }, [activeTab]);

  const currentTabName = TABS[activeTab];
  const currentItems = BENTO_ITEMS[currentTabName] || [];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00F0FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Технологический стек
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
            Современная архитектура, обеспечивающая высокую производительность, масштабируемость и безопасность корпоративного уровня.
          </p>
          
          <div className="flex justify-center px-4">
            <TabSwitcher
              tabs={TABS}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentItems.map((item, i) => {
            let spanClass = "lg:col-span-1 md:col-span-1";
            
            if (currentItems.length === 4) {
              // 2-1-1-2 layout
              if (i === 0 || i === 3) spanClass = "lg:col-span-2 md:col-span-2";
            } else if (currentItems.length === 3) {
              // 1-1-1 layout
              spanClass = "lg:col-span-1 md:col-span-1";
            } else if (currentItems.length === 2) {
              // 2-1 layout
              if (i === 0) spanClass = "lg:col-span-2 md:col-span-2";
            } else if (currentItems.length === 6) {
              // 2-1-1-1-1-2 layout
              if (i === 0 || i === 5) spanClass = "lg:col-span-2 md:col-span-2";
            }
            
            return (
              <BentoCard
                key={item.title}
                index={i}
                title={item.title}
                items={item.items}
                icon={item.icon}
                color={item.color}
                className={spanClass}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
