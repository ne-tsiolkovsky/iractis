import React from "react";
import { cn } from "@/lib/utils";
import { 
  Inbox, CircleDot, LayoutGrid, Activity, Search, Plus,
  MoreHorizontal, MessageSquare, Paperclip, ChevronDown,
  Settings, Filter, ArrowUpDown, Calendar,
  CheckCircle2, Circle, Clock, AlertCircle
} from "lucide-react";

interface ProductMockupProps {
  variant?: "kanban" | "timeline" | "project" | "analytics";
  className?: string;
}

// Ultra-modern color palette
const BG_APP = "#0A0A0B";
const BG_SIDEBAR = "#121214";
const BG_CARD = "#1A1A1E";
const BG_CARD_HOVER = "#222228";
const BORDER = "#2A2A32";
const BORDER_LIGHT = "#3A3A42";

const A = "#00F0FF"; // Cyan accent
const P = "#8B5CF6"; // Purple
const G = "#30A46C"; // Green
const R = "#E5484D"; // Red
const O = "#FFB224"; // Orange
const M = "#8F96A3"; // Muted text
const TEXT_H = "#FFFFFF"; // High contrast text
const TEXT_M = "#A0A5B0"; // Medium contrast text

export function ProductMockup({
  variant = "kanban",
  className,
}: ProductMockupProps) {
  return (
    <div className={cn("mockup-container relative w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50", className)}>
      <svg
        viewBox="0 0 1200 750"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mockup-image w-full h-auto block"
      >
        <defs>
          {/* Filters for ultra-modern look */}
          <filter id="card-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.6" />
          </filter>
          <filter id="glow-accent" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="glow-subtle" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          {/* Gradients */}
          <linearGradient id="bg-gradient" x1="0" y1="0" x2="1200" y2="750">
            <stop offset="0%" stopColor={BG_APP} />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>
          <linearGradient id="sidebar-gradient" x1="0" y1="0" x2="220" y2="750">
            <stop offset="0%" stopColor={BG_SIDEBAR} />
            <stop offset="100%" stopColor="#0D0D0F" />
          </linearGradient>
          <linearGradient id="primary-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={A} />
            <stop offset="100%" stopColor="#0080FF" />
          </linearGradient>
          <linearGradient id="card-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={BG_CARD} />
            <stop offset="100%" stopColor="#151518" />
          </linearGradient>
          <linearGradient id="active-item" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(0, 240, 255, 0.15)" />
            <stop offset="100%" stopColor="rgba(0, 240, 255, 0.0)" />
          </linearGradient>
          
          {/* Chart Gradients */}
          <linearGradient id="chart-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={A} stopOpacity="0.4" />
            <stop offset="100%" stopColor={A} stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Base App Background */}
        <rect width="1200" height="750" fill="url(#bg-gradient)" />
        
        {/* macOS Window Controls */}
        <rect width="1200" height="48" fill={BG_SIDEBAR} />
        <line x1="0" y1="48" x2="1200" y2="48" stroke={BORDER} strokeWidth="1" />
        <circle cx="24" cy="24" r="6" fill="#FF5F57" />
        <circle cx="44" cy="24" r="6" fill="#FEBC2E" />
        <circle cx="64" cy="24" r="6" fill="#28C840" />

        <Sidebar />

        {variant === "kanban" && <KanbanView />}
        {variant === "timeline" && <TimelineView />}
        {variant === "project" && <ProjectView />}
        {variant === "analytics" && <AnalyticsView />}

        {/* Global Lighting Effect */}
        <radialGradient id={`lighting-${variant}`} cx="50%" cy="0%" r="70%">
          <stop offset="0%" stopColor={A} stopOpacity="0.05" />
          <stop offset="100%" stopColor={A} stopOpacity="0" />
        </radialGradient>
        <rect width="1200" height="750" fill={`url(#lighting-${variant})`} pointerEvents="none" />
      </svg>
    </div>
  );
}

