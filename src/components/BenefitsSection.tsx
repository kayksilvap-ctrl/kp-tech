"use client"

import { motion } from "framer-motion"
import { Zap, Layers, TrendingUp, LineChart, PieChart, Rocket } from "lucide-react"
import { benefits } from "@/data/content"

const icons: Record<string, any> = { Zap, Layers, TrendingUp, LineChart, PieChart, Rocket }

export default function BenefitsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-semibold text-[#22D3EE] tracking-[0.2em] uppercase mb-4">Benefícios</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Mais velocidade, menos <span className="text-gradient">operação manual</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = icons[b.icon]
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-xl bg-[#0B0B0F]/60 border border-white/[0.04] hover:border-[#2563EB]/20 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563EB]/10 to-[#22D3EE]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-300">
                  {Icon && <Icon className="w-5 h-5 text-[#22D3EE]" />}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">{b.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}