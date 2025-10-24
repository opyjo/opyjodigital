"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  result: string;
  link: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Latitude Ventures",
    description:
      "Investor relations hub that pairs motion design with realtime portfolio insights.",
    image: "/web-performance-dashboard.png",
    result: "+62% increase in demo requests after revamp.",
    link: "/portfolio",
    tags: ["B2B SaaS", "Next.js", "Realtime data"],
  },
  {
    title: "Wildgrove Ecommerce",
    description:
      "Immersive storytelling commerce experience with lifestyle content and frictionless checkout.",
    image: "/modern-ecommerce-interface.png",
    result: "3.1x revenue lift within 90 days of launch.",
    link: "/portfolio",
    tags: ["DTC", "Headless commerce", "A/B testing"],
  },
  {
    title: "Horizon Living",
    description:
      "High-end real estate showcase with dynamic 3D tours and lead routing automations.",
    image: "/real-estate-website.png",
    result: "Cut lead response time to under 5 minutes.",
    link: "/portfolio",
    tags: ["PropTech", "3D experiences", "Automation"],
  },
];

export const FeaturedWorkSection = () => {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/80">
              Featured work
            </span>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Web experiences engineered to convert & delight.
            </h2>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              A snapshot of the digital products we craft for ambitious teams. Every build blends
              brand storytelling with measurable impact.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary/20"
          >
            Explore portfolio
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.12, type: "spring", stiffness: 240, damping: 32 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-background/60 shadow-[0_30px_60px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
            >
              <div className="grid gap-0 sm:grid-cols-5">
                <div className="relative sm:col-span-3">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="relative space-y-4 px-6 py-6 sm:col-span-2 sm:px-8 sm:py-10">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground/90">{project.description}</p>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground/80"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm font-medium text-primary/90">{project.result}</p>

                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors duration-300 hover:text-primary"
                  >
                    View case study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
