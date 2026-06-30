"use client"

import { motion } from "framer-motion"
import { FileSpreadsheet, Clock, PlugZap, RotateCcw, Database, BarChart3 } from "lucide-react"
import { pains, solutions } from "@/data/content"

const icons: Record<string, any> = { FileSpreadsheet, Clock, PlugZap, RotateCcw, Database, BarChart3 }

export default function PainSolutions() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0B0B0F]/30">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pains */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-semibold text-[#22D3EE] tracking-[0.2em] uppercase mb-4">Dores</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Você ainda perde tempo com <span className="text-gradient">processos manuais</span>?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {pains.map((pain, i) => {
            const Icon = icons[pain.icon]
            return (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-xl bg-[#0B0B0F]/60 border border-white/[0.04] hover:border-red-500/20 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {Icon && <Icon className="w-5 h-5 text-red-400" />}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{pain.title}</h3>
                <p className="text-sm text-[#A1A1AA]">{pain.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Solutions */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-semibold text-[#2563EB] tracking-[0.2em] uppercase mb-4">Solução</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Uma central inteligente para <span className="text-gradient">controlar tudo</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...solutions].map((sol, i) => {
            const Icon = icons[sol.icon] || BarChart3
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08 }}
                className="group relative p-6 rounded-xl bg-[#0B0B0F]/60 border border-white/[0.04] hover:border-[#2563EB]/20 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {Icon && <Icon className="w-5 h-5 text-[#818CF8]" />}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{sol.title}</h3>
                <p className="text-sm text-[#A1A1AA]">{sol.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}