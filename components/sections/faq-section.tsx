"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "How quickly can we kick off a project?",
    answer:
      "Discovery calls typically happen within 48 hours. Once scope is aligned, we can start within 7 business days with a dedicated sprint plan.",
  },
  {
    question: "Do you work alongside internal teams or agencies?",
    answer:
      "Absolutely. We regularly embed with marketing, product, and brand teams—and can collaborate with your existing agency partners or internal developers.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Engagements are tailored per roadmap. We offer project-based pricing for defined launches and retainer models for ongoing optimization. Expect transparency from day one.",
  },
  {
    question: "Do you support post-launch experimentation?",
    answer:
      "Yes. We instrument analytics, create dashboards, and run CRO sprints to keep momentum. Many clients keep us on retainer to handle growth initiatives.",
  },
  {
    question: "Which tools and platforms do you specialize in?",
    answer:
      "Next.js 16, React 19, TypeScript, Sanity, Contentful, Shopify Hydrogen, Vercel, Segment, and bespoke integrations across REST/GraphQL APIs.",
  },
  {
    question: "Can you take over an in-flight project?",
    answer:
      "We can. We'll request access to existing artifacts, conduct a technical audit, and propose a stabilization + acceleration plan before jumping in.",
  },
];

export const FAQSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.14),transparent_70%)]" />
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/75">
            FAQs
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Answers to the questions we receive most often.
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Need clarity on something specific? Submit a question via the form and we’ll address it
            in our reply.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 240, damping: 30 }}
              className="group rounded-3xl border border-white/12 bg-background/55 p-6 shadow-[0_24px_55px_rgba(15,23,42,0.2)] backdrop-blur-2xl"
            >
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground/90">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
