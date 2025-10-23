"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrolledDown = scrollTop > 20;
      const isScrollingUp = scrollTop < 100;

      setIsScrolled(isScrolledDown);
      setIsVisible(isScrollingUp || scrollTop < 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5"
          : "bg-background/80 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with animation */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-all duration-300 ease-out hover:scale-105 relative group"
          >
            <img
              src="/logo (4).svg"
              alt="Opyjo Digital Logo"
              className="w-8 h-8 transition-transform duration-300 ease-out group-hover:rotate-12"
            />
            <span className="relative z-10">Opyjo Digital</span>
            <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ease-out hover:scale-105 group ${
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ease-out ${
                    pathname === item.href
                      ? "bg-primary/10 scale-100"
                      : "bg-accent/50 scale-0 group-hover:scale-100"
                  }`}
                />
                {/* Active indicator */}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-primary/25 relative overflow-hidden group"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
