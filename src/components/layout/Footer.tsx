import Link from "next/link"
import { Dumbbell } from "lucide-react"
import { footerSections } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-background border-t py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <Dumbbell className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-foreground">
                Fidro
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fidro is the comprehensive fitness and gym management system
              designed to streamline operations, boost member engagement, and
              maximize revenue.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fidro. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
