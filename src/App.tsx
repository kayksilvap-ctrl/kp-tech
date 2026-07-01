"use client"

import { useEffect, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import Navbar from "@/components/Navbar"
import HeroNew from "@/components/HeroNew"
import TechMarquee from "@/components/TechMarquee"
import PainSolutions from "@/components/PainSolutions"
import MetricsSection from "@/components/MetricsSection"
import HowItWorks from "@/components/HowItWorks"
import BenefitsSection from "@/components/BenefitsSection"
import IntegrationsSection from "@/components/IntegrationsSection"
import PlansSection from "@/components/PlansSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import Particles from "@/components/Particles"
import { SideFloatingElements, FloatingWhatsAppCTA } from "@/components/DecorativeElements"

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = cursorDotRef.current
    const spotlight = spotlightRef.current
    if (!cursor || !dot || !spotlight) return

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 14}px, ${e.clientY - 14}px)`
      dot.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`
      spotlight.style.setProperty("--mouse-x", `${e.clientX}px`)
      spotlight.style.setProperty("--mouse-y", `${e.clientY}px`)
    }

    const onHoverable = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, select, textarea')) {
        cursor.classList.add("cursor-hover")
      } else {
        cursor.classList.remove("cursor-hover")
      }
    }

    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseover", onHoverable)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    setTimeout(() => {
      document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
        .forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseover", onHoverable)
      observer.disconnect()
    }
  }, [])

  return (
    <AnimatePresence>
      <div className="vignette" />
      <div className="cinematic-grain" />
      <div className="scanlines" />
      <div className="noise-overlay" />
      
      <div ref={spotlightRef} className="spotlight" />
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorDotRef} className="custom-cursor-dot" />
      
      {/* Floating side elements */}
      <SideFloatingElements />
      <FloatingWhatsAppCTA />
      
      <Particles />
      <Navbar />
      
      <main>
        <HeroNew />
        <TechMarquee />
        <MetricsSection />
        <PainSolutions />
        <ScrollCTA />
        <HowItWorks />
        <BenefitsSection />
        <ScrollCTA variant="secondary" />
        <IntegrationsSection />
        <PlansSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </AnimatePresence>
  )
}

function ScrollCTA({ variant = "primary" }: { variant?: string }) {
  const WHATSAPP = "https://wa.me/5517992053914"
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reveal-scale rounded-2xl border border-white/[0.06] bg-gradient-to-r from-[#2563EB]/5 via-[#7C3AED]/5 to-[#22D3EE]/5 backdrop-blur-xl p-8 sm:p-10 text-center">
          {variant === "primary" ? (
            <>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">Vamos criar algo incrível juntos?</p>
              <p className="text-sm text-[#A1A1AA] mb-6">Sua marca merece um trabalho profissional e criativo</p>
            </>
          ) : (
            <>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">Quer resultados como estes?</p>
              <p className="text-sm text-[#A1A1AA] mb-6">Me chama no WhatsApp e vamos transformar sua ideia em realidade</p>
            </>
          )}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:scale-105">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Fazer orçamento grátis
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}