"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Maya Gupta",
    role: "VP of Marketing",
    company: "Latitude Ventures",
    content:
      "Opyjo Digital shipped our rebrand in 6 weeks. The new site hits 98/100 on Lighthouse and demo requests have doubled. Their blend of strategy and detail-oriented execution is rare.",
    image: "/placeholder.svg",
  },
  {
    name: "Jordan Miles",
    role: "Head of Product",
    company: "Wildgrove",
    content:
      "They operate like an in-house team—design, engineering, and experimentation all under one roof. We went from idea to headless commerce launch with zero drama.",
    image: "/placeholder.svg",
  },
  {
    name: "Anaïs Morel",
    role: "Creative Director",
    company: "Studio Aerie",
    content:
      "Our flagship site finally looks and feels as premium as our work. Motion, performance, accessibility—everything has been considered and measured.",
    image: "/placeholder.svg",
  },
  {
    name: "Chris Reynolds",
    role: "CTO",
    company: "Horizon Living",
    content:
      "Their engineering rigor is world-class. Complex integrations, automation, and CMS governance were all handled seamlessly. We now have a foundation we can grow on.",
    image: "/placeholder.svg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_65%)]" />
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/80">
              Client love
            </span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Teams trust Opyjo Digital to ship web experiences that scale.
            </h2>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              From funded startups to global brands, our partners choose us for the combination of
              strategic thinking, meticulous design, and reliable delivery.
            </p>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground/80">
            We embed with your stakeholders, provide daily visibility, and own the details across
            design, build, and growth. The results? Loyal partnerships and repeat engagements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, type: "spring", stiffness: 260, damping: 28 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-background/55 p-8 shadow-[0_28px_65px_rgba(15,23,42,0.22)] backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_140deg_at_50%_50%,rgba(59,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-5">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  “{testimonial.content}”
                </p>
                <div className="flex items-center gap-4 pt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full border border-border/60 object-cover"
                  />
                  <div>
                    <p className="text-base font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
