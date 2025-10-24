"use client";

import { Brush, LineChart, Sparkles } from "lucide-react";

const services = [
  {
    title: "Launch-ready website",
    description:
      "A polished, mobile-friendly site built with Next.js and Tailwind that highlights what you do and makes it easy for customers to reach you.",
    bullets: ["Up to five pages", "Contact and booking forms", "Basic SEO set-up"],
    icon: Sparkles,
  },
  {
    title: "Ongoing care & updates",
    description:
      "Monthly support for edits, security updates, and fresh content so you never feel stuck or behind on the tech side.",
    bullets: ["Content tweaks", "Performance checks", "Personal support channel"],
    icon: Brush,
  },
  {
    title: "Grow when you’re ready",
    description:
      "Add e-commerce, booking tools, or email automation once the time is right—planned together so it fits your budget.",
    bullets: ["Simple online store", "Scheduling integrations", "Email & CRM hand-offs"],
    icon: LineChart,
  },
];

export const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="mx-auto max-w-5xl space-y-10 text-center">
        <div className="space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Services created for small business owners
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-muted-foreground">
            Choose the support that matches your stage today, knowing we can grow the site with you
            when things take off.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex h-full flex-col gap-4 rounded-[22px] border border-border/70 bg-card p-6 text-left shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{bullet}</span>
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
