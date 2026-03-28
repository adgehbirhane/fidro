import React from "react"
import { aboutValues, aboutData } from "@/lib/constants"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                  {aboutData.title.split("empower").map((part, i) => (
                    <React.Fragment key={i}>
                      {part}
                      {i === 0 && <span className="text-primary">empower</span>}
                    </React.Fragment>
                  ))}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                   {aboutData.description}
                </p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {aboutValues.map((value) => (
                  <div key={value.title} className="space-y-3">
                     <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <value.icon className="h-5 w-5" />
                     </div>
                     <h4 className="font-bold text-foreground">{value.title}</h4>
                     <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                     </p>
                  </div>
                ))}
             </div>
          </div>

          <div className="relative">
             <div className="aspect-square rounded-[3rem] overflow-hidden relative group border-4 border-white shadow-2xl">
                <Image
                  src="/images/team-experts.jpg"
                  alt="Professional fitness trainer with client"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Modern subtle overlay */}
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-xl rounded-3xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                   <div className="flex items-center justify-between mb-4">
                      <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">The Future of Gym Management</p>
                   </div>
                   <p className="text-xs text-gray-900 font-bold leading-relaxed">
                      Join a global community of over <span className="text-primary">500+</span> elite fitness centers transforming their business today.
                   </p>
                </div>
             </div>
             
             {/* Professional Floating Stats */}
             <div className="absolute -top-10 -right-6 p-8 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[2.5rem] text-center space-y-1 z-20">
                <p className="text-4xl font-black text-primary tracking-tighter">99.9%</p>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">Uptime Guarantee</p>
             </div>

             {/* Decorative back element */}
             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
