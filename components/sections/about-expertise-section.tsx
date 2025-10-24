"use client";

import { Laptop, Palette, Shield } from "lucide-react";

const areas = [
  {
    icon: Laptop,
    title: "Modern tech, simple handover",
    description:
      "Websites are built with Next.js and Tailwind, but you’ll receive easy-to-follow guides so you can manage content yourself.",
  },
  {
    icon: Palette,
    title: "Brand-friendly visuals",
    description:
      "We choose typography, colours, and imagery that feel like you—clean, welcoming, and professional without being stiff.",
  },
  {
    icon: Shield,
    title: "Long-term reliability",
    description:
      "Hosting, security, and performance are set up with best practices so your site stays fast and worry-free.",
  },
];

export const AboutExpertiseSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.08),_transparent_70%)]" />
      <div className="mx-auto max-w-4xl space-y-10 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            How I make sure your website keeps working after launch
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.title}
              className="flex h-full flex-col gap-3 rounded-[22px] border border-border/70 bg-card p-6 text-left shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <area.icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{area.title}</h3>
              <p className="text-sm text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
