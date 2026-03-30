"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Info, Calendar, Clock, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CustomButton } from "@/components/custom-button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { pricingTiers, pricingHeader } from "@/content/pricing"
import Link from "next/link"
import confetti from 'canvas-confetti'

export function PricingPreview() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "6month" | "yearly">("monthly")
  const [bubbles, setBubbles] = React.useState<Array<{ id: number; x: number; y: number; size: number }>>([])
  const tabsRef = React.useRef<HTMLDivElement>(null)

  const triggerConfetti = (newCycle: "monthly" | "6month" | "yearly", currentCycle: "monthly" | "6month" | "yearly") => {
    const hierarchy = { monthly: 1, "6month": 2, yearly: 3 }
    const fromLevel = hierarchy[currentCycle]
    const toLevel = hierarchy[newCycle]
    
    // Only trigger if upgrading or switching to a high-value cycle
    if (toLevel <= fromLevel && newCycle !== "yearly") return

    // Find the active tab element to get its position
    const activeTab = tabsRef.current?.querySelector(`[data-value="${newCycle}"], [value="${newCycle}"]`)
    const rect = activeTab?.getBoundingClientRect()
    
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.5

    const commonConfig = {
      disableForReducedMotion: true,
      zIndex: 1000,
    }

    if (newCycle === "yearly") {
      // Massive celebration for yearly!
      // Center burst
      confetti({
        ...commonConfig,
        particleCount: 150,
        spread: 100,
        origin: { x, y },
        colors: ['#14b8a6', '#0d9488', '#06b6d4', '#10b981', '#2dd4bf', '#0f766e'],
        gravity: 0.8,
        scalar: 1.2,
      })

      // Left side burst
      setTimeout(() => {
        confetti({
          ...commonConfig,
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.8 },
          colors: ['#2dd4bf', '#14b8a6', '#5eead4'],
        })
      }, 200)

      // Right side burst
      setTimeout(() => {
        confetti({
          ...commonConfig,
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.8 },
          colors: ['#2dd4bf', '#14b8a6', '#5eead4'],
        })
      }, 400)
    } else if (newCycle === "6month") {
      // Nice celebration for 6 months
      confetti({
        ...commonConfig,
        particleCount: 80,
        spread: 60,
        origin: { x, y },
        colors: ['#14b8a6', '#06b6d4', '#10b981'],
        gravity: 1,
        scalar: 1,
      })
    }
  }

  const handleBillingCycleChange = (newCycle: "monthly" | "6month" | "yearly") => {
    if (newCycle !== billingCycle) {
      triggerConfetti(newCycle, billingCycle)
      setBillingCycle(newCycle)
    }
  }

  React.useEffect(() => {
    // Create bubbles on cycle change
    const newBubbles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
    }))
    setBubbles(newBubbles)

    // Clear bubbles after animation
    const timer = setTimeout(() => setBubbles([]), 2000)
    return () => clearTimeout(timer)
  }, [billingCycle])

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            {pricingHeader.title.split("transparent").map((part, i) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && <span className="text-primary">transparent</span>}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-xl text-muted-foreground">
            {pricingHeader.description}
          </p> 

          {/* Billing Cycle Tabs */}
          <div className="flex justify-center mt-8">
            <div 
                ref={tabsRef}
                className="w-full max-w-md"
              >
                <Tabs value={billingCycle} onValueChange={(value) => handleBillingCycleChange(value as "monthly" | "6month" | "yearly")} className="w-full max-w-md">
                  <TabsList className="inline-flex w-auto p-1.5 bg-background/60 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-lg">
                  <TabsTrigger 
                    value="monthly" 
                    data-value="monthly"
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md hover:text-primary gap-2"
                  >
                    <CreditCard className="h-4 w-4" />
                    <span>Monthly</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="6month" 
                    data-value="6month"
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md hover:text-primary gap-2"
                  >
                    <Clock className="h-4 w-4" />
                    <span>6 Months</span>
                    <span className="inline-flex text-[9px] px-1.5 py-0.5 rounded-full bg-primary-foreground/20 text-primary-foreground font-black">
                      -10%
                    </span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="yearly" 
                    data-value="yearly"
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md hover:text-primary gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Yearly</span>
                    <span className="inline-flex text-[9px] px-1.5 py-0.5 rounded-full bg-primary-foreground/20 text-primary-foreground font-black">
                      -20%
                    </span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Bubble Animations */}
        <AnimatePresence>
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              initial={{ opacity: 0, scale: 0, x: `${bubble.x}%`, y: `${bubble.y}%` }}
              animate={{ 
                opacity: [0, 0.6, 0],
                scale: [0, 1.2, 1.5],
                y: [`${bubble.y}%`, `${bubble.y - 20}%`]
              }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute pointer-events-none z-0"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
              }}
            >
              <div 
                className="rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-sm"
                style={{ width: bubble.size, height: bubble.size }}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start relative z-10">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:shadow-2xl h-full",
                tier.mostPopular
                  ? "bg-background border-primary shadow-xl ring-2 ring-primary scale-105 z-10" 
                  : "bg-muted/30 border-muted hover:bg-background hover:border-primary/20"
              )}
            >
              {tier.mostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-foreground mb-1">{tier.name}</h3>
                <p className="text-xs text-muted-foreground min-h-[32px] line-clamp-2">{tier.description}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-foreground">
                    {billingCycle === "monthly" ? tier.priceMonthly : billingCycle === "6month" ? tier.price6Month : tier.priceYearly}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">/month</span>
                </div>
                {billingCycle === "yearly" && (
                  <p className="text-xs text-primary font-bold mt-1">Billed annually (20% off)</p>
                )}
                {billingCycle === "6month" && (
                  <p className="text-xs text-primary font-bold mt-1">Billed every 6 months (10% off)</p>
                )}
              </div>

              <div className="flex-1 space-y-3 mb-6">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">WHAT&apos;S INCLUDED</p>
                <ul className="space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      <div className="bg-primary/10 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground/80 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact">
                <CustomButton
                  variant={tier.mostPopular ? "default" : "outline"}
                  className={cn(
                    "w-full h-11 text-sm font-semibold rounded-lg",
                    tier.mostPopular && "glow"
                  )}
                  withArrow
                >
                  <span className="truncate">Get Started with {tier.name}</span>
                </CustomButton>
              </Link>

              <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-center space-x-2 text-xs text-muted-foreground font-medium uppercase tracking-wider">
                <Info className="h-3 w-3" />
                <span>No credit card required</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[2.5rem] bg-primary/5 border border-primary/10 relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="relative z-10 space-y-6">
             <h3 className="text-2xl md:text-3xl font-bold text-foreground">Need a custom enterprise solution?</h3>
             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                For large multi-location networks or custom feature requirements, our enterprise team can build a tailored solution for your business.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <CustomButton variant="outline" size="lg" className="h-14 px-8 text-base font-bold" withArrow>
                    Contact Sales
                  </CustomButton>
                </Link>
                <Link href="/contact">
                  <CustomButton size="lg" className="h-14 px-8 text-base font-bold glow" withArrow>
                    Request Enterprise Demo
                  </CustomButton>
                </Link>
             </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[150%] bg-primary/10 -skew-x-12 -z-0" />
        </div>
      </div>
    </section>
  )
}
