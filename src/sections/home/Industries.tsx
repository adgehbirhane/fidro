import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
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
              className="group p-8 rounded-3xl border bg-background hover:border-primary/50 transition-all duration-300 hover:shadow-sm hover:-translate-y-1"
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
          
          <Link 
            href="/contact"
            className="p-8 rounded-3xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center text-center space-y-6 group hover:bg-primary/5 transition-all duration-500 hover:border-primary/40 hover:shadow-sm hover:scale-[1.02] relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-solid transition-all duration-500 relative z-10">
                <span className="text-3xl font-bold">+</span>
             </div>
             <div className="space-y-2 relative z-10">
               <h3 className="text-xl font-black text-foreground uppercase tracking-tight">Your Industry?</h3>
               <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-[200px]">
                  Don&apos;t see your fitness niche? Let&apos;s build it together.
               </p>
             </div>
             <div className="pt-2 relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                  Contact Us <ArrowRight className="h-3 w-3" />
                </span>
             </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
