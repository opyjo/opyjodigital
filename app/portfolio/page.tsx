import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export const metadata = {
  title: "Portfolio | WebStudio",
  description: "A showcase of custom websites and digital products built for small businesses.",
}

export default function PortfolioPage() {
  const projects = [
    {
      title: "Riverside Dental",
      category: "Healthcare",
      description:
        "A complete brand refresh and website redesign for a local dental practice. Focused on improving patient booking flow and mobile accessibility.",
      image: "/modern-dental-website.jpg",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      links: { live: "#", github: "#" },
      featured: true,
    },
    {
      title: "Summit Property",
      category: "Real Estate",
      description:
        "Custom property management dashboard and listing site. Features include real-time search, map integration, and automated lead routing.",
      image: "/property-management-website.jpg",
      tech: ["React", "Supabase", "Mapbox"],
      links: { live: "#" },
      featured: true,
    },
    {
      title: "Blossom Bakery",
      category: "E-Commerce",
      description:
        "Online ordering platform for a boutique bakery. Integrated with their POS system for inventory management and scheduled pickups.",
      image: "/bakery-website-ecommerce.jpg",
      tech: ["Shopify", "Liquid", "JavaScript"],
      links: { live: "#" },
      featured: true,
    },
    {
      title: "TechStart Agency",
      category: "Corporate",
      description:
        "Modern landing page for a tech recruiting agency. High-performance animations and interactive career map.",
      image: "/images/tech-startup.jpg", // Updated to generated image
      tech: ["Astro", "React", "Tailwind"],
      links: { live: "#" },
      featured: false,
    },
    {
      title: "Yoga with Sarah",
      category: "Fitness",
      description:
        "Membership site with video on demand and class scheduling. Custom member portal and payment processing.",
      image: "/images/yoga-studio.jpg", // Updated to generated image
      tech: ["Next.js", "Stripe", "Vercel Blob"],
      links: { live: "#" },
      featured: false,
    },
    {
      title: "Local Brew",
      category: "Hospitality",
      description:
        "Digital menu and event calendar for a craft brewery. QR code integration and social media feed aggregation.",
      image: "/images/brewery.jpg", // Updated to generated image
      tech: ["React", "Contentful", "Netlify"],
      links: { live: "#" },
      featured: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Area */}
      <section className="pt-20 pb-10 px-4 md:px-6 lg:px-8 container mx-auto">
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Selected Work</h1>
          <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
            A collection of projects where design meets engineering. I focus on creating accessible, performant, and
            beautiful web experiences.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 pb-20">
        <div className="grid gap-12 md:gap-16">
          {projects.map((project, index) => (
            <div key={index} className="group relative grid md:grid-cols-2 gap-6 md:gap-12 items-center">
              {/* Image Column - Alternating order on desktop */}
              <div
                className={`relative aspect-video overflow-hidden rounded-xl border bg-muted ${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Content Column */}
              <div className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="space-y-2">
                  <span className="text-primary font-medium tracking-wide uppercase text-sm">{project.category}</span>
                  <h2 className="text-3xl font-bold group-hover:text-primary transition-colors">{project.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <Badge key={i} variant="secondary" className="px-3 py-1">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  {project.links.live && (
                    <Button asChild variant="default">
                      <Link href={project.links.live}>
                        Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button asChild variant="outline">
                      <Link href={project.links.github}>
                        <Github className="mr-2 h-4 w-4" /> Source
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 md:mt-32 p-8 md:p-12 bg-muted/30 rounded-2xl text-center space-y-6 border border-border/50">
          <h3 className="text-2xl md:text-3xl font-bold">Have a project in mind?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm currently accepting new clients for Q4 2025. Let's discuss how we can work together to achieve your
            business goals.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
