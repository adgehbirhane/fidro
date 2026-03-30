"use client"

import * as React from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, RefreshCw } from "lucide-react"
import { Logo } from "@/components/shared/logo"
import { CustomButton } from "@/components/custom-button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-foreground">
            Something went wrong
          </h1>
          
          <p className="text-muted-foreground leading-relaxed">
            We apologize for the inconvenience. An unexpected error has occurred while loading the application.
          </p>
          
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
              <p className="text-sm font-mono text-red-800 break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-red-600 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <CustomButton
            onClick={reset}
            className="flex items-center gap-2"
            withArrow
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </CustomButton>
          
          <CustomButton
            variant="outline"
            onClick={() => window.location.href = '/'}
          >
            Go Home
          </CustomButton>
        </motion.div>
        
        <motion.p
          className="text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          If this problem persists, please contact our support team.
        </motion.p>
      </motion.div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />
      </div>
    </div>
  )
}
