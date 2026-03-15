"use client";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
}

export function Marquee({ children, direction = "left" }: MarqueeProps) {
  const trackClass = direction === "left" ? "marquee-track" : "marquee-track-reverse";

  return (
    <div className="overflow-hidden">
      <div className={trackClass}>
        {children}
        {children}
      </div>
    </div>
  );
}
