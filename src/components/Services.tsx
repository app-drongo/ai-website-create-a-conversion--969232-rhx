import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ChefHat,
  Clock,
  Users,
  Utensils,
  Calendar,
  MapPin,
  Star,
  Phone,
  ArrowRight
} from "lucide-react"

export default function ServicesCardGrid() {
  const services = [
    {
      id: "dine-in",
      title: "Authentic Dine-In Experience",
      description: "Savor our traditional Moroccan chicken dishes in our warm, welcoming restaurant atmosphere.",
      icon: Utensils,
      badge: "Popular",
      features: ["Traditional Ambiance", "Live Music Nights", "Family Friendly"],
      link: "/reservations"
    },
    {
      id: "takeaway",
      title: "Quick Takeaway",
      description: "Enjoy our delicious Moroccan chicken specialties from the comfort of your home.",
      icon: Clock,
      features: ["Ready in 15 mins", "Online Ordering", "Fresh Packaging"],
      link: "/order-online"
    },
    {
      id: "catering",
      title: "Event Catering",
      description: "Bring the authentic taste of Morocco to your special events and gatherings.",
      icon: Users,
      badge: "Premium",
      features: ["Custom Menus", "Full Service", "Any Event Size"],
      link: "/catering"
    },
    {
      id: "chef-specials",
      title: "Chef's Signature Dishes",
      description: "Experience our master chef's exclusive Moroccan chicken recipes passed down through generations.",
      icon: ChefHat,
      features: ["Traditional Recipes", "Premium Spices", "Daily Fresh"],
      link: "/menu#specials"
    },
    {
      id: "private-dining",
      title: "Private Dining",
      description: "Intimate dining experiences perfect for celebrations and business meetings.",
      icon: Star,
      features: ["Private Rooms", "Custom Service", "Special Occasions"],
      link: "/private-dining"
    },
    {
      id: "delivery",
      title: "Home Delivery",
      description: "Fast and reliable delivery service bringing authentic Moroccan flavors to your doorstep.",
      icon: MapPin,
      features: ["30min Delivery", "Hot & Fresh", "Wide Coverage Area"],
      link: "/delivery"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Authentic Moroccan
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Dining Experiences
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From traditional dine-in to convenient delivery, we bring you the finest Moroccan chicken cuisine in every way you love
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Service Action Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Order Now</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to taste authentic Moroccan cuisine?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Phone className="mr-2 size-4" />
              Call to Order
            </Button>
            <Button size="lg" variant="outline">
              <Calendar className="mr-2 size-4" />
              Make Reservation
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}