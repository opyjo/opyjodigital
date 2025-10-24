import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/about-hero-section";
import { AboutPillarsSection } from "@/components/sections/about-pillars-section";
import { AboutTimelineSection } from "@/components/sections/about-timeline-section";
import { AboutExpertiseSection } from "@/components/sections/about-expertise-section";
import { AgencyMetricsSection } from "@/components/sections/agency-metrics-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata: Metadata = {
  title: "About Opyjo Digital | Conversion-led Web Experience Studio",
  description:
    "Learn how Opyjo Digital combines design systems, senior engineering, and experimentation to launch high-performing digital flagships for ambitious brands.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute left-[18%] top-[-15%] h-[520px] w-[520px] rounded-full bg-primary/20 blur-[190px]" />
        <div className="absolute right-[-12%] top-[25%] h-[460px] w-[460px] rounded-full bg-accent/25 blur-[180px]" />
        <div className="absolute bottom-[-20%] left-[10%] h-[580px] w-[580px] rounded-full bg-primary/15 blur-[180px]" />
      </div>

      <AboutHeroSection />
      <AgencyMetricsSection />
      <AboutPillarsSection />
      <AboutTimelineSection />
      <AboutExpertiseSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
