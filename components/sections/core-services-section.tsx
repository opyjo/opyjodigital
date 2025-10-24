"use client";

import { ClipboardList, Layout, RefreshCw } from "lucide-react";

const offerings = [
  {
    icon: Layout,
    title: "Website Essentials",
    price: "Starting at $2,500 CAD",
    points: ["Up to 5 pages", "Copy guidance & editing support", "Contact forms + Google Maps"],
  },
  {
    icon: RefreshCw,
    title: "Care & Support",
    price: "$150–$400 / month",
    points: ["Monthly content edits", "Performance & security checks", "Priority support channel"],
  },
  {
    icon: ClipboardList,
    title: "Enhancements",
    price: "Custom quotes",
    points: ["Online booking & scheduling", "Lightweight e-commerce", "Email marketing setup"],
  },
];

export const CoreServicesSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_70%)]" />
      <div className="mx-auto max-w-5xl space-y-10 text-center">
        <div className="space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Choose the level of help that fits your business today
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-muted-foreground">
            Start with a solid foundation, add ongoing support if you’d like, and explore upgrades
            once you’re ready. Everything is scoped transparently before we begin.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="flex h-full flex-col gap-4 rounded-[22px] border border-border/70 bg-card p-6 text-left shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <offering.icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{offering.title}</h3>
              <p className="text-sm font-medium text-primary">{offering.price}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {offering.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
