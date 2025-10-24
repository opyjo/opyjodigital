"use client";

import { Coffee, Compass, Smile } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Clarity first",
    description:
      "We start every project by understanding your customers and what matters most to your business right now.",
  },
  {
    icon: Smile,
    title: "Friendly collaboration",
    description:
      "Expect honest feedback, simple explanations, and lots of encouragement along the way.",
  },
  {
    icon: Coffee,
    title: "Sustainable pace",
    description:
      "We set realistic timelines so you never feel rushed, and we stay available after launch for questions and tweaks.",
  },
];

export const AboutPillarsSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_70%)]" />
      <div className="mx-auto max-w-4xl space-y-10 text-center">
        <div className="space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What it’s like to work together
          </h2>
          <p className="text-balance text-muted-foreground">
            These simple principles guide every project, whether we’re building a one-page site or a
            growing digital home for your brand.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex h-full flex-col gap-3 rounded-[22px] border border-border/70 bg-card p-6 text-left shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <pillar.icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
