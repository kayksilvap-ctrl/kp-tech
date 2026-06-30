"use client"

import { motion } from "framer-motion"
import { metrics } from "@/data/content"

export default function MetricsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-[#0B0B0F]/60 border border-white/[0.04] hover:border-[#2563EB]/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.08)] text-center"
            >
              <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] bg-clip-text text-transparent mb-2">
                {m.value}{m.suffix}
              </p>
              <p className="text-sm text-[#A1A1AA]">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}