import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Web Development Insights & Tutorials",
  description:
    "Technical articles about Next.js, React, TypeScript, and modern web development best practices from Opyjo Consulting.",
}

const blogPosts = [
  {
    slug: "nextjs-15-app-router-guide",
    title: "Complete Guide to Next.js 15 App Router",
    excerpt:
      "Learn how to leverage the power of Next.js 15 App Router with Server Components, streaming, and advanced routing patterns.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Next.js",
    image: "/nextjs-app-router-code-editor.jpg",
  },
  {
    slug: "react-19-new-features",
    title: "What's New in React 19: A Deep Dive",
    excerpt:
      "Explore the latest features in React 19 including the new compiler, improved hooks, and performance optimizations.",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "React",
    image: "/react-19-features-code.jpg",
  },
  {
    slug: "typescript-best-practices-2025",
    title: "TypeScript Best Practices for 2025",
    excerpt:
      "Essential TypeScript patterns and practices to write type-safe, maintainable code in modern web applications.",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "TypeScript",
    image: "/typescript-code-best-practices.jpg",
  },
  {
    slug: "tailwindcss-v4-migration",
    title: "Migrating to TailwindCSS v4: Complete Guide",
    excerpt:
      "Step-by-step guide to migrating your project to TailwindCSS v4 with new features, breaking changes, and optimization tips.",
    date: "2024-12-28",
    readTime: "7 min read",
    category: "CSS",
    image: "/tailwindcss-v4-styling.jpg",
  },
  {
    slug: "web-performance-optimization",
    title: "Web Performance Optimization Techniques",
    excerpt:
      "Practical strategies to improve Core Web Vitals, reduce bundle size, and deliver lightning-fast user experiences.",
    date: "2024-12-20",
    readTime: "12 min read",
    category: "Performance",
    image: "/web-performance-dashboard.png",
  },
  {
    slug: "seo-for-nextjs-apps",
    title: "SEO Best Practices for Next.js Applications",
    excerpt:
      "Comprehensive guide to implementing SEO in Next.js apps with metadata, structured data, and dynamic sitemaps.",
    date: "2024-12-15",
    readTime: "9 min read",
    category: "SEO",
    image: "/seo-optimization-analytics.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">Technical Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Insights, tutorials, and best practices for modern web development
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video overflow-hidden rounded-t-xl">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded mb-2">
                      {post.category}
                    </span>
                    <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                    <CardDescription className="text-pretty">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground text-balance">Stay Updated</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Get the latest articles and web development tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
