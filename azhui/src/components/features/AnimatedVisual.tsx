interface Props {
  laptopImg: string;
}

const BUBBLES = [
  {
    id: "cloud",
    label: "Cloud Based",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8 text-white">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    position: "top-[4%] left-[28%]",
    animation: "animate-float-b",
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.6)",
  },
  {
    id: "room",
    label: "Room Finding",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8 text-white">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    position: "top-[4%] right-[12%]",
    animation: "animate-float-a",
    color: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.6)",
  },
  {
    id: "timetable",
    label: "Timetable",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8 text-white">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <line x1="8" y1="14" x2="8" y2="14" strokeLinecap="round" strokeWidth={2.5}/>
        <line x1="12" y1="14" x2="12" y2="14" strokeLinecap="round" strokeWidth={2.5}/>
        <line x1="16" y1="14" x2="16" y2="14" strokeLinecap="round" strokeWidth={2.5}/>
        <line x1="8" y1="18" x2="8" y2="18" strokeLinecap="round" strokeWidth={2.5}/>
        <line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round" strokeWidth={2.5}/>
      </svg>
    ),
    position: "top-[42%] left-[0%]",
    animation: "animate-float-c",
    color: "#f97316",
    glow: "rgba(249, 115, 22, 0.6)",
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8 text-white">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <polyline points="9 16 11 18 15 14"/>
      </svg>
    ),
    position: "top-[42%] right-[4%]",
    animation: "animate-float-d",
    color: "#10b981",
    glow: "rgba(16, 185, 129, 0.6)",
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8 text-white">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
    position: "bottom-[8%] left-[38%]",
    animation: "animate-float-a",
    color: "#ec4899",
    glow: "rgba(236, 72, 153, 0.6)",
  },
];

export default function AnimatedVisual({ laptopImg }: Props) {
  return (
    <div className="relative w-full max-w-[640px] h-[520px] flex items-center justify-center">

      {/* Outer dashed orbit ring (large) */}
      <div
        className="absolute animate-orbit-spin"
        style={{
          width: 420,
          height: 420,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          borderRadius: "50%",
          border: "1.5px dashed rgba(139,92,246,0.28)",
          boxShadow: "0 0 30px 2px rgba(139,92,246,0.08), inset 0 0 30px 2px rgba(139,92,246,0.03)",
        }}
      />

      {/* Inner orbit ring (smaller) */}
      <div
        className="absolute animate-orbit-spin-reverse"
        style={{
          width: 300,
          height: 300,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          borderRadius: "50%",
          border: "1px solid rgba(139,92,246,0.18)",
        }}
      />

      {/* Traveling orbit dots on large ring */}
      <div className="absolute" style={{ top: "50%", left: "50%", width: 0, height: 0 }}>
        <span
          className="orbit-dot-1 absolute block rounded-full"
          style={{
            width: 10,
            height: 10,
            background: "radial-gradient(circle, #c084fc, #7c3aed)",
            boxShadow: "0 0 8px 3px rgba(192,132,252,0.28)",
            marginTop: -5,
            marginLeft: -5,
          }}
        />
        <span
          className="orbit-dot-2 absolute block rounded-full"
          style={{
            width: 7,
            height: 7,
            background: "radial-gradient(circle, #a78bfa, #6d28d9)",
            boxShadow: "0 0 6px 2px rgba(167,139,250,0.24)",
            marginTop: -3.5,
            marginLeft: -3.5,
          }}
        />
        <span
          className="orbit-dot-3 absolute block rounded-full"
          style={{
            width: 8,
            height: 8,
            background: "radial-gradient(circle, #818cf8, #4f46e5)",
            boxShadow: "0 0 7px 2px rgba(129,140,248,0.24)",
            marginTop: -4,
            marginLeft: -4,
          }}
        />
      </div>

      {/* Floating laptop (center) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="animate-float-laptop"
          style={{
            filter: "drop-shadow(0 18px 48px rgba(139,92,246,0.35)) drop-shadow(0 0 24px rgba(88,28,135,0.25))",
            zIndex: 10,
            width: 280,
          }}
        >
          <img src={laptopImg} alt="AZHly Laptop" className="w-full h-auto" />
        </div>
      </div>

      {/* Feature bubbles */}
      {BUBBLES.map((b) => (
        <div
          key={b.id}
          className={`absolute ${b.position} ${b.animation} flex flex-col items-center gap-2 z-20`}
        >
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: 70,
              height: 70,
              background: b.color,
              boxShadow: `0 0 10px 2px ${b.glow.replace(/0\.6/, '0.24')}`,
            }}
          >
            {b.icon}
          </div>
          <span className="text-white/70 text-sm font-medium text-center leading-tight drop-shadow-lg">
            {b.label}
          </span>
        </div>
      ))}

    </div>
  );
}
