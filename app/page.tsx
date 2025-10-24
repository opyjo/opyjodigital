import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyWorkWithMeSection } from "@/components/sections/why-work-with-me-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

const SectionDivider = () => (
  <div className="mx-auto my-16 h-px w-full max-w-5xl bg-border/40" aria-hidden="true" />
);

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <WhyWorkWithMeSection />
      <SectionDivider />
      <ProcessSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <CTASection />
      <FooterSection />
    </div>
  );
}
