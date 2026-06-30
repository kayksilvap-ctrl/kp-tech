"use client"

import { motion } from "framer-motion"

const logos = [
  { name: "Vercel", color: "from-white/30 to-white/10" },
  { name: "Linear", color: "from-[#6366F1]/20 to-[#6366F1]/5" },
  { name: "Stripe", color: "from-[#A78BFA]/20 to-[#A78BFA]/5" },
  { name: "Figma", color: "from-white/30 to-white/10" },
  { name: "Notion", color: "from-white/30 to-white/10" },
  { name: "Framer", color: "from-[#6366F1]/20 to-[#6366F1]/5" },
]

export default function Companies() {
  return (
    <section className="relative py-16 border-y border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-center text-[#A1A1AA] font-medium tracking-widest uppercase mb-8 reveal">
          Utilizado por empresas inovadoras
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 reveal">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`text-lg font-bold tracking-tight bg-gradient-to-r ${logo.color} bg-clip-text text-transparent opacity-50 hover:opacity-80 transition-opacity duration-300`}
            >
              {logo.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}