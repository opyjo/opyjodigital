import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Award, Users, Lightbulb, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the approach behind building fast, accessible, and maintainable web experiences using Next.js, React, and modern web technologies.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance leading-tight">
                Purpose‑built web solutions that move your business forward
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Crafting fast, accessible, and trustworthy web experiences with
                a calm, methodical approach. The focus is simple: build what
                matters, make it easy to use, and keep it maintainable.
              </p>
              <p className="text-lg text-muted-foreground text-pretty">
                From marketing sites to product UIs, the stack is modern and
                pragmatic—Next.js 16, React 19, TypeScript, and TailwindCSS
                v4—so you get reliable foundations, clear code, and room to
                grow.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group"
                >
                  Let's Work Together
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img
                  src="/professional-developer-workspace-with-laptop-and-c.jpg"
                  alt="Modern web development workspace"
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Approach & Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A clear, dependable way of working—focused on outcomes, clarity,
              and craft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Quality First
              </h3>
              <p className="text-sm text-muted-foreground text-pretty">
                Clean, maintainable code; thoughtful UX; strong fundamentals. No
                shortcuts that hurt later.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Client‑Centered
              </h3>
              <p className="text-sm text-muted-foreground text-pretty">
                Work transparently, decide together, and keep communication
                simple and consistent.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Pragmatic Innovation
              </h3>
              <p className="text-sm text-muted-foreground text-pretty">
                Modern tools when they help—no hype for hype’s sake. Speed,
                stability, and fit.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Outcome‑Driven
              </h3>
              <p className="text-sm text-muted-foreground text-pretty">
                Ship value early, iterate with real feedback, and measure what
                matters.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Process that reduces risk
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A calm, collaborative workflow that keeps momentum and protects
              timelines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                1. Discover
              </h3>
              <p className="text-muted-foreground text-pretty">
                Align on goals, audiences, and constraints. Define success and
                scope clearly.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                2. Design
              </h3>
              <p className="text-muted-foreground text-pretty">
                Structure content and flows. Establish UI patterns and
                accessibility early.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                3. Build & Iterate
              </h3>
              <p className="text-muted-foreground text-pretty">
                Develop in focused slices, ship continuously, and refine with
                real feedback.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A modern, reliable stack that balances developer experience with
              long‑term maintainability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Frontend
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Next.js 16 & React 19
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  TypeScript
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  TailwindCSS v4
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  shadcn/ui
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Backend & Database
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Node.js
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  PostgreSQL
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Supabase
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  REST & GraphQL APIs
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Tools & Deployment
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Git & GitHub
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Vercel
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Figma
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  SEO & Analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Ready to start your project? Get in touch and let's discuss how I
            can help bring your vision to life.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="group">
              Start a Conversation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">
                Opyjo Digital
              </h3>
              <p className="text-sm text-muted-foreground text-pretty">
                Freelance web developer helping businesses grow online.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">
                  Web Development
                </li>
                <li className="text-sm text-muted-foreground">
                  UI/UX Implementation
                </li>
                <li className="text-sm text-muted-foreground">
                  Performance Optimization
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Opyjo Digital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
