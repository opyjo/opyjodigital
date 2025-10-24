"use client";

const projects = [
  {
    title: "Neighbourhood Café",
    summary:
      "A welcoming one-page site with menu highlights, online ordering links, and event updates the owner can edit in minutes.",
  },
  {
    title: "BrightSpark Electrical",
    summary:
      "Service pages that explain offerings clearly, showcase testimonials, and make it easy for homeowners to request a quote.",
  },
  {
    title: "Studio Finch Photography",
    summary:
      "Portfolio galleries with simple content controls so new shoots can be published the same day.",
  },
  {
    title: "Wellness by Amara",
    summary:
      "Integrated booking, FAQs, and contact forms that save time on back-and-forth messages and help new clients feel at ease.",
  },
];

export const PortfolioShowcaseSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.08),_transparent_70%)]" />
      <div className="mx-auto max-w-4xl space-y-10 text-center">
        <div className="space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Recent highlights
          </h2>
          <p className="text-muted-foreground">
            Here’s a sample of the kinds of businesses I support. Each project focused on telling a
            clear story and making it easier for customers to take the next step.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-[22px] border border-border/70 bg-card p-6 text-left shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
