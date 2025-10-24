"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const BlogSubscribeSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[32px] border border-white/15 bg-background/65 p-10 shadow-[0_38px_90px_rgba(15,23,42,0.26)] backdrop-blur-2xl sm:p-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_130deg_at_50%_50%,rgba(255,255,255,0.14),transparent_60%)]" />
          <div className="relative space-y-6 text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Studio dispatch
            </span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Receive monthly insights on strategy, design systems, and performance.
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              No fluff—just the frameworks, templates, and technical walkthroughs we rely on to
              launch high-performing web experiences.
            </p>
            <form className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                required
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-full border border-border/60 bg-background/70 px-5 py-3 text-sm text-foreground shadow-[0_16px_40px_rgba(15,23,42,0.18)] focus:outline-none focus:ring-2 focus:ring-primary/60"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_28px_60px_rgba(59,130,246,0.32)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Join the list
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">
              We send one email per month. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
