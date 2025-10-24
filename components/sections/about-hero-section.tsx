"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Sparkles, Users, Globe } from "lucide-react";

const heroStats = [
  {
    label: "Global launches",
    value: "120+",
    detail: "Websites & platforms launched across 8 countries.",
  },
  {
    label: "Average lift",
    value: "+38%",
    detail: "Conversion increase within 90 days post-launch.",
  },
  {
    label: "Retention score",
    value: "9.6/10",
    detail: "Partner satisfaction over multi-year engagements.",
  },
];

export const AboutHeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-10 h-[420px] w-[420px] rounded-[48%] bg-primary/25 blur-[160px]" />
        <div className="absolute right-[-5%] top-[35%] h-[540px] w-[540px] rounded-[50%] bg-accent/30 blur-[180px]" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative space-y-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              About Opyjo Digital
              <Sparkles className="h-4 w-4 text-primary/80" />
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              We design, build, and scale digital flagships for brands that push culture forward.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
              Opyjo Digital is a web experience studio blending strategy, design systems, and senior
              engineering. We partner with ambitious marketing and product teams to craft memorable,
              high-performing interfaces—then iterate on them with data-led rigor.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-full bg-primary px-8 text-primary-foreground shadow-[0_30px_60px_rgba(59,130,246,0.35)]"
                >
                  Partner with us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center rounded-full border border-border/70 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground shadow-[0_14px_30px_rgba(15,23,42,0.18)] transition-all duration-300 hover:border-primary/60 hover:text-primary"
              >
                Explore services
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-background/60 p-5 shadow-[0_22px_48px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
                >
                  <p className="text-2xl font-semibold text-primary">{stat.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground/70">
                    {stat.label}
                  </p>
                  <p className="pt-2 text-sm text-muted-foreground/85">{stat.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
              className="relative overflow-hidden rounded-[32px] border border-white/15 bg-background/65 shadow-[0_45px_90px_rgba(15,23,42,0.3)] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_65%)]" />
              <img
                src="/placeholder-logo.png"
                alt="Studio culture"
                className="relative h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/35 to-transparent p-6 backdrop-blur-xl">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground/90">
                  <div className="flex items-center gap-2 text-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    Remote-first core team
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    Operating across EST & GMT
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="absolute -right-8 top-[22%] hidden w-60 rounded-2xl border border-white/10 bg-background/70 p-5 shadow-[0_20px_40px_rgba(59,130,246,0.35)] backdrop-blur-xl md:block"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
                Practice areas
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground/85">
                <li>• Conversion-led brand sites</li>
                <li>• Product storytelling & demos</li>
                <li>• Headless commerce experiences</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
