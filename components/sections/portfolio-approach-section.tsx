"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Compass, Gauge, Sparkle } from "lucide-react";

const approach = [
  {
    title: "Strategic discovery",
    description:
      "We audit your current experience, align on KPIs, and co-create a vision for the launch—grounded in user research and analytics.",
    icon: Compass,
  },
  {
    title: "Design in the open",
    description:
      "Figma prototypes, motion explorations, and content frameworks are reviewed weekly with your stakeholders for rapid alignment.",
    icon: Sparkle,
  },
  {
    title: "Build with velocity",
    description:
      "Parallel engineering sprints in Next.js 16, reusable component libraries, and integrated QA keep delivery on schedule.",
    icon: Gauge,
  },
  {
    title: "Launch & iterate",
    description:
      "Analytics dashboards, experiment roadmaps, and CRO programs ensure the experience keeps compounding value after go-live.",
    icon: ClipboardCheck,
  },
];

export const PortfolioApproachSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_70%)]" />
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/75">
            How we deliver
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            A co-creation model built to eliminate launch risk.
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Every engagement follows this loop—so teams stay aligned, and experiences ship with the
            polish of a world-class product.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {approach.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 240, damping: 30 }}
              className="group relative overflow-hidden rounded-3xl border border-white/12 bg-background/60 p-8 shadow-[0_28px_65px_rgba(15,23,42,0.24)] backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_130deg_at_50%_50%,rgba(59,130,246,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/35 bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground/90">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
