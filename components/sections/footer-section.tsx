"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Experience design",
  "Full-stack engineering",
  "Headless commerce",
  "Conversion optimization",
];

export const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 px-4 pb-10 pt-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_70%)]" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr,1fr,1fr]">
          <div className="space-y-5">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="text-lg font-semibold text-foreground"
            >
              Opyjo Digital
            </motion.h3>
            <p className="max-w-sm text-sm text-muted-foreground/90">
              A web design and development studio building conversion-first digital flagships for
              bold brands. Strategy, story, systems, and scale—handled end to end.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.32em] text-muted-foreground/60">
              <span>Next.js 16</span>
              <span>React 19</span>
              <span>Framer Motion</span>
              <span>Sanity</span>
              <span>Shopify</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Capabilities
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-border/60 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">
            © {new Date().getFullYear()} Opyjo Digital. Crafted with intention.
          </p>
          <Link href="/contact" className="w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full border-primary/60 text-primary hover:bg-primary/10 md:w-auto"
            >
              Start a project
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};
