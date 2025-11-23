import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ChatWidget } from "@/components/chat-widget"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans antialiased flex min-h-screen flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SiteHeader />
          <main className="flex-1 w-full max-w-7xl mx-auto min-h-screen bg-background">
            {children}
          </main>
          <SiteFooter />
          <ChatWidget />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
  title: {
    default: "OpyjoDigital | Custom Websites for Small Businesses",
    template: "%s | OpyjoDigital",
  },
  description:
    "Professional web design and development for small businesses. Get a high-converting, custom website that helps you grow.",
  keywords: ["web design", "web development", "small business website", "freelance web designer", "custom website"],
  authors: [{ name: "OpyjoDigital" }],
  creator: "OpyjoDigital",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://opyjodigital.com",
    title: "OpyjoDigital | Custom Websites for Small Businesses",
    description:
      "Professional web design and development for small businesses. Get a high-converting, custom website that helps you grow.",
    siteName: "OpyjoDigital",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpyjoDigital | Custom Websites for Small Businesses",
    description:
      "Professional web design and development for small businesses. Get a high-converting, custom website that helps you grow.",
    creator: "@opyjodigital",
  },
}
