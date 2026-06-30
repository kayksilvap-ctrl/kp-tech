"use client"

export function FloatingBlobs() {
  return (
    <>
      <div className="floating-blob" />
      <div className="floating-blob" />
      <div className="floating-blob" />
      <div className="floating-blob" />
    </>
  )
}

export function DecoRings({ count = 3 }: { count?: number }) {
  const sizes = [400, 300, 200]
  const colors = [
    "rgba(99,102,241,0.04)",
    "rgba(34,211,238,0.03)",
    "rgba(251,113,133,0.03)",
  ]
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="deco-ring"
          style={{
            width: sizes[i] ?? 200,
            height: sizes[i] ?? 200,
            borderColor: colors[i] ?? "rgba(255,255,255,0.03)",
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </>
  )
}

export function FloatingDots({ count = 6 }: { count?: number }) {
  const positions = [
    { top: "10%", left: "5%", size: 4, color: "#6366F1", delay: "0s" },
    { top: "20%", left: "90%", size: 3, color: "#22D3EE", delay: "-2s" },
    { top: "50%", left: "95%", size: 5, color: "#FB7185", delay: "-4s" },
    { top: "70%", left: "3%", size: 3, color: "#A78BFA", delay: "-6s" },
    { top: "85%", left: "80%", size: 4, color: "#34D399", delay: "-8s" },
    { top: "40%", left: "50%", size: 2, color: "#FBBF24", delay: "-10s" },
  ]
  return (
    <>
      {positions.slice(0, count).map((p, i) => (
        <div
          key={i}
          className="floating-dot"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
            boxShadow: `0 0 10px ${p.color}`,
            opacity: 0.4,
          }}
        />
      ))}
    </>
  )
}

export function GlowDivide() {
  return <div className="glow-line my-0" />
}

export function SectionGradient({ colors }: { colors?: string }) {
  return (
    <div
      className="absolute inset-0 opacity-30"
      style={{
        background: colors ?? "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.05) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(34,211,238,0.03) 0%, transparent 50%)",
      }}
    />
  )
}