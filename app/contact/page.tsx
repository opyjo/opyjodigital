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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto items-start">
          {/* Contact Info */}
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
              <p className="text-muted-foreground text-lg">
                Prefer to email or call? No problem. Here's how you can reach me directly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a href="mailto:hello@nexusdesign.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@nexusdesign.com
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

            <div className="space-y-6 pt-6 border-t border-border/50">
              <h2 className="text-2xl font-bold tracking-tight">Follow Me</h2>
              <div className="flex gap-4">
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

          {/* Contact Form */}
          <div className="bg-card border rounded-2xl shadow-xl p-6 md:p-8 animate-in fade-in slide-in-from-right-8 duration-700 delay-200 fill-mode-both ring-1 ring-border/50">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Name
                  </label>
                  <Input id="name" placeholder="John Doe" required className="h-11" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="h-11" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="project-type" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Project Type
                </label>
                <Select>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website-design">Custom Website Design</SelectItem>
                    <SelectItem value="website-redesign">Website Redesign</SelectItem>
                    <SelectItem value="landing-page">Landing Page</SelectItem>
                    <SelectItem value="ecommerce">E-Commerce Store</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Budget Range
                </label>
                <Select>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select a budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1k">Under $1,000</SelectItem>
                    <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                    <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                    <SelectItem value="5k-plus">$5,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project and business goals..."
                  className="min-h-[150px] resize-none"
                  required
                />
              </div>

              <Button type="submit" className="w-full h-12 text-base shadow-lg hover:shadow-primary/25 transition-all hover:scale-[1.02]" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
