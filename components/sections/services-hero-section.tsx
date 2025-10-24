"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

const highlights = [
  { label: "Launch cadence", value: "4-6 weeks", detail: "From discovery to live experience." },
  { label: "Core Web Vitals", value: "95+", detail: "Performance engineered from sprint one." },
  { label: "Growth playbooks", value: "CRO & analytics", detail: "Experimentation baked into delivery." },
];

export const ServicesHeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[10%] h-[480px] w-[480px] rounded-[45%] bg-primary/25 blur-[170px]" />
        <div className="absolute right-[-5%] top-[35%] h-[540px] w-[540px] rounded-[50%] bg-accent/30 blur-[190px]" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Services & partnerships
              <Sparkles className="h-4 w-4 text-primary/80" />
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              End-to-end web experience squads that ship faster—and smarter.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
              Opyjo Digital builds conversion-led marketing sites, headless commerce platforms, and
              digital product ecosystems. Our cross-functional team embeds with yours to deliver
              momentum from kickoff through optimization.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-primary px-8 text-primary-foreground shadow-[0_32px_70px_rgba(59,130,246,0.35)]"
                >
                  Start a project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center rounded-full border border-border/70 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground shadow-[0_14px_30px_rgba(15,23,42,0.2)] transition-all duration-300 hover:border-primary/60 hover:text-primary"
              >
                See recent work
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="rounded-3xl border border-white/12 bg-background/60 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.22)] backdrop-blur-2xl"
                >
                  <p className="text-2xl font-semibold text-primary">{highlight.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground/70">
                    {highlight.label}
                  </p>
                  <p className="pt-2 text-sm text-muted-foreground/85">{highlight.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative overflow-hidden rounded-[32px] border border-white/15 bg-background/65 shadow-[0_45px_95px_rgba(15,23,42,0.3)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_65%)]" />
            <img
              src="/modern-ecommerce-interface.png"
              alt="Case study collage"
              className="relative h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/85 via-background/35 to-transparent p-6 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground/70">
                Impact snapshot
              </p>
              <p className="mt-2 text-sm text-muted-foreground/90">
                Revenue-positive redesigns, multi-market launches, and experimentation programs that
                sustain growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
