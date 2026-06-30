"use client"

import { motion } from "framer-motion"
import { Zap, Shield, BarChart3, Smartphone, Globe, Users } from "lucide-react"

const features = [
  { icon: Zap, title: "Performance", desc: "Sites ultrarrápidos com carregamento instantâneo e experiência fluida." },
  { icon: Shield, title: "Segurança", desc: "Proteção de dados e certificados SSL para máxima confiabilidade." },
  { icon: BarChart3, title: "Analytics", desc: "Métricas em tempo real para decisões baseadas em dados." },
  { icon: Smartphone, title: "Responsivo", desc: "Design adaptável que funciona perfeitamente em qualquer dispositivo." },
  { icon: Globe, title: "SEO Otimizado", desc: "Estratégias de SEO para rankear nos principais mecanismos de busca." },
  { icon: Users, title: "Suporte Dedicado", desc: "Suporte técnico especializado para garantir seu sucesso." },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden bg-[#141416]/30">
      <div className="absolute inset-0 mesh-gradient" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-semibold text-[#818CF8] tracking-[0.2em] uppercase mb-4">
            Recursos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Tudo que você precisa <br className="sm:hidden" />para crescer
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg max-w-2xl mx-auto">
            Ferramentas completas para impulsionar sua presença digital
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-[#141416]/40 border border-white/[0.04] hover:border-[#6366F1]/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1]/10 to-[#A78BFA]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-[#818CF8]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}