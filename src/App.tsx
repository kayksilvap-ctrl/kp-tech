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
      
      <Particles />
      <Navbar />
      
      <main>
        <HeroNew />
        <TechMarquee />
        <MetricsSection />
        <PainSolutions />
        <HowItWorks />
        <BenefitsSection />
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