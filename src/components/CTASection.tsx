"use client"

import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section id="cta" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#2563EB]/15 via-[#7C3AED]/8 to-transparent rounded-full blur-[120px] animate-glow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Pronto para transformar <br className="hidden sm:block" />
            sua <span className="text-gradient">operação</span>?
          </h2>
          <p className="text-[#A1A1AA] text-base sm:text-lg max-w-xl mx-auto mb-10">
            Comece hoje a automatizar processos, integrar ferramentas e escalar sua empresa com tecnologia inteligente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative inline-flex">
              <div className="absolute inset-0 rounded-xl animate-pulse-ring" />
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-[0_0_50px_rgba(37,99,235,0.4)] hover:scale-105"
              >
                Começar agora
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl border border-white/[0.1] text-white font-semibold text-base sm:text-lg hover:bg-white/[0.03] transition-all duration-300 backdrop-blur-sm"
            >
              Falar com especialista
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}