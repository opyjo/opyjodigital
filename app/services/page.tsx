import type { Metadata } from "next";
import { ServicesHeroSection } from "@/components/sections/services-hero-section";
import { CoreServicesSection } from "@/components/sections/core-services-section";
import { AdditionalServicesSection } from "@/components/sections/additional-services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesCTASection } from "@/components/sections/services-cta-section";
import { FooterSection } from "@/components/sections/footer-section";

const SectionDivider = () => (
  <div className="mx-auto my-16 h-px w-full max-w-5xl bg-border/40" aria-hidden="true" />
);

export const metadata: Metadata = {
  title: "Website Services for Small Businesses | Opyjo Digital",
  description:
    "Launch-ready websites, ongoing support, and grow-with-you upgrades tailored for small businesses and independent service providers.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <ServicesHeroSection />
      <SectionDivider />
      <CoreServicesSection />
      <SectionDivider />
      <AdditionalServicesSection />
      <SectionDivider />
      <ProcessSection />
      <SectionDivider />
      <ServicesCTASection />
      <FooterSection />
    </div>
  );
}
