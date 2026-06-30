"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"

const links = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Packs", href: "#packs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#cta" },
]

const WHATSAPP = "https://wa.me/5517992053914"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobile])

  const scrollTo = (href: string) => {
    setMobile(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0A0A0B]/80 backdrop-blur-2xl border-b border-white/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.3)]" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo("#hero") }} className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#A78BFA] flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-[#6366F1]/20">K</div>
              <span className="text-lg font-semibold text-white tracking-tight">KP_<span className="text-[#818CF8]">TECH</span></span>
            </a>
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <button key={link.href} onClick={() => scrollTo(link.href)} className="text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors duration-200 relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#6366F1] to-[#A78BFA] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#A78BFA] text-white font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                <span className="relative z-10">Vamos conversar</span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
            <button onClick={() => setMobile(!mobile)} className="lg:hidden relative w-10 h-10 flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors">
              {mobile ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobile && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setMobile(false)} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="absolute right-0 top-0 h-full w-[280px] bg-[#141416] border-l border-white/[0.06] p-6 pt-24 shadow-2xl">
              <div className="flex flex-col gap-2">
                {links.map((link, i) => (
                  <motion.button key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} onClick={() => scrollTo(link.href)} className="text-left px-4 py-3 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-white/[0.03] transition-all font-medium">
                    {link.label}
                  </motion.button>
                ))}
                <div className="mt-6 pt-6 border-t border-white/[0.06]">
                  <a href={WHATSAPP} target="_blank" className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#A78BFA] text-white font-medium text-sm hover:shadow-lg transition-all">
                    Vamos conversar
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}