import { Dumbbell, Activity, Users, Trophy, Building2 } from "lucide-react"

const industries = [
  {
    name: "Fitness Centers",
    description: "End-to-end member lifecycle management from lead capture to long-term retention.",
    icon: Activity,
  },
  {
    name: "Boutique Gyms",
    description: "Streamlined equipment scheduling, class management, and automated member billing.",
    icon: Dumbbell,
  },
  {
    name: "Health Clubs",
    description: "Premium member experiences with advanced access control and integrated wellness tracking.",
    icon: Building2,
  },
  {
    name: "Personal Training",
    description: "Client-focused management, session scheduling, and transparent payment processing.",
    icon: Users,
  },
  {
    name: "Multi-location Groups",
    description: "Centralized operations and analytics across multiple sites with global reporting.",
    icon: Trophy,
  },
]

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Tailored for your <span className="text-primary">fitness niche</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Whether you run a local boutique studio or a global health club network, Fidro scales with your ambition.
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
                Don't see your specific fitness business here? We likely support it. Let's talk.
             </p>
          </div>
        </div>
      </div>
    </section>
  )
}
