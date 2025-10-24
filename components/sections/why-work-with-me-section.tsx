"use client";

import { Handshake, Heart, MessageSquare } from "lucide-react";

const reasons = [
  {
    icon: Handshake,
    title: "A partner, not a production line",
    description:
      "You’ll work directly with me—from kickoff to launch—so questions get answered quickly and nothing is lost in translation.",
  },
  {
    icon: MessageSquare,
    title: "Plain language updates",
    description:
      "Weekly check-ins, Loom walkthroughs, and simple to-do lists keep everything moving without extra meetings.",
  },
  {
    icon: Heart,
    title: "Built with care for small teams",
    description:
      "I’m also growing a business, so timelines, budgets, and support are designed with that reality in mind.",
  },
];

export const WhyWorkWithMeSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.1),_transparent_70%)]" />
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Why founders and local teams hire Opyjo Digital
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-muted-foreground">
            My goal is to make your digital presence feel clear, calm, and approachable—both for your
            customers and for you behind the scenes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex h-full flex-col gap-3 rounded-[22px] border border-border/70 bg-card p-6 text-left shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <reason.icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
