import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export default function InsightsPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="pt-12 md:pt-32 pb-8 md:pb-10 px-4 md:px-6 lg:px-8 w-full text-center space-y-6">
        <div className="inline-block animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent ring-1 ring-accent/20">
            Blog & Resources
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both">
          Insights & Articles
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both">
          Tips, trends, and strategies to help you grow your business online.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="w-full px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <Link
              href={`/insights/${post.slug}`}
              key={index}
              className="group flex flex-col rounded-2xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 fill-mode-both overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video w-full overflow-hidden bg-muted relative">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10" />
                <div className="relative w-full h-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 p-6 space-y-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
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
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="text-sm font-medium text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 md:px-6 lg:px-8 text-center pb-10">
        <div className="bg-muted/30 rounded-3xl p-8 md:p-20 space-y-6 border border-border/50 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">Want to learn more about a specific topic?</h2>
          <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
            I'm always writing about new trends in web design and digital marketing. Let me know what you'd like to read next.
          </p>
          <Button asChild variant="outline" size="lg" className="bg-background hover:bg-accent hover:text-accent-foreground">
            <Link href="/contact">Suggest a Topic</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
