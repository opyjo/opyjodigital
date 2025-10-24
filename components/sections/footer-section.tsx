"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-muted/40 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.12),_transparent_70%)]" />
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          <div className="space-y-4 text-left">
            <h3 className="text-lg font-semibold text-foreground">Opyjo Digital</h3>
            <p className="text-sm text-muted-foreground">
              One-on-one website design and development support for small businesses and independent
              service providers.
            </p>
            <p className="text-sm text-muted-foreground">
              I stay close after launch, so you always have a friendly developer to call when the
              next idea pops up.
            </p>
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Crafted with Next.js · Tailwind CSS · Vercel
            </p>
          </div>

          <div className="space-y-3 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Navigation
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Connect
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.linkedin.com/in/opyjo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/opyjo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="h-4 w-4" /> GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:hello@opyjodigital.com"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" /> hello@opyjodigital.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Opyjo Digital · Built with care in Toronto.</p>
          <Link href="/contact">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/60 text-primary transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/10 hover:shadow-md"
            >
              Start a project
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};
