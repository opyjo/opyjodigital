import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

export default function InsightsPage() {
  const posts = [
    {
      title: "Why Your Small Business Needs a Custom Website in 2024",
      excerpt:
        "Stop relying on social media alone. Here's why owning your platform is crucial for long-term growth and credibility.",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      author: "Alex Dev",
      category: "Strategy",
    },
    {
      title: "5 Signs It's Time for a Website Redesign",
      excerpt:
        "Is your website driving customers away? Learn the key indicators that your digital storefront needs a makeover.",
      date: "Mar 10, 2024",
      readTime: "4 min read",
      author: "Alex Dev",
      category: "Design",
    },
    {
      title: "SEO Basics for Local Businesses",
      excerpt:
        "Simple, actionable tips to help your business show up when locals search for your services on Google.",
      date: "Mar 05, 2024",
      readTime: "6 min read",
      author: "Alex Dev",
      category: "SEO",
    },
  ]

  return (
    <div className="container py-20 px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
        <div className="inline-block">
          <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Blog & Resources
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Insights & Articles</h1>
        <p className="max-w-[700px] text-xl text-muted-foreground text-pretty">
          Tips, trends, and strategies to help you grow your business online.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="group flex flex-col rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="aspect-video w-full overflow-hidden rounded-t-xl bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-bold text-4xl">
                Image
              </div>
            </div>
            <div className="flex flex-col flex-1 p-6">
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <User className="h-4 w-4 text-muted-foreground" />
                  {post.author}
                </div>
                <Button variant="ghost" size="sm" className="gap-2 group-hover:translate-x-1 transition-transform">
                  Read More <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-muted-foreground mb-4">Want to learn more about a specific topic?</p>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Suggest a Topic</Link>
        </Button>
      </div>
    </div>
  )
}
