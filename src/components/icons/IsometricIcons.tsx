"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const IsoCube = ({ 
  cx, 
  cy, 
  size,
  height,
  showDots = false,
  className = ""
}: { cx: number; cy: number; size: number; height: number; showDots?: boolean; className?: string }) => {
  const dx = size;
  const dy = size / 2;
  
  const top = `M ${cx} ${cy} L ${cx + dx} ${cy + dy} L ${cx} ${cy + 2 * dy} L ${cx - dx} ${cy + dy} Z`;
  const left = `M ${cx - dx} ${cy + dy} L ${cx} ${cy + 2 * dy} L ${cx} ${cy + 2 * dy + height} L ${cx - dx} ${cy + dy + height} Z`;
  const right = `M ${cx + dx} ${cy + dy} L ${cx} ${cy + 2 * dy} L ${cx} ${cy + 2 * dy + height} L ${cx + dx} ${cy + dy + height} Z`;

  return (
    <g className={className}>
      <path d={left} fill="#0A0A0A" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeLinejoin="round" />
      <path d={right} fill="#050505" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinejoin="round" />
      <path d={top} fill="#111111" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinejoin="round" />
      {showDots && (
        <g transform={`translate(${cx}, ${cy + dy}) scale(1, 0.5) rotate(45)`}>
          {[-1.5, -0.5, 0.5, 1.5].map(i => 
            [-1.5, -0.5, 0.5, 1.5].map(j => (
              <circle key={`${i}-${j}`} cx={i * 4} cy={j * 4} r="0.5" fill="rgba(255,255,255,0.5)" />
            ))
          )}
        </g>
      )}
    </g>
  );
};

const WireframeCube = ({ 
  cx, 
  cy, 
  size, 
  height, 
  stroke = "rgba(255,255,255,0.15)",
  dash = "2 4",
  className = ""
}: { cx: number; cy: number; size: number; height: number; stroke?: string; dash?: string; className?: string }) => {
  const dx = size;
  const dy = size / 2;
  return (
    <g stroke={stroke} strokeWidth="1" fill="none" strokeDasharray={dash} strokeLinejoin="round" className={className}>
      <path d={`M ${cx} ${cy} L ${cx + dx} ${cy + dy} L ${cx} ${cy + 2 * dy} L ${cx - dx} ${cy + dy} Z`} />
      <path d={`M ${cx - dx} ${cy + dy} L ${cx - dx} ${cy + dy + height}`} />
      <path d={`M ${cx + dx} ${cy + dy} L ${cx + dx} ${cy + dy + height}`} />
      <path d={`M ${cx} ${cy + 2 * dy} L ${cx} ${cy + 2 * dy + height}`} />
      <path d={`M ${cx} ${cy + height} L ${cx + dx} ${cy + dy + height} L ${cx} ${cy + 2 * dy + height} L ${cx - dx} ${cy + dy + height} Z`} />
    </g>
  );
};

const FloorGrid = ({ cx, cy }: { cx: number, cy: number }) => (
  <g transform={`translate(${cx}, ${cy}) scale(1, 0.5) rotate(45)`} stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none">
    <rect x="-50" y="-50" width="100" height="100" rx="16" />
    <rect x="-70" y="-70" width="140" height="140" rx="24" />
    <rect x="-90" y="-90" width="180" height="180" rx="32" />
  </g>
);

export function IsoShield({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to("[data-wireframe]", {
        opacity: 0.4,
        y: -4,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to("[data-core]", {
        y: 4,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <svg ref={ref} viewBox="0 0 240 240" className={className}>
      <FloorGrid cx={120} cy={155} />
      <g data-wireframe opacity="0.15">
        <WireframeCube cx={120} cy={60} size={50} height={70} stroke="rgba(255,255,255,0.4)" dash="4 4" />
      </g>
      <g data-core>
        <IsoCube cx={120} cy={85} size={30} height={40} showDots />
      </g>
    </svg>
  );
}

export function IsoServer({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to("[data-blade]", {
        y: -8,
        duration: 2,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <svg ref={ref} viewBox="0 0 240 240" className={className}>
      <FloorGrid cx={120} cy={187.5} />
      <g data-blade><IsoCube cx={120} cy={152.5} size={40} height={15} /></g>
      <g data-blade><IsoCube cx={120} cy={92.5} size={40} height={15} /></g>
      <g data-blade><IsoCube cx={120} cy={32.5} size={40} height={15} showDots /></g>
    </svg>
  );
}

export function IsoSpeed({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to("[data-trail-1]", {
        opacity: 0.1,
        x: 4,
        y: -2,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to("[data-trail-2]", {
        opacity: 0.3,
        x: 8,
        y: -4,
        duration: 1.5,
        delay: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to("[data-main]", {
        y: -6,
        x: 12,
        duration: 1.5,
        delay: 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <svg ref={ref} viewBox="0 0 240 240" className={className}>
      <FloorGrid cx={120} cy={152} />
      <g data-trail-1 opacity="0.2">
        <WireframeCube cx={96} cy={94} size={36} height={40} stroke="rgba(255,255,255,0.2)" dash="2 4" />
      </g>
      <g data-trail-2 opacity="0.5">
        <WireframeCube cx={120} cy={82} size={36} height={40} stroke="rgba(255,255,255,0.3)" dash="4 4" />
      </g>
      <g data-main>
        <IsoCube cx={144} cy={70} size={36} height={40} showDots />
      </g>
    </svg>
  );
}
