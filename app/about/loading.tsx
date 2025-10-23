export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="h-12 bg-muted rounded w-64 mb-4 animate-pulse" />
          <div className="h-6 bg-muted rounded w-full mb-8 animate-pulse" />

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="h-96 bg-muted rounded-lg animate-pulse" />
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded w-full animate-pulse" />
              <div className="h-4 bg-muted rounded w-full animate-pulse" />
              <div className="h-4 bg-muted rounded w-5/6 animate-pulse" />
              <div className="h-4 bg-muted rounded w-full animate-pulse" />
              <div className="h-4 bg-muted rounded w-4/5 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
