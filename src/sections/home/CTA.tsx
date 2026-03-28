import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Ready to transform your fitness business?
        </h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Join hundreds of successful gym owners who have scaled their operations and increased member satisfaction with Fidro.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold group w-full sm:w-auto">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
