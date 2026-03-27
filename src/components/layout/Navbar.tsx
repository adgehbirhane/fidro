"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { navItems } from "@/lib/constants"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

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
              scrolled ? "text-foreground" : "text-white"
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
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              size="sm" 
              className={cn(
                scrolled 
                  ? "bg-primary hover:bg-primary/90" 
                  : "bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
              )}
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors",
              scrolled ? "text-foreground" : "text-white"
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
            <Button className="w-full">Request Demo</Button>
          </div>
        )}
      </div>
    </header>
  )
}
