import { Card } from "@/components/ui/card";
import { Code2, Palette, Zap } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            What I Can Do For You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Full-stack development services tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Custom Web Development
            </h3>
            <p className="text-muted-foreground text-pretty">
              Bespoke websites and web applications built with modern
              technologies like Next.js, React, and TypeScript.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              UI/UX Implementation
            </h3>
            <p className="text-muted-foreground text-pretty">
              Pixel-perfect implementation of designs with attention to detail,
              accessibility, and responsive layouts.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Performance Optimization
            </h3>
            <p className="text-muted-foreground text-pretty">
              Fast-loading, SEO-optimized websites that provide excellent user
              experience and rank well in search engines.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
