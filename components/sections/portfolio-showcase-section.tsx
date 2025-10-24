"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  description: string;
  result: string;
  image: string;
  category: string;
  tags: string[];
  live?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "Latitude Ventures",
    description:
      "Investor relations hub featuring interactive reports, investor dashboards, and realtime CMS-driven insights.",
    result: "+62% demo lift in 45 days with personalized landing paths.",
    image: "/web-performance-dashboard.png",
    category: "B2B SaaS",
    tags: ["Next.js 16", "Sanity", "Interactive data"],
    live: "/portfolio",
  },
  {
    title: "Wildgrove",
    description:
      "Headless DTC commerce experience blending editorial storytelling with A/B tested checkout flows.",
    result: "3.1× revenue growth within the first quarter of relaunch.",
    image: "/modern-ecommerce-interface.png",
    category: "Headless Commerce",
    tags: ["Shopify Hydrogen", "Vercel", "A/B testing"],
    live: "/portfolio",
  },
  {
    title: "Horizon Living",
    description:
      "Luxury real estate platform with 3D property tours, CRM automations, and localization across 5 markets.",
    result: "Cut lead response time to under 5 minutes using automated routing.",
    image: "/real-estate-website.png",
    category: "PropTech",
    tags: ["Next.js", "Mapbox", "CRM automation"],
    live: "/portfolio",
  },
  {
    title: "PulseDash",
    description:
      "Health analytics dashboard for enterprise teams with audit trails, role-based access, and realtime collaboration.",
    result: "Reduced onboarding friction by 48% with tailored flows and guided tours.",
    image: "/fitness-tracking-app.png",
    category: "Product Experience",
    tags: ["React 19", "Realtime", "Design systems"],
    live: "/portfolio",
    repo: "#",
  },
];

export const PortfolioShowcaseSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.22),transparent_75%)]" />
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/75">
            Selected work
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Case studies anchored in measurable outcomes.
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            From first touch to conversion, every build balances craft, performance, and scalability.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 230, damping: 32 }}
              className="group relative overflow-hidden rounded-3xl border border-white/12 bg-background/60 shadow-[0_32px_70px_rgba(15,23,42,0.24)] backdrop-blur-2xl"
            >
              <div className="grid gap-0 sm:grid-cols-5">
                <div className="relative sm:col-span-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="relative space-y-5 px-6 py-6 sm:col-span-2 sm:px-8 sm:py-10">
                  <Badge variant="outline" className="border-primary/40 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                    {project.category}
                  </Badge>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground/90">{project.description}</p>
                  </div>
                  <p className="text-sm font-medium text-primary/90">{project.result}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-background/60 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-2 text-sm font-semibold text-muted-foreground/80">
                    {project.live && (
                      <Link
                        href={project.live}
                        className="inline-flex items-center gap-2 text-foreground transition-colors duration-300 hover:text-primary"
                      >
                        View project
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    )}
                    {project.repo && (
                      <Link
                        href={project.repo}
                        className="inline-flex items-center gap-2 text-foreground transition-colors duration-300 hover:text-primary"
                      >
                        Github
                        <Github className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
