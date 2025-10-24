"use client";

const categories = ["Next.js basics", "Small biz tips", "Content ideas", "Tools we love"];

export const BlogHeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-18 pt-28 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.1),_transparent_65%)]" />
      <div className="mx-auto max-w-4xl space-y-6 text-center">
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
          Lessons and resources for fellow small business owners
        </h1>
        <p className="text-balance text-lg text-muted-foreground sm:text-xl">
          I write about building approachable websites, keeping things running smoothly, and the
          tools I rely on every day.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border px-3 py-1 text-muted-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