/* ─── Shared sidebar ─── */
function Sidebar() {
  return (
    <g>
      <rect x="0" y="49" width="240" height="701" fill="url(#sidebar-gradient)" />
      <line x1="240" y1="49" x2="240" y2="750" stroke={BORDER} strokeWidth="1" />

      {/* Workspace Selector */}
      <g transform="translate(20, 68)">
        <rect width="32" height="32" rx="8" fill="url(#primary-gradient)" filter="url(#glow-subtle)" />
        <text x="16" y="21" fontSize="16" fontWeight="bold" fill="#FFF" fontFamily="system-ui" textAnchor="middle">N</text>
        <rect x="44" y="4" width="90" height="10" rx="4" fill={TEXT_H} />
        <rect x="44" y="20" width="50" height="8" rx="4" fill={TEXT_M} />
        <g transform="translate(180, 8)" color={TEXT_M}><ChevronDown size={16} strokeWidth={2} /></g>
      </g>

      {/* Search bar */}
      <g transform="translate(20, 124)">
        <rect width="200" height="36" rx="8" fill="#000" stroke={BORDER_LIGHT} strokeWidth="1" />
        <g transform="translate(10, 10)" color={TEXT_M}><Search size={16} strokeWidth={2} /></g>
        <rect x="36" y="15" width="60" height="6" rx="3" fill={TEXT_M} opacity="0.5" />
        <rect x="160" y="8" width="32" height="20" rx="4" fill={BORDER} />
        <text x="176" y="21" fontSize="10" fill={TEXT_M} fontFamily="system-ui" textAnchor="middle">⌘K</text>
      </g>

      {/* Main nav items */}
      <g transform="translate(12, 184)">
        {[
          { icon: <Inbox size={16} />, label: 60, active: false, badge: 3 },
          { icon: <CircleDot size={16} />, label: 70, active: true, badge: 0 },
          { icon: <LayoutGrid size={16} />, label: 50, active: false, badge: 0 },
          { icon: <Activity size={16} />, label: 65, active: false, badge: 0 },
        ].map((item, i) => (
          <g key={i} transform={`translate(0, ${i * 44})`}>
            {item.active && (
              <>
                <rect width="216" height="36" rx="8" fill="url(#active-item)" />
                <rect x="0" y="8" width="3" height="20" rx="1.5" fill={A} filter="url(#glow-subtle)" />
              </>
            )}
            <g transform="translate(12, 10)" color={item.active ? A : TEXT_M}>
              {item.icon}
            </g>
            <rect x="40" y="15" width={item.label} height="6" rx="3" fill={item.active ? TEXT_H : TEXT_M} />
            {item.badge > 0 && (
              <g transform="translate(180, 8)">
                <rect width="24" height="20" rx="10" fill={A} opacity="0.2" />
                <text x="12" y="14" fontSize="11" fontWeight="bold" fill={A} fontFamily="system-ui" textAnchor="middle">{item.badge}</text>
              </g>
            )}
          </g>
        ))}
      </g>

      {/* Section divider */}
      <line x1="20" y1="380" x2="220" y2="380" stroke={BORDER} strokeWidth="1" />

      {/* Projects */}
      <g transform="translate(20, 400)">
        <rect width="60" height="8" rx="4" fill={TEXT_M} opacity="0.5" />
        <g transform="translate(180, -4)" color={TEXT_M}><Plus size={16} strokeWidth={2} /></g>
        
        {[
          { color: A, label: 80, count: "12" },
          { color: P, label: 60, count: "8" },
          { color: O, label: 90, count: "24" },
          { color: G, label: 50, count: "3" },
        ].map((proj, i) => (
          <g key={i} transform={`translate(-8, ${24 + i * 36})`}>
            <circle cx="20" cy="18" r="4" fill={proj.color} filter="url(#glow-subtle)" />
            <rect x="36" y="15" width={proj.label} height="6" rx="3" fill={TEXT_M} />
            <text x="200" y="21" fontSize="11" fill={TEXT_M} fontFamily="system-ui" textAnchor="end">{proj.count}</text>
          </g>
        ))}
      </g>

      {/* Bottom section */}
      <g transform="translate(20, 640)">
        <line x1="0" y1="0" x2="200" y2="0" stroke={BORDER} strokeWidth="1" />
        
        <g transform="translate(0, 16)">
          <g transform="translate(0, 0)" color={TEXT_M}><Settings size={16} strokeWidth={2} /></g>
          <rect x="28" y="5" width="60" height="6" rx="3" fill={TEXT_M} />
        </g>
        
        <g transform="translate(0, 48)">
          <circle cx="12" cy="12" r="12" fill="url(#primary-gradient)" />
          <text x="12" y="16" fontSize="10" fontWeight="bold" fill="#FFF" fontFamily="system-ui" textAnchor="middle">JD</text>
          <rect x="32" y="4" width="70" height="8" rx="4" fill={TEXT_H} />
          <rect x="32" y="16" width="90" height="6" rx="3" fill={TEXT_M} />
        </g>
      </g>
    </g>
  );
}

