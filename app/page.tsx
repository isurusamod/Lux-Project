import Image from "next/image"
import Link from "next/link"
import {
  Star,
  Sparkles,
  Heart,
  Leaf,
  Award,
  ShoppingCart,
  Play,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Gift,
  Zap,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white center">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 justify-center">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between justify-center">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/assets/lux.png"
                alt="LUX Logo"
                width={100}
                height={100}
                className="rounded-full cursor-pointer"
              />
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

      {/* Hero Section with Video Background */}
      <section className="py-20 px-4 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Video */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/Ingredient Asset - Black Orchid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/70 via-rose-800/50 to-transparent z-10"></div>

        {/* Content */}
        <div className="container mx-auto relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
                ✨ New Collection Available
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Take a<span className="text-rose-300 block">Luxury Break</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 max-w-lg">
                Transform your daily routine into an extraordinary spa experience. Indulge in pure luxury with our
                handcrafted soap bars made from the world's finest natural ingredients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-4">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Discover Collection
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-rose-600 text-lg px-8 py-4"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Watch Our Story
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <Image
        src="/assets/rose.jpg"
        alt="Rose"
        width={400}
        height={400}
        className="rounded-2xl shadow-xl mx-auto"
      />     <div className="mt-6 text-center">
                  <Badge className="bg-rose-600 text-white mb-2">Limited Edition</Badge>
                  <h3 className="text-xl font-bold text-white mb-2">Rose Garden Collection</h3>
                  <p className="text-white/80">Starting at lkr24.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaign */}
      <section id="campaigns" className="py-20 bg-gradient-to-r from-purple-600 to-rose-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">🌟 Featured Campaign</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                #LuxuryMoments
                <span className="block text-rose-200">Share Your Glow</span>
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Join thousands of customers sharing their luxury skincare moments. Tag us @luxsoap and use
                #LuxuryMoments for a chance to be featured and win exclusive products!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Instagram className="h-5 w-5 mr-2" />
                  Join Campaign
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  View Gallery
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <Image
                   src="/assets/rose2.jpg"
                    alt="Customer moment 1"
                    width={200}
                    height={200}
                    className="w-full rounded-xl"
                  />
                  <p className="text-sm mt-2 text-white/80">@sarah_skincare</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <Image
                       src="/assets/rose3.jpg"
                    alt="Customer moment 2"
                    width={200}
                    height={200}
                    className="w-full rounded-xl"
                  />
                  <p className="text-sm mt-2 text-white/80">@luxlife_daily</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <Image
                       src="/assets/rose4.jpg"
                    alt="Customer moment 3"
                    width={200}
                    height={200}
                    className="w-full rounded-xl"
                  />
                  <p className="text-sm mt-2 text-white/80">@spa_athome</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <Image
                      src="/assets/rose5.jpg"
                    alt="Customer moment 4"
                    width={200}
                    height={200}
                    className="w-full rounded-xl"
                  />
                  <p className="text-sm mt-2 text-white/80">@natural_glow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Product Showcase */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-800">Bestsellers</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your
              <span className="text-rose-600"> Luxury Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each bar is a journey. Discover which luxury experience speaks to your skin.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-rose-200 to-rose-400 relative overflow-hidden">
                <Image
                  src="/assets/rose6.jpg"
                  alt="Rose Petal Luxury Bar"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Perfect for dry skin</p>
                </div>
                <Badge className="absolute top-4 right-4 bg-rose-600 text-white">Bestseller</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Rose Petal Luxury</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Infused with real Bulgarian rose petals and essential oils for ultimate hydration and luxury.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-rose-600">$24.99</span>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    In Stock
                  </Badge>
                </div>
                <Button className="w-full bg-rose-600 hover:bg-rose-700 group-hover:bg-rose-700">
                  Add to Cart
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-purple-400 relative overflow-hidden">
                <Image
                 src="/assets/rose7.jpg"
                  alt="Lavender Dreams Bar"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Calming & relaxing</p>
                </div>
                <Badge className="absolute top-4 right-4 bg-purple-600 text-white">New</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Lavender Dreams</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Calming French lavender with moisturizing shea butter for the perfect evening routine.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-purple-600">$22.99</span>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    In Stock
                  </Badge>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 group-hover:bg-purple-700">
                  Add to Cart
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Product 3 */}
            <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
              <div className="aspect-square bg-gradient-to-br from-green-200 to-green-400 relative overflow-hidden">
                <Image
                src="/assets/rose9.jpg"
                  alt="Eucalyptus Fresh Bar"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Energizing & refreshing</p>
                </div>
                <Badge className="absolute top-4 right-4 bg-green-600 text-white">Limited</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">Eucalyptus Fresh</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Refreshing Australian eucalyptus with natural exfoliating properties for morning energy.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-600">$26.99</span>
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    Low Stock
                  </Badge>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 group-hover:bg-green-700">
                  Add to Cart
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-rose-600 border-rose-600 hover:bg-rose-50">
              View All Products
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Lux - Enhanced */}
      <section className="py-20 bg-gradient-to-r from-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Millions Choose
              <span className="text-rose-600"> Lux</span>
            </h2>
            <p className="text-xl text-gray-600">The luxury difference you can feel</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <CardContent className="p-8">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Leaf className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">100% Natural</h3>
                <p className="text-gray-600 mb-4">
                  Made with organic ingredients sourced from sustainable farms worldwide
                </p>
                <div className="flex items-center justify-center text-sm text-green-600 font-medium">
                  <Users className="h-4 w-4 mr-1" />
                  2M+ Happy Customers
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <CardContent className="p-8">
                <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-200 transition-colors">
                  <Heart className="h-10 w-10 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Skin Loving</h3>
                <p className="text-gray-600 mb-4">Gentle formulas that nourish and moisturize for all skin types</p>
                <div className="flex items-center justify-center text-sm text-rose-600 font-medium">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  4.9/5 Rating
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <CardContent className="p-8">
                <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                  <Award className="h-10 w-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Award Winning</h3>
                <p className="text-gray-600 mb-4">Recognized by beauty experts and loved by customers worldwide</p>
                <div className="flex items-center justify-center text-sm text-amber-600 font-medium">
                  <Award className="h-4 w-4 mr-1" />
                  15+ Awards
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Zap className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Results</h3>
                <p className="text-gray-600 mb-4">See and feel the difference in your skin from the very first use</p>
                <div className="flex items-center justify-center text-sm text-blue-600 font-medium">
                  <Zap className="h-4 w-4 mr-1" />
                  24hr Results
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof & Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-600">Join millions who've made the switch to luxury</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">Verified Purchase</span>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  "The Rose Petal Luxury bar is absolutely divine! My skin has never felt so soft and smooth. It's like
                  having a spa treatment every day."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-rose-200 rounded-full mr-4 flex items-center justify-center">
                    <span className="font-bold text-rose-600">SJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Verified Customer • 2 weeks ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">Verified Purchase</span>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  "I've tried many luxury soaps, but Lux is in a league of its own. The quality is unmatched and the
                  scents are incredible!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-200 rounded-full mr-4 flex items-center justify-center">
                    <span className="font-bold text-purple-600">MC</span>
                  </div>
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-gray-500">Verified Customer • 1 week ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">Verified Purchase</span>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  "The Eucalyptus Fresh bar is perfect for my morning routine. It's refreshing and gives me energy for
                  the whole day!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-200 rounded-full mr-4 flex items-center justify-center">
                    <span className="font-bold text-green-600">ED</span>
                  </div>
                  <div>
                    <p className="font-semibold">Emma Davis</p>
                    <p className="text-sm text-gray-500">Verified Customer • 3 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="text-rose-600 border-rose-600 hover:bg-rose-50">
              Read All Reviews (2,847)
            </Button>
          </div>
        </div>
      </section>

      {/* Limited Time Offer */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-4 py-2">🔥 Limited Time Offer</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Your Luxury Starter Kit</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Try all three bestselling bars for just $59.99 (Save $15!) Perfect for discovering your favorite luxury
            experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Gift className="h-5 w-5 mr-2" />
              Get Starter Kit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-600 text-lg px-8 py-4"
            >
              Learn More
            </Button>
          </div>
          <p className="text-sm opacity-75">Free shipping on all orders over $50 • 30-day money-back guarantee</p>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Our Journey</h2>
            <p className="text-xl text-gray-600">Stay connected for daily luxury inspiration</p>
          </div>
          <div className="flex justify-center space-x-8">
            <Button variant="outline" size="lg" className="text-pink-600 border-pink-600 hover:bg-pink-50">
              <Instagram className="h-6 w-6 mr-2" />
              Instagram
              <Badge className="ml-2 bg-pink-100 text-pink-600">125K</Badge>
            </Button>
            <Button variant="outline" size="lg" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              <Facebook className="h-6 w-6 mr-2" />
              Facebook
              <Badge className="ml-2 bg-blue-100 text-blue-600">89K</Badge>
            </Button>
            <Button variant="outline" size="lg" className="text-sky-600 border-sky-600 hover:bg-sky-50">
              <Twitter className="h-6 w-6 mr-2" />
              Twitter
              <Badge className="ml-2 bg-sky-100 text-sky-600">45K</Badge>
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
              <p className="text-gray-400 mb-4">Premium luxury skincare crafted with the finest natural ingredients.</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
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
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-white transition-colors">
                    News
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
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
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
