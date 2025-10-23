import { SkeletonBlogPost } from "@/components/skeleton-loader"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="h-12 bg-muted rounded w-64 mb-4 animate-pulse" />
        <div className="h-6 bg-muted rounded w-96 mb-12 animate-pulse" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <SkeletonBlogPost key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
