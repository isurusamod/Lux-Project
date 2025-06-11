import Image from "next/image"
import Link from "next/link"
import { Star, Sparkles, Heart, Leaf, Award, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-rose-600" />
            <Link href="/">
  <span className="text-2xl font-bold text-gray-900 cursor-pointer">LUX</span>
</Link>
          </div>
         <nav className="hidden md:flex items-center space-x-8 justify-center">
            <Link href="#products" className="text-gray-700 hover:text-rose-600 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-rose-600 transition-colors">
              About
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-rose-600 transition-colors">
              News
            </Link>
            <Link href="#campaigns" className="text-gray-700 hover:text-rose-600 transition-colors">
              Campaigns
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-rose-600 transition-colors">
              Contact
            </Link>
          </nav>
          
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-rose-100 text-rose-800 hover:bg-rose-100">Premium Luxury Skincare</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Indulge in
            <span className="text-rose-600 block">Pure Luxury</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the ultimate in skincare luxury with our handcrafted soap bars. Made with the finest natural
            ingredients for skin that feels silky smooth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-lg px-8 py-4">
              Discover Collection
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
          <div className="mt-16">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Luxury Lux soap bars arranged elegantly"
              width={600}
              height={400}
              className="mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Lux?</h2>
            <p className="text-xl text-gray-600">Crafted with care, designed for luxury</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">100% Natural</h3>
                <p className="text-gray-600">Made with organic ingredients sourced from sustainable farms worldwide</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Skin Loving</h3>
                <p className="text-gray-600">Gentle formulas that nourish and moisturize for all skin types</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Award Winning</h3>
                <p className="text-gray-600">Recognized by beauty experts and loved by customers worldwide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-20 bg-gradient-to-r from-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Signature Collection</h2>
            <p className="text-xl text-gray-600">Discover your perfect match</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-rose-200 to-rose-300 relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Rose Petal Luxury Bar"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Rose Petal Luxury</h3>
                <p className="text-gray-600 mb-4">
                  Infused with real rose petals and essential oils for ultimate hydration
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-rose-600">$24.99</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-purple-300 relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Lavender Dreams Bar"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lavender Dreams</h3>
                <p className="text-gray-600 mb-4">Calming lavender scent with moisturizing shea butter</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">$22.99</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-green-200 to-green-300 relative">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Eucalyptus Fresh Bar"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Eucalyptus Fresh</h3>
                <p className="text-gray-600 mb-4">Refreshing eucalyptus with natural exfoliating properties</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">$26.99</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Crafted with Passion</h2>
              <p className="text-lg text-gray-600 mb-6">
                For over three decades, Lux has been synonymous with luxury skincare. Our master craftsmen hand-select
                the finest ingredients from around the world to create soap bars that transform your daily routine into
                a spa-like experience.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Each bar is carefully crafted in small batches, ensuring the highest quality and attention to detail. We
                believe that luxury should be accessible, and that every moment of self-care should feel extraordinary.
              </p>
              <Button className="bg-rose-600 hover:bg-rose-700">Our Story</Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Artisan crafting luxury soap"
                width={500}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The Rose Petal Luxury bar is absolutely divine! My skin has never felt so soft and smooth."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-rose-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I've tried many luxury soaps, but Lux is in a league of its own. The quality is unmatched."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The Eucalyptus Fresh bar is perfect for my morning routine. It's refreshing and invigorating!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Emma Davis</p>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Luxury?</h2>
          <p className="text-xl mb-8 opacity-90">Transform your daily routine with our premium soap collection</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-4">
              Shop Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-600 text-lg px-8 py-4"
            >
              Gift Sets
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-8 w-8 text-rose-400" />
                <span className="text-2xl font-bold">LUX</span>
              </div>
              <p className="text-gray-400">Premium luxury skincare crafted with the finest natural ingredients.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Soap Bars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Gift Sets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Limited Edition
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lux Soap Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
