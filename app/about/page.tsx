import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/about-hero-section";
import { AboutPillarsSection } from "@/components/sections/about-pillars-section";
import { AboutTimelineSection } from "@/components/sections/about-timeline-section";
import { AboutExpertiseSection } from "@/components/sections/about-expertise-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

const SectionDivider = () => (
  <div className="mx-auto my-16 h-px w-full max-w-5xl bg-border/40" aria-hidden="true" />
);

export const metadata: Metadata = {
  title: "About Opyjo Digital",
  description:
    "Get to know Johnson Ojo, the developer behind Opyjo Digital. I partner with small businesses to create approachable websites and ongoing support.",
};

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <AboutHeroSection />
      <SectionDivider />
      <AboutPillarsSection />
      <SectionDivider />
      <AboutTimelineSection />
      <SectionDivider />
      <AboutExpertiseSection />
      <SectionDivider />
      <CTASection />
      <FooterSection />
    </div>
  );
}
