"use client"

import { useState } from "react"
import { Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

const PROJECT_TYPES = [
  {
    id: "landing",
    name: "Landing Page",
    basePrice: 1500,
    description: "Single page conversion-focused site",
  },
  {
    id: "website",
    name: "Full Website",
    basePrice: 3500,
    description: "Multi-page informational website",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    basePrice: 5000,
    description: "Online store with product management",
  },
]

const ADDONS = [
  {
    id: "cms",
    name: "CMS Integration",
    price: 1000,
    description: "Easy content management system for you to update text/images",
  },
  {
    id: "copywriting",
    name: "Professional Copywriting",
    price: 500,
    description: "Persuasive content written for your brand",
  },
  {
    id: "logo",
    name: "Logo & Branding",
    price: 800,
    description: "Logo design and basic brand guidelines",
  },
  {
    id: "analytics",
    name: "Advanced Analytics",
    price: 300,
    description: "Setup of Google Analytics and conversion tracking",
  },
]

export function CostEstimator() {
  const [projectType, setProjectType] = useState(PROJECT_TYPES[1].id)
  const [pages, setPages] = useState([5])
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const calculateTotal = () => {
    const type = PROJECT_TYPES.find((t) => t.id === projectType)
    const base = type ? type.basePrice : 0

    // Page cost logic: Landing pages usually 1 page (fixed), others variable
    let pageCost = 0
    if (projectType !== "landing") {
      // First 5 pages included in base price for website/ecommerce
      const extraPages = Math.max(0, pages[0] - 5)
      pageCost = extraPages * 150
    }

    const addonsCost = selectedAddons.reduce((acc, id) => {
      const addon = ADDONS.find((a) => a.id === id)
      return acc + (addon ? addon.price : 0)
    }, 0)

    return base + pageCost + addonsCost
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-8">
        {/* Project Type */}
        <Card>
          <CardHeader>
            <CardTitle>1. Project Type</CardTitle>
            <CardDescription>What kind of website do you need?</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={projectType} onValueChange={setProjectType} className="grid gap-4 sm:grid-cols-3">
              {PROJECT_TYPES.map((type) => (
                <div key={type.id}>
                  <RadioGroupItem value={type.id} id={type.id} className="peer sr-only" />
                  <Label
                    htmlFor={type.id}
                    className="flex flex-col justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer h-full"
                  >
                    <span className="font-semibold text-lg mb-2">{type.name}</span>
                    <span className="text-sm text-muted-foreground leading-snug">{type.description}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Page Count - Hide for landing page */}
        {projectType !== "landing" && (
          <Card className="animate-in fade-in slide-in-from-top-4">
            <CardHeader>
              <CardTitle>2. Size & Scope</CardTitle>
              <CardDescription>How many pages do you anticipate? (First 5 included)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-medium">Number of Pages</span>
                <span className="text-2xl font-bold text-primary">{pages[0]}</span>
              </div>
              <Slider value={pages} onValueChange={setPages} min={1} max={20} step={1} className="py-4" />
              <p className="text-sm text-muted-foreground">
                Includes: Home, About, Services, Contact, plus {Math.max(0, pages[0] - 4)} additional pages.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Add-ons */}
        <Card>
          <CardHeader>
            <CardTitle>3. Add-ons</CardTitle>
            <CardDescription>Select any additional features you need.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            {ADDONS.map((addon) => (
              <div key={addon.id} className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Switch
                    id={addon.id}
                    checked={selectedAddons.includes(addon.id)}
                    onCheckedChange={() => toggleAddon(addon.id)}
                  />
                  <div className="space-y-1">
                    <Label htmlFor={addon.id} className="flex items-center gap-2 cursor-pointer">
                      {addon.name}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{addon.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Label>
                    <p className="text-sm text-muted-foreground">${addon.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Summary Panel */}
      <div className="lg:col-span-1">
        <div className="sticky top-24">
          <Card className="border-primary/20 shadow-lg">
            <CardHeader className="bg-muted/50">
              <CardTitle>Estimated Cost</CardTitle>
              <CardDescription>Based on your selections</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Base Price ({PROJECT_TYPES.find((t) => t.id === projectType)?.name})
                  </span>
                  <span>${PROJECT_TYPES.find((t) => t.id === projectType)?.basePrice.toLocaleString()}</span>
                </div>

                {projectType !== "landing" && pages[0] > 5 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Extra Pages ({pages[0] - 5} x $150)</span>
                    <span>${((pages[0] - 5) * 150).toLocaleString()}</span>
                  </div>
                )}

                {selectedAddons.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-dashed">
                    {selectedAddons.map((id) => {
                      const addon = ADDONS.find((a) => a.id === id)
                      return addon ? (
                        <div key={id} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{addon.name}</span>
                          <span>${addon.price}</span>
                        </div>
                      ) : null
                    })}
                  </div>
                )}

                <div className="pt-4 mt-4 border-t flex items-center justify-between">
                  <span className="font-bold text-lg">Total Estimate</span>
                  <span className="font-bold text-3xl text-primary">${calculateTotal().toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 pt-6 bg-muted/50 rounded-b-lg">
              <Button className="w-full h-12 text-lg" asChild>
                <Link href={`/contact?budget=${calculateTotal()}&type=${projectType}`}>Request Quote</Link>
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                *This is a rough estimate. Final price may vary based on specific requirements.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
