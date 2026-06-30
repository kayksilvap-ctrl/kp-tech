"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "22+", label: "Projetos concluídos" },
  { value: "3.744+", label: "Pessoas impactadas" },
  { value: "14+", label: "Clientes satisfeitos" },
  { value: "100%", label: "Compromisso com qualidade" },
]

export default function Results() {
  return (
    <section id="results" className="relative py-24 lg:py-32 overflow-hidden bg-[#141416]/30">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#6366F1]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#A78BFA]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-semibold text-[#818CF8] tracking-[0.2em] uppercase mb-4">
            Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Números que <span className="text-gradient">comprovam</span>
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg max-w-2xl mx-auto">
            Resultados reais de projetos que transformaram negócios
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="text-center p-8 rounded-2xl bg-[#141416]/40 border border-white/[0.04] hover:border-[#6366F1]/20 transition-all duration-500"
            >
              <p className="text-4xl sm:text-5xl font-bold text-[#818CF8] mb-2">{stat.value}</p>
              <p className="text-sm text-[#A1A1AA]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}