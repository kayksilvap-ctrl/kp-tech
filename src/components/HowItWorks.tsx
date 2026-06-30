"use client"

import { motion } from "framer-motion"
import { steps } from "@/data/content"

export default function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-semibold text-[#22D3EE] tracking-[0.2em] uppercase mb-4">Como funciona</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Comece em <span className="text-gradient">3 passos simples</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB]/50 via-[#7C3AED]/30 to-transparent hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2 }}
              className={`relative flex items-center gap-8 mb-16 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className={`flex-1 p-8 rounded-2xl bg-[#0B0B0F]/60 border border-white/[0.04] hover:border-[#2563EB]/20 transition-all duration-500 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                <span className="text-4xl font-black text-[#2563EB]/30 block mb-2">{step.step}</span>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-[#A1A1AA]">{step.desc}</p>
              </div>
              
              {/* Center dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0B0B0F] border-2 border-[#2563EB] z-10" />
              
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}