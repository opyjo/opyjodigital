import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs md:text-sm font-medium text-accent shadow-sm ring-1 ring-accent/20">
                  Trusted by 50+ Small Businesses
                </span>
              </div>
              <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-balance leading-tight tracking-tight">
                Get a Website That Actually Brings You Customers
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-lg">
                Stop losing customers to competitors with better websites. I build custom, high-converting websites for
                small businesses that need to grow their online presence without breaking the bank.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-base font-medium">Fast turnaround (2-3 weeks average)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-base font-medium">Mobile-friendly design</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-base font-medium">Ongoing support and maintenance included</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base transition-all hover:scale-105 shadow-lg hover:shadow-accent/25"
              >
                <Link href="/contact">
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base transition-all hover:scale-105 bg-background/50 backdrop-blur-sm border-accent/20 hover:bg-accent/10"
              >
                <Link href="/portfolio">View My Work</Link>
              </Button>
            </div>
          </div>

          <div className="relative lg:h-[500px] animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 fill-mode-both">
            <div className="relative h-full w-full rounded-2xl border bg-card p-2 shadow-2xl transition-transform hover:scale-[1.02] duration-500 rotate-1 hover:rotate-0">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/hero-showcase.jpg"
                  alt="Professional website design showcase"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl border bg-background/95 backdrop-blur p-4 shadow-xl hidden lg:block animate-in zoom-in-50 duration-700 delay-500 fill-mode-both">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="h-10 w-10 rounded-full border-2 border-background bg-accent flex items-center justify-center text-xs text-white font-bold">JD</div>
                  <div className="h-10 w-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-xs text-white font-bold">AS</div>
                  <div className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs text-muted-foreground font-bold">+48</div>
                </div>
                <div className="text-sm">
                  <div className="font-bold">50+ Happy Clients</div>
                  <div className="text-muted-foreground text-xs">5-star reviews across platforms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
