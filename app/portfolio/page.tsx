import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, TrendingUp, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Portfolio | WebStudio",
  description: "A showcase of custom websites and digital products built for small businesses.",
}

export default function PortfolioPage() {
  const projects = [
    {
      title: "Main Street Coffee",
      category: "Web Design & Branding",
      description:
        "A complete rebrand and website overhaul for a local coffee shop. The new site features online ordering, a loyalty program integration, and a blog for sharing coffee tips.",
      image: "/images/coffee-shop.jpg",
      link: "#",
      results: "40% increase in online orders",
    },
    {
      title: "Oak & Stone Legal",
      category: "Lead Generation Site",
      description:
        "A professional, high-trust website for a boutique law firm. Focused on showcasing expertise and driving consultation bookings through strategic calls-to-action.",
      image: "/images/legal-firm.jpg",
      link: "#",
      results: "2x more consultation requests",
    },
    {
      title: "Summit Property Management",
      category: "Corporate Website",
      description:
        "A clean, modern corporate site for a property management company. Includes a tenant portal integration, property listings, and a streamlined maintenance request system.",
      image: "/images/property-management.jpg",
      link: "#",
      results: "Reduced admin time by 15 hours/week",
    },
    {
      title: "Blossom Bakery",
      category: "E-Commerce",
      description:
        "A vibrant, mouth-watering e-commerce site for a custom bakery. Features a custom cake builder, delivery scheduling, and a gallery of past creations.",
      image: "/images/bakery.jpg",
      link: "#",
      results: "60% of revenue now comes from online sales",
    },
  ]

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="pt-12 md:pt-32 pb-8 md:pb-10 px-4 md:px-6 lg:px-8 w-full text-center space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          Selected Work
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          A collection of websites that have helped small businesses grow, streamline operations, and build their brand.
        </p>
      </section>

      {/* Projects Section */}
      <section className="w-full px-4 md:px-6 lg:px-8">
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              <div className="w-full lg:w-1/2 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative aspect-video overflow-hidden rounded-2xl border bg-muted shadow-2xl transition-all hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] group">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both" style={{ animationDelay: `${index * 100 + 200}ms` }}>
                <div className="space-y-2">
                  <div className="inline-block">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-primary/20">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{project.title}</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border/50">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">Key Result</div>
                    <div className="font-bold text-foreground">{project.results}</div>
                  </div>
                </div>
                <Button asChild size="lg" className="group">
                  <Link href={project.link}>
                    View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 md:px-6 lg:px-8 text-center pb-10">
        <div className="bg-muted/30 rounded-3xl p-12 md:p-20 space-y-8 border border-border/50">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Like what you see?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's create a website that delivers similar results for your business.
          </p>
          <Button asChild size="lg" className="px-8 shadow-lg hover:shadow-primary/25 transition-all hover:scale-105">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
