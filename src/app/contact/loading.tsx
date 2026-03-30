"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left side skeleton */}
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <div className="w-32 h-2 bg-muted rounded-full animate-pulse" />
                <div className="w-full h-16 bg-muted rounded-full animate-pulse" />
                <div className="w-3/4 h-4 bg-muted rounded-full animate-pulse" />
              </div>
              
              {/* Contact info grid skeleton */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="space-y-3">
                    <div className="w-12 h-12 bg-muted rounded-xl animate-pulse" />
                    <div className="space-y-2">
                      <div className="w-20 h-3 bg-muted rounded-full animate-pulse" />
                      <div className="w-32 h-4 bg-muted rounded-full animate-pulse" />
                      <div className="w-24 h-3 bg-muted rounded-full animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Location skeleton */}
              <div className="space-y-3 pt-8 border-t">
                <div className="w-12 h-12 bg-muted rounded-xl animate-pulse" />
                <div className="space-y-2">
                  <div className="w-32 h-3 bg-muted rounded-full animate-pulse" />
                  <div className="w-48 h-4 bg-muted rounded-full animate-pulse" />
                  <div className="w-36 h-3 bg-muted rounded-full animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Right side form skeleton */}
            <div className="flex-1 max-w-lg">
              <div className="bg-background border rounded-2xl p-6 md:p-10 space-y-8">
                <div className="space-y-3">
                  <div className="w-32 h-8 bg-muted rounded-full animate-pulse" />
                  <div className="w-40 h-3 bg-muted rounded-full animate-pulse" />
                </div>
                
                {/* Form fields skeleton */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="w-20 h-3 bg-muted rounded-full animate-pulse" />
                      <div className="w-full h-12 bg-muted rounded-xl animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-24 h-3 bg-muted rounded-full animate-pulse" />
                      <div className="w-full h-12 bg-muted rounded-xl animate-pulse" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="w-28 h-3 bg-muted rounded-full animate-pulse" />
                    <div className="w-full h-12 bg-muted rounded-xl animate-pulse" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="w-16 h-3 bg-muted rounded-full animate-pulse" />
                    <div className="w-full h-12 bg-muted rounded-xl animate-pulse" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="w-16 h-3 bg-muted rounded-full animate-pulse" />
                    <div className="w-full h-32 bg-muted rounded-xl animate-pulse" />
                  </div>
                </div>
                
                {/* Submit button skeleton */}
                <div className="w-full h-14 bg-muted rounded-xl animate-pulse flex items-center justify-center">
                  <Send className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