/* ─── 1. Kanban Board — ultra-detailed ─── */
function KanbanView() {
  const cols = [
    { x: 270, label: "Backlog", color: M, count: "12", icon: <Circle /> },
    { x: 500, label: "In Progress", color: O, count: "4", icon: <Clock /> },
    { x: 730, label: "In Review", color: P, count: "3", icon: <AlertCircle /> },
    { x: 960, label: "Done", color: G, count: "28", icon: <CheckCircle2 /> },
  ];

  return (
    <g>
      {/* ── Top toolbar ── */}
      <g transform="translate(240, 49)">
        <rect width="960" height="60" fill={BG_APP} />
        <line x1="0" y1="60" x2="960" y2="60" stroke={BORDER} strokeWidth="1" />

        {/* Breadcrumb & Title */}
        <rect x="30" y="16" width="60" height="8" rx="4" fill={TEXT_M} />
        <text x="100" y="23" fontSize="12" fill={TEXT_M} fontFamily="system-ui">/</text>
        <rect x="114" y="14" width="120" height="12" rx="6" fill={TEXT_H} />

        {/* View tabs */}
        <g transform="translate(30, 40)">
          {["Board", "List", "Timeline"].map((_, i) => (
            <g key={i} transform={`translate(${i * 80}, 0)`}>
              <rect x="0" y="0" width={[40, 30, 50][i]} height="8" rx="4" fill={i === 0 ? TEXT_H : TEXT_M} />
              {i === 0 && <rect x="0" y="18" width="40" height="2" rx="1" fill={A} filter="url(#glow-subtle)" />}
            </g>
          ))}
        </g>

        {/* Right toolbar actions */}
        <g transform="translate(680, 14)">
          <rect x="0" y="0" width="80" height="32" rx="6" fill={BG_CARD} stroke={BORDER} strokeWidth="1" />
          <g transform="translate(12, 8)" color={TEXT_M}><Filter size={16} strokeWidth={2} /></g>
          <rect x="36" y="13" width="30" height="6" rx="3" fill={TEXT_M} />

          <rect x="90" y="0" width="80" height="32" rx="6" fill={BG_CARD} stroke={BORDER} strokeWidth="1" />
          <g transform="translate(102, 8)" color={TEXT_M}><ArrowUpDown size={16} strokeWidth={2} /></g>
          <rect x="126" y="13" width="30" height="6" rx="3" fill={TEXT_M} />

          <rect x="180" y="0" width="100" height="32" rx="6" fill={A} filter="url(#glow-subtle)" />
          <g transform="translate(192, 8)" color="#000"><Plus size={16} strokeWidth={2} /></g>
          <text x="240" y="20" fontSize="12" fontWeight="bold" fill="#000" fontFamily="system-ui" textAnchor="middle">New Issue</text>
        </g>
      </g>

      {/* ── Column headers ── */}
      {cols.map((col) => (
        <g key={col.label} transform={`translate(${col.x}, 130)`}>
          <g transform="translate(0, 0)" color={col.color}>
            {React.cloneElement(col.icon as React.ReactElement, { size: 16 } as Record<string, unknown>)}
          </g>
          <text x="24" y="13" fontSize="13" fontWeight="600" fill={TEXT_H} fontFamily="system-ui">{col.label}</text>
          <rect x="100" y="0" width="24" height="16" rx="8" fill={BORDER} />
          <text x="112" y="11" fontSize="10" fill={TEXT_M} fontFamily="system-ui" textAnchor="middle">{col.count}</text>
          <g transform="translate(190, 0)" color={TEXT_M}><Plus size={16} strokeWidth={2} /></g>
          <g transform="translate(210, 0)" color={TEXT_M}><MoreHorizontal size={16} strokeWidth={2} /></g>
        </g>
      ))}

      {/* ── Cards ── */}
      {/* Backlog */}
      <KanbanCard x={270} y={160} id="PRJ-101" titleW={160} priority={M} tag="Design" tagColor={P} assignee={A} comments={3} attachments={1} />
      <KanbanCard x={270} y={290} id="PRJ-102" titleW={130} priority={O} tag="Frontend" tagColor={A} assignee={G} comments={0} attachments={0} />
      <KanbanCard x={270} y={420} id="PRJ-103" titleW={180} priority={M} tag="Backend" tagColor={O} assignee={null} comments={5} attachments={2} />
      
      {/* In Progress */}
      <KanbanCard x={500} y={160} id="PRJ-098" titleW={150} priority={R} tag="Bug" tagColor={R} assignee={P} comments={12} attachments={3} active={true} />
      <KanbanCard x={500} y={310} id="PRJ-099" titleW={140} priority={O} tag="Feature" tagColor={G} assignee={A} comments={2} attachments={0} />
      
      {/* In Review */}
      <KanbanCard x={730} y={160} id="PRJ-085" titleW={170} priority={O} tag="Frontend" tagColor={A} assignee={O} comments={8} attachments={1} />
      <KanbanCard x={730} y={290} id="PRJ-087" titleW={120} priority={M} tag="Design" tagColor={P} assignee={G} comments={4} attachments={4} />
      
      {/* Done */}
      <KanbanCard x={960} y={160} id="PRJ-042" titleW={130} priority={G} tag="Feature" tagColor={G} assignee={A} comments={1} attachments={0} />
      <KanbanCard x={960} y={290} id="PRJ-041" titleW={160} priority={G} tag="Bug" tagColor={R} assignee={P} comments={6} attachments={2} />
      <KanbanCard x={960} y={420} id="PRJ-039" titleW={110} priority={G} tag="Backend" tagColor={O} assignee={G} comments={0} attachments={0} />
    </g>
  );
}

