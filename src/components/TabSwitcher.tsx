"use client";

import { cn } from "@/lib/utils";

interface TabSwitcherProps {
  tabs: string[];
  activeTab: number;
  onChange: (index: number) => void;
}

export function TabSwitcher({ tabs, activeTab, onChange }: TabSwitcherProps) {
  return (
    <div className="flex sm:inline-flex rounded-xl border border-border bg-surface p-1">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => onChange(i)}
          className={cn(
            "flex-1 sm:flex-none rounded-lg px-4 sm:px-5 py-2 text-sm font-medium transition-all duration-200",
            i === activeTab
              ? "bg-accent text-[#0A0A0B]"
              : "text-text-muted hover:text-text-primary"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
