"use client"

import { motion } from "framer-motion"
import { Code2, Palette, TrendingUp, Lightbulb } from "lucide-react"

const items = [
  {
    icon: Code2, title: "Desenvolvimento Web",
    desc: "Sites e plataformas modernas com as tecnologias mais recentes do mercado.",
  },
  {
    icon: Palette, title: "Design Gráfico",
    desc: "Identidade visual criativa e materiais gráficos de alto impacto.",
  },
  {
    icon: TrendingUp, title: "Gestão de Tráfego",
    desc: "Campanhas otimizadas para maximizar seu ROI com segmentação precisa.",
  },
  {
    icon: Lightbulb, title: "Estratégia Digital",
    desc: "Planejamento completo para transformar sua presença digital em resultados.",
  },
]

export default function Benefits() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#6366F1]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#A78BFA]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-semibold text-[#818CF8] tracking-[0.2em] uppercase mb-4">
            Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Tecnologia a serviço <br className="sm:hidden" />das ideias
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg max-w-2xl mx-auto">
            Soluções completas para transformar seu negócio digitalmente
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative p-8 rounded-2xl bg-[#141416]/60 border border-white/[0.06] hover:border-[#6366F1]/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-[#6366F1]/10 flex items-center justify-center mb-6 group-hover:bg-[#6366F1]/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]">
                <item.icon className="w-7 h-7 text-[#818CF8]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}