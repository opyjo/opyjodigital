"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    label: "average Lighthouse score",
    value: "96",
    suffix: "/100",
    detail: "Performance-first builds across desktop & mobile.",
  },
  {
    label: "projects launched",
    value: "120+",
    detail: "Ecommerce, SaaS, and experiential marketing sites.",
  },
  {
    label: "week launch cycles",
    value: "4-6",
    detail: "Agile sprints that keep momentum and transparency.",
  },
  {
    label: "increase in conversions",
    value: "38%",
    detail: "Average uplift after redesigning critical funnel pages.",
  },
];

export const AgencyMetricsSection = () => {
  return (
    <section className="relative px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-xl space-y-4">
            <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Results that speak
            </span>
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              We build premium experiences that outperform benchmarks.
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Every launch is engineered for speed, accessibility, and measurable
              growth—so your marketing and product teams can ship with confidence.
            </p>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground/80">
            From emerging startups to enterprise teams, Opyjo Digital pairs
            strategy with obsessive craft to turn ambitious ideas into compelling,
            conversion-first web products.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 260, damping: 30 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-background/55 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_150deg_at_50%_50%,rgba(59,130,246,0.16),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-2">
                <div className="flex items-baseline gap-1 text-4xl font-semibold sm:text-5xl">
                  <span className="bg-gradient-to-r from-primary via-primary/70 to-primary/50 bg-clip-text text-transparent">
                    {metric.value}
                  </span>
                  {metric.suffix && (
                    <span className="text-lg font-medium text-primary/70">{metric.suffix}</span>
                  )}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground/70">
                  {metric.label}
                </p>
                <p className="text-sm text-muted-foreground/90">{metric.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
