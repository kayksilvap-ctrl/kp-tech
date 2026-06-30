"use client"

import { Instagram, Linkedin, Github } from "lucide-react"

const quickLinks = [
  { label: "Início", href: "#hero" },
  { label: "Recursos", href: "#features" },
  { label: "Resultados", href: "#results" },
  { label: "FAQ", href: "#faq" },
]

const socials = [
  { icon: Instagram, url: "https://instagram.com/kp_tech" },
  { icon: Linkedin, url: "https://linkedin.com/company/kp-tech" },
  { icon: Github, url: "https://github.com/kp-tech" },
]

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/[0.04] bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#A78BFA] flex items-center justify-center font-bold text-white text-sm">K</div>
              <span className="text-lg font-semibold text-white">KP_<span className="text-[#818CF8]">TECH</span></span>
            </div>
            <p className="text-sm text-[#A1A1AA] max-w-xs leading-relaxed">
              Transformando ideias em soluções digitais de alto impacto. Tecnologia, design e estratégia para o seu negócio.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">Links</p>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" }) }} className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">Contato</p>
            <div className="flex flex-col gap-2 text-sm text-[#A1A1AA]">
              <p>contato@kptech.com.br</p>
              <p>(11) 99999-9999</p>
              <p>São Paulo, SP</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">Redes Sociais</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#A1A1AA] hover:text-[#818CF8] hover:border-[#6366F1]/30 transition-all">
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04] text-center">
          <p className="text-xs text-[#A1A1AA]">&copy; {new Date().getFullYear()} KP_TECH. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}