"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Home, Search, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/shared/logo"
import { CustomButton } from "@/components/custom-button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center space-y-8 max-w-md w-full"
      >         
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            <h1 className="text-8xl font-black text-primary/20">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-16 h-16 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-foreground">
            Page Not Found
          </h2>
          
          <p className="text-muted-foreground leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/">
            <CustomButton className="flex items-center gap-2" withArrow>
              <Home className="w-4 h-4" />
              Go Home
            </CustomButton>
          </Link>
          
          <Link href="/contact">
            <CustomButton variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Contact Support
            </CustomButton>
          </Link>
        </motion.div>
        
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Home', 'Features', 'Pricing', 'Blogs', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="px-3 py-1 text-xs bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </div>
  )
}
