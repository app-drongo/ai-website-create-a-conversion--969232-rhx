// Navigation Component
// Generated: 2025-08-30T11:22:49.083Z
// Template: navigation-c001
// Context: layout
// Position: layout.header.0

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChefHat, Flame } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative">
                <Flame className="size-5 text-background" />
                <ChefHat className="size-3 text-background absolute -top-1 -right-1" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground leading-tight">Marrakech Flame</span>
                <span className="text-xs text-primary font-medium">Chicken</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-primary/10 rounded-md border border-transparent hover:border-primary/20"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-secondary hover:text-primary hover:bg-primary/10">
              Menu
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-background group border border-primary/20">
              Order Now
              <Flame className="ml-2 size-4 transition-transform group-hover:scale-110" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-primary hover:bg-primary/10"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-primary/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-primary/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start text-secondary hover:text-primary hover:bg-primary/10">
                Menu
              </Button>
              <Button className="justify-start bg-primary hover:bg-primary/90 text-background group">
                Order Now
                <Flame className="ml-2 size-4 transition-transform group-hover:scale-110" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}