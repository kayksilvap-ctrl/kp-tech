"use client"

import { useEffect, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Companies from "@/components/Companies"
import Benefits from "@/components/Benefits"
import Features from "@/components/Features"
import Dashboard from "@/components/Dashboard"
import Results from "@/components/Results"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"
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
      cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`
      dot.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`
      spotlight.style.setProperty("--mouse-x", `${e.clientX}px`)
      spotlight.style.setProperty("--mouse-y", `${e.clientY}px`)
    }

    document.addEventListener("mousemove", onMouseMove)

    // Scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    setTimeout(() => {
      document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <AnimatePresence>
      <div className="noise-overlay" />
      <div ref={spotlightRef} className="spotlight" />
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorDotRef} className="custom-cursor-dot" />
      
      <Particles />
      <Navbar />
      
      <main>
        <Hero />
        <Companies />
        <Benefits />
        <Features />
        <Dashboard />
        <Results />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </AnimatePresence>
  )
}