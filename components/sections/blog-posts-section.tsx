"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
};

const posts: Post[] = [
  {
    slug: "nextjs-16-experimentation-stack",
    title: "Building an Experimentation Stack with Next.js 16 & React 19",
    excerpt:
      "How we wire feature flags, analytics, and CRO experiments directly into the App Router for rapid validation cycles.",
    date: "2025-01-22",
    readTime: "9 min read",
    category: "Next.js",
    image: "/web-performance-dashboard.png",
  },
  {
    slug: "design-systems-that-convert",
    title: "Design Systems That Convert: Bridging Brand and Growth",
    excerpt:
      "A practical framework for aligning product design, marketing teams, and experimentation without sacrificing craft.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Design systems",
    image: "/placeholder-logo.png",
  },
  {
    slug: "headless-commerce-checkout",
    title: "Headless Commerce Checkout Patterns That Reduce Drop-Off",
    excerpt:
      "Learn the UX, data, and integration moves that increased conversion 22% across three high-volume DTC launches.",
    date: "2025-01-04",
    readTime: "7 min read",
    category: "Commerce",
    image: "/modern-ecommerce-interface.png",
  },
  {
    slug: "analytics-instrumentation-guide",
    title: "Analytics Instrumentation for Cross-Team Visibility",
    excerpt:
      "Instrumentation playbooks, dashboards, and rituals we use to keep marketing, product, and engineering synced.",
    date: "2024-12-18",
    readTime: "10 min read",
    category: "Growth",
    image: "/web-performance-dashboard.png",
  },
  {
    slug: "motion-design-systems",
    title: "Motion Design Systems: Bringing Interfaces to Life Responsibly",
    excerpt:
      "Crafting motion guidelines that enhance usability, improve focus, and resonate with brand expression.",
    date: "2024-12-06",
    readTime: "6 min read",
    category: "Design",
    image: "/fitness-tracking-app.png",
  },
  {
    slug: "nextjs-performance-toolkit",
    title: "Next.js Performance Toolkit: Core Web Vitals in the Green",
    excerpt:
      "Our checklist for keeping Lighthouse 95+, even as marketing teams ship new content and experiments weekly.",
    date: "2024-11-28",
    readTime: "8 min read",
    category: "Performance",
    image: "/real-estate-website.png",
  },
];

export const BlogPostsSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.22),transparent_75%)]" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 240, damping: 30 }}
              className="group relative overflow-hidden rounded-3xl border border-white/12 bg-background/55 shadow-[0_28px_60px_rgba(15,23,42,0.22)] backdrop-blur-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 px-6 py-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground/80">
                  <span className="inline-flex items-center gap-1 uppercase tracking-[0.25em]">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1 uppercase tracking-[0.25em]">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground/90">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors duration-300 hover:text-primary"
                >
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
