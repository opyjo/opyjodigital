import type { Metadata } from "next";
import { BlogHeroSection } from "@/components/sections/blog-hero-section";
import { BlogPostsSection } from "@/components/sections/blog-posts-section";
import { BlogSubscribeSection } from "@/components/sections/blog-subscribe-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

const SectionDivider = () => (
  <div className="mx-auto my-16 h-px w-full max-w-5xl bg-border/40" aria-hidden="true" />
);

export const metadata: Metadata = {
  title: "Blog | Opyjo Digital",
  description:
    "Practical website tips and small business resources from Johnson Ojo of Opyjo Digital.",
};

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground">
      <BlogHeroSection />
      <SectionDivider />
      <BlogPostsSection />
      <SectionDivider />
      <BlogSubscribeSection />
      <SectionDivider />
      <CTASection />
      <FooterSection />
    </div>
  );
}
