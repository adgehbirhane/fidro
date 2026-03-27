"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { pricingTiers, pricingHeader } from "@/content/pricing"
import Link from "next/link"

export function PricingPreview() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "yearly">("monthly")

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

          <div className="flex items-center justify-center mt-8">
            <div className="relative flex items-center p-1 bg-muted rounded-full">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "relative px-6 py-2 text-sm font-bold transition-all duration-300 rounded-full",
                  billingCycle === "monthly" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {billingCycle === "monthly" && (
                  <motion.div
                    layoutId="active-billing"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                  "relative px-6 py-2 text-sm font-bold transition-all duration-300 rounded-full flex items-center space-x-2",
                  billingCycle === "yearly" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {billingCycle === "yearly" && (
                  <motion.div
                    layoutId="active-billing"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span>Yearly</span>
                <span className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full",
                  billingCycle === "yearly" ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary"
                )}>
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "relative flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl h-full",
                tier.mostPopular
                  ? "bg-background border-primary shadow-xl ring-1 ring-primary scale-105 z-10"
                  : "bg-muted/30 border-muted hover:bg-background"
              )}
            >
              {tier.mostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground min-h-[40px]">{tier.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight text-foreground">
                    {billingCycle === "monthly" ? tier.priceMonthly : tier.priceYearly}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground ml-2">/month</span>
                </div>
                {billingCycle === "yearly" && (
                  <p className="text-xs text-primary font-bold mt-2">Billed annually</p>
                )}
              </div>

              <div className="flex-1 space-y-4 mb-8">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">WHAT&apos;S INCLUDED</p>
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground/80 leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact">
                <Button
                  variant={tier.mostPopular ? "default" : "outline"}
                  className={cn(
                    "w-full h-12 text-sm font-bold rounded-xl",
                    tier.mostPopular ? "shadow-lg shadow-primary/25" : ""
                  )}
                >
                  Get Started with {tier.name}
                </Button>
              </Link>

              <div className="mt-6 flex items-center justify-center space-x-2 text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
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
                  <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold group">
                    Contact Sales
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 text-base font-bold group">
                    Request Enterprise Demo
                  </Button>
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
