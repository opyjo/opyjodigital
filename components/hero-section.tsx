import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                  Trusted by 50+ Small Businesses
                </span>
              </div>
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
                Get a Website That Actually Brings You Customers
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                Stop losing customers to competitors with better websites. I build custom, high-converting websites for
                small businesses that need to grow their online presence without breaking the bank.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-base">Fast turnaround (2-3 weeks average)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-base">Mobile-friendly design</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-base">Ongoing support and maintenance included</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base transition-transform hover:scale-105"
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
                className="text-base transition-transform hover:scale-105 bg-transparent"
              >
                <Link href="/portfolio">View My Work</Link>
              </Button>
            </div>
          </div>

          <div className="relative lg:h-[500px] animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 fill-mode-both">
            <div className="relative h-full w-full rounded-lg border bg-card p-8 shadow-xl transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="/images/hero-showcase.jpg"
                alt="Professional website design showcase"
                fill
                className="object-cover rounded-md"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-lg border bg-background p-4 shadow-lg hidden lg:block animate-in zoom-in-50 duration-700 delay-500 fill-mode-both">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full border-2 border-background bg-accent" />
                  <div className="h-10 w-10 rounded-full border-2 border-background bg-primary" />
                  <div className="h-10 w-10 rounded-full border-2 border-background bg-muted" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">50+ Happy Clients</div>
                  <div className="text-muted-foreground">5-star reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
