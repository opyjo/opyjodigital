import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PortfolioPreview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Recent Work</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how we've helped other small businesses transform their digital presence.
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden md:inline-flex">
            <Link href="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:gap-12">
          {/* Project 1 */}
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both">
            <div className="aspect-video overflow-hidden">
              <img
                src="/images/coffee-shop.jpg"
                alt="Project 1"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Main Street Coffee</h3>
              <p className="text-sm text-primary font-medium mb-2">Web Design & Branding</p>
              <p className="text-muted-foreground mb-4">
                A complete rebrand and website overhaul that increased online orders by 40% in the first month.
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                View Case Study <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both">
            <div className="aspect-video overflow-hidden">
              <img
                src="/images/legal-firm.jpg"
                alt="Project 2"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Oak & Stone Legal</h3>
              <p className="text-sm text-primary font-medium mb-2">Lead Generation Site</p>
              <p className="text-muted-foreground mb-4">
                Professional website design focused on trust and authority, generating 2x more consultation requests.
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                View Case Study <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
