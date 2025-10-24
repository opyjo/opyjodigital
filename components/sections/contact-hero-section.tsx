"use client";

const highlights = [
  { label: "Response time", value: "Under 24 hours" },
  { label: "Project start", value: "Kickoff within a week" },
  { label: "Location", value: "Based in Toronto, working remotely" },
];

export const ContactHeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.1),_transparent_60%)]" />
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
          Let’s get your website moving in the right direction
        </h1>
        <p className="text-balance text-lg text-muted-foreground sm:text-xl">
          Share a few details and I’ll reach out to schedule a friendly intro call. We’ll talk about
          where you are, what you need, and what working together could look like.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-[22px] border border-border/70 bg-card p-4 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                {highlight.label}
              </p>
              <p className="mt-2 text-base font-semibold text-primary">{highlight.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
