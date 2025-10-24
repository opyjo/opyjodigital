"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

const mobileItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      type: "spring",
      stiffness: 320,
      damping: 28,
    },
  }),
  exit: { opacity: 0, y: -18, transition: { duration: 0.2 } },
};

const isPathActive = (pathname: string | null, href: string) => {
  if (!pathname) return false;
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
};

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 16);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollState();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateScrollState();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setHoveredItem(null);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const activeDesktopKey =
    hoveredItem ??
    NAV_ITEMS.find((item) => isPathActive(pathname, item.href))?.href ??
    null;

  return (
    <>
      <motion.nav initial={false} className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:px-6">
        <motion.div
          layout
          className={cn(
            "group relative flex w-full max-w-6xl items-center justify-between gap-3 rounded-3xl border px-4 py-3 sm:px-6",
            "border-border/40 bg-background/70 shadow-[0_18px_42px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-500",
            isScrolled &&
              "border-border/60 bg-background/85 shadow-[0_25px_65px_rgba(15,23,42,0.18)]"
          )}
          animate={{ scale: isScrolled ? 0.995 : 1 }}
        >
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl">
            <motion.div
              aria-hidden
              className="absolute inset-[-40%] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_65%)] transition-opacity duration-700"
              animate={{ opacity: isScrolled ? 0.55 : 0.35 }}
            />
            <motion.div
              aria-hidden
              className="absolute inset-[-30%] bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.14),transparent_70%)] transition-opacity duration-700"
              animate={{ opacity: isScrolled ? 0.3 : 0.15 }}
            />
          </div>

          <Link
            href="/"
            className="group/logo relative flex items-center gap-3 text-base font-semibold text-foreground transition-colors duration-300 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <motion.img
              src="/logo (4).svg"
              alt="Opyjo Digital Logo"
              className="h-9 w-9 rounded-full bg-background/80 p-1.5 shadow-sm shadow-black/15 transition-colors duration-300"
              whileHover={{ rotate: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/70 bg-clip-text text-transparent">
                Opyjo Digital
              </span>
              <span className="absolute -inset-1 -z-10 rounded-full bg-primary/10 opacity-0 transition-opacity duration-300 group-hover/logo:opacity-100" />
            </span>
          </Link>

          <LayoutGroup id="desktop-navigation">
            <div
              onMouseLeave={() => setHoveredItem(null)}
              className="relative hidden items-center gap-1 rounded-full border border-border/50 bg-background/50 px-1 py-1 shadow-inner shadow-black/5 backdrop-blur-lg md:flex"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-60"
              />
              {NAV_ITEMS.map((item) => {
                const isActive = activeDesktopKey === item.href;
                const isPathSelected = isPathActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                      isActive || isPathSelected
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onFocus={() => setHoveredItem(item.href)}
                    onBlur={() => setHoveredItem(null)}
                  >
                    {(isActive || (!hoveredItem && isPathSelected)) && (
                      <motion.span
                        layoutId="navHighlight"
                        className="absolute inset-0 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/18 via-primary/10 to-primary/20 shadow-[0_12px_35px_rgba(59,130,246,0.25)]"
                        transition={{ type: "spring", stiffness: 480, damping: 38 }}
                      />
                    )}
                    {(isActive || isPathSelected) && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute inset-x-4 bottom-1 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"
                        transition={{ type: "spring", stiffness: 480, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </LayoutGroup>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Button
                  size="sm"
                  className="group relative overflow-hidden rounded-full bg-primary px-5 text-primary-foreground shadow-[0_18px_35px_rgba(59,130,246,0.35)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-linear-to-r from-primary/60 via-primary to-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </Button>
              </motion.div>
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/70 text-foreground shadow-[0_10px_25px_rgba(15,23,42,0.15)] transition-all duration-300 hover:border-primary/60 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <motion.span
                initial={false}
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </button>
          </div>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex justify-center bg-background/90 px-4 pb-12 pt-24 backdrop-blur-2xl md:hidden"
          >
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="w-full max-w-sm space-y-6 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-[0_35px_80px_rgba(15,23,42,0.25)]"
            >
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-2"
              >
                {NAV_ITEMS.map((item, index) => {
                  const active = isPathActive(pathname, item.href);

                  return (
                    <motion.li
                      key={item.href}
                      custom={index}
                      variants={mobileItemVariants}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          "group flex items-center justify-between rounded-2xl border px-4 py-3 text-base font-semibold transition-all duration-300",
                          active
                            ? "border-primary/60 bg-primary/10 text-foreground shadow-[0_15px_40px_rgba(59,130,246,0.28)]"
                            : "border-border/60 bg-background/40 text-muted-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-foreground"
                        )}
                      >
                        <span>{item.label}</span>
                        <motion.span
                          aria-hidden
                          className="h-2 w-2 rounded-full bg-primary"
                          animate={{
                            scale: active ? 1 : 0,
                            opacity: active ? 1 : 0,
                          }}
                          transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        />
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>

              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    className="group relative w-full overflow-hidden rounded-2xl bg-primary px-6 py-6 text-lg font-semibold text-primary-foreground shadow-[0_25px_55px_rgba(59,130,246,0.35)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="relative z-10">Get in Touch</span>
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-linear-to-r from-primary/70 via-primary to-primary/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
