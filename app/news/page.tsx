import Image from "next/image"
import Link from "next/link"
import { Sparkles, Calendar, User, ArrowRight, Tag, Clock, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NewsPage() {
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
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-rose-100 text-rose-800 hover:bg-rose-100">Latest Updates</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Lux
            <span className="text-rose-600 block">News & Stories</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest from Lux - new product launches, beauty tips, sustainability initiatives, and
            behind-the-scenes stories.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-rose-600" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Story</h2>
            </div>
          </div>

          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Sustainable soap making process"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-4 left-4 bg-rose-600 text-white">Featured</Badge>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>December 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Sarah Mitchell</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Journey to 100% Sustainable Packaging</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Discover how Lux is revolutionizing luxury skincare with our commitment to environmental
                  responsibility. From biodegradable wrappers to refillable containers, we're leading the way in
                  sustainable beauty.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Sustainability
                  </Badge>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    Innovation
                  </Badge>
                  <Badge variant="outline" className="text-purple-600 border-purple-600">
                    Environment
                  </Badge>
                </div>
                <Button className="bg-rose-600 hover:bg-rose-700 w-fit">
                  Read Full Story
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Category</h2>
            <p className="text-xl text-gray-600">Find stories that interest you most</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-200 transition-colors">
                  <Sparkles className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">New Products</h3>
                <p className="text-sm text-gray-600 mb-4">Latest launches and innovations</p>
                <Badge className="bg-rose-100 text-rose-800">12 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Tag className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Beauty Tips</h3>
                <p className="text-sm text-gray-600 mb-4">Expert skincare advice</p>
                <Badge className="bg-green-100 text-green-800">8 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Behind the Scenes</h3>
                <p className="text-sm text-gray-600 mb-4">Meet our team and process</p>
                <Badge className="bg-blue-100 text-blue-800">6 Articles</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sustainability</h3>
                <p className="text-sm text-gray-600 mb-4">Our environmental commitment</p>
                <Badge className="bg-purple-100 text-purple-800">5 Articles</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Recent News</h2>
            <Button variant="outline" className="text-rose-600 border-rose-600 hover:bg-rose-50">
              View All Articles
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=250&width=350"
                  alt="New Rose Collection"
                  width={350}
                  height={250}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-3 left-3 bg-rose-600 text-white">New Launch</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 10, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>3 min read</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Introducing Our Limited Edition Rose Garden Collection
                </h3>
                <p className="text-gray-600 mb-4">
                  Experience the essence of a blooming rose garden with our newest collection featuring rare Bulgarian
                  rose oil and organic petals.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-rose-600 border-rose-600">
                    New Products
                  </Badge>
                  <Badge variant="outline" className="text-pink-600 border-pink-600">
                    Limited Edition
                  </Badge>
                </div>
                <Button variant="ghost" className="text-rose-600 hover:text-rose-700 p-0">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Article 2 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=250&width=350"
                  alt="Skincare routine"
                  width={350}
                  height={250}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-3 left-3 bg-green-600 text-white">Beauty Tips</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 8, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>4 min read</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Winter Skincare: 5 Essential Tips for Healthy Skin
                </h3>
                <p className="text-gray-600 mb-4">
                  Keep your skin glowing through the cold months with these expert-approved tips from our skincare
                  specialists.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Beauty Tips
                  </Badge>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    Skincare
                  </Badge>
                </div>
                <Button variant="ghost" className="text-rose-600 hover:text-rose-700 p-0">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Article 3 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=250&width=350"
                  alt="Artisan soap making"
                  width={350}
                  height={250}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-3 left-3 bg-blue-600 text-white">Behind the Scenes</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 5, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>6 min read</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Meet Master Craftsman Elena: 20 Years of Soap Artistry
                </h3>
                <p className="text-gray-600 mb-4">
                  Go behind the scenes with Elena Rodriguez, our head soap artisan, as she shares her passion for
                  creating perfect luxury bars.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    Behind the Scenes
                  </Badge>
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    Craftsmanship
                  </Badge>
                </div>
                <Button variant="ghost" className="text-rose-600 hover:text-rose-700 p-0">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Article 4 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=250&width=350"
                  alt="Sustainable packaging"
                  width={350}
                  height={250}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-3 left-3 bg-purple-600 text-white">Sustainability</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 3, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Zero Waste Goal: Our 2025 Sustainability Roadmap
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn about our ambitious plan to achieve zero waste in production and packaging by 2025, setting new
                  industry standards.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-purple-600 border-purple-600">
                    Sustainability
                  </Badge>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Environment
                  </Badge>
                </div>
                <Button variant="ghost" className="text-rose-600 hover:text-rose-700 p-0">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Article 5 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=250&width=350"
                  alt="Ingredient sourcing"
                  width={350}
                  height={250}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-3 left-3 bg-amber-600 text-white">Ingredients</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Nov 30, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>4 min read</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  From Farm to Bar: Sourcing the World's Finest Ingredients
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how we partner with sustainable farms across the globe to source the premium natural
                  ingredients in every Lux soap bar.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-amber-600 border-amber-600">
                    Ingredients
                  </Badge>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Sourcing
                  </Badge>
                </div>
                <Button variant="ghost" className="text-rose-600 hover:text-rose-700 p-0">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Article 6 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=250&width=350"
                  alt="Awards ceremony"
                  width={350}
                  height={250}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-3 left-3 bg-yellow-600 text-white">Awards</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Nov 28, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>2 min read</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Lux Wins 'Best Luxury Skincare Brand' at Beauty Awards 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  We're honored to receive this prestigious recognition for our commitment to quality, innovation, and
                  sustainable luxury skincare.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                    Awards
                  </Badge>
                  <Badge variant="outline" className="text-rose-600 border-rose-600">
                    Recognition
                  </Badge>
                </div>
                <Button variant="ghost" className="text-rose-600 hover:text-rose-700 p-0">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest news, tips, and exclusive offers
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-rose-600 hover:bg-gray-100 px-6 py-3">Subscribe</Button>
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
