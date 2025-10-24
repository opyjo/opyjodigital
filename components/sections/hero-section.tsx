"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Conversion lift", value: "+38%", detail: "Average uplift post-launch" },
  { label: "Launch cadence", value: "4-6 weeks", detail: "From strategy to go-live" },
  { label: "Retention score", value: "9.6/10", detail: "Client experience rating" },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-[420px] w-[420px] rounded-[45%] bg-primary/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-0 h-[520px] w-[520px] rounded-[50%] bg-accent/25 blur-[140px]" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative space-y-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Web design agency
              <Sparkles className="h-4 w-4 text-primary/80" />
            </span>

            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Digital flagships for brands that refuse ordinary.
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
              Opyjo Digital crafts immersive websites and headless products that blend story,
              engineering, and measurable growth. From strategy to launch, we partner with teams who
              want their digital presence to be the benchmark—not the baseline.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-primary px-8 text-primary-foreground shadow-[0_30px_60px_rgba(59,130,246,0.35)]"
                >
                  Launch a project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center rounded-full border border-border/70 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground shadow-[0_14px_30px_rgba(15,23,42,0.18)] transition-all duration-300 hover:border-primary/60 hover:text-primary"
              >
                View live work
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-background/60 p-4 shadow-[0_18px_42px_rgba(15,23,42,0.14)] backdrop-blur-xl"
                >
                  <p className="text-2xl font-semibold text-primary">{stat.value}</p>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground/70">
                    {stat.label}
                  </p>
                  <p className="pt-1 text-sm text-muted-foreground/80">{stat.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-background/60 shadow-[0_45px_90px_rgba(15,23,42,0.28)] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)]" />
              <img
                src="/web-performance-dashboard.png"
                alt="Agency work preview"
                className="relative h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent p-6 backdrop-blur-md">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground/90">
                  <div className="flex items-center gap-2 text-foreground">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    Enterprise-grade stack
                  </div>
                  <div className="flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-primary" />
                    Next.js 16 + React 19
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
              className="absolute -left-6 bottom-[22%] hidden w-64 rounded-2xl border border-white/10 bg-background/70 p-5 shadow-[0_18px_40px_rgba(59,130,246,0.35)] backdrop-blur-xl md:block"
            >
              <p className="text-sm font-semibold text-foreground">Strategic redesign sprints</p>
              <p className="mt-2 text-sm text-muted-foreground/80">
                Collab-first workshops to align UX, storytelling, and growth goals before we code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
              className="absolute -right-6 top-[18%] hidden w-60 rounded-2xl border border-white/10 bg-background/70 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.28)] backdrop-blur-xl md:block"
            >
              <p className="text-sm font-semibold text-foreground">Core capabilities</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground/80">
                <li>• Conversion-led UX/UI</li>
                <li>• Headless commerce builds</li>
                <li>• Complex integrations & automation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
