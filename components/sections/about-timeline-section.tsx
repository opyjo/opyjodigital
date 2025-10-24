"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2019",
    headline: "Agency founded",
    description:
      "Opyjo Digital launches with a focus on Next.js and conversion-led marketing sites for Canadian startups.",
  },
  {
    year: "2020",
    headline: "Remote-first collective",
    description:
      "Scaled to a distributed core team of designers, engineers, and strategists operating across North America & Europe.",
  },
  {
    year: "2022",
    headline: "Enterprise engagements",
    description:
      "Partnered with global SaaS companies to ship headless commerce experiences and multi-market story-driven launches.",
  },
  {
    year: "2024",
    headline: "Experimentation playbooks",
    description:
      "Introduced CRO and experimentation frameworks that deliver ongoing lift—fueling 38%+ conversion gains for flagships.",
  },
];

export const AboutTimelineSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.22),transparent_75%)]" />
      <div className="container mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/75">
            Milestones
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            A trajectory shaped by ambitious teams and measurable outcomes.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[20px] top-0 h-full w-px bg-gradient-to-b from-primary/80 via-primary/20 to-transparent sm:left-[30px]" />
          <div className="space-y-10 sm:space-y-12">
            {milestones.map((milestone, index) => (
              <motion.article
                key={milestone.year}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.06, type: "spring", stiffness: 260, damping: 34 }}
                className="relative grid gap-4 rounded-3xl border border-white/10 bg-background/55 p-6 shadow-[0_22px_55px_rgba(15,23,42,0.2)] backdrop-blur-2xl sm:grid-cols-[auto,1fr]"
              >
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/35 bg-primary/15 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    {milestone.year}
                  </div>
                  <div className="pointer-events-none absolute left-1/2 top-[48px] hidden h-[calc(100%+24px)] w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 via-transparent to-transparent sm:block" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{milestone.headline}</h3>
                  <p className="text-sm text-muted-foreground/90">{milestone.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