function KanbanCard({
  x, y, id, titleW, priority, tag: _tag, tagColor, assignee, comments, attachments, active = false
}: {
  x: number; y: number; id: string; titleW: number; priority: string; tag: string;
  tagColor: string; assignee: string | null; comments: number; attachments: number; active?: boolean;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Card Background with Shadow */}
      <rect 
        width="220" 
        height="114" 
        rx="8" 
        fill="url(#card-gradient)" 
        stroke={active ? A : BORDER} 
        strokeWidth={active ? 1.5 : 1} 
        filter="url(#card-shadow)"
      />
      {active && (
        <rect width="220" height="114" rx="8" fill="none" stroke={A} strokeWidth="2" filter="url(#glow-subtle)" opacity="0.5" />
      )}

      {/* Header: ID & Priority */}
      <text x="16" y="24" fontSize="11" fill={TEXT_M} fontFamily="system-ui">{id}</text>
      <circle cx="200" cy="20" r="4" fill={priority} filter="url(#glow-subtle)" />

      {/* Title (Simulated with rects for crispness, or text if preferred. Let's use rects for the "mockup" feel but detailed) */}
      <rect x="16" y="38" width={titleW} height="10" rx="4" fill={TEXT_H} />
      <rect x="16" y="54" width={titleW * 0.7} height="10" rx="4" fill={TEXT_H} opacity="0.8" />

      {/* Footer */}
      <g transform="translate(16, 84)">
        {/* Tag */}
        <rect width="60" height="20" rx="4" fill={tagColor} opacity="0.15" />
        <rect x="10" y="7" width="40" height="6" rx="3" fill={tagColor} />

        {/* Metrics */}
        <g transform="translate(70, 0)">
          {comments > 0 && (
            <g>
              <g transform="translate(0, 2)" color={TEXT_M}><MessageSquare size={14} strokeWidth={2} /></g>
              <text x="18" y="13" fontSize="11" fill={TEXT_M} fontFamily="system-ui">{comments}</text>
            </g>
          )}
          {attachments > 0 && (
            <g transform={`translate(${comments > 0 ? 36 : 0}, 0)`}>
              <g transform="translate(0, 2)" color={TEXT_M}><Paperclip size={14} strokeWidth={2} /></g>
              <text x="18" y="13" fontSize="11" fill={TEXT_M} fontFamily="system-ui">{attachments}</text>
            </g>
          )}
        </g>

        {/* Assignee Avatar */}
        {assignee ? (
          <g transform="translate(174, 0)">
            <circle cx="10" cy="10" r="12" fill={BG_CARD} />
            <circle cx="10" cy="10" r="10" fill={assignee} />
          </g>
        ) : (
          <g transform="translate(174, 0)">
            <circle cx="10" cy="10" r="10" fill={BORDER} stroke={TEXT_M} strokeWidth="1" strokeDasharray="2 2" />
          </g>
        )}
      </g>
    </g>
  );
}

