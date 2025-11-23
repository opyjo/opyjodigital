import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://opyjodigital.com' // Replace with actual domain

    // Static routes
    const routes = [
        '',
        '/about',
        '/services',
        '/portfolio',
        '/insights',
        '/contact',
        '/estimator',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic blog routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/insights/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    return [...routes, ...blogRoutes]
}
