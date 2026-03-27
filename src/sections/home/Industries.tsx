import React from "react"
import { industries, industriesHeader } from "@/content/features"

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            {industriesHeader.title.split("fitness niche").map((part, i) => (
              <React.Fragment key={i}>
                {part}
                {i === 0 && <span className="text-primary">fitness niche</span>}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-xl text-muted-foreground">
            {industriesHeader.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group p-8 rounded-3xl border bg-background hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <industry.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{industry.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
          
          <div className="p-8 rounded-3xl border border-dashed border-primary/30 flex flex-col items-center justify-center text-center space-y-4 group hover:bg-primary/5 transition-all duration-300">
             <div className="w-14 h-14 rounded-full border-2 border-dashed border-primary/50 flex items-center justify-center text-primary">
                <span className="text-2xl font-bold">+</span>
             </div>
             <h3 className="text-xl font-bold text-foreground">Your Industry?</h3>
             <p className="text-muted-foreground text-sm">
                Don&apos;t see your specific fitness business here? We likely support it. Let&apos;s talk.
             </p>
          </div>
        </div>
      </div>
    </section>
  )
}
