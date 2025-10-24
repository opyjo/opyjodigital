"use client";

type Testimonial = {
  name: string;
  role: string;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah • café owner",
    role: "Toronto, ON",
    content:
      "“Johnson guided us through every step. Our new website finally reflects the warmth of our café and customers find us easily.”",
  },
  {
    name: "Marcus • electrician",
    role: "Brampton, ON",
    content:
      "“Clear communication, fair pricing, and a site that brings in weekly inquiries. Couldn’t have asked for more.”",
  },
  {
    name: "Lisa • freelance designer",
    role: "Remote",
    content:
      "“We worked together to launch in under a month. The walkthrough videos make edits simple—even for me.”",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.08),_transparent_70%)]" />
      <div className="mx-auto max-w-4xl space-y-10 text-center">
        <div className="space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Kind words from fellow small business owners
          </h2>
          <p className="text-balance text-muted-foreground">
            I keep my project list small so every website receives the attention it deserves.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex h-full flex-col gap-4 rounded-[22px] border border-border/70 bg-card p-6 text-left shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-3xl leading-none text-primary/50">“</span>
              <p className="text-sm text-muted-foreground">{testimonial.content}</p>
              <div className="mt-auto text-left">
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
