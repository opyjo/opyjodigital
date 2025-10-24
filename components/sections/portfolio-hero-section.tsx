"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const heroBadges = ["Story-driven UX", "Headless commerce", "Bespoke animations"];

export const PortfolioHeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[5%] top-[-12%] h-[460px] w-[460px] rounded-[48%] bg-primary/25 blur-[160px]" />
        <div className="absolute right-[-8%] top-[28%] h-[520px] w-[520px] rounded-[50%] bg-accent/30 blur-[190px]" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Portfolio
              <Sparkles className="h-4 w-4 text-primary/80" />
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Digital experiences engineered to convert, inspire, and scale.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
              A selection of launches across SaaS, commerce, and brand storytelling. Each one marries
              design systems, high-performance engineering, and growth experimentation.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground/80"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 36 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative overflow-hidden rounded-[32px] border border-white/15 bg-background/70 shadow-[0_45px_90px_rgba(15,23,42,0.28)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)]" />
            <img
              src="/web-performance-dashboard.png"
              alt="Portfolio collage"
              className="relative h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/85 via-background/35 to-transparent p-6 backdrop-blur-xl">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground/85">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                  Launch velocity: 4-6 week sprints
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-foreground transition-colors duration-300 hover:text-primary"
                >
                  Discuss your project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
