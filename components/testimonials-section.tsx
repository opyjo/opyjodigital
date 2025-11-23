"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
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

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 md:py-24 bg-muted/30" ref={ref}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-balance tracking-tight">What My Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take my word for it. Here's what business owners say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                className="bg-card h-full hover:shadow-lg transition-all hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-8 space-y-6">
                  <motion.div
                    className="flex gap-1"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                  >
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </motion.div>
                  <blockquote className="text-base leading-relaxed text-pretty text-muted-foreground">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-4 pt-2 border-t border-border/50 mt-4">
                    <Avatar className="h-10 w-10 border border-border">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-sm">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
