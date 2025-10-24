"use client";

import { motion } from "framer-motion";
import { Code2, Component, Lightbulb, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Experience Design",
    description:
      "Product strategy, UX architecture, and high-fidelity UI systems built to express your brand and drive conversion.",
    icon: Lightbulb,
    highlights: ["Journey mapping", "Design systems", "Micro-interactions"],
  },
  {
    title: "Full-Stack Engineering",
    description:
      "Robust builds with Next.js 16, React 19, TypeScript, and headless CMSs. Performance, accessibility, and scalability baked in.",
    icon: Code2,
    highlights: ["Headless CMS", "API integrations", "Cloud-native"],
  },
  {
    title: "Optimization & Growth",
    description:
      "Continuous experimentation to keep you ahead—A/B testing, analytics instrumentation, and CRO roadmaps.",
    icon: LineChart,
    highlights: ["Conversion audits", "SEO foundations", "Analytics ops"],
  },
  {
    title: "Systems & Automation",
    description:
      "Workflow automation, marketing ops, and custom tools that unlock your team’s ability to ship faster.",
    icon: Component,
    highlights: ["AI-assisted flows", "Marketing ops", "Internal tooling"],
  },
];

export const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_65%)]" />
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/80">
              Capabilities
            </span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              A multidisciplinary team delivering end-to-end web products.
            </h2>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              Whether it is a flagship marketing site, complex web app, or growth campaign,
              Opyjo Digital plugs into your roadmap with the design and engineering muscle to build
              momentum.
            </p>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground/80">
            Engagements are built around tight collaboration, transparent sprints, and measurable
            outcomes so you can ship quickly without sacrificing craft.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 220, damping: 28 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/10 bg-background/65 p-8",
                "shadow-[0_25px_55px_rgba(15,23,42,0.22)] backdrop-blur-2xl"
              )}
            >
              <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_120deg_at_50%_50%,rgba(59,130,246,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground/90">{service.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground/80"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
