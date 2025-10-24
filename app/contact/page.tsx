import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/sections/contact-hero-section";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

const SectionDivider = () => (
  <div className="mx-auto my-16 h-px w-full max-w-5xl bg-border/40" aria-hidden="true" />
);

export const metadata: Metadata = {
  title: "Contact Opyjo Digital",
  description:
    "Reach out to Johnson Ojo to chat about your website project. Friendly introductions, honest advice, and clear next steps.",
};

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <ContactHeroSection />
      <SectionDivider />
      <ContactFormSection />
      <SectionDivider />
      <FAQSection />
      <SectionDivider />
      <CTASection />
      <FooterSection />
    </div>
  );
}
