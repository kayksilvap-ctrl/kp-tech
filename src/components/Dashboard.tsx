"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react"
import { FloatingDots } from "./DecorativeElements"

export default function Dashboard() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <FloatingDots count={3} />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6366F1]/5 rounded-full blur-[150px] animate-glow" />
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-[#22D3EE]/5 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-[#FB7185]/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Decorative rings */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-[#6366F1]/[0.03] animate-spin-slower" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-[#22D3EE]/[0.03] animate-spin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-semibold text-[#818CF8] tracking-[0.2em] uppercase mb-4 relative">
            <span className="absolute -left-8 top-1/2 w-6 h-px bg-gradient-to-r from-transparent to-[#6366F1]/50" />
            Dashboard
            <span className="absolute -right-8 top-1/2 w-6 h-px bg-gradient-to-l from-transparent to-[#6366F1]/50" />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Resultados em <span className="text-gradient">tempo real</span>
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg max-w-2xl mx-auto">
            Acompanhe métricas e indicadores de performance do seu negócio
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="relative rounded-2xl border border-white/[0.06] bg-[#141416]/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-[#6366F1]/5 hover:shadow-[#6366F1]/10 transition-shadow duration-500">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.04] bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/50 animate-breath" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50 animate-breath" style={{ animationDelay: "0.5s" }} />
              <div className="w-3 h-3 rounded-full bg-green-500/50 animate-breath" style={{ animationDelay: "1s" }} />
              <span className="text-xs text-[#A1A1AA] ml-3 font-mono">dashboard.kptech.com.br</span>
              <div className="ml-auto flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
                <span className="text-[10px] text-[#34D399] font-mono">Live</span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: TrendingUp, label: "Conversões", value: "+47%", color: "text-[#34D399]", change: "+12% esse mês" },
                  { icon: Users, label: "Visitantes", value: "12.4k", color: "text-[#818CF8]", change: "+8% esse mês" },
                  { icon: DollarSign, label: "Receita", value: "R$ 89k", color: "text-[#FBBF24]", change: "+23% esse mês" },
                  { icon: BarChart3, label: "ROI", value: "320%", color: "text-[#34D399]", change: "+15% esse mês" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-[#6366F1]/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="w-4 h-4 text-[#A1A1AA]" />
                      <span className="text-xs text-[#A1A1AA]">{item.label}</span>
                    </div>
                    <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
                    <p className="text-[10px] text-[#34D399] mt-1">{item.change}</p>
                  </motion.div>
                ))}
              </div>

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
                      className="flex-1 rounded-t-sm relative group cursor-pointer"
                    >
                      <div 
                        className="absolute inset-0 rounded-t-sm bg-gradient-to-t from-[#6366F1]/30 to-[#A78BFA]/20 hover:from-[#6366F1]/50 transition-all"
                        style={{ height: `${h}%` }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -inset-4 bg-[#6366F1]/5 rounded-3xl blur-[60px] -z-10" />
        </motion.div>
      </div>
    </section>
  )
}