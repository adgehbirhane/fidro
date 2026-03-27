import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "John Carter",
    role: "Owner, Iron & Grit Fitness",
    content: "Fidro has completely transformed how we handle our member billing. What used to take days of manual tracking now happens automatically. Our revenue is up by 15% in just 3 months.",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    role: "Manager, Pure Zen Yoga",
    content: "The attendance tracking feature is a game-changer for our studio. Members love the QR code check-in, and we finally have clear data on our peak hours and popular classes.",
    rating: 5,
  },
  {
    name: "Marcus Davies",
    role: "Founder, Peak Performance Centers",
    content: "Scaling to our fourth location was seamless with Fidro's multi-location dashboard. The insights we get from the analytics are invaluable for our strategic decisions.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Trusted by <span className="text-primary">fitness leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how Fidro is helping gym owners and fitness managers grow their businesses with less effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 rounded-3xl border bg-background shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 h-12 w-12 text-primary/10 -z-0" />
                  <p className="text-lg text-foreground italic relative z-10 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Achievement/Badge Placeholders */}
           <div className="flex flex-col items-center space-y-2">
              <div className="h-12 w-12 bg-muted rounded-full" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-center">Top Rated 2024</p>
           </div>
           <div className="flex flex-col items-center space-y-2">
              <div className="h-12 w-12 bg-muted rounded-full" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-center">Security Certified</p>
           </div>
           <div className="flex flex-col items-center space-y-2">
              <div className="h-12 w-12 bg-muted rounded-full" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-center">99.9% Uptime</p>
           </div>
           <div className="flex flex-col items-center space-y-2">
              <div className="h-12 w-12 bg-muted rounded-full" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-center">Customer Choice</p>
           </div>
        </div>
      </div>
    </section>
  )
}
