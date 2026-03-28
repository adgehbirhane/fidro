"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Dumbbell } from "lucide-react"
import { CustomButton } from "@/components/custom-button"
import { cn } from "@/lib/utils"
import { navItems } from "@/lib/constants"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  // Pages with light backgrounds that need dark text initially
  const lightPages = ['/blog', '/contact', '/pricing']
  const isLightPage = lightPages.some(page => pathname.startsWith(page))

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Dumbbell className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className={cn(
              "text-2xl font-bold tracking-tight transition-colors",
              scrolled ? "text-foreground" : isLightPage ? "text-foreground" : "text-white"
            )}>
              Fidro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  scrolled 
                    ? "text-muted-foreground hover:text-primary" 
                    : isLightPage 
                      ? "text-muted-foreground hover:text-primary"
                      : "text-white/80 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact">
              <CustomButton 
                size="sm" 
                variant={scrolled ? "default" : isLightPage ? "default" : "outline"}
                className={cn(
                  !scrolled && !isLightPage && "bg-white/10 backdrop-blur-sm border-white/30 text-white hover:border-primary"
                )}
              >
                Request Demo
              </CustomButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors",
              scrolled ? "text-foreground" : isLightPage ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b p-4 space-y-4 animate-in slide-in-from-top duration-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-muted-foreground hover:text-primary py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="block w-full">
              <CustomButton className="w-full">Request Demo</CustomButton>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
