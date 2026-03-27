"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle2, Play, ArrowRight } from "lucide-react"

const benefits = [
  "Member Management",
  "Automated Billing",
  "Attendance Tracking",
]

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-primary text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>The Future of Gym Management</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Transform Your <span className="text-primary">Fitness Business</span> with Fidro
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                The all-in-one platform to streamline your operations, boost
                member engagement, and maximize your revenue with ease.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="h-14 px-8 text-lg font-semibold group">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold group">
                <Play className="mr-2 h-5 w-5 fill-current" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-x-8 gap-y-4 pt-4"
            >
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-8 border-t"
            >
              <p className="text-sm font-medium text-muted-foreground mb-4">
                TRUSTED BY 500+ FITNESS CENTERS WORLDWIDE
              </p>
              <div className="flex flex-wrap gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                {/* Brand Logo Placeholders */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-24 bg-muted rounded animate-pulse" />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative lg:ml-10"
          >
            <div className="relative z-10 rounded-2xl border bg-background shadow-2xl overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="p-4 border-b bg-muted/30 flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 h-6 bg-muted/50 rounded-md mx-4" />
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 bg-primary/10 rounded-xl border border-primary/20 p-4 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/20" />
                    <div className="w-full h-2 bg-primary/20 rounded" />
                  </div>
                  <div className="h-24 bg-muted rounded-xl border p-4 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-muted" />
                    <div className="w-full h-2 bg-muted rounded" />
                  </div>
                  <div className="h-24 bg-muted rounded-xl border p-4 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-muted" />
                    <div className="w-full h-2 bg-muted rounded" />
                  </div>
                </div>
                <div className="h-48 bg-muted/50 rounded-xl border p-6 flex flex-col justify-end space-y-4">
                  <div className="w-1/3 h-4 bg-muted rounded" />
                  <div className="w-full h-32 bg-muted/50 rounded-lg flex items-center justify-center">
                    <div className="flex space-x-4">
                       {[1, 2, 3, 4, 5, 6].map(i => (
                         <div key={i} className="w-8 bg-primary/30 rounded-t-sm" style={{ height: `${20 + Math.random() * 60}%` }} />
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-background border shadow-xl rounded-xl p-4 flex items-center space-x-3"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase">New Member</p>
                <p className="text-sm font-bold text-foreground">Sarah Jenkins</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 z-20 bg-background border shadow-xl rounded-xl p-4"
            >
              <div className="flex items-center space-x-3 mb-2">
                 <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                   <div className="w-4 h-4 rounded-sm bg-primary" />
                 </div>
                 <p className="text-sm font-bold text-foreground">Revenue Boost</p>
              </div>
              <p className="text-2xl font-bold text-primary">+24.5%</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
