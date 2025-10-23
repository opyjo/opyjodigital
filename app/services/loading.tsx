export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="h-12 bg-muted rounded w-64 mb-4 animate-pulse" />
        <div className="h-6 bg-muted rounded w-96 mb-12 animate-pulse" />

        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-8 animate-pulse">
              <div className="h-12 w-12 bg-muted rounded-lg mb-4" />
              <div className="h-6 bg-muted rounded w-48 mb-3" />
              <div className="h-4 bg-muted rounded w-full mb-2" />
              <div className="h-4 bg-muted rounded w-full mb-2" />
              <div className="h-4 bg-muted rounded w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