/* ─── 2. Timeline / Gantt ─── */
function TimelineView() {
  const rows = [
    { label: 120, start: 1, span: 4, color: A },
    { label: 90, start: 0, span: 2, color: G },
    { label: 140, start: 2, span: 5, color: P },
    { label: 100, start: 4, span: 3, color: O },
    { label: 110, start: 1, span: 6, color: A },
    { label: 80, start: 3, span: 2, color: G },
    { label: 130, start: 0, span: 3, color: R },
    { label: 70, start: 5, span: 2, color: P },
  ];

  const monthW = 120;

  return (
    <g>
      {/* Top Bar */}
      <g transform="translate(240, 49)">
        <rect width="960" height="60" fill={BG_APP} />
        <line x1="0" y1="60" x2="960" y2="60" stroke={BORDER} strokeWidth="1" />
        <rect x="30" y="16" width="60" height="8" rx="4" fill={TEXT_M} />
        <text x="100" y="23" fontSize="12" fill={TEXT_M} fontFamily="system-ui">/</text>
        <rect x="114" y="14" width="120" height="12" rx="6" fill={TEXT_H} />
        <g transform="translate(30, 40)">
          {["Board", "List", "Timeline"].map((_, i) => (
            <g key={i} transform={`translate(${i * 80}, 0)`}>
              <rect x="0" y="0" width={[40, 30, 50][i]} height="8" rx="4" fill={i === 2 ? TEXT_H : TEXT_M} />
              {i === 2 && <rect x="0" y="18" width="50" height="2" rx="1" fill={A} filter="url(#glow-subtle)" />}
            </g>
          ))}
        </g>
      </g>

      {/* Left Panel (Tasks) */}
      <g transform="translate(240, 110)">
        <rect width="220" height="640" fill={BG_CARD} />
        <line x1="220" y1="0" x2="220" y2="640" stroke={BORDER} strokeWidth="1" />
        <line x1="0" y1="40" x2="220" y2="40" stroke={BORDER} strokeWidth="1" />
        <text x="20" y="25" fontSize="12" fontWeight="600" fill={TEXT_M} fontFamily="system-ui">Task Name</text>
        
        {rows.map((row, i) => (
          <g key={i} transform={`translate(0, ${40 + i * 56})`}>
            <line x1="0" y1="56" x2="220" y2="56" stroke={BORDER} strokeWidth="1" opacity="0.5" />
            <circle cx="24" cy="28" r="4" fill={row.color} />
            <rect x="40" y="24" width={row.label} height="8" rx="4" fill={TEXT_H} />
            <circle cx="190" cy="28" r="10" fill={BORDER_LIGHT} />
          </g>
        ))}
      </g>

      {/* Right Panel (Timeline Grid) */}
      <g transform="translate(460, 110)">
        <rect width="740" height="40" fill={BG_APP} />
        <line x1="0" y1="40" x2="740" y2="40" stroke={BORDER} strokeWidth="1" />
        
        {/* Months/Weeks */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <g key={i} transform={`translate(${i * monthW}, 0)`}>
            <line x1="0" y1="0" x2="0" y2="640" stroke={BORDER} strokeWidth="1" />
            <text x="10" y="25" fontSize="12" fill={TEXT_M} fontFamily="system-ui">Week {i + 1}</text>
          </g>
        ))}

        {/* Today Marker */}
        <g transform="translate(280, 0)">
          <line x1="0" y1="0" x2="0" y2="640" stroke={A} strokeWidth="2" opacity="0.5" strokeDasharray="4 4" />
          <rect x="-30" y="8" width="60" height="24" rx="12" fill={A} opacity="0.1" />
          <rect x="-24" y="14" width="48" height="12" rx="6" fill={A} />
        </g>

        {/* Task Bars */}
        {rows.map((row, i) => (
          <g key={i} transform={`translate(${row.start * monthW + 20}, ${40 + i * 56 + 16})`}>
            {/* Background Bar */}
            <rect width={row.span * monthW - 40} height="24" rx="12" fill={row.color} opacity="0.15" />
            {/* Progress Bar */}
            <rect width={(row.span * monthW - 40) * 0.6} height="24" rx="12" fill={row.color} filter="url(#glow-subtle)" />
            {/* Label inside bar */}
            <rect x="12" y="8" width="40" height="8" rx="4" fill="#FFF" opacity="0.8" />
          </g>
        ))}
        
        {/* Dependency Lines (Example) */}
        <path d="M 140 80 L 160 80 L 160 136 L 180 136" fill="none" stroke={TEXT_M} strokeWidth="2" />
        <path d="M 380 192 L 400 192 L 400 248 L 420 248" fill="none" stroke={TEXT_M} strokeWidth="2" />
      </g>
    </g>
  );
}

