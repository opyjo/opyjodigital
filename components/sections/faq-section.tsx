"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does a project usually take?",
    answer:
      "Most small business websites launch in 3–5 weeks. We work in weekly milestones so you always know what’s coming next.",
  },
  {
    question: "What do your projects cost?",
    answer:
      "Starter websites begin around $2,500 CAD. We’ll confirm pricing after a quick call so there are no surprises.",
  },
  {
    question: "Can you update my existing site?",
    answer:
      "Yes. I can refresh your current site or rebuild it on a modern stack while keeping the parts you love.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Absolutely. I provide flexible care plans for edits, performance checks, and new feature requests as your business grows.",
  },
];

export const FAQSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-16 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_70%)]" />
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-balance text-muted-foreground">
            Here are a few things people like to know before we start working together.
          </p>
        </div>

        <Accordion type="single" collapsible className="rounded-[22px] border border-border/70 bg-card">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`} className="px-6 py-1">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                <span className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-4 w-4 text-primary/70" />
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
