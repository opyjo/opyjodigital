"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const categories = ["Next.js", "React", "Design systems", "Commerce", "Growth"];

export const BlogHeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[5%] h-[420px] w-[420px] rounded-[45%] bg-primary/25 blur-[150px]" />
        <div className="absolute right-[-5%] top-[30%] h-[460px] w-[460px] rounded-[50%] bg-accent/25 blur-[170px]" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8 text-center"
        >
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Insights & playbooks
            <Sparkles className="h-4 w-4 text-primary/80" />
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            The thinking behind conversion-led web experiences.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Deep dives, teardown frameworks, and practical guides for building web products with
            measurable impact—authored by the Opyjo Digital team.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/80"
              >
                {category}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
