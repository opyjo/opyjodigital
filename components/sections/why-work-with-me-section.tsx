import { CheckCircle2 } from "lucide-react";

export const WhyWorkWithMeSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Why Choose Opyjo Consulting?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              As a dedicated freelance developer, I bring technical expertise
              and personal attention to every project.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Direct Communication
                  </h4>
                  <p className="text-muted-foreground text-pretty">
                    Work directly with me—no middlemen, no miscommunication.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Modern Tech Stack
                  </h4>
                  <p className="text-muted-foreground text-pretty">
                    Using cutting-edge tools like Next.js 16, React 19, and
                    TailwindCSS v4.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Flexible & Reliable
                  </h4>
                  <p className="text-muted-foreground text-pretty">
                    Adaptable to your timeline and committed to delivering
                    quality work on schedule.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <img
                src="/professional-developer-workspace-with-laptop-and-c.jpg"
                alt="Developer workspace"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
