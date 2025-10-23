import type { Metadata } from "next";
import { ServicesHeroSection } from "@/components/sections/services-hero-section";
import { CoreServicesSection } from "@/components/sections/core-services-section";
import { AdditionalServicesSection } from "@/components/sections/additional-services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesCTASection } from "@/components/sections/services-cta-section";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive web development services including custom websites, e-commerce solutions, web applications, and performance optimization. Next.js and React expertise.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHeroSection />
      <CoreServicesSection />
      <AdditionalServicesSection />
      <ProcessSection />
      <ServicesCTASection />
      <FooterSection />
    </div>
  );
}
