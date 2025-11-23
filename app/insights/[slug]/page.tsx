import { getPostBySlug, blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { ReadingProgress } from "@/components/reading-progress"

import { Metadata } from "next"

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = getPostBySlug(params.slug)

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="container py-12 md:py-20 px-4 md:px-6 max-w-4xl mx-auto">
            <ReadingProgress />
            <div className="mb-10">
                <Button asChild variant="ghost" size="sm" className="mb-6 -ml-4 text-muted-foreground hover:text-foreground">
                    <Link href="/insights">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Insights
                    </Link>
                </Button>

                <div className="space-y-4 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 font-medium text-primary ring-1 ring-primary/20">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>By {post.author}</span>
                    </div>
                </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border bg-muted mb-12 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-bold text-4xl">
                    {/* Placeholder for actual image */}
                    <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            <div
                className="prose prose-base md:prose-lg dark:prose-invert mx-auto prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-20 pt-10 border-t text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to improve your digital presence?</h3>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Whether you need a new website or a redesign, I can help you achieve your business goals.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">Start Your Project</Link>
                </Button>
            </div>
        </article>
    )
}
