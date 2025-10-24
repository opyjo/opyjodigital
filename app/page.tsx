import { HeroSection } from "@/components/sections/hero-section";
import { AgencyMetricsSection } from "@/components/sections/agency-metrics-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyWorkWithMeSection } from "@/components/sections/why-work-with-me-section";
import { ProcessSection } from "@/components/sections/process-section";
import { FeaturedWorkSection } from "@/components/sections/featured-work-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-primary/30 blur-[180px]" />
        <div className="absolute bottom-[-25%] left-[15%] h-[540px] w-[540px] rounded-full bg-accent/25 blur-[160px]" />
        <div className="absolute right-[10%] top-[35%] h-[420px] w-[420px] rounded-full bg-primary/20 blur-[160px]" />
      </div>

      <HeroSection />
      <AgencyMetricsSection />
      <ServicesSection />
      <WhyWorkWithMeSection />
      <ProcessSection />
      <FeaturedWorkSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
