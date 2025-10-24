"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover & define",
    description:
      "We align on goals, audiences, and success metrics through collaborative workshops, analytics deep-dives, and brand immersion.",
    deliverables: ["Strategy blueprint", "Experience principles", "KPI baseline"],
  },
  {
    title: "Design & prototype",
    description:
      "Our design team builds modular systems in Figma, pairing motion exploration with functional prototypes ready for validation.",
    deliverables: ["Design system foundations", "High-fidelity flows", "Interactive prototypes"],
  },
  {
    title: "Build & integrate",
    description:
      "We develop production-ready experiences in parallel sprints, wiring up CMS, commerce, and product data for marketing agility.",
    deliverables: ["Next.js implementation", "Headless CMS setup", "Automation & QA"],
  },
  {
    title: "Launch & optimize",
    description:
      "Deployment, analytics instrumentation, and CRO experiments ensure continued growth well beyond release day.",
    deliverables: ["Performance tuning", "Experiment roadmap", "Post-launch support"],
  },
];

export const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.22),transparent_75%)]" />
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/80">
            Our method
          </span>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
            A transparent, sprint-led process built for marketing and product velocity.
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Every engagement is structured to reduce uncertainty, keep stakeholders aligned, and
            ship experiences that deliver measurable outcomes from day one.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-primary/30 to-transparent md:block" />
          <div className="space-y-10 md:space-y-14">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 240, damping: 30 }}
                className="relative grid gap-6 rounded-3xl border border-white/10 bg-background/55 p-6 shadow-[0_25px_55px_rgba(15,23,42,0.22)] backdrop-blur-2xl md:grid-cols-[auto,1fr]"
              >
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-primary/15 text-base font-semibold uppercase tracking-[0.28em] text-primary md:h-14 md:w-14">
                    0{index + 1}
                  </div>
                  <div className="pointer-events-none absolute left-[22px] top-[48px] hidden h-[calc(100%+36px)] w-px bg-gradient-to-b from-primary/40 via-transparent to-transparent md:block" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground/90 sm:text-base">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="rounded-full border border-border/50 bg-background/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground/80"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
