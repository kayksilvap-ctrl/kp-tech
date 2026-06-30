"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react"

export default function Dashboard() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366F1]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-semibold text-[#818CF8] tracking-[0.2em] uppercase mb-4">
            Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Resultados em <span className="text-gradient">tempo real</span>
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg max-w-2xl mx-auto">
            Acompanhe métricas e indicadores de performance do seu negócio
          </p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="relative rounded-2xl border border-white/[0.06] bg-[#141416]/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-[#6366F1]/5">
            {/* Dashboard Header */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.04] bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="text-xs text-[#A1A1AA] ml-3 font-mono">dashboard.kptech.com.br</span>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: TrendingUp, label: "Conversões", value: "+47%", color: "text-[#34D399]" },
                  { icon: Users, label: "Visitantes", value: "12.4k", color: "text-[#818CF8]" },
                  { icon: DollarSign, label: "Receita", value: "R$ 89k", color: "text-[#FBBF24]" },
                  { icon: BarChart3, label: "ROI", value: "320%", color: "text-[#34D399]" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="w-4 h-4 text-[#A1A1AA]" />
                      <span className="text-xs text-[#A1A1AA]">{item.label}</span>
                    </div>
                    <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Chart Area */}
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-white">Performance Mensal</span>
                  <span className="text-xs text-[#A1A1AA]">Últimos 30 dias</span>
                </div>
                <div className="flex items-end gap-2 h-32">
                  {[40, 55, 45, 70, 60, 80, 75, 90, 85, 95, 88, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-[#6366F1]/30 to-[#A78BFA]/20 hover:from-[#6366F1]/50 transition-all"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Glow behind */}
          <div className="absolute -inset-4 bg-[#6366F1]/5 rounded-3xl blur-[60px] -z-10" />
        </motion.div>
      </div>
    </section>
  )
}