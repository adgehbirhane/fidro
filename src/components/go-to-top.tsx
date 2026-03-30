"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface GoToTopProps {
  className?: string
  showThreshold?: number
}

export function GoToTop({ className, showThreshold = 300 }: GoToTopProps) {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showThreshold)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showThreshold])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            mass: 0.8
          }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-6 right-6 z-40",
            "bg-primary text-primary-foreground",
            "w-12 h-12 rounded-full",
            "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",
            "border-2 border-primary/20",
            "flex items-center justify-center",
            "transition-all duration-300 ease-out",
            "hover:scale-110 active:scale-95",
            "group",
            className
          )}
          aria-label="Go to top"
        >
          <motion.div
            animate={{ y: isVisible ? 0 : 2 }}
            transition={{
              repeat: isVisible ? Infinity : 0,
              repeatType: "reverse",
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <ChevronUp 
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-[-2px]" 
            />
          </motion.div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
