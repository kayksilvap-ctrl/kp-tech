"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { FloatingBlobs, DecoRings, FloatingDots } from "./DecorativeElements"

const WHATSAPP = "https://wa.me/5517992053914"

export default function HeroNew() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 aurora-bg" />
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Grid with perspective */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)`,
        backgroundSize: '60px 60px',
        transform: 'perspective(800px) rotateX(2deg)',
        transformOrigin: 'center top'
      }} />
      
      <FloatingBlobs />
      <DecoRings count={3} />
      <FloatingDots count={6} />
      
      {/* Main glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-[#2563EB]/10 via-[#7C3AED]/5 to-transparent rounded-full" />
      
      {/* Light beams */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#2563EB]/10 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#7C3AED]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
              <span className="text-xs font-medium text-[#A1A1AA] tracking-widest uppercase">Criatividade · Design · Resultados</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              Crio artes, vídeos e sites que{" "}
              <span className="text-gradient">vendem.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }} className="text-[#A1A1AA] text-base sm:text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
              Design estratégico, landing pages de alta conversão, edição de vídeos e tráfego pago — tudo que você precisa para sua marca decolar.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }} className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] text-white font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(37,99,235,0.4)] hover:scale-[1.02]">
                <span className="relative z-10">Quero resultados</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a href="#packs" onClick={(e) => { e.preventDefault(); document.querySelector("#packs")?.scrollIntoView({ behavior: "smooth" }) }} className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl border border-white/[0.1] text-white font-semibold text-sm sm:text-base hover:bg-white/[0.03] transition-all duration-300 group backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Ver meus packs
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6 }} className="flex items-center gap-4 justify-center lg:justify-start text-sm text-[#A1A1AA]">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366F1] to-[#7C3AED] border-2 border-[#050505] flex items-center justify-center text-[10px] font-bold text-white" style={{ zIndex: 4 - i }}>
                    {["L", "J", "M", "C"][i]}
                  </div>
                ))}
              </div>
              <span><strong className="text-white">50+</strong> projetos entregues</span>
            </motion.div>
          </motion.div>

          {/* Right - Creative Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[450px] lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] animate-float-slow" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
              <div className="absolute -inset-10 bg-gradient-radial from-[#2563EB]/20 via-[#7C3AED]/10 to-transparent rounded-3xl blur-[80px]" />
              
              {/* Showcase card */}
              <div className="relative rounded-2xl border border-white/[0.08] bg-[#0B0B0F]/80 backdrop-blur-2xl overflow-hidden shadow-2xl shadow-[#2563EB]/10">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.04] bg-white/[0.02]">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <span className="text-xs text-[#A1A1AA] ml-3 font-mono">kptech.design</span>
                </div>

                <div className="p-5">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { label: "Artes", value: "50+", change: "criativas", color: "from-emerald-400 to-emerald-600" },
                      { label: "Vídeos", value: "30+", change: "editados", color: "from-blue-400 to-blue-600" },
                      { label: "Landing Pages", value: "15+", change: "no ar", color: "from-purple-400 to-purple-600" },
                      { label: "Clientes", value: "12+", change: "ativos", color: "from-cyan-400 to-cyan-600" },
                    ].map((item, i) => (
                      <motion.div key={item.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                        <p className="text-[10px] text-[#A1A1AA] mb-1">{item.label}</p>
                        <p className="text-sm font-bold text-white">{item.value}</p>
                        <p className={`text-[10px] bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.change}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-white">Portfólio em destaque</span>
                    </div>
                    <div className="flex gap-2">
                      {["🎨", "🎬", "🌐", "📊"].map((emoji, i) => (
                        <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 + i * 0.1 }} className="flex-1 h-16 rounded-lg bg-white/[0.03] border border-white/[0.04] flex items-center justify-center text-xl hover:bg-white/[0.06] transition-all cursor-pointer">
                          {emoji}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.5 }} className="absolute -left-8 top-1/4 p-3 rounded-xl bg-[#0B0B0F]/90 backdrop-blur-xl border border-white/[0.06] shadow-xl animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22D3EE] to-[#2563EB] flex items-center justify-center text-white text-lg">🎨</div>
                  <div>
                    <p className="text-[10px] text-[#A1A1AA]">Design</p>
                    <p className="text-xs font-semibold text-white">Premium</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.5 }} className="absolute -right-6 top-1/3 p-3 rounded-xl bg-[#0B0B0F]/90 backdrop-blur-xl border border-white/[0.06] shadow-xl animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#22D3EE] flex items-center justify-center text-white text-lg">🚀</div>
                  <div>
                    <p className="text-[10px] text-[#A1A1AA]">Tráfego</p>
                    <p className="text-xs font-semibold text-white">ROI+</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.5 }} className="absolute -bottom-4 left-1/2 -translate-x-1/2 p-2 px-4 rounded-full bg-[#0B0B0F]/90 backdrop-blur-xl border border-white/[0.06] shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                  <span className="text-[10px] text-[#A1A1AA]">Kayk disponível para novos projetos</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}