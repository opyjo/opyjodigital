import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const blogPosts = {
  "nextjs-15-app-router-guide": {
    title: "Complete Guide to Next.js 15 App Router",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Next.js",
    content: `
      <h2>Introduction to Next.js 15 App Router</h2>
      <p>The App Router in Next.js 15 represents a paradigm shift in how we build React applications. Built on React Server Components, it offers improved performance, better developer experience, and more intuitive routing patterns.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Server Components by Default:</strong> Components are server-rendered by default, reducing JavaScript bundle size and improving initial page load.</li>
        <li><strong>Streaming and Suspense:</strong> Progressive rendering allows parts of your page to load independently.</li>
        <li><strong>Nested Layouts:</strong> Share UI across routes while maintaining state.</li>
        <li><strong>Parallel Routes:</strong> Render multiple pages in the same layout simultaneously.</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js 15 project with App Router:</p>
      <pre><code>npx create-next-app@latest my-app
cd my-app
npm run dev</code></pre>
      
      <h2>File-based Routing</h2>
      <p>The App Router uses a file-system based router where folders define routes. Each folder represents a route segment that maps to a URL segment.</p>
      
      <h2>Server vs Client Components</h2>
      <p>Understanding when to use Server Components vs Client Components is crucial. Use Server Components for data fetching, accessing backend resources, and keeping sensitive information secure. Use Client Components for interactivity, event listeners, and browser-only APIs.</p>
      
      <h2>Conclusion</h2>
      <p>The Next.js 15 App Router is a powerful tool that enables you to build fast, scalable applications with an excellent developer experience. Start experimenting with it today!</p>
    `,
  },
  "react-19-new-features": {
    title: "What's New in React 19: A Deep Dive",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "React",
    content: `
      <h2>React 19: The Next Evolution</h2>
      <p>React 19 brings significant improvements to performance, developer experience, and the overall React ecosystem. Let's explore the most impactful changes.</p>
      
      <h2>The React Compiler</h2>
      <p>The new React Compiler automatically optimizes your components, eliminating the need for manual memoization in many cases. This means less boilerplate and better performance out of the box.</p>
      
      <h2>Improved Hooks</h2>
      <p>React 19 introduces several new hooks and improvements to existing ones:</p>
      <ul>
        <li><strong>useEffectEvent:</strong> Extract non-reactive logic from Effects.</li>
        <li><strong>useOptimistic:</strong> Optimistically update UI before server confirmation.</li>
        <li><strong>useFormStatus:</strong> Access form submission status.</li>
      </ul>
      
      <h2>Server Actions</h2>
      <p>Server Actions provide a seamless way to call server-side functions from client components, simplifying data mutations and form handling.</p>
      
      <h2>Conclusion</h2>
      <p>React 19 represents a major step forward in making React applications faster, more maintainable, and easier to develop.</p>
    `,
  },
  "typescript-best-practices-2025": {
    title: "TypeScript Best Practices for 2025",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "TypeScript",
    content: `
      <h2>Writing Better TypeScript Code</h2>
      <p>TypeScript has become the de facto standard for building large-scale JavaScript applications. Here are the best practices you should follow in 2025.</p>
      
      <h2>1. Use Strict Mode</h2>
      <p>Always enable strict mode in your tsconfig.json. This catches potential bugs early and enforces better coding practices.</p>
      
      <h2>2. Leverage Type Inference</h2>
      <p>Let TypeScript infer types when possible. Explicit types are great for function parameters and return types, but over-annotation can make code harder to read.</p>
      
      <h2>3. Use Discriminated Unions</h2>
      <p>Discriminated unions provide type-safe way to handle different states or variants of data structures.</p>
      
      <h2>4. Avoid 'any' Type</h2>
      <p>The 'any' type defeats the purpose of TypeScript. Use 'unknown' when you truly don't know the type, and narrow it down with type guards.</p>
      
      <h2>5. Utilize Utility Types</h2>
      <p>TypeScript provides powerful utility types like Partial, Pick, Omit, and Record. Master these to write more concise and maintainable code.</p>
      
      <h2>Conclusion</h2>
      <p>Following these best practices will help you write more robust, maintainable TypeScript code that scales with your application.</p>
    `,
  },
}

type BlogPostParams = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: `Read about ${post.title} - ${post.category} article by Opyjo Consulting`,
  }
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-8">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded">
                {post.category}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-code:text-primary prose-code:bg-secondary prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-secondary prose-pre:border prose-pre:border-border
                prose-ul:text-muted-foreground prose-li:my-1"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="h-px bg-border mt-12" />

            <div className="flex items-center justify-between pt-8">
              <Link href="/blog">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  All Articles
                </Button>
              </Link>
              <Link href="/contact">
                <Button>Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}
