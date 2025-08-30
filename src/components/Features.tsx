// Features Component
// Generated: 2025-08-30T11:22:49.083Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Flame, 
  Leaf, 
  Clock, 
  MapPin, 
  Users, 
  Award,
  ChefHat,
  Heart,
  Star
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Flame,
      title: "Flame-Grilled Perfection",
      description: "Our signature chicken is flame-grilled to perfection using traditional Moroccan techniques for authentic smoky flavors.",
      badge: "Signature"
    },
    {
      icon: Leaf,
      title: "Organic Ingredients",
      description: "We source only the finest organic, free-range chicken and fresh herbs to ensure exceptional quality and taste.",
      badge: "Quality"
    },
    {
      icon: ChefHat,
      title: "Traditional Recipes",
      description: "Authentic Moroccan recipes passed down through generations, featuring our secret blend of aromatic spices.",
      badge: "Authentic"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Hot, fresh meals delivered to your door in 25-30 minutes. Perfect for busy food lovers craving authentic cuisine.",
      badge: "Service"
    },
    {
      icon: Award,
      title: "Award-Winning Taste",
      description: "Winner of 'Best Moroccan Restaurant 2023' and featured in top culinary magazines for our exceptional flavors.",
      badge: "Recognition"
    },
    {
      icon: Heart,
      title: "Healthy & Nutritious",
      description: "Our dishes are prepared with heart-healthy ingredients and traditional cooking methods that preserve nutrients.",
      badge: "Wellness"
    },
    {
      icon: Users,
      title: "Family Recipes",
      description: "Family-owned restaurant serving authentic Moroccan cuisine with recipes treasured for over three generations.",
      badge: "Heritage"
    },
    {
      icon: MapPin,
      title: "Local Favorite",
      description: "Proudly serving our community with authentic Moroccan flavors that transport you straight to Marrakech.",
      badge: "Community"
    },
    {
      icon: Star,
      title: "5-Star Experience",
      description: "Consistently rated 5 stars by customers who love our authentic spicy dishes and exceptional service.",
      badge: "Excellence"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Authentic Moroccan Cuisine
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Made with Passion
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover what makes Marrakech Flame Chicken the premier destination for authentic 
            Moroccan flavors and traditional spicy dishes that satisfy every craving.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to taste authentic Moroccan flavors?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Order Now
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}