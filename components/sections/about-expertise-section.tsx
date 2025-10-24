"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Layers, PlugZap, Rocket } from "lucide-react";

const focusAreas = [
  {
    title: "Experience platforms",
    description:
      "Conversion-led marketing sites, product demos, and brand story worlds crafted with purposeful motion and content strategy.",
    points: ["Narrative-driven UX", "Design systems & components", "Motion/interaction prototypes"],
    icon: BadgeCheck,
  },
  {
    title: "Headless builds",
    description:
      "Composable architectures leveraging Next.js, Sanity, Shopify Hydrogen, and custom APIs for agile marketing and product teams.",
    points: ["Headless CMS & content ops", "Commerce integrations", "Localization & governance"],
    icon: PlugZap,
  },
  {
    title: "Post-launch acceleration",
    description:
      "Experimentation playbooks, CRO roadmaps, and automation pipelines that compound growth long after go-live.",
    points: ["CRO & analytics", "Growth experiments", "Automation & internal tooling"],
    icon: Rocket,
  },
  {
    title: "Co-creation rituals",
    description:
      "We embed with stakeholders via weekly studio sessions, async dashboards, and decision frameworks that keep projects moving.",
    points: ["Workshop facilitation", "Sprint governance", "Cross-team enablement"],
    icon: Layers,
  },
];

export const AboutExpertiseSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_70%)]" />
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/75">
              Deep expertise
            </span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Interdisciplinary talent aligned around velocity and craft.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground/85">
            Designers, engineers, strategists, and operations partners work as one squad. The result
            is a launch process that pairs clarity with speed—and keeps momentum long after release.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 240, damping: 30 }}
              className="group relative overflow-hidden rounded-3xl border border-white/12 bg-background/60 p-8 shadow-[0_30px_65px_rgba(15,23,42,0.22)] backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_110deg_at_50%_50%,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/35 bg-primary/10 text-primary">
                  <area.icon className="h-6 w-6" />
                </span>
                <h3 className="text-2xl font-semibold text-foreground">{area.title}</h3>
                <p className="text-sm text-muted-foreground/90">{area.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {area.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-border/60 bg-background/45 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground/80"
                    >
                      {point}
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
