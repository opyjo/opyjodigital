import type { Metadata } from "next";
import { PortfolioHeroSection } from "@/components/sections/portfolio-hero-section";
import { PortfolioShowcaseSection } from "@/components/sections/portfolio-showcase-section";
import { PortfolioApproachSection } from "@/components/sections/portfolio-approach-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata: Metadata = {
  title: "Portfolio | Opyjo Digital Studio",
  description:
    "Explore signature web experiences engineered by Opyjo Digital. Conversion-led marketing sites, headless commerce builds, and product platforms delivering measurable outcomes.",
};

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[18%] top-[-12%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[190px]" />
        <div className="absolute right-[-12%] top-[28%] h-[520px] w-[520px] rounded-full bg-accent/25 blur-[200px]" />
        <div className="absolute bottom-[-20%] left-[10%] h-[540px] w-[540px] rounded-full bg-primary/15 blur-[190px]" />
      </div>

      <PortfolioHeroSection />
      <PortfolioShowcaseSection />
      <PortfolioApproachSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
