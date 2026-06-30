"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number; y: number; size: number
  speedX: number; speedY: number
  opacity: number; hue: number
  pulse: number; pulseSpeed: number
}

interface ShootingStar {
  x: number; y: number; length: number
  speed: number; angle: number
  opacity: number; life: number
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Particle[] = []
    let shootingStars: ShootingStar[] = []
    let frameCount = 0
    let animId = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const count = Math.min(Math.floor(window.innerWidth * 0.06), 100)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        hue: Math.random() > 0.6 ? 260 : 230,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      }))
    }

    const spawnStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
        y: Math.random() * canvas.height * 0.3,
        length: 60 + Math.random() * 100,
        speed: 8 + Math.random() * 12,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        opacity: 0.8 + Math.random() * 0.2,
        life: 1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frameCount++

      if (frameCount % 200 === 0 && shootingStars.length < 2) spawnStar()

      shootingStars = shootingStars.filter((star) => {
        star.life -= 0.005
        if (star.life <= 0) return false

        const tx = star.x - Math.cos(star.angle) * star.length * star.life
        const ty = star.y - Math.sin(star.angle) * star.length * star.life
        const grad = ctx.createLinearGradient(star.x, star.y, tx, ty)
        grad.addColorStop(0, `rgba(255,255,255,${star.opacity * star.life})`)
        grad.addColorStop(0.3, `rgba(129,140,248,${star.opacity * star.life * 0.5})`)
        grad.addColorStop(1, "transparent")
        ctx.strokeStyle = grad
        ctx.lineWidth = 2 * star.life
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(tx, ty)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(star.x, star.y, 3 * star.life, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${star.opacity * star.life})`
        ctx.fill()
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed
        return star.x > 0 && star.y > 0
      })

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      particles.forEach((p) => {
        p.pulse += p.pulseSpeed
        const pf = 0.5 + 0.5 * Math.sin(p.pulse)
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          const force = ((200 - dist) / 200) * 2
          p.speedX += (dx / dist) * force * 0.02
          p.speedY += (dy / dist) * force * 0.02
        }
        const speed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY)
        if (speed > 2) { p.speedX = (p.speedX / speed) * 2; p.speedY = (p.speedY / speed) * 2 }
        p.x += p.speedX
        p.y += p.speedY
        p.speedX *= 0.99
        p.speedY *= 0.99
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10
        if (p.y < -10) p.y = canvas.height + 10
        if (p.y > canvas.height + 10) p.y = -10

        const alpha = p.opacity * (0.6 + 0.4 * pf)
        const color = p.hue === 260 ? `rgba(167,139,250,${alpha})` : `rgba(129,140,248,${alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * (0.8 + 0.4 * pf), 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = p.hue === 260 ? `rgba(167,139,250,${alpha * 0.1})` : `rgba(129,140,248,${alpha * 0.1})`
        ctx.fill()
      })

      animId = requestAnimationFrame(animate)
    }

    const onMouse = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    resize()
    createParticles()
    animate()
    window.addEventListener("resize", () => { resize(); createParticles() })
    window.addEventListener("mousemove", onMouse)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouse)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0, opacity: 0.9 }} />
}