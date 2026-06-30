"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { testimonials } from "@/data/content"

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-semibold text-[#22D3EE] tracking-[0.2em] uppercase mb-4">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-[#0B0B0F]/60 border border-white/[0.04] hover:border-[#2563EB]/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-[#A1A1AA]">{t.role} · {t.company}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="pt-3 border-t border-white/[0.04]">
                <p className="text-xs font-semibold text-[#22D3EE]">{t.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}