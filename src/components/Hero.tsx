"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

const benefits = [
  "Desenvolvimento moderno", "Design estratégico",
  "Performance otimizada", "Alta conversão",
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Aurora + Mesh background */}
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Deep glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-[#6366F1]/10 via-transparent to-transparent rounded-full" />
      
      {/* Floating light blobs */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-[#6366F1]/5 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-[#A78BFA]/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] mb-8 animate-border-glow"
            >
              <span className="w-2 h-2 rounded-full bg-[#6366F1] animate-breath" />
              <span className="text-xs font-medium text-[#A1A1AA] tracking-widest uppercase">
                Tecnologia · Design · Estratégia
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              Soluções digitais que{" "}
              <span className="text-gradient animate-shimmer">impulsionam resultados.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
              className="text-[#A1A1AA] text-base sm:text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              Unindo tecnologia, design e estratégia para criar experiências digitais que geram valor para empresas modernas.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
            >
              <a
                href="#features" onClick={(e) => { e.preventDefault(); document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" }) }}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#A78BFA] text-white font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]"
              >
                <span className="relative z-10">Conheça nossos serviços</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#results" onClick={(e) => { e.preventDefault(); document.querySelector("#results")?.scrollIntoView({ behavior: "smooth" }) }}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-white/[0.1] text-white font-semibold text-sm sm:text-base hover:bg-white/[0.03] transition-all duration-300 group"
              >
                Ver resultados
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Benefits */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap gap-5 justify-center lg:justify-start"
            >
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                  <div className="w-5 h-5 rounded-md bg-[#6366F1]/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#818CF8]" />
                  </div>
                  <span>{b}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex items-center justify-center h-[400px] lg:h-[550px]"
          >
            <div className="relative">
              {/* Core glow */}
              <div className="absolute inset-0 w-72 h-72 bg-[#6366F1]/20 rounded-full blur-[120px] animate-glow -top-12 -left-12" />
              <div className="absolute inset-0 w-56 h-56 bg-[#A78BFA]/10 rounded-full blur-[100px] animate-glow -bottom-8 -right-8" style={{ animationDelay: "1s" }} />

              {/* Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-white/[0.02] rounded-full animate-spin" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-[#6366F1]/[0.06] rounded-full animate-spin-slower" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] border border-[#818CF8]/[0.08] rounded-full" style={{ animation: "spin-slow 15s linear infinite" }} />

              {/* Orbiting dots */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[370px] h-[370px] animate-spin">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#818CF8] shadow-[0_0_12px_rgba(129,140,248,0.6)]" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] h-[270px] animate-spin-slower">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#A78BFA] shadow-[0_0_10px_rgba(167,139,250,0.5)]" />
              </div>

              {/* Logo KP */}
              <div className="relative w-40 h-40 rounded-2xl bg-gradient-to-br from-[#6366F1]/15 to-[#A78BFA]/5 border border-white/[0.08] backdrop-blur-xl flex items-center justify-center animate-float-slow shadow-2xl">
                <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-[#6366F1]/20 to-transparent" />
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tighter relative z-10 drop-shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                  KP
                </span>
                {/* Corner accents */}
                <div className="absolute -top-px -left-px w-5 h-5 border-t-2 border-l-2 border-[#6366F1] rounded-tl-md" />
                <div className="absolute -bottom-px -right-px w-5 h-5 border-b-2 border-r-2 border-[#A78BFA] rounded-br-md" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}