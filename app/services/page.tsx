import type { Metadata } from "next";
import { ServicesHeroSection } from "@/components/sections/services-hero-section";
import { CoreServicesSection } from "@/components/sections/core-services-section";
import { AdditionalServicesSection } from "@/components/sections/additional-services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { FeaturedWorkSection } from "@/components/sections/featured-work-section";
import { ServicesCTASection } from "@/components/sections/services-cta-section";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata: Metadata = {
  title: "Services | Opyjo Digital Studio",
  description:
    "Partner with Opyjo Digital for strategy, design, engineering, and growth squads that launch conversion-led web experiences and headless commerce products.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[12%] top-[-10%] h-[520px] w-[520px] rounded-full bg-primary/20 blur-[180px]" />
        <div className="absolute right-[-15%] top-[25%] h-[480px] w-[480px] rounded-full bg-accent/25 blur-[190px]" />
        <div className="absolute bottom-[-22%] left-[18%] h-[540px] w-[540px] rounded-full bg-primary/15 blur-[180px]" />
      </div>

      <ServicesHeroSection />
      <CoreServicesSection />
      <AdditionalServicesSection />
      <ProcessSection />
      <FeaturedWorkSection />
      <ServicesCTASection />
      <FooterSection />
    </div>
  );
}
