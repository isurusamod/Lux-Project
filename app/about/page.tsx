import Image from "next/image"
import Link from "next/link"
import { Sparkles, Users, Award, Leaf, Heart, Globe, Factory, Target, Calendar, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
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
      <section className="py-16 px-4 relative overflow-hidden">
        {/* Background Video */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/Ingredient Asset - Gardenia.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/60 via-rose-800/40 to-purple-900/60 z-10"></div>

        {/* Content */}
        <div className="container mx-auto text-center relative z-20">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">Our Story</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About
            <span className="text-rose-200 block">Lux Soap</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            For over three decades, we've been crafting luxury skincare that transforms everyday routines into
            extraordinary experiences.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-rose-100 text-rose-800">Founded 1991</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey Began with a Simple Dream</h2>
              <p className="text-lg text-gray-600 mb-6">
                In 1991, master soap artisan Elena Rodriguez founded Lux with a vision to create the world's most
                luxurious, natural soap bars. Starting in a small workshop in Provence, France, Elena combined
                traditional soap-making techniques with the finest organic ingredients sourced from around the globe.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What began as a passion project has grown into a globally recognized luxury skincare brand, but our
                commitment to quality, craftsmanship, and natural ingredients remains unchanged. Every bar is still
                handcrafted in small batches, ensuring the same attention to detail that made our first soap special.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, Lux continues to set the standard for luxury skincare, with our products gracing the finest spas
                and homes in over 50 countries worldwide.
              </p>
              <Button className="bg-rose-600 hover:bg-rose-700">Discover Our Products</Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Elena Rodriguez, founder of Lux Soap"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe luxury should be accessible, sustainable, and transformative for both your skin and the world
              around us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every ingredient is carefully selected and every bar is crafted to
                  perfection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  Our commitment to the environment drives every decision, from ingredient sourcing to packaging design.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
                <p className="text-gray-600">
                  We support local communities and fair trade practices, ensuring our success benefits everyone
                  involved.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We continuously research and develop new formulations while honoring traditional soap-making methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Craftsmanship Process</h2>
            <p className="text-xl text-gray-600">From raw ingredients to finished luxury bars</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Sourcing</h3>
              <p className="text-gray-600">
                We source the finest organic ingredients from sustainable farms across the globe, ensuring quality and
                ethical practices.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Crafting</h3>
              <p className="text-gray-600">
                Our master artisans hand-craft each bar using traditional cold-process methods, ensuring optimal quality
                and skin benefits.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Testing</h3>
              <p className="text-gray-600">
                Every batch undergoes rigorous quality testing to ensure it meets our exacting standards for purity and
                performance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Packaging</h3>
              <p className="text-gray-600">
                Each bar is carefully wrapped in our signature sustainable packaging, ready to deliver luxury to your
                doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind every Lux soap bar</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-rose-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-rose-600">ER</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Elena Rodriguez</h3>
                <p className="text-rose-600 font-medium mb-4">Founder & Master Artisan</p>
                <p className="text-gray-600">
                  With over 30 years of experience, Elena continues to oversee every aspect of our soap-making process,
                  ensuring each bar meets her exacting standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">MJ</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marcus Johnson</h3>
                <p className="text-green-600 font-medium mb-4">Head of Sustainability</p>
                <p className="text-gray-600">
                  Marcus leads our environmental initiatives, ensuring our operations remain carbon-neutral and our
                  packaging is 100% sustainable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">SC</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Sarah Chen</h3>
                <p className="text-blue-600 font-medium mb-4">Chief Innovation Officer</p>
                <p className="text-gray-600">
                  Dr. Chen leads our research and development team, constantly exploring new natural ingredients and
                  formulation techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-purple-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">AL</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Antoine Laurent</h3>
                <p className="text-purple-600 font-medium mb-4">Master Perfumer</p>
                <p className="text-gray-600">
                  Antoine creates our signature scent profiles, blending essential oils and natural fragrances to create
                  unforgettable sensory experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-amber-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber-600">RP</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Raj Patel</h3>
                <p className="text-amber-600 font-medium mb-4">Global Sourcing Director</p>
                <p className="text-gray-600">
                  Raj travels the world to establish partnerships with organic farms and ensure we source only the
                  highest quality ingredients.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-pink-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-pink-600">LM</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lisa Martinez</h3>
                <p className="text-pink-600 font-medium mb-4">Quality Assurance Manager</p>
                <p className="text-gray-600">
                  Lisa ensures every batch meets our rigorous quality standards through comprehensive testing and
                  quality control processes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey Through Time</h2>
            <p className="text-xl text-gray-600">Key milestones in our company's history</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-rose-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <Badge className="mb-2 bg-rose-100 text-rose-800">1991</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Company Founded</h3>
                  <p className="text-gray-600">
                    Elena Rodriguez establishes Lux in a small workshop in Provence, France, with a mission to create
                    the world's finest natural soap bars.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <Badge className="mb-2 bg-green-100 text-green-800">1998</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">First International Award</h3>
                  <p className="text-gray-600">
                    Lux receives the "Best Natural Skincare Product" award at the International Beauty Expo, gaining
                    global recognition.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <Badge className="mb-2 bg-blue-100 text-blue-800">2005</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Expansion</h3>
                  <p className="text-gray-600">
                    Lux products become available in luxury spas and boutiques across 25 countries, establishing our
                    international presence.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <Badge className="mb-2 bg-purple-100 text-purple-800">2015</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability Initiative</h3>
                  <p className="text-gray-600">
                    Launch of our comprehensive sustainability program, achieving carbon-neutral operations and
                    introducing biodegradable packaging.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <Badge className="mb-2 bg-amber-100 text-amber-800">2024</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Lab Opens</h3>
                  <p className="text-gray-600">
                    Opening of our state-of-the-art research facility dedicated to developing next-generation natural
                    skincare formulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Celebrating our achievements in luxury skincare</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Best Luxury Brand 2024</h3>
                <p className="text-sm text-gray-600">International Beauty Awards</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sustainability Excellence</h3>
                <p className="text-sm text-gray-600">Green Beauty Awards 2023</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Customer Choice Award</h3>
                <p className="text-sm text-gray-600">Skincare Review Magazine 2023</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Innovation in Beauty</h3>
                <p className="text-sm text-gray-600">Global Cosmetics Summit 2022</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Luxury Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the difference that three decades of craftsmanship and passion can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-4">
              Shop Our Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-600 text-lg px-8 py-4"
            >
              Visit Our Store
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
