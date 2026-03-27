"use client"

import * as React from "react"
import { featuresHeader } from "@/content/features"
import { DashboardPreview } from "@/sections/home/DashboardPreview"

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {featuresHeader.title.split("scale your gym").map((part, i) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && <span className="text-primary">scale your gym</span>}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {featuresHeader.description}
          </p>
        </div>

        {/* High-Fidelity Dashboard Stack Section */}
        <div className="relative flex items-center justify-center py-12">
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
