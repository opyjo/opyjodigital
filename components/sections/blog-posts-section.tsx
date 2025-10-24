"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

const posts: Post[] = [
  {
    slug: "prep-for-your-first-website-meeting",
    title: "How to prepare for your first website meeting",
    excerpt:
      "A simple checklist covering copy, photos, and priorities so our kickoff call feels easy and productive.",
    date: "2025-01-12",
    readTime: "5 min read",
  },
  {
    slug: "small-business-homepage-must-haves",
    title: "Homepage must-haves for local service businesses",
    excerpt:
      "Three sections every small business website should include to build trust and invite action.",
    date: "2024-12-18",
    readTime: "6 min read",
  },
  {
    slug: "keep-your-site-up-to-date",
    title: "Keeping your website fresh without the overwhelm",
    excerpt:
      "Monthly habits I recommend to clients so their websites stay accurate, fast, and helpful.",
    date: "2024-11-30",
    readTime: "4 min read",
  },
];

export const BlogPostsSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.06),_transparent_75%)]" />
      <div className="mx-auto grid max-w-4xl gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-[22px] border border-border/70 bg-card p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(post.date).toLocaleDateString("en-CA", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>

            <h2 className="mt-4 text-xl font-semibold text-foreground">{post.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>

            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Read article
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};
