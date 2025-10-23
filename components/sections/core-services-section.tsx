import { Card } from "@/components/ui/card";
import {
  Code2,
  Palette,
  ShoppingCart,
  Database,
  Zap,
  Smartphone,
} from "lucide-react";

export const CoreServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Web Development",
      description:
        "Bespoke websites and web applications built from scratch using modern technologies like Next.js, React, and TypeScript.",
      features: [
        "Single-page applications",
        "Multi-page websites",
        "Progressive web apps",
      ],
      color: "primary",
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description:
        "Pixel-perfect implementation of designs with attention to detail, accessibility standards, and responsive layouts.",
      features: [
        "Figma to code conversion",
        "Responsive design",
        "Accessibility compliance",
      ],
      color: "accent",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Full-featured online stores with secure payment processing, inventory management, and seamless checkout experiences.",
      features: [
        "Stripe integration",
        "Product management",
        "Shopping cart & checkout",
      ],
      color: "primary",
    },
    {
      icon: Database,
      title: "Database & Backend",
      description:
        "Robust backend systems with database design, API development, and server-side logic for dynamic applications.",
      features: [
        "PostgreSQL & Supabase",
        "RESTful APIs",
        "Authentication systems",
      ],
      color: "accent",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Speed optimization, code splitting, and performance tuning to ensure fast load times and excellent user experience.",
      features: [
        "Core Web Vitals optimization",
        "Image optimization",
        "Caching strategies",
      ],
      color: "primary",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Mobile-first approach ensuring your website looks and works perfectly on all devices and screen sizes.",
      features: [
        "Mobile optimization",
        "Tablet & desktop layouts",
        "Touch-friendly interfaces",
      ],
      color: "accent",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive solutions for your web development needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="p-8 hover:shadow-lg transition-shadow group"
            >
              <div
                className={`w-14 h-14 rounded-xl ${
                  service.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.color === "primary" ? "text-primary" : "text-accent"
                  }`}
                />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-pretty mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        service.color === "primary" ? "bg-primary" : "bg-accent"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
