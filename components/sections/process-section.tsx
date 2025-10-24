"use client";

const steps = [
  {
    title: "Listen & plan",
    description:
      "We spend a short call mapping out what you need, what you already have, and what success looks like to you.",
  },
  {
    title: "Design the story",
    description:
      "Together we choose words, images, and structure so your customers immediately understand who you are and how to work with you.",
  },
  {
    title: "Build & review",
    description:
      "I build the site in clear stages, share private previews each week, and adjust quickly based on your feedback.",
  },
  {
    title: "Launch & support",
    description:
      "We launch with confidence, hand over easy-to-follow guides, and keep supporting you as your business grows.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_65%)]" />
      <div className="mx-auto max-w-4xl space-y-10 text-center">
        <div className="space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A calm, four-step process that keeps you in the loop
          </h2>
          <p className="text-balance text-muted-foreground">
            No complicated project trackers or jargon—just clear updates and a site you’re excited to
            share.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-[22px] border border-border/70 bg-card p-6 text-left shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
