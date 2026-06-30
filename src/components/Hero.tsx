"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, Sparkles } from "lucide-react"

const benefits = [
  "Desenvolvimento moderno", "Design estratégico",
  "Performance otimizada", "Alta conversão",
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Cinematic background layers */}
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Deep atmospheric glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#6366F1]/8 via-[#A78BFA]/5 via-transparent to-transparent rounded-full" />
      
      {/* Floating light orbs */}
      <div className="absolute top-1/5 left-1/6 w-80 h-80 bg-gradient-radial from-[#6366F1]/8 to-transparent rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-gradient-radial from-[#22D3EE]/6 to-transparent rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-gradient-radial from-[#FB7185]/5 to-transparent rounded-full blur-[80px] animate-float-slow" style={{ animationDelay: "4s" }} />
      
      {/* Lens flares */}
      <div className="lens-flare top-1/4 right-1/4 animate-breath" style={{ animationDelay: "1s" }} />
      <div className="lens-flare bottom-1/3 left-1/5 animate-breath" style={{ animationDelay: "2.5s" }} />

      {/* Scanlines subtle overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/[0.06] mb-8 animate-border-glow"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#818CF8]" />
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
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#6366F1] via-[#A78BFA] to-[#22D3EE] text-white font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(99,102,241,0.4)] hover:scale-[1.02]"
              >
                <span className="relative z-10">Conheça nossos serviços</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a
                href="#results" onClick={(e) => { e.preventDefault(); document.querySelector("#results")?.scrollIntoView({ behavior: "smooth" }) }}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-white/[0.1] text-white font-semibold text-sm sm:text-base hover:bg-white/[0.03] transition-all duration-300 group backdrop-blur-sm"
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
              {benefits.map((b, i) => (
                <div key={b} className="flex items-center gap-2 text-sm text-[#A1A1AA] group">
                  <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Check className="w-3 h-3 text-[#818CF8]" />
                  </div>
                  <span className="group-hover:text-white transition-colors">{b}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex items-center justify-center h-[450px] lg:h-[600px]"
          >
            <div className="relative">
              {/* Multi-layered glows */}
              <div className="absolute inset-0 w-80 h-80 bg-gradient-radial from-[#6366F1]/20 via-[#A78BFA]/10 to-transparent rounded-full blur-[120px] animate-glow-rainbow -top-16 -left-8" />
              <div className="absolute inset-0 w-64 h-64 bg-gradient-radial from-[#22D3EE]/10 via-transparent to-transparent rounded-full blur-[100px] animate-glow -bottom-4 -right-8" style={{ animationDelay: "1.5s" }} />
              <div className="absolute inset-0 w-48 h-48 bg-gradient-radial from-[#FB7185]/8 to-transparent rounded-full blur-[80px] animate-glow top-1/3 right-1/4" style={{ animationDelay: "3s" }} />

              {/* Orbital rings with glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-white/[0.02] rounded-full animate-spin" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-[#6366F1]/[0.05] rounded-full animate-spin-slower shadow-[0_0_60px_rgba(99,102,241,0.03)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-[#22D3EE]/[0.06] rounded-full" style={{ animation: "spin-slow 15s linear infinite" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] border border-[#FB7185]/[0.04] rounded-full" style={{ animation: "spin-slower 30s linear infinite" }} />

              {/* Orbiting glowing dots */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[430px] h-[430px] animate-spin">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-[#818CF8] to-[#6366F1] shadow-[0_0_20px_rgba(129,140,248,0.8)]" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[330px] h-[330px] animate-spin-slower">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#34D399] shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[230px] h-[230px] animate-spin" style={{ animationDuration: "12s" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-br from-[#FB7185] to-[#FBBF24] shadow-[0_0_12px_rgba(251,113,133,0.5)]" />
              </div>

              {/* KP Logo with rainbow glow */}
              <div className="relative w-44 h-44 rounded-2xl bg-gradient-to-br from-[#6366F1]/15 via-[#A78BFA]/10 to-[#22D3EE]/5 border border-white/[0.08] backdrop-blur-2xl flex items-center justify-center animate-float-slow shadow-2xl animate-glow-rainbow">
                {/* Inner gradient */}
                <div className="absolute inset-5 rounded-xl bg-gradient-to-br from-[#6366F1]/20 via-[#A78BFA]/10 to-[#22D3EE]/5" />
                
                {/* Inner glow ring */}
                <div className="absolute inset-2 rounded-xl border border-white/[0.04]" />
                
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tighter relative z-10 drop-shadow-[0_0_40px_rgba(99,102,241,0.4)]">
                  KP
                </span>
                
                {/* Corner accents with rainbow colors */}
                <div className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-[#6366F1] rounded-tl-md" />
                <div className="absolute -top-px -right-px w-6 h-6 border-t-2 border-r-2 border-[#22D3EE] rounded-tr-md" />
                <div className="absolute -bottom-px -left-px w-6 h-6 border-b-2 border-l-2 border-[#FB7185] rounded-bl-md" />
                <div className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-[#A78BFA] rounded-br-md" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}