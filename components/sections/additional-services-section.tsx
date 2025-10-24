"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Lock, Radar, Sparkle, Workflow } from "lucide-react";

const boosters = [
  {
    title: "Technical SEO & schema",
    description:
      "Structured data, sitemap automation, and content modeling that keep pages discoverable and performant.",
    icon: Radar,
  },
  {
    title: "Security & compliance",
    description:
      "Authentication, role-based access, and OWASP-aware hardening for teams operating in regulated industries.",
    icon: Lock,
  },
  {
    title: "Data & analytics intelligence",
    description:
      "Instrumentation, dashboards, and attributions built on GA4, Segment, or RudderStack to inform every iteration.",
    icon: BrainCircuit,
  },
  {
    title: "Marketing automation",
    description:
      "Lifecycle campaigns, CRM syncs, and webhook-driven workflows that keep your funnel humming without manual lift.",
    icon: Workflow,
  },
  {
    title: "AI-assisted experiences",
    description:
      "Personalization layers, content generation workflows, and conversational interfaces grounded in your data.",
    icon: Sparkle,
  },
];

export const AdditionalServicesSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.14),transparent_70%)]" />
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/75">
            Enhancements
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Plug-and-play accelerators to extend your stack.
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Layer in the capabilities you need, when you need them—without slowing down release
            cycles.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {boosters.map((booster, index) => (
            <motion.div
              key={booster.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06, type: "spring", stiffness: 240, damping: 30 }}
              className="group relative overflow-hidden rounded-3xl border border-white/12 bg-background/60 p-6 shadow-[0_26px_60px_rgba(15,23,42,0.22)] backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_140deg_at_50%_50%,rgba(59,130,246,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/35 bg-primary/10 text-primary">
                  <booster.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{booster.title}</h3>
                <p className="text-sm text-muted-foreground/90">{booster.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
