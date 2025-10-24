"use client";

import { motion } from "framer-motion";
import { Sparkles, Clock9, Globe2 } from "lucide-react";

const highlights = [
  { label: "Response time", value: "<24h", detail: "for new inquiries" },
  { label: "Kickoff window", value: "7 days", detail: "from signed proposal" },
  { label: "Time zones", value: "EST · GMT", detail: "collaboration coverage" },
];

export const ContactHeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-[10%] h-[460px] w-[460px] rounded-[45%] bg-primary/25 blur-[170px]" />
        <div className="absolute right-[-8%] top-[32%] h-[520px] w-[520px] rounded-[50%] bg-accent/30 blur-[200px]" />
      </div>

      <div className="container mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Let’s build what’s next
            <Sparkles className="h-4 w-4 text-primary/80" />
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Share your roadmap—we’ll assemble the squad to ship it.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Tell us about your goals, timelines, and desired outcomes. We’ll respond within one
            business day with next steps, ballpark investment, and how we can collaborate.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-3xl border border-white/12 bg-background/60 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.22)] backdrop-blur-2xl"
              >
                <p className="text-2xl font-semibold text-primary">{highlight.value}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground/70">
                  {highlight.label}
                </p>
                <p className="pt-1 text-xs text-muted-foreground/80">{highlight.detail}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground/80">
            <span className="inline-flex items-center gap-2">
              <Clock9 className="h-4 w-4 text-primary" />
              Weekly strategy + build sessions
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-primary" />
              Remote-first across Canada & Europe
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
