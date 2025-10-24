"use client";

const extras = [
  "Copywriting support for sales pages and email sequences",
  "Brand photography direction and image sourcing",
  "Website audits with actionable, budget-friendly recommendations",
  "Training sessions so your team can update content confidently",
];

export const AdditionalServicesSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.06),_transparent_75%)]" />
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Need a little extra help?
        </h2>
        <p className="text-balance text-muted-foreground">
          I can bundle in these add-ons as part of a project or offer them à la carte once your site
          is live.
        </p>
      </div>
      <div className="mx-auto mt-6 max-w-3xl space-y-3 text-sm text-muted-foreground">
        {extras.map((extra) => (
          <div
            key={extra}
            className="rounded-[22px] border border-border/70 bg-card/70 px-4 py-3 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            {extra}
          </div>
        ))}
      </div>
    </section>
  );
};
