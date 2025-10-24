"use client";

export const PortfolioHeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_65%)]" />
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <span className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Recent work
        </span>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
          Real projects for real people who needed a dependable web partner
        </h1>
        <p className="text-balance text-lg text-muted-foreground sm:text-xl">
          Every site below was created with a single goal: help a small business look professional,
          build trust, and make it easier for customers to reach them.
        </p>
        </div>
    </section>
  );
};
