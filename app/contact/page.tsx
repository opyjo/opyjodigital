import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/sections/contact-hero-section";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata: Metadata = {
  title: "Contact | Opyjo Digital - Get a Free Quote",
  description:
    "Contact Opyjo Digital for a free consultation on your web development project. We specialize in React, Next.js, and TypeScript development for businesses in Canada and beyond.",
  keywords: [
    "contact web developer",
    "freelance developer quote",
    "hire React developer",
    "Next.js consultant",
    "web development services Canada",
    "custom website quote",
  ],
  openGraph: {
    title: "Contact | Opyjo Digital",
    description:
      "Get in touch for a free consultation on your web development project.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHeroSection />
      <ContactFormSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
