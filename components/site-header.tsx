import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
          <span className="text-primary">Nexus</span>Design
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-foreground/80 hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="text-foreground/80 hover:text-foreground transition-colors">
            Portfolio
          </Link>
          <Link href="/insights" className="text-foreground/80 hover:text-foreground transition-colors">
            Insights
          </Link>
          <Link href="/estimator" className="text-foreground/80 hover:text-foreground transition-colors">
            Estimator
          </Link>
          <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </Link>
          <ModeToggle />
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium">
                Home
              </Link>
              <Link href="/services" className="text-lg font-medium">
                Services
              </Link>
              <Link href="/portfolio" className="text-lg font-medium">
                Portfolio
              </Link>
              <Link href="/insights" className="text-lg font-medium">
                Insights
              </Link>
              <Link href="/estimator" className="text-lg font-medium">
                Estimator
              </Link>
              <Link href="/about" className="text-lg font-medium">
                About
              </Link>
              <Link href="/contact" className="text-lg font-medium">
                Contact
              </Link>
              <div className="flex items-center gap-2">
                <ModeToggle />
                <span className="text-sm font-medium">Switch Theme</span>
              </div>
              <Link href="/contact" className="text-lg font-medium text-primary">
                Get Started
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
