"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const ServicesCTASection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/25 via-primary/10 to-transparent" />
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[36px] border border-white/15 bg-background/65 p-10 text-center shadow-[0_40px_95px_rgba(15,23,42,0.28)] backdrop-blur-2xl sm:p-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_130deg_at_50%_50%,rgba(255,255,255,0.16),transparent_60%)]" />
          <div className="relative space-y-6">
            <span className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Scale with confidence
            </span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Assemble your next launch squad in days, not months.
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Tell us about your roadmap and we'll map the right blend of strategy, design, and
              engineering to hit your targets on time—complete with sprint plans and resourcing.
            </p>
            <Link href="/contact" className="inline-block">
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full bg-primary px-8 text-primary-foreground shadow-[0_32px_70px_rgba(59,130,246,0.32)]"
              >
                Book a scoping call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground/70">
              Sprints kick off within 7 business days
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
