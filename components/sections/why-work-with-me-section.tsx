"use client";

import { motion } from "framer-motion";
import { BadgeCheck, GaugeCircle, Users } from "lucide-react";

const differentiators = [
  {
    icon: BadgeCheck,
    title: "Conversion-led craft",
    description:
      "Every decision ties design expression to measurable KPIs—speed, accessibility, SEO, and funnel performance.",
  },
  {
    icon: Users,
    title: "Plug-in team extension",
    description:
      "We work as an embedded squad with your marketing, product, and engineering teams to deliver fast without silos.",
  },
  {
    icon: GaugeCircle,
    title: "Operational clarity",
    description:
      "Roadmaps, async updates, and shared dashboards keep stakeholders aligned while we iterate in weekly sprints.",
  },
];

export const WhyWorkWithMeSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.18),transparent_65%)]" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Why teams choose us
            </span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              A partner obsessed with launching better web experiences—faster.
            </h2>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              Opyjo Digital is the go-to agency when you need a digital flagship that looks as sharp
              as it performs. We combine strategic insight, design systems thinking, and senior
              engineering to transform your roadmap into experiences customers love.
            </p>

            <div className="grid gap-4">
              {differentiators.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 32 }}
                  className="flex items-start gap-4 rounded-3xl border border-white/10 bg-background/60 p-5 shadow-[0_20px_45px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary">
                    <point.icon className="h-6 w-6" />
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
                    <p className="text-sm text-muted-foreground/90">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-background/60 shadow-[0_45px_90px_rgba(15,23,42,0.25)] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_70%)]" />
              <img
                src="/fitness-tracking-app.png"
                alt="Team collaborating on interface designs"
                className="relative h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 space-y-4 bg-gradient-to-t from-background/85 via-background/40 to-transparent p-6 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground/70">
                  Collaborate & iterate
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Weekly rituals built around Figma, Notion, and live code reviews keep velocity
                  high without sacrificing polish.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="absolute -bottom-10 left-[12%] hidden w-56 rounded-2xl border border-white/10 bg-background/80 p-4 shadow-[0_20px_40px_rgba(59,130,246,0.25)] backdrop-blur-xl md:block"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
                Tooling stack
              </p>
              <p className="mt-2 text-sm text-muted-foreground/90">
                Next.js 16 · React 19 · GraphQL/REST · Sanity · Shopify Hydrogen · Vercel.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
