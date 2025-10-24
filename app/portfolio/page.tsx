import type { Metadata } from "next";
import { PortfolioHeroSection } from "@/components/sections/portfolio-hero-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

const SectionDivider = () => (
  <div className="mx-auto my-16 h-px w-full max-w-5xl bg-border/40" aria-hidden="true" />
);

export const metadata: Metadata = {
  title: "Portfolio | Opyjo Digital",
  description:
    "A look at recent websites crafted for cafés, trades, creatives, and local services. Friendly design, clear messaging, and easy maintenance.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground">
      <PortfolioHeroSection />
      <SectionDivider />
      <PortfolioShowcaseSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <CTASection />
      <FooterSection />
    </div>
  );
}
