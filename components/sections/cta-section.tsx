"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.12),_transparent_65%)]" />
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-12">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Let’s get your website working as hard as you do
        </h2>
        <p className="mt-4 text-balance text-muted-foreground">
          Book a friendly intro chat—no pressure, just a chance to learn about your business and see
          if we’re a good fit.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact">
            <Button size="lg" className="bg-primary px-6 text-primary-foreground hover:bg-primary/90 transition-transform duration-200 hover:translate-y-[-2px]">
              Schedule a call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Responses within one business day
          </p>
        </div>
      </div>
    </section>
  );
};
