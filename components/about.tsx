import { Rocket, Heart, Shield, Globe } from "lucide-react"

const values = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible in fitness management software.",
    icon: Rocket,
  },
  {
    title: "Reliability",
    description: "Your business runs 24/7, and so does Fidro. We guarantee 99.9% uptime for all our services.",
    icon: Shield,
  },
  {
    title: "Global Vision",
    description: "Supporting fitness centers across 40+ countries with localized payment and tax support.",
    icon: Globe,
  },
  {
    title: "Member First",
    description: "We design every feature with the end-member experience in mind to drive engagement.",
    icon: Heart,
  },
]

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                  Our mission is to <span className="text-primary">empower</span> fitness businesses
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                   Founded by fitness enthusiasts and software engineers, Fidro was built to solve the real-world challenges of running modern health clubs and boutique gyms.
                </p>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {values.map((value) => (
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
             <div className="aspect-square rounded-[3rem] bg-muted/50 overflow-hidden relative group">
                {/* Modern Abstract Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <div className="relative w-full h-full border-4 border-primary/20 rounded-full animate-pulse flex items-center justify-center">
                      <div className="w-2/3 h-2/3 border-4 border-primary/40 rounded-full animate-ping flex items-center justify-center">
                         <div className="w-1/2 h-1/2 bg-primary rounded-full shadow-[0_0_50px_rgba(0,186,211,0.5)]" />
                      </div>
                   </div>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/80 backdrop-blur-md rounded-2xl border shadow-xl">
                   <div className="flex items-center justify-between mb-4">
                      <div className="flex -space-x-3">
                         {[1, 2, 3, 4].map(i => (
                           <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center font-bold text-xs">
                              {String.fromCharCode(64 + i)}
                           </div>
                         ))}
                      </div>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest">Our Team</p>
                   </div>
                   <p className="text-sm text-foreground font-medium">
                      Driven by a passion for fitness and technology. We're here to help you succeed.
                   </p>
                </div>
             </div>
             
             {/* Floating Stats */}
             <div className="absolute -top-6 -right-6 p-6 bg-background border shadow-xl rounded-2xl text-center space-y-1">
                <p className="text-3xl font-extrabold text-primary">2018</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">ESTABLISHED</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
