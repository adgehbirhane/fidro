"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contactData } from "@/lib/constants"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                {contactData.title.split("elevate").map((part, i) => (
                  <React.Fragment key={i}>
                    {part}
                    {i === 0 && <span className="text-primary">elevate</span>}
                  </React.Fragment>
                ))}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                {contactData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-muted/30 border border-muted group hover:border-primary/50 transition-colors">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email Us</h4>
                  <p className="text-sm text-muted-foreground">{contactData.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-muted/30 border border-muted group hover:border-primary/50 transition-colors">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Call Us</h4>
                  <p className="text-sm text-muted-foreground">{contactData.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-muted/30 border border-muted group hover:border-primary/50 transition-colors">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Live Chat</h4>
                  <p className="text-sm text-muted-foreground">{contactData.chat}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">GLOBAL PRESENCE</p>
              <div className="grid grid-cols-2 gap-8">
                 <div>
                    <h5 className="font-bold text-foreground">North America</h5>
                    <p className="text-sm text-muted-foreground">New York, NY</p>
                 </div>
                 <div>
                    <h5 className="font-bold text-foreground">Europe</h5>
                    <p className="text-sm text-muted-foreground">London, UK</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] -rotate-2 -z-10" />
            <div className="bg-background border shadow-2xl rounded-[2.5rem] p-8 md:p-12 relative">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. One of our representatives will contact you shortly.
                    </p>
                  </div>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full h-12 px-4 rounded-xl bg-muted/30 border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Work Email</label>
                      <input
                        required
                        type="email"
                        placeholder="john@gym.com"
                        className="w-full h-12 px-4 rounded-xl bg-muted/30 border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Business Name</label>
                    <input
                      required
                      type="text"
                      placeholder="The Iron Forge Gym"
                      className="w-full h-12 px-4 rounded-xl bg-muted/30 border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Interested in</label>
                    <select className="w-full h-12 px-4 rounded-xl bg-muted/30 border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                      <option>Starter Plan</option>
                      <option>Professional Plan</option>
                      <option>Enterprise Solution</option>
                      <option>Just exploring</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Message (Optional)</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your business goals..."
                      className="w-full p-4 rounded-xl bg-muted/30 border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold group">
                    Send Request
                    <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-medium">
                    By submitting, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
