"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Linkedin, Twitter, Instagram, Phone, Loader2, Send } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    toast("Message sent!", {
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    })
      // Reset form
      ; (event.target as HTMLFormElement).reset()
  }

  return (
    <div className="flex flex-col gap-12 pb-20 min-h-[calc(100vh-4rem)] justify-center">
      {/* Hero Section */}
      <section className="pt-12 md:pt-20 px-4 md:px-6 lg:px-8 w-full text-center space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          Let's Start Your Project
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Ready to grow your business online? Fill out the form below, and I'll get back to you within 24 hours to
          schedule your free consultation.
        </p>
      </section>

      <section className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both bg-card border rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-6 text-center">
              <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
              <p className="text-muted-foreground text-lg">
                Prefer to email or call? No problem. Here's how you can reach me directly.
              </p>

              <div className="space-y-6 text-left">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a href="mailto:hello@opyjodigital.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@opyjodigital.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">
                      Based in San Francisco, CA
                      <br />
                      Serving clients worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-border/50 text-center">
              <h2 className="text-2xl font-bold tracking-tight">Follow Me</h2>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
