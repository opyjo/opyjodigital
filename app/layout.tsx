import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/sections/navigation";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://opyjodigital.com"),
  title: {
    default: "Opyjo Digital | Freelance Web Developer in Canada",
    template: "%s | Opyjo Digital",
  },
  description:
    "Professional freelance web developer specializing in Next.js, React, and TailwindCSS. Custom web development services for small businesses and startups in Canada.",
  keywords: [
    "freelance web developer Canada",
    "Next.js developer for hire",
    "React frontend engineer",
    "TailwindCSS developer",
    "website builder for startups",
    "custom web development services",
    "Opyjo Digital",
    "Johnson Ojo developer",
  ],
  authors: [{ name: "Johnson Ojo" }],
  creator: "Johnson Ojo",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://opyjodigital.com",
    siteName: "Opyjo Digital",
    title: "Opyjo Digital | Freelance Web Developer in Canada",
    description:
      "Professional freelance web developer specializing in Next.js, React, and TailwindCSS for small businesses and startups.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Opyjo Digital - Freelance Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opyjo Digital | Freelance Web Developer in Canada",
    description:
      "Professional freelance web developer specializing in Next.js, React, and TailwindCSS.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
