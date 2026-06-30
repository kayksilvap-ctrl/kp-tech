"use client"

import { motion } from "framer-motion"
import { techItems } from "@/data/content"

export default function TechMarquee() {
  return (
    <section className="relative py-10 border-y border-white/[0.03] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="flex gap-16"
        style={{ width: "max-content" }}
      >
        {[...techItems, ...techItems].map((item, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="text-sm font-bold tracking-tight bg-gradient-to-r from-white/30 to-white/10 bg-clip-text text-transparent whitespace-nowrap">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/40" />
          </div>
        ))}
      </motion.div>
    </section>
  )
}