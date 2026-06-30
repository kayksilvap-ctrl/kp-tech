"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { plans } from "@/data/content"

export default function PlansSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0B0B0F]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-semibold text-[#22D3EE] tracking-[0.2em] uppercase mb-4">Planos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            O plano certo para <span className="text-gradient">cada momento</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all duration-500 ${
                plan.popular
                  ? "border-[#2563EB]/40 bg-[#2563EB]/5 shadow-[0_0_40px_rgba(37,99,235,0.1)] scale-[1.02]"
                  : "border-white/[0.04] bg-[#0B0B0F]/60 hover:border-[#2563EB]/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-xs font-semibold text-white">
                  Mais popular
                </div>
              )}
              <p className="text-sm font-semibold text-white mb-1">{plan.name}</p>
              <p className="text-xs text-[#A1A1AA] mb-4">{plan.desc}</p>
              <p className="text-2xl font-bold text-white mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                    <Check className="w-4 h-4 text-[#22D3EE] flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                onClick={(e) => { e.preventDefault(); document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" }) }}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                    : "border border-white/[0.1] text-white hover:bg-white/[0.03]"
                }`}
              >
                Consultar
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}