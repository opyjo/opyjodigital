import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Our new website has been a game-changer. We've seen a 45% increase in appointment bookings within the first two months. The design is clean, professional, and exactly what we needed.",
      author: "Dr. Sarah Mitchell",
      role: "Owner, Riverside Dental",
      initials: "SM",
      rating: 5,
    },
    {
      quote:
        "Working with a freelancer who actually understands small business challenges made all the difference. Fast communication, reasonable pricing, and a website that actually converts visitors into customers.",
      author: "James Rodriguez",
      role: "CEO, Summit Property Management",
      initials: "JR",
      rating: 5,
    },
    {
      quote:
        "I was hesitant about investing in a website, but it's already paid for itself three times over. Online orders now make up 60% of our revenue. Best business decision I've made this year.",
      author: "Emily Chen",
      role: "Owner, Blossom Bakery",
      initials: "EC",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-balance">What My Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take my word for it. Here's what business owners say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card animate-in fade-in slide-in-from-bottom-8 fill-mode-both hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-base leading-relaxed text-pretty">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-3 pt-2">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
