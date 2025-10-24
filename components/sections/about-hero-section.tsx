"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export const AboutHeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_60%)]" />
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Hi, I’m Johnson
        </span>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
          I help small businesses launch websites that feel genuine and get the job done.
        </h1>
        <p className="text-balance text-lg text-muted-foreground sm:text-xl">
          After years of freelancing for agencies, I started Opyjo Digital to work closely with
          founders and owners who want a trusted partner—not a big team of strangers.
        </p>
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 px-6 text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Start a conversation
          </Button>
        </Link>
      </div>
    </section>
  );
};
