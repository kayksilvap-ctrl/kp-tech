"use client"

import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6366F1]/10 rounded-full blur-[120px] animate-glow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Vamos transformar sua{" "}
            <span className="text-gradient">ideia em realidade</span>?
          </h2>
          <p className="text-[#A1A1AA] text-base sm:text-lg max-w-xl mx-auto mb-10">
            Solicite um orçamento e descubra como podemos elevar sua presença digital.
          </p>
          <div className="relative inline-flex">
            <div className="absolute inset-0 rounded-xl animate-pulse-ring" />
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#A78BFA] text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-[0_0_50px_rgba(99,102,241,0.4)] hover:scale-105"
            >
              Falar no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}