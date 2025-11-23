import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Heart, Zap, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "About | OpyjoDigital",
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
      <section className="pt-12 md:pt-32 pb-8 md:pb-10 px-4 md:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent ring-1 ring-accent/20">
                About Me
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Building Digital Bridges for Small Businesses
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              I'm a freelance web designer and developer who helps small businesses turn visitors into loyal customers
              through strategic design and robust engineering.
            </p>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200 fill-mode-both">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted border shadow-2xl max-w-md mx-auto lg:ml-auto rotate-3 hover:rotate-0 transition-transform duration-500 ring-1 ring-border/50">
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
      <section className="w-full px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="prose prose-lg dark:prose-invert mx-auto prose-headings:font-bold prose-p:text-muted-foreground prose-strong:text-foreground">
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
      <section className="bg-muted/30 py-20 rounded-3xl mx-4 md:mx-6 lg:mx-8">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Philosophy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every project is guided by three core principles that ensure quality and results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-none bg-transparent hover:bg-background/50 transition-colors rounded-xl p-4">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-2xl bg-background border-2 border-primary/20 flex items-center justify-center shadow-sm rotate-3 group-hover:rotate-0 transition-transform">
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
      <section className="w-full px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Technical Expertise</h2>
            <p className="text-lg text-muted-foreground">
              I stay up-to-date with the latest web technologies to ensure your site is future-proof and competitive.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-base px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-card border rounded-2xl p-8 space-y-6 shadow-lg ring-1 ring-border/50">
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
      <section className="w-full px-4 md:px-6 lg:px-8 text-center pb-10">
        <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-20 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to build something great?</h2>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 shadow-lg hover:shadow-accent/25 transition-all hover:scale-105">
              <Link href="/contact">
                Let's Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
