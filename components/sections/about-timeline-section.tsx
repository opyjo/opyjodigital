"use client";

const milestones = [
  {
    year: "2021",
    heading: "Made the leap",
    detail: "Left agency life to focus on helping local businesses with modern, reliable websites.",
  },
  {
    year: "2022",
    heading: "Built a repeatable process",
    detail:
      "Refined a simple, four-step workflow that keeps projects moving without overwhelming busy owners.",
  },
  {
    year: "Today",
    heading: "Growing alongside clients",
    detail:
      "Partnering long-term with cafés, trades, creatives, and service providers across Canada and beyond.",
  },
];

export const AboutTimelineSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.08),_transparent_70%)]" />
      <div className="mx-auto max-w-3xl space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How Opyjo Digital came to be
          </h2>
          <p className="text-balance text-muted-foreground">
            I’m still early in my journey, and that means you get someone who is hands-on, eager, and
            invested in every outcome.
          </p>
        </div>

        <div className="space-y-4">
          {milestones.map((milestone) => (
            <div
              key={milestone.year}
              className="rounded-[22px] border border-border/70 bg-card p-6 text-left shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                {milestone.year}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{milestone.heading}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{milestone.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
