"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, ArrowRight, MessageCircle, Sparkles, TrendingUp } from "lucide-react"
import { faqs } from "@/content/faqs"
import { CustomButton } from "@/components/custom-button"
import Link from "next/link"

export function FAQs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.05),transparent)] opacity-60" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
              Your questions,
              <span className="text-primary"> answered</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
              Worried about setup or integrations? Here are common questions—but our support team is always ready to help with your specific needs. </p>
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        > 
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.slice(0, 6).map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border/50 rounded-xl px-6 hover:bg-muted/50 transition-all duration-300 hover:shadow-md"
                  >
                    <AccordionTrigger className="text-left font-semibold text-base hover:no-underline py-4">
                      <span className="flex-1">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion> 
        </motion.div>
      </div>
    </section>
  )
}
