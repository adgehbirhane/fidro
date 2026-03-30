"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Back navigation */}
          <Link href="/blogs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          
          {/* Blog post skeleton */}
          <article className="max-w-4xl mx-auto space-y-8">
            {/* Header skeleton */}
            <div className="space-y-6">
              <div className="w-32 h-2 bg-muted rounded-full animate-pulse" />
              <div className="w-full h-12 bg-muted rounded-full animate-pulse" />
              <div className="w-3/4 h-4 bg-muted rounded-full animate-pulse" />
              
              {/* Meta info skeleton */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <div className="w-20 h-3 bg-muted rounded-full animate-pulse" />
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <div className="w-16 h-3 bg-muted rounded-full animate-pulse" />
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <div className="w-12 h-3 bg-muted rounded-full animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Featured image skeleton */}
            <div className="w-full h-64 md:h-96 bg-muted rounded-2xl animate-pulse" />
            
            {/* Content skeleton */}
            <div className="space-y-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="space-y-3">
                  <div className={`w-full h-4 bg-muted rounded-full animate-pulse ${i === 4 ? 'w-3/4' : ''}`} />
                  {i === 3 && <div className="w-full h-32 bg-muted rounded-lg animate-pulse" />}
                  {i === 6 && <div className="w-full h-48 bg-muted rounded-lg animate-pulse" />}
                </div>
              ))}
            </div>
            
            {/* Author section skeleton */}
            <div className="border-t pt-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-muted rounded-full animate-pulse" />
                <div className="space-y-2">
                  <div className="w-24 h-4 bg-muted rounded-full animate-pulse" />
                  <div className="w-32 h-3 bg-muted rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  )
}
