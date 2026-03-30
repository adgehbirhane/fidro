"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { FileText, Calendar, User } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header skeleton */}
          <div className="text-center space-y-4">
            <div className="w-32 h-2 bg-muted rounded-full mx-auto animate-pulse" />
            <div className="w-64 h-8 bg-muted rounded-full mx-auto animate-pulse" />
            <div className="w-96 h-4 bg-muted rounded-full mx-auto animate-pulse" />
          </div>
          
          {/* Blog grid skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border rounded-2xl overflow-hidden space-y-4"
              >
                {/* Image skeleton */}
                <div className="w-full h-48 bg-muted animate-pulse" />
                
                {/* Content skeleton */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-6 bg-muted rounded-full animate-pulse" />
                    <div className="w-20 h-4 bg-muted rounded-full animate-pulse" />
                  </div>
                  <div className="w-full h-6 bg-muted rounded-full animate-pulse" />
                  <div className="w-3/4 h-4 bg-muted rounded-full animate-pulse" />
                  <div className="w-full h-4 bg-muted rounded-full animate-pulse" />
                  <div className="w-2/3 h-4 bg-muted rounded-full animate-pulse" />
                </div>
                
                {/* Footer skeleton */}
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <div className="w-16 h-3 bg-muted rounded-full animate-pulse" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <div className="w-12 h-3 bg-muted rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
