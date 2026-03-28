"use client"

import * as React from "react"
import { Check, Info, Calendar, Clock, CreditCard } from "lucide-react"
import { CustomButton } from "@/components/custom-button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { pricingTiers, pricingHeader } from "@/content/pricing"
import Link from "next/link"

export function PricingPreview() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "6month" | "yearly">("monthly")

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-background">
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
            <Tabs value={billingCycle} onValueChange={(value) => setBillingCycle(value as "monthly" | "6month" | "yearly")} className="w-full max-w-md">
              <TabsList className="inline-flex w-auto p-1.5 bg-muted/30 border border-primary/10 rounded-2xl">
                <TabsTrigger 
                  value="monthly" 
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white gap-2"
                >
                  <CreditCard className="h-4 w-4" />
                  <span>Monthly</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="6month" 
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white gap-2"
                >
                  <Clock className="h-4 w-4" />
                  <span>6 Months</span>
                  <span className="inline-flex text-[9px] px-1.5 py-0.5 rounded-full bg-white/20 text-white font-black">
                    -10%
                  </span>
                </TabsTrigger>
                <TabsTrigger 
                  value="yearly" 
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Yearly</span>
                  <span className="inline-flex text-[9px] px-1.5 py-0.5 rounded-full bg-white/20 text-white font-black">
                    -20%
                  </span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start relative z-10">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "relative flex flex-col p-6 rounded-3xl border transition-all duration-300 hover:shadow-2xl h-full",
                tier.mostPopular
                  ? "bg-background border-primary shadow-xl ring-2 ring-primary scale-105 z-10" 
                  : "bg-muted/30 border-muted hover:bg-background hover:border-primary/20"
              )}
            >
              {tier.mostPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-xs text-muted-foreground min-h-[32px] line-clamp-2">{tier.description}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold tracking-tight text-foreground">
                    {billingCycle === "monthly" ? tier.priceMonthly : billingCycle === "6month" ? tier.price6Month : tier.priceYearly}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">/month</span>
                </div>
                {billingCycle === "yearly" && (
                  <p className="text-xs text-primary font-bold mt-2">Billed annually (20% off)</p>
                )}
                {billingCycle === "6month" && (
                  <p className="text-xs text-primary font-bold mt-2">Billed every 6 months (10% off)</p>
                )}
              </div>

              <div className="flex-1 space-y-3 mb-6">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">WHAT&apos;S INCLUDED</p>
                <ul className="space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start text-xs">
                      <div className="bg-primary/10 rounded-full p-0.5 mr-2 mt-0.5 flex-shrink-0">
                        <Check className="h-2.5 w-2.5 text-primary" />
                      </div>
                      <span className="text-foreground/80 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="mt-auto">
                <CustomButton
                  variant={tier.mostPopular ? "default" : "outline"}
                  size="sm"
                  className="w-full"
                  withArrow={tier.mostPopular}
                >
                  <span className="truncate text-xs">Get Started with {tier.name}</span>
                </CustomButton>
              </Link>

              <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-center space-x-2 text-[8px] text-muted-foreground font-medium uppercase tracking-wider">
                <Info className="h-2.5 w-2.5" />
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
                  <CustomButton variant="outline" size="lg" className="min-w-[200px]" withArrow>
                    Contact Sales
                  </CustomButton>
                </Link>
                <Link href="/contact">
                  <CustomButton size="lg" className="min-w-[200px]" glow withArrow>
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
