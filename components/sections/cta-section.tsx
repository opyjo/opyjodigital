import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-balance">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
          Let's discuss how I can help bring your web project to life. Get in
          touch for a free consultation.
        </p>
        <Link href="/contact">
          <Button size="lg" variant="secondary" className="group">
            Get in Touch
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