/* ─── 3. Project overview ─── */
function ProjectView() {
  return (
    <g>
      {/* Top Bar */}
      <g transform="translate(240, 49)">
        <rect width="960" height="60" fill={BG_APP} />
        <line x1="0" y1="60" x2="960" y2="60" stroke={BORDER} strokeWidth="1" />
        <rect x="30" y="16" width="60" height="8" rx="4" fill={TEXT_M} />
        <text x="100" y="23" fontSize="12" fill={TEXT_M} fontFamily="system-ui">/</text>
        <rect x="114" y="14" width="120" height="12" rx="6" fill={TEXT_H} />
      </g>

      <g transform="translate(280, 140)">
        <rect width="200" height="16" rx="8" fill={TEXT_H} />
        <rect y="30" width="400" height="10" rx="5" fill={TEXT_M} />
        
        {/* KPI Cards */}
        {[
          { label: "Total Tasks", value: "142", color: A },
          { label: "Completed", value: "89", color: G },
          { label: "Overdue", value: "12", color: R },
          { label: "Time Logged", value: "340h", color: P },
        ].map((kpi, i) => (
          <g key={i} transform={`translate(${i * 220}, 70)`}>
            <rect width="200" height="100" rx="12" fill="url(#card-gradient)" stroke={BORDER} strokeWidth="1" filter="url(#card-shadow)" />
            <text x="20" y="30" fontSize="14" fill={TEXT_M} fontFamily="system-ui">{kpi.label}</text>
            <text x="20" y="70" fontSize="32" fontWeight="bold" fill={TEXT_H} fontFamily="system-ui">{kpi.value}</text>
            <circle cx="170" cy="30" r="16" fill={kpi.color} opacity="0.1" />
            <circle cx="170" cy="30" r="6" fill={kpi.color} filter="url(#glow-subtle)" />
          </g>
        ))}

        {/* Recent Activity List */}
        <g transform="translate(0, 210)">
          <rect width="120" height="12" rx="6" fill={TEXT_H} />
          <rect y="30" width="860" height="300" rx="12" fill="url(#card-gradient)" stroke={BORDER} strokeWidth="1" filter="url(#card-shadow)" />
          
          {/* List Header */}
          <line x1="0" y1="70" x2="860" y2="70" stroke={BORDER} strokeWidth="1" />
          <rect x="30" y="45" width="60" height="8" rx="4" fill={TEXT_M} />
          <rect x="400" y="45" width="80" height="8" rx="4" fill={TEXT_M} />
          <rect x="650" y="45" width="50" height="8" rx="4" fill={TEXT_M} />
          <rect x="780" y="45" width="40" height="8" rx="4" fill={TEXT_M} />

          {/* List Items */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} transform={`translate(0, ${70 + i * 46})`}>
              <line x1="0" y1="46" x2="860" y2="46" stroke={BORDER} strokeWidth="1" opacity="0.5" />
              <circle cx="40" cy="23" r="12" fill={BORDER_LIGHT} />
              <rect x="70" y="19" width={[200, 150, 220, 180, 160][i]} height="10" rx="5" fill={TEXT_H} />
              
              {/* Status Pill */}
              <rect x="400" y="13" width="80" height="20" rx="10" fill={[G, O, A, R, G][i]} opacity="0.15" />
              <rect x="415" y="19" width="50" height="8" rx="4" fill={[G, O, A, R, G][i]} />
              
              <rect x="650" y="19" width="60" height="8" rx="4" fill={TEXT_M} />
              <rect x="780" y="19" width="40" height="8" rx="4" fill={TEXT_M} />
            </g>
          ))}
        </g>
      </g>
    </g>
  );
}

