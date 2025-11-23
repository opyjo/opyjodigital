"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Code2, TrendingUp, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: "Custom Website Design",
      description: "Fully custom websites built from scratch to match your brand and business goals.",
      features: [
        "Unique, brand-focused design",
        "Up to 8 custom pages",
        "2 rounds of revisions",
        "Content management system",
      ],
    },
    {
      icon: Zap,
      title: "Website Redesign",
      description: "Transform your outdated website into a modern, high-converting digital presence.",
      features: ["Modern UI/UX improvements", "Performance optimization", "Mobile responsiveness"],
      popular: true,
    },
    {
      icon: TrendingUp,
      title: "Landing Page",
      description: "High-converting landing pages designed to turn visitors into customers.",
      features: ["Conversion-focused design", "A/B testing ready", "Lead capture forms", "Fast 1-week delivery"],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-24 bg-muted/30">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-balance tracking-tight">
            Services Designed for Small Business Growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Whether you need a complete website, a refresh, or a targeted landing page, I have a solution that fits your
            budget and timeline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const [rotateX, setRotateX] = useState(0)
            const [rotateY, setRotateY] = useState(0)

            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              const card = e.currentTarget
              const rect = card.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              const centerX = rect.width / 2
              const centerY = rect.height / 2
              const rotateXValue = ((y - centerY) / centerY) * -10
              const rotateYValue = ((x - centerX) / centerX) * 10

              setRotateX(rotateXValue)
              setRotateY(rotateYValue)
            }

            const handleMouseLeave = () => {
              setRotateX(0)
              setRotateY(0)
            }

            return (
              <motion.div
                key={index}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{
                  rotateX,
                  rotateY,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                  animationDelay: `${index * 150}ms`,
                }}
                className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
              >
                <Card
                  className={`relative flex flex-col h-full transition-all duration-300 hover:shadow-xl border-border/50 ${service.popular ? "border-accent shadow-lg ring-1 ring-accent/20" : "hover:border-primary/50"}`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-foreground shadow-sm">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 mb-4 transition-colors group-hover:bg-primary/20">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <MagneticButton asChild className={`w-full ${service.popular ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`} variant={service.popular ? "default" : "outline"}>
                      <Link href="/contact">Get Started</Link>
                    </MagneticButton>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4 font-medium">Not sure which service is right for you?</p>
          <MagneticButton asChild variant="outline" size="lg" className="rounded-full px-8">
            <Link href="/contact">Schedule a Free Consultation</Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
