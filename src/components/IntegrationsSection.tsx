"use client"

import { motion } from "framer-motion"
import { integrations } from "@/data/content"

export default function IntegrationsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0B0B0F]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-semibold text-[#22D3EE] tracking-[0.2em] uppercase mb-4">Integrações</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Conecte-se com <span className="text-gradient">tudo</span>
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base max-w-xl mx-auto">
            Compatível com as principais ferramentas do mercado
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-5 rounded-xl bg-[#0B0B0F]/60 border border-white/[0.04] hover:border-[#2563EB]/20 transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-xs font-bold text-[#818CF8]">{name.slice(0, 2).toUpperCase()}</span>
              </div>
              <p className="text-xs font-medium text-[#A1A1AA]">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}