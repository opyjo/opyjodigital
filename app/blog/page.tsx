import type { Metadata } from "next";
import { BlogHeroSection } from "@/components/sections/blog-hero-section";
import { BlogPostsSection } from "@/components/sections/blog-posts-section";
import { BlogSubscribeSection } from "@/components/sections/blog-subscribe-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata: Metadata = {
  title: "Insights & Playbooks | Opyjo Digital Blog",
  description:
    "Ideas, frameworks, and technical walkthroughs from the Opyjo Digital team covering Next.js, design systems, headless commerce, and conversion-led growth.",
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[12%] top-[-10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[190px]" />
        <div className="absolute right-[-15%] top-[30%] h-[520px] w-[520px] rounded-full bg-accent/25 blur-[190px]" />
        <div className="absolute bottom-[-18%] left-[15%] h-[540px] w-[540px] rounded-full bg-primary/15 blur-[190px]" />
      </div>

      <BlogHeroSection />
      <BlogPostsSection />
      <BlogSubscribeSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
