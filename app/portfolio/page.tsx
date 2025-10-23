import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Portfolio | Opyjo Consulting - Web Development Projects",
  description:
    "View our portfolio of custom web applications built with React, Next.js, and TypeScript. See examples of e-commerce sites, SaaS platforms, and business websites we've developed for clients.",
  keywords: [
    "web development portfolio",
    "React projects",
    "Next.js examples",
    "TypeScript applications",
    "freelance developer work",
    "custom web apps",
  ],
  openGraph: {
    title: "Portfolio | Opyjo Consulting",
    description: "View our portfolio of custom web applications and development projects.",
    type: "website",
  },
}

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product management, shopping cart, checkout, and payment integration. Built with Next.js 14 App Router and Stripe.",
    image: "/modern-ecommerce-interface.png",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    category: "E-Commerce",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard for a B2B SaaS platform with real-time data visualization, user management, and API integrations.",
    image: "/professional-analytics-dashboard-with-charts.jpg",
    tags: ["React", "TypeScript", "Chart.js", "REST API"],
    category: "SaaS",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Restaurant Website",
    description:
      "Modern restaurant website with online menu, reservation system, and location finder. Optimized for mobile and local SEO.",
    image: "/elegant-restaurant-website-homepage.jpg",
    tags: ["Next.js", "React", "SEO", "Responsive"],
    category: "Business",
    link: "#",
  },
  {
    id: 4,
    title: "Real Estate Portal",
    description:
      "Property listing platform with advanced search filters, map integration, and contact forms. Features server-side rendering for optimal performance.",
    image: "/real-estate-website.png",
    tags: ["Next.js", "TypeScript", "Maps API", "SSR"],
    category: "Business",
    link: "#",
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description:
      "Progressive web app for tracking workouts and nutrition. Includes user authentication, data persistence, and offline functionality.",
    image: "/fitness-tracking-app.png",
    tags: ["React", "PWA", "TypeScript", "Firebase"],
    category: "Web App",
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Marketing Agency Site",
    description:
      "High-converting marketing website with case studies, service pages, and lead capture forms. Built for speed and SEO performance.",
    image: "/professional-marketing-agency-website.jpg",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Performance"],
    category: "Business",
    link: "#",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-muted/50 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Our Work</h1>
            <p className="text-pretty text-lg text-muted-foreground sm:text-xl">
              Explore our portfolio of custom web applications and websites. Each project showcases our commitment to
              quality, performance, and user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="secondary" className="mb-3">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button size="icon" variant="ghost" asChild>
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">View on GitHub</span>
                          </Link>
                        </Button>
                      )}
                      {project.link && (
                        <Button size="icon" variant="ghost" asChild>
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-5 w-5" />
                            <span className="sr-only">View live site</span>
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                  <p className="mb-4 text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold sm:text-4xl">Ready to Start Your Project?</h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Let's discuss how we can bring your vision to life with a custom web solution.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
