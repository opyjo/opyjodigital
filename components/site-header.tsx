"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 font-bold text-xl z-[60]">
          <span className="text-primary">Nexus</span>Design
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Insights", href: "/insights" },
            { name: "Estimator", href: "/estimator" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-foreground/80 hover:text-foreground transition-colors group py-2"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-2">
            <ModeToggle />
            <Button asChild className="shadow-md hover:shadow-lg transition-all hover:scale-105">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="relative z-[60] hover:bg-transparent">
              <div className="relative h-6 w-6">
                <Menu
                  className={cn(
                    "absolute inset-0 h-6 w-6 transition-all duration-300 ease-in-out",
                    isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 h-6 w-6 transition-all duration-300 ease-in-out",
                    isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                  )}
                />
              </div>
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-screen h-screen max-w-none border-none bg-background/95 backdrop-blur-xl flex flex-col justify-center items-center p-0 [&>button]:hidden"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col items-center gap-8">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Insights", href: "/insights" },
                { name: "Estimator", href: "/estimator" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-bold hover:text-primary transition-colors animate-in slide-in-from-bottom-8 fade-in duration-700 fill-mode-both"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col items-center gap-6 mt-8 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-700 fill-mode-both">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-lg font-medium">Switch Theme</span>
                  <ModeToggle />
                </div>
                <Button asChild size="lg" className="text-xl px-8 py-6 h-auto shadow-xl" onClick={() => setIsOpen(false)}>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
