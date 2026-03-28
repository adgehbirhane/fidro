"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps } from "class-variance-authority"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  glow?: boolean
  withArrow?: boolean
  swipeColor?: string
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, glow = false, withArrow = false, swipeColor, children, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const Comp = asChild ? Slot : "button"

    // Use variant directly since "primary" is handled by "default"
    const activeVariant: VariantProps<typeof buttonVariants>['variant'] = variant

    // Define colors for the swipe based on variant
    const getSwipeColor = () => {
      if (swipeColor) return swipeColor
      if (activeVariant === "secondary") return "bg-primary" // Secondary button swipes with primary color
      if (activeVariant === "outline") return "bg-primary" // Outline button swipes with primary color
      return "bg-secondary" // Default button swipes with secondary color
    }

    // Define text color change on hover for outline variant
    const getTextColorClass = () => {
      if (activeVariant === "outline") return isHovered ? "text-white" : "text-primary"
      if (activeVariant === "secondary") return isHovered ? "text-white" : "text-primary"
      if (activeVariant === "default") return isHovered ? "text-primary" : "text-white"
      return "text-white"
    }

    return (
      <div className={cn("relative inline-block", className)}>
        {/* Subtle Glow (Only if requested) */}
        {glow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isHovered ? 0.15 : 0, 
            }}
            className={cn(
              "absolute inset-0 blur-lg z-0",
              activeVariant === "secondary" ? "bg-secondary" : "bg-primary"
            )}
          />
        )}

        <Comp
          ref={ref}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            buttonVariants({ variant: activeVariant, size } as VariantProps<typeof buttonVariants>),
            "relative overflow-hidden group border-2 font-bold tracking-tight z-10",
            "transition-all duration-300 ease-out",
            activeVariant === "default" && "bg-primary border-primary text-white",
            activeVariant === "secondary" && "bg-secondary border-secondary text-primary",
            activeVariant === "outline" && "bg-transparent border-primary text-primary",
            className
          )}
          {...props}
        >
          {/* Background Swipe Layer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "0%" : "-100%" }}
            transition={{ 
              type: "tween",
              ease: "easeInOut",
              duration: 0.3
            }}
            className={cn(
              "absolute inset-0 z-0",
              getSwipeColor()
            )}
          />

          {/* Content Wrapper */}
          <div 
            className={cn(
              "relative z-10 flex items-center justify-center gap-2 transition-colors duration-300",
              getTextColorClass()
            )}
          >
            {children}
            {withArrow && (
              <ArrowRight className={cn(
                "h-4 w-4 transition-transform duration-300",
                isHovered ? "translate-x-1" : "translate-x-0"
              )} />
            )}
          </div>
        </Comp>
      </div>
    )
  }
)

CustomButton.displayName = "CustomButton"

export { CustomButton }
