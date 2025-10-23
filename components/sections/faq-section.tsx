import { Card } from "@/components/ui/card";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. A simple website typically takes 2-4 weeks, while more complex web applications can take 8-12 weeks or more. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer both fixed-price projects and hourly rates depending on your needs. Our pricing is transparent and competitive. Contact us for a detailed quote based on your specific requirements.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes! We offer maintenance packages and ongoing support to ensure your website stays up-to-date, secure, and performing optimally. We're here for the long term.",
    },
    {
      question: "Can you work with my existing website?",
      answer:
        "Absolutely. We can enhance, redesign, or migrate your existing website to modern technologies like React and Next.js. We'll work with what you have to improve it.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We specialize in modern web technologies including Next.js 16, React 19, TypeScript, TailwindCSS v4, and various backend solutions. We stay current with the latest tools and best practices.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes! While we're based in Canada, we work with clients worldwide. We're experienced in remote collaboration and can accommodate different time zones.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Got questions? We've got answers. Here are some common questions we
            receive.
          </p>
        </div>

        <div className="grid gap-6">
          {faqs.map((faq) => (
            <Card
              key={faq.question}
              className="p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {faq.question}
              </h3>
              <p className="text-muted-foreground text-pretty">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
