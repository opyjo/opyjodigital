"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, CalendarCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    detail: "hello@opyjodigital.com",
    link: "mailto:hello@opyjodigital.com",
    cta: "Send a note",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+1 (437) 371-3123",
    link: "tel:+14373713123",
    cta: "Schedule a call",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Remote-first · Toronto & London",
  },
  {
    icon: Clock,
    title: "Studio hours",
    detail: "Mon–Fri · 9am–6pm EST",
  },
];

export const ContactFormSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.22),transparent_75%)]" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 rounded-[32px] border border-white/12 bg-background/60 p-8 shadow-[0_32px_65px_rgba(15,23,42,0.22)] backdrop-blur-2xl"
          >
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                Tell us about your project
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base">
                Share the outcomes you’re targeting, where the project sits today, and any must-hit
                timelines. We’ll reply with next steps and a tailored roadmap.
              </p>
            </div>
            <ContactForm />
            <div className="flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
              <CalendarCheck className="h-4 w-4" />
              Free 30-minute strategy consult for new engagements.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-foreground">Prefer a direct line?</h3>
              <p className="text-sm text-muted-foreground sm:text-base">
                Drop us a note or book time—we’ll follow up with a short discovery session to
                understand scope, stakeholders, and success metrics.
              </p>
            </div>

            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ delay: 0.12 * index, type: "spring", stiffness: 240, damping: 32 }}
                  className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-background/55 p-5 shadow-[0_24px_55px_rgba(15,23,42,0.2)] backdrop-blur-2xl"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/35 bg-primary/10 text-primary">
                    <method.icon className="h-6 w-6" />
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.26em] text-muted-foreground/70">
                      {method.title}
                    </p>
                    <p className="text-base text-foreground">{method.detail}</p>
                    {method.link && method.cta && (
                      <a
                        href={method.link}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-300 hover:translate-x-1"
                      >
                        {method.cta}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
