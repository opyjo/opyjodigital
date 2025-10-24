"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_60%)]" />
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center sm:gap-12">
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Dedicated to small businesses
        </span>

        <div className="space-y-6">
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            Websites that help local businesses show up, stand out, and feel proud.
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            I’m Johnson, the developer behind Opyjo Digital. I partner with founders, solo
            operators, and growing teams to launch clean, friendly websites without the agency
            overwhelm.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 px-6 text-primary-foreground shadow-lg shadow-primary/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book a quick call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
          >
            See recent work
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid w-full gap-4 rounded-[22px] border border-border/70 bg-muted/40 p-6 text-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg sm:grid-cols-3">
          <p className="text-balance text-muted-foreground">
            Straightforward pricing with project plans that fit where your business is today.
          </p>
          <p className="text-balance text-muted-foreground">
            Weekly check-ins and clear to-do lists so you always know what’s coming next.
          </p>
          <p className="text-balance text-muted-foreground">
            Built with modern tools yet focused on the essentials—speed, clarity, and ease of use.
          </p>
        </div>
      </div>
    </section>
  );
};
