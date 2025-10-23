import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder",
    company: "TechStart Inc.",
    image: "",
    content:
      "Working with Opyjo was a game-changer for our startup. The website they built not only looks amazing but also performs incredibly well. Our conversion rate increased by 40% in the first month!",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Marketing Director",
    company: "GrowthLabs",
    image: "/",
    content:
      "Exceptional work! The attention to detail and technical expertise really shows. Our new site loads lightning-fast and ranks much better on Google. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Thompson",
    role: "CEO",
    company: "Wellness Co.",
    image: "/",
    content:
      "Professional, responsive, and delivered exactly what we needed. The project was completed on time and within budget. We couldn't be happier with the results!",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Product Manager",
    company: "InnovateTech",
    image: "",
    content:
      "Outstanding developer who truly understands modern web technologies. The React application they built for us is fast, scalable, and maintainable. A pleasure to work with!",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Owner",
    company: "Boutique Design Studio",
    image: "/",
    content:
      "Opyjo transformed our vision into reality. The website perfectly captures our brand aesthetic while being incredibly functional. Our clients love the new experience!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "CTO",
    company: "DataFlow Systems",
    image: "/",
    content:
      "Top-notch technical skills combined with excellent communication. The Next.js application exceeded our expectations in both performance and user experience.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take my word for it—here's what clients have to say about
            working together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4 p-0">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