/* ─── 4. Analytics Dashboard ─── */
function AnalyticsView() {
  return (
    <g>
      {/* Top Bar */}
      <g transform="translate(240, 49)">
        <rect width="960" height="60" fill={BG_APP} />
        <line x1="0" y1="60" x2="960" y2="60" stroke={BORDER} strokeWidth="1" />
        <rect x="30" y="16" width="60" height="8" rx="4" fill={TEXT_M} />
        <text x="100" y="23" fontSize="12" fill={TEXT_M} fontFamily="system-ui">/</text>
        <rect x="114" y="14" width="120" height="12" rx="6" fill={TEXT_H} />
        
        <g transform="translate(800, 14)">
          <rect width="120" height="32" rx="6" fill={BG_CARD} stroke={BORDER} strokeWidth="1" />
          <g transform="translate(12, 8)" color={TEXT_M}><Calendar size={16} strokeWidth={2} /></g>
          <text x="36" y="20" fontSize="12" fill={TEXT_H} fontFamily="system-ui">Last 30 Days</text>
        </g>
      </g>

      <g transform="translate(280, 140)">
        {/* Main Chart */}
        <g>
          <rect width="580" height="320" rx="12" fill="url(#card-gradient)" stroke={BORDER} strokeWidth="1" filter="url(#card-shadow)" />
          <text x="24" y="36" fontSize="16" fontWeight="bold" fill={TEXT_H} fontFamily="system-ui">Velocity & Throughput</text>
          <rect x="24" y="50" width="100" height="8" rx="4" fill={TEXT_M} />

          {/* Grid Lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1="24" y1={260 - i * 45} x2="556" y2={260 - i * 45} stroke={BORDER} strokeWidth="1" />
          ))}

          {/* Area Chart */}
          <path 
            d="M 24 260 L 24 200 C 80 180, 120 220, 180 150 C 240 80, 280 120, 340 90 C 400 60, 450 110, 500 70 L 556 40 L 556 260 Z" 
            fill="url(#chart-area)" 
          />
          <path 
            d="M 24 200 C 80 180, 120 220, 180 150 C 240 80, 280 120, 340 90 C 400 60, 450 110, 500 70 L 556 40" 
            fill="none" 
            stroke={A} 
            strokeWidth="3" 
            filter="url(#glow-accent)" 
          />
          
          {/* Secondary Line */}
          <path 
            d="M 24 240 C 100 230, 150 250, 220 200 C 300 150, 350 180, 420 140 C 480 100, 520 130, 556 90" 
            fill="none" 
            stroke={P} 
            strokeWidth="2" 
            strokeDasharray="6 6" 
          />

          {/* Tooltip */}
          <line x1="340" y1="40" x2="340" y2="260" stroke={TEXT_M} strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="340" cy="90" r="6" fill={BG_APP} stroke={A} strokeWidth="3" filter="url(#glow-subtle)" />
          <rect x="290" y="20" width="100" height="40" rx="6" fill={TEXT_H} filter="url(#card-shadow)" />
          <rect x="300" y="30" width="40" height="8" rx="4" fill={BG_APP} />
          <rect x="300" y="42" width="60" height="6" rx="3" fill={TEXT_M} />
        </g>

        {/* Donut Chart Card */}
        <g transform="translate(600, 0)">
          <rect width="280" height="320" rx="12" fill="url(#card-gradient)" stroke={BORDER} strokeWidth="1" filter="url(#card-shadow)" />
          <text x="24" y="36" fontSize="16" fontWeight="bold" fill={TEXT_H} fontFamily="system-ui">Issue Distribution</text>
          
          {/* Donut SVG */}
          <g transform="translate(140, 140)">
            <circle cx="0" cy="0" r="60" fill="none" stroke={BORDER} strokeWidth="20" />
            <circle cx="0" cy="0" r="60" fill="none" stroke={A} strokeWidth="20" strokeDasharray="200 400" transform="rotate(-90)" filter="url(#glow-subtle)" />
            <circle cx="0" cy="0" r="60" fill="none" stroke={P} strokeWidth="20" strokeDasharray="100 400" strokeDashoffset="-200" transform="rotate(-90)" />
            <circle cx="0" cy="0" r="60" fill="none" stroke={O} strokeWidth="20" strokeDasharray="50 400" strokeDashoffset="-300" transform="rotate(-90)" />
            
            <text x="0" y="-5" fontSize="24" fontWeight="bold" fill={TEXT_H} fontFamily="system-ui" textAnchor="middle">428</text>
            <text x="0" y="15" fontSize="12" fill={TEXT_M} fontFamily="system-ui" textAnchor="middle">Total Issues</text>
          </g>

          {/* Legend */}
          <g transform="translate(24, 240)">
            {[
              { label: "Features", color: A, value: "54%" },
              { label: "Bugs", color: P, value: "32%" },
              { label: "Chores", color: O, value: "14%" },
            ].map((item, i) => (
              <g key={i} transform={`translate(0, ${i * 24})`}>
                <circle cx="6" cy="6" r="6" fill={item.color} />
                <text x="20" y="10" fontSize="12" fill={TEXT_M} fontFamily="system-ui">{item.label}</text>
                <text x="230" y="10" fontSize="12" fontWeight="bold" fill={TEXT_H} fontFamily="system-ui" textAnchor="end">{item.value}</text>
              </g>
            ))}
          </g>
        </g>

        {/* Bottom Cards */}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 293}, 340)`}>
            <rect width="273" height="140" rx="12" fill="url(#card-gradient)" stroke={BORDER} strokeWidth="1" filter="url(#card-shadow)" />
            <rect x="20" y="20" width="32" height="32" rx="8" fill={BG_CARD_HOVER} />
            <g transform="translate(28, 28)" color={[A, G, P][i]}>
              {i === 0 ? <Activity size={16} strokeWidth={2} /> : i === 1 ? <CheckCircle2 size={16} strokeWidth={2} /> : <Clock size={16} strokeWidth={2} />}
            </g>
            <text x="20" y="80" fontSize="14" fill={TEXT_M} fontFamily="system-ui">{["Cycle Time", "Completion Rate", "Time in Status"][i]}</text>
            <text x="20" y="110" fontSize="28" fontWeight="bold" fill={TEXT_H} fontFamily="system-ui">{["3.2 Days", "94.8%", "14.5 Hrs"][i]}</text>
            
            {/* Mini Sparkline */}
            <path 
              d={`M 150 100 L 170 ${100 - i*10} L 190 ${90 + i*5} L 210 80 L 230 ${70 - i*15} L 250 60`} 
              fill="none" 
              stroke={[A, G, P][i]} 
              strokeWidth="2" 
            />
          </g>
        ))}
      </g>
    </g>
  );
}
