"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CustomButton } from "@/components/custom-button"
import { Zap, ShieldCheck, Sparkles } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-primary px-6 md:px-12 lg:px-24">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)] opacity-50" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-white">Join the Future</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.1]"
          >
            Ready to <span className="text-secondary">Transform</span> Your Fitness Business?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Join hundreds of successful gym owners who have scaled their operations and increased member satisfaction with Fidro.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <CustomButton 
                variant="secondary" 
                size="lg" 
                glow
                withArrow
                className="w-full sm:w-auto min-w-[280px] shadow-2xl"
              >
                Transform Your Business Now
              </CustomButton>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-12 flex flex-wrap items-center justify-center gap-8 text-white/60"
          >
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Instant Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Enterprise Secure</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
