"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare, MapPin, Sparkles, Clock } from "lucide-react"
import { contactData } from "@/lib/constants"
import SocialMedia from "@/components/shared/social-media"

export function ContactInfo() {
  return (
    <div className="flex-1 space-y-10">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
          <Sparkles className="h-3 w-3 text-primary" />
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary">Get in Touch</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
          Let&apos;s build the <span className="text-primary">future</span> of your gym.
        </h1>
        
        <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
          {contactData.description}
        </p>
      </div>

      {/* Contact Information Grid (2x2 on LG) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-3"
        >
          <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Email Us</p>
            <a 
              href={`mailto:${contactData.email}`}
              className="text-base font-bold text-foreground hover:text-primary transition-colors block break-words"
            >
              {contactData.email}
            </a>
            <p className="text-[11px] text-muted-foreground mt-1">Response within 2 hours</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="space-y-3"
        >
          <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Call Us</p>
            <a 
              href={`tel:${contactData.phone}`}
              className="text-base font-bold text-foreground hover:text-primary transition-colors block"
            >
              {contactData.phone}
            </a>
            <p className="text-[11px] text-muted-foreground mt-1">Available 24/7 support</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="space-y-3"
        >
          <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Working Hours</p>
            <p className="text-base font-bold text-foreground">Monday — Friday</p>
            <p className="text-[11px] text-muted-foreground mt-1">8:00 AM — 6:00 PM (EAT)</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="space-y-3"
        >
          <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary">
            <MessageSquare className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Social Channels</p>
            <div className="flex items-center gap-3">
              <SocialMedia />
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">Join our community</p>
          </div>
        </motion.div>
      </div>

      {/* Standalone Location Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="pt-10 border-t border-primary/10 max-w-xl"
      >
        <div className="flex items-start gap-4">
          <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Our Headquarters</p>
            <p className="text-base font-bold text-foreground leading-snug">
              Sent Marian Gurd, Shola — Addis Ababa, Ethiopia
            </p>
            <a 
              href="https://maps.google.com/?q=Sent+Marian+Gurd+Shola,Addis+Ababa,Ethiopia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-primary font-bold hover:underline mt-1 block"
            >
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
