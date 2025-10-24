"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export const ServicesCTASection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_70%)]" />
      <div className="mx-auto max-w-3xl rounded-3xl border border-border/70 bg-card p-10 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-12">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Not sure which service you need yet?
        </h2>
        <p className="mt-4 text-balance text-muted-foreground">
          Let’s jump on a short call to look at your current site, talk through goals, and outline a
          plan that fits your budget and timeline.
        </p>
        <Link href="/contact" className="mt-6 inline-block">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 px-6 text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Book a 20-minute intro
          </Button>
        </Link>
      </div>
    </section>
  );
};
