export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="h-12 bg-muted rounded w-64 mb-4 animate-pulse" />
          <div className="h-6 bg-muted rounded w-96 mb-12 animate-pulse" />

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="h-20 bg-muted rounded-lg animate-pulse" />
              <div className="h-20 bg-muted rounded-lg animate-pulse" />
              <div className="h-32 bg-muted rounded-lg animate-pulse" />
              <div className="h-12 bg-muted rounded-lg animate-pulse" />
            </div>
            <div className="space-y-6">
              <div className="h-24 bg-muted rounded-lg animate-pulse" />
              <div className="h-24 bg-muted rounded-lg animate-pulse" />
              <div className="h-24 bg-muted rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
