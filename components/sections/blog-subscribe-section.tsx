"use client";

import { ArrowRight } from "lucide-react";

export const BlogSubscribeSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.08),_transparent_70%)]" />
      <div className="mx-auto max-w-3xl rounded-3xl border border-border/70 bg-card p-8 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-10">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Want updates in your inbox?
        </h2>
        <p className="mt-3 text-balance text-sm text-muted-foreground sm:text-base">
          I send one email each month with practical tips, templates, and tool recommendations for
          keeping your website in great shape.
        </p>
        <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <input
            required
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-full border border-border px-5 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 sm:max-w-xs"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Join the list
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
};
