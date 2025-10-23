import { Card } from "@/components/ui/card";
import { Search, Lock, BarChart } from "lucide-react";

export const AdditionalServicesSection = () => {
  const additionalServices = [
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Technical SEO implementation, meta tags, structured data, and performance optimization for better search rankings.",
      color: "primary",
    },
    {
      icon: Lock,
      title: "Security & Authentication",
      description:
        "Secure user authentication, authorization, data encryption, and protection against common vulnerabilities.",
      color: "accent",
    },
    {
      icon: BarChart,
      title: "Analytics Integration",
      description:
        "Setup and integration of analytics tools to track user behavior, conversions, and website performance metrics.",
      color: "primary",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Additional Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Extra value to enhance your web presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service) => (
            <Card
              key={service.title}
              className="p-6 hover:shadow-lg transition-shadow group"
            >
              <div
                className={`w-12 h-12 rounded-lg ${
                  service.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon
                  className={`w-6 h-6 ${
                    service.color === "primary" ? "text-primary" : "text-accent"
                  }`}
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground text-pretty">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
