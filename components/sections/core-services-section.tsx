"use client";

import { motion } from "framer-motion";
import {
  Binary,
  Figma,
  Layers,
  LineChart,
  PlugZap,
  ShoppingBag,
} from "lucide-react";

const coreServices = [
  {
    title: "Experience strategy",
    description:
      "Product + marketing alignment that translates business goals into story-led user journeys and sprint-ready roadmaps.",
    icon: Layers,
    tags: ["Journey mapping", "Narrative architecture", "MVP definition"],
  },
  {
    title: "Interface & motion design",
    description:
      "Component-driven design systems, purposeful motion, and editorial storytelling that keep brand and performance in sync.",
    icon: Figma,
    tags: ["Design systems", "Prototyping", "Accessibility"],
  },
  {
    title: "Full-stack engineering",
    description:
      "Production-grade Next.js 16 builds powered by React 19, TypeScript, and composable architectures that scale.",
    icon: Binary,
    tags: ["App Router", "Edge & serverless", "API integrations"],
  },
  {
    title: "Headless commerce",
    description:
      "Shopify Hydrogen, Sanity, or Commerce Layer implementations tuned for storytelling, personalization, and speed.",
    icon: ShoppingBag,
    tags: ["Composable commerce", "Checkout flows", "Localization"],
  },
  {
    title: "Growth & optimization",
    description:
      "CRO sprints, analytics instrumentation, and experimentation frameworks that deliver compounding conversion lift.",
    icon: LineChart,
    tags: ["Experiment playbooks", "Attribution", "Performance tuning"],
  },
  {
    title: "Automation & ops",
    description:
      "Workflow automation and internal tooling that empowers marketing and product teams to ship faster with clarity.",
    icon: PlugZap,
    tags: ["Content ops", "Marketing automation", "Governance"],
  },
];

export const CoreServicesSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_70%)]" />
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/75">
              Core services
            </span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Multidisciplinary Pods Designed for High-Velocity Launches.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground/85">
            From roadmap to roll-out, we plug specialists into your team without the overhead of
            building in-house. Think of us as your distributed studio—design, engineering, and growth
            in lockstep.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 240, damping: 30 }}
              className="group relative overflow-hidden rounded-3xl border border-white/12 bg-background/60 p-8 shadow-[0_30px_65px_rgba(15,23,42,0.22)] backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_120deg_at_50%_50%,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/35 bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground/90">{service.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border/60 bg-background/45 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground/80"
                    >
                      {tag}
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
