import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/sections/contact-hero-section";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata: Metadata = {
  title: "Contact Opyjo Digital | Start Your Next Web Experience",
  description:
    "Book a consultation with Opyjo Digital to assemble a cross-functional squad for your next web experience. Share your goals and timelines—we’ll respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[18%] top-[-12%] h-[520px] w-[520px] rounded-full bg-primary/20 blur-[200px]" />
        <div className="absolute right-[-12%] top-[30%] h-[520px] w-[520px] rounded-full bg-accent/25 blur-[200px]" />
        <div className="absolute bottom-[-18%] left-[12%] h-[560px] w-[560px] rounded-full bg-primary/15 blur-[200px]" />
      </div>

      <ContactHeroSection />
      <ContactFormSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
