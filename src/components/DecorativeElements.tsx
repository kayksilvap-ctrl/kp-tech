"use client"

import { motion } from "framer-motion"

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

export function SideFloatingElements() {
  return (
    <>
      {/* Left side elements */}
      <motion.div 
        className="fixed left-4 top-1/3 z-20 hidden lg:block"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col gap-4 items-center">
          <a href="https://wa.me/5517992053914" target="_blank" className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#22D3EE] to-[#2563EB] flex items-center justify-center text-white shadow-lg shadow-[#2563EB]/20 hover:scale-110 transition-transform animate-float">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <div className="w-px h-16 bg-gradient-to-b from-[#22D3EE]/50 to-transparent" />
          <span className="text-[10px] text-[#A1A1AA] rotate-90 tracking-widest uppercase whitespace-nowrap">Fale comigo</span>
        </div>
      </motion.div>

      {/* Right side elements */}
      <motion.div 
        className="fixed right-4 top-1/3 z-20 hidden lg:block"
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="flex flex-col gap-4 items-center">
          <a href="https://www.instagram.com/" target="_blank" className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#2563EB] flex items-center justify-center text-white shadow-lg shadow-[#7C3AED]/20 hover:scale-110 transition-transform animate-float" style={{ animationDelay: "1s" }}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <div className="w-px h-16 bg-gradient-to-b from-[#7C3AED]/50 to-transparent" />
          <span className="text-[10px] text-[#A1A1AA] -rotate-90 tracking-widest uppercase whitespace-nowrap">Instagram</span>
        </div>
      </motion.div>
    </>
  )
}

export function DecoRings({ count = 3 }: { count?: number }) {
  const sizes = [400, 300, 200]
  const colors = ["rgba(99,102,241,0.04)", "rgba(34,211,238,0.03)", "rgba(251,113,133,0.03)"]
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="deco-ring" style={{ width: sizes[i] ?? 200, height: sizes[i] ?? 200, borderColor: colors[i] ?? "rgba(255,255,255,0.03)", top: `${20 + i * 15}%`, left: `${10 + i * 20}%`, animationDelay: `${i * 2}s` }} />
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
        <div key={i} className="floating-dot" style={{ width: p.size, height: p.size, background: p.color, top: p.top, left: p.left, animationDelay: p.delay, boxShadow: `0 0 10px ${p.color}`, opacity: 0.4 }} />
      ))}
    </>
  )
}

export function FloatingWhatsAppCTA() {
  const WHATSAPP = "https://wa.me/5517992053914"
  return (
    <motion.a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#2563EB] text-white font-medium text-sm shadow-2xl shadow-[#2563EB]/30 hover:shadow-[#2563EB]/50 transition-all duration-300 hover:scale-105"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
    >
      <span className="w-3 h-3 rounded-full bg-white animate-pulse" />
      <span>Fazer orçamento</span>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </motion.a>
  )
}