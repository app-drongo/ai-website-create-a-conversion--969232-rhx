// Footer Component
// Generated: 2025-08-30T11:22:49.083Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  MapPin,
  Phone,
  Clock,
  ChefHat,
  Flame,
  Star,
  Utensils,
  Heart
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Menu",
      links: [
        { name: "Signature Chicken", href: "#menu" },
        { name: "Moroccan Spices", href: "#spices" },
        { name: "Sides & Salads", href: "#sides" },
        { name: "Beverages", href: "#drinks" },
        { name: "Desserts", href: "#desserts" },
        { name: "Family Meals", href: "#family" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "#about" },
        { name: "Authentic Recipes", href: "#recipes" },
        { name: "Fresh Ingredients", href: "#ingredients" },
        { name: "Chef's Special", href: "#chef" },
        { name: "Catering", href: "#catering" },
        { name: "Locations", href: "#locations" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Online Ordering", href: "#order" },
        { name: "Delivery", href: "#delivery" },
        { name: "Takeout", href: "#takeout" },
        { name: "Dine In", href: "#dine" },
        { name: "Group Orders", href: "#group" },
        { name: "Gift Cards", href: "#gifts" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "#contact" },
        { name: "Order Help", href: "#help" },
        { name: "Nutrition Info", href: "#nutrition" },
        { name: "Allergen Info", href: "#allergens" },
        { name: "Feedback", href: "#feedback" },
        { name: "Careers", href: "#careers" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/marrakechflame" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/marrakechflame" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/marrakechflame" }
  ]

  return (
    <footer className="bg-secondary border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Restaurant Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="size-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center relative">
                  <Flame className="size-6 text-background" />
                  <ChefHat className="size-4 text-background absolute -top-1 -right-1" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-primary">Marrakech Flame</span>
                  <span className="text-sm text-accent font-medium">Chicken</span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Experience the authentic flavors of Morocco with our flame-grilled chicken, 
                seasoned with traditional spices and cooked to perfection. Fresh, organic, 
                and bursting with flavor.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">(555) 123-FLAME</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">123 Spice Market St, Flavor District</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Mon-Sun: 11AM - 10PM</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-primary flex items-center gap-2">
                <Star className="size-4" />
                Special Offers
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email for deals"
                  className="flex-1 px-3 py-2 text-sm border border-primary/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-4 bg-primary hover:bg-primary/90 text-background">
                  <Utensils className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get exclusive deals and new menu updates. No spam, just flavor!
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-primary">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Marrakech Flame Chicken. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="size-3 text-primary fill-current" /> and authentic spices
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group border border-primary/10"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/nutrition" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Nutrition Facts
            </Link>
            <Link href="/franchise" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Franchise Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}