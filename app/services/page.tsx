import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, ArrowRight, Laptop, Rocket, Search, PenTool } from "lucide-react"

export const metadata = {
  title: "Services & Pricing | OpyjoDigital",
  description: "Transparent pricing and comprehensive web design packages for small businesses.",
}

export default function ServicesPage() {
  const packages = [
    {
      name: "Starter",
      price: "$1,500",
      description: "Perfect for new businesses establishing their online presence.",
      features: [
        "Custom Homepage Design",
        "About & Contact Pages",
        "Mobile Responsive",
        "Contact Form Integration",
        "2 Rounds of Revisions",
      ],
      cta: "Get Started",
    },
    {
      name: "Growth",
      price: "$3,500",
      popular: true,
      description: "A complete solution to grow your business and generate leads.",
      features: [
        "Everything in Starter",
        "Up to 8 Custom Pages",
        "CMS Integration (Blog/Projects)",
        "Newsletter Integration",
        "Google Analytics Setup",
        "1 Month Support Included",
      ],
      cta: "Choose Growth",
    },
    {
      name: "E-Commerce",
      price: "$5,000+",
      description: "Robust online store to sell your products or services.",
      features: [
        "Everything in Growth",
        "Full E-Commerce Setup",
        "Product Management System",
        "Payment Gateway Integration",
        "Customer Account Portal",
        "Abandoned Cart Emails",
        "3 Months Support Included",
      ],
      cta: "Let's Build It",
    },
  ]

  const processSteps = [
    {
      icon: Search,
      title: "Discovery",
      description:
        "We start with a deep dive into your business goals, target audience, and competitors to create a solid strategy.",
    },
    {
      icon: PenTool,
      title: "Design",
      description: "I create wireframes and high-fidelity mockups that align with your brand identity and user needs.",
    },
    {
      icon: Laptop,
      title: "Development",
      description:
        "Using modern technologies, I build your site to be fast, secure, and pixel-perfect across all devices.",
    },
    {
      icon: Rocket,
      title: "Launch",
      description:
        "After rigorous testing, we launch your site to the world and I provide training on how to manage it.",
    },
  ]

  const faqs = [
    {
      question: "How long does a project take?",
      answer:
        "A typical brochure website takes 2-4 weeks from start to finish. Larger projects or e-commerce sites may take 6-8 weeks depending on complexity and content readiness.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes! I typically require a 50% deposit to book your slot, with the remaining 50% due upon project completion. For larger projects, we can split this into 3 or 4 payments.",
    },
    {
      question: "Will I be able to update the website myself?",
      answer:
        "Absolutely. I build websites using user-friendly Content Management Systems (CMS) so you can easily edit text, swap images, and add blog posts without touching a line of code.",
    },
    {
      question: "Do you provide hosting and domain services?",
      answer:
        "I can help you set these up and recommend the best providers, but the accounts will be in your name to ensure you have full ownership of your digital assets.",
    },
    {
      question: "What happens if I need help after launch?",
      answer:
        "I offer post-launch support packages to keep your site secure and updated. I'm also available for hourly work if you need specific changes down the line.",
    },
  ]

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="pt-12 md:pt-32 pb-8 md:pb-10 px-4 md:px-6 lg:px-8 w-full text-center space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Choose the package that fits your needs. No hidden fees, just high-quality design and development.
        </p>
      </section>

      {/* Pricing Section */}
      <section className="w-full px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`flex flex-col relative transition-all duration-300 hover:shadow-xl ${pkg.popular ? "border-primary shadow-lg scale-105 z-10 ring-1 ring-primary/20" : "hover:-translate-y-1"}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-md">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold tracking-tight">{pkg.price}</span>
                  {pkg.name === "E-Commerce" && <span className="text-muted-foreground text-sm font-medium"> starting at</span>}
                </div>
                <CardDescription className="text-base mt-2 leading-relaxed">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full shadow-sm" variant={pkg.popular ? "default" : "outline"} size="lg">
                  <Link href="/contact">{pkg.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/30 py-20 rounded-3xl mx-4 md:mx-6 lg:mx-8">
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My proven process ensures we stay on track and deliver a website you'll love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10 mx-16" />

            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-24 w-24 rounded-full bg-background border-4 border-primary/10 flex items-center justify-center mb-2 shadow-inner">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-4 md:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about working with me.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
              <AccordionTrigger className="text-left text-base font-medium hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Have more questions?</p>
          <Button asChild variant="link" className="text-primary text-lg font-semibold">
            <Link href="/contact">
              Contact me directly <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
