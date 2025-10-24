"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const contactDetails = [
  {
    icon: Mail,
    heading: "Email",
    detail: "hello@opyjodigital.com",
    link: "mailto:hello@opyjodigital.com",
    cta: "Send an email",
  },
  {
    icon: Phone,
    heading: "Phone",
    detail: "+1 (437) 371-3123",
    link: "tel:+14373713123",
    cta: "Give me a call",
  },
  {
    icon: MapPin,
    heading: "Location",
    detail: "Toronto, working with clients across Canada & beyond",
  },
  {
    icon: Clock,
    heading: "Hours",
    detail: "Monday–Friday · 9am–6pm EST",
  },
];

export const ContactFormSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.06),_transparent_75%)]" />
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md sm:p-8">
          <div className="space-y-3 text-left">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Tell me a bit about your business
            </h2>
            <p className="text-balance text-sm text-muted-foreground sm:text-base">
              The more context you share, the better I can tailor ideas and pricing for our
              conversation. I’ll reply within one business day.
            </p>
          </div>
          <ContactForm />
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-border/70 bg-card p-6 text-left shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-lg font-semibold text-foreground">Prefer to reach out directly?</h3>
            <p className="mt-2 text-balance text-sm text-muted-foreground">
              Use any of the options below. If you catch my voicemail, leave a note and I’ll call
              back quickly.
            </p>
          </div>

          <div className="grid gap-4">
            {contactDetails.map((detail) => (
              <div
                key={detail.heading}
                className="flex items-start gap-3 rounded-[22px] border border-border/70 bg-card p-5 text-left shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <detail.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {detail.heading}
                  </p>
                  <p className="mt-1 text-sm text-foreground">{detail.detail}</p>
                  {detail.link && detail.cta && (
                    <a
                      href={detail.link}
                      className="mt-2 inline-flex text-sm font-semibold text-primary hover:underline"
                    >
                      {detail.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
