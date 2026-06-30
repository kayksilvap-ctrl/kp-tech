"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendes", company: "TechFlow Solutions",
    avatar: "CM", color: "#6366F1",
    text: "A KP_TECH transformou nossa presença digital. O resultado superou todas as expectativas. Profissionalismo e qualidade excepcionais.",
  },
  {
    name: "Ana Oliveira", company: "Digital Corp",
    avatar: "AO", color: "#A78BFA",
    text: "Trabalhar com a KP_TECH foi uma experiência incrível. Entregaram um produto moderno e funcional que elevou nossa marca.",
  },
  {
    name: "Roberto Lima", company: "InnovaTech",
    avatar: "RL", color: "#818CF8",
    text: "Equipe extremamente talentosa e comprometida. O projeto foi entregue no prazo com uma qualidade que nos surpreendeu.",
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#A78BFA]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-semibold text-[#818CF8] tracking-[0.2em] uppercase mb-4">
            Depoimentos
          </span>
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
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="p-6 rounded-2xl bg-[#141416]/40 border border-white/[0.04] backdrop-blur-xl hover:border-[#6366F1]/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-[#A1A1AA]">{t.company}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}