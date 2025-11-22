"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Mail, MapPin, ArrowRight, Calendar, Linkedin, Github, Twitter } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    toast.success("Message sent!", {
      description: "Thanks for reaching out! I'll get back to you within 24 hours.",
    })
  }

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Header */}
      <section className="pt-20 md:pt-32 px-4 md:px-6 lg:px-8 container mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Let's Start a Project</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Whether you have a clear vision or just an idea, I'm here to help. Fill out the form below or book a free
          consultation call.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700 delay-200 fill-mode-both">
            <Card>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Project Type</Label>
                    <RadioGroup defaultValue="website" className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div>
                        <RadioGroupItem value="website" id="website" className="peer sr-only" />
                        <Label
                          htmlFor="website"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                        >
                          Website
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="ecommerce" id="ecommerce" className="peer sr-only" />
                        <Label
                          htmlFor="ecommerce"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                        >
                          E-Commerce
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="other" id="other" className="peer sr-only" />
                        <Label
                          htmlFor="other"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                        >
                          Other
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Approximate Budget</Label>
                    <select
                      id="budget"
                      defaultValue=""
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      <option value="1-2k">$1,000 - $2,500</option>
                      <option value="2-5k">$2,500 - $5,000</option>
                      <option value="5k+">$5,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your business and what you're looking to achieve..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full text-lg py-6" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Calendar */}
          <div className="space-y-12 animate-in fade-in slide-in-from-right-8 duration-700 delay-300 fill-mode-both">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
                >
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  hello@example.com
                </a>
                <div className="flex items-center gap-4 text-lg text-muted-foreground">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  Based in San Francisco, CA
                  <br />
                  (Available Remote Worldwide)
                </div>
              </div>

              <div className="pt-6 border-t">
                <h4 className="font-medium mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://linkedin.com" target="_blank">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://twitter.com" target="_blank">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com" target="_blank">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Calendar Embed Simulation */}
            <div className="bg-muted/30 rounded-xl p-8 border border-border/50 text-center space-y-6">
              <div className="mx-auto h-16 w-16 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Book a Free Consultation</h3>
                <p className="text-muted-foreground text-pretty">
                  Skip the email tag. Pick a time that works for you and let's chat about your project over Zoom.
                </p>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                View Available Times <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
