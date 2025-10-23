import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyWorkWithMeSection } from "@/components/sections/why-work-with-me-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyWorkWithMeSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
