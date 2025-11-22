import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Heart, Zap, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "About | WebStudio",
  description: "Learn more about my philosophy, process, and the person behind the pixels.",
}

export default function AboutPage() {
  const skills = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "UI/UX Design",
    "Performance Tuning",
    "Accessibility",
  ]

  const values = [
    {
      icon: Heart,
      title: "User-First Design",
      description:
        "I believe beautiful websites are useless if they confuse visitors. I prioritize intuitive navigation and clear messaging above all else.",
    },
    {
      icon: Code,
      title: "Clean Code",
      description:
        "What happens under the hood matters. I write clean, maintainable code that ensures your site is fast, secure, and easy to update.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Slow websites kill conversions. I optimize every image, script, and line of code to ensure your site loads instantly.",
    },
  ]

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-10 px-4 md:px-6 lg:px-8 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                About Me
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Building Digital Bridges for Small Businesses
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              I'm a freelance web designer and developer who helps small businesses turn visitors into loyal customers
              through strategic design and robust engineering.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted border shadow-xl max-w-md mx-auto lg:ml-auto rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Updated image source to generated asset */}
              <img
                src="/images/profile-pic.jpg"
                alt="Portrait of the designer"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <h2 className="text-3xl font-bold mb-6">My Story</h2>
          <p>
            Before I was a web designer, I worked in small business operations. I saw firsthand how struggling business
            owners were often sold expensive, flashy websites that looked great but did absolutely nothing for their
            bottom line.
          </p>
          <p>
            I taught myself to code with a single mission:{" "}
            <strong>to build websites that actually work for business owners.</strong>
          </p>
          <p>
            Since then, I've helped over 50 small businesses—from local bakeries to boutique law firms—establish a
            professional online presence that drives real growth. I don't just deliver a website and disappear; I become
            a partner in your digital success.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">My Philosophy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every project is guided by three core principles that ensure quality and results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-none bg-transparent">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack & Credentials */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Technical Expertise</h2>
            <p className="text-lg text-muted-foreground">
              I stay up-to-date with the latest web technologies to ensure your site is future-proof and competitive.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-card border rounded-xl p-8 space-y-6 shadow-sm">
            <h3 className="text-2xl font-bold">Why Work With Me?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Direct Communication</span>
                  <span className="text-muted-foreground">
                    No project managers or middlemen. You work directly with me.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Transparent Pricing</span>
                  <span className="text-muted-foreground">
                    Flat rates and clear packages. No surprise invoices, ever.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Results Focused</span>
                  <span className="text-muted-foreground">I design for conversion, not just aesthetics.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <div className="bg-primary text-primary-foreground rounded-2xl p-12 md:p-20 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to build something great?</h2>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
            <Link href="/contact">
              Let's Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
