"use client";

import { motion } from "framer-motion";
import { Compass, HeartHandshake, Lightbulb, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Strategy with teeth",
    description:
      "We connect brand narrative, UX, and growth goals into a single roadmap so every sprint moves the right metric.",
  },
  {
    icon: Lightbulb,
    title: "Design systems thinking",
    description:
      "Modular UI foundations, purposeful motion, and accessible patterns that let teams expand without reinventing.",
  },
  {
    icon: TrendingUp,
    title: "Performance obsessed",
    description:
      "Lighthouse 95+, Core Web Vitals in the green, and analytics wired from day one for experimentation and CRO.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership mindset",
    description:
      "Embedded collaboration, async transparency, and rituals that keep stakeholders aligned across time zones.",
  },
];

export const AboutPillarsSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.16),transparent_65%)]" />
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/75">
              Our pillars
            </span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              The beliefs that shape every engagement.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground/85">
            More than deliverables—we obsess over outcomes, clarity, and creating momentum for the
            teams that trust us with their flagship experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 240, damping: 30 }}
              className="group relative overflow-hidden rounded-3xl border border-white/12 bg-background/60 p-8 shadow-[0_28px_60px_rgba(15,23,42,0.2)] backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_130deg_at_50%_50%,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/35 bg-primary/10 text-primary">
                  <pillar.icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground/90">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
