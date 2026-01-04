import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'
import { ShoppingCart, Star, Truck, Shield, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Old West Solutions',
  description: 'Shop Old West Solutions products and applications. Managed servers, virtual machines, email solutions, hardware, and custom software applications including Consequence, PayPhone, Wintergarden, and more.',
  keywords: 'IT products, managed servers, virtual machines, email solutions, hardware, software applications, Consequence, PayPhone, Wintergarden, enterprise software',
  alternates: {
    canonical: '/shop',
  },
  openGraph: {
    title: 'Shop - Old West Solutions Products & Applications',
    description: 'Shop Old West Solutions products and applications. Managed servers, virtual machines, email solutions, hardware, and custom software applications.',
    url: 'https://oldwestsolutions.com/shop',
    type: 'website',
  },
}

const products = [
  {
    id: 1,
    name: 'ProHost Managed Servers',
    category: 'Managed Servers',
    price: 'Starting at $99/mo',
    originalPrice: '$149/mo',
    rating: 4.8,
    reviews: 124,
    image: '☁️',
    badge: 'Best Seller',
    features: ['24/7 Monitoring', 'Automated Backups', 'Enterprise Security', '99.9% Uptime SLA'],
    inStock: true,
    shipping: 'Free Shipping',
  },
  {
    id: 2,
    name: 'MacCloud Virtual Machines',
    category: 'Virtual Machines',
    price: 'Starting at $79/mo',
    originalPrice: '$119/mo',
    rating: 4.9,
    reviews: 89,
    image: '💻',
    badge: 'New',
    features: ['High Performance', 'Pre-configured', 'macOS Ready', 'Development Tools'],
    inStock: true,
    shipping: 'Instant Setup',
  },
  {
    id: 3,
    name: 'BusinessMail Pro Setup',
    category: 'Email Solutions',
    price: 'Starting at $29/mo',
    originalPrice: '$49/mo',
    rating: 4.7,
    reviews: 156,
    image: '📧',
    badge: 'Popular',
    features: ['Custom Domains', 'Advanced Security', 'Seamless Integration', 'Unlimited Storage'],
    inStock: true,
    shipping: 'Free Setup',
  },
  {
    id: 4,
    name: 'TechSource Hardware',
    category: 'Hardware',
    price: 'Starting at $499',
    originalPrice: '$799',
    rating: 4.6,
    reviews: 203,
    image: '🔧',
    badge: 'Sale',
    features: ['Certified Pre-owned', 'Enterprise Grade', 'Warranty Included', 'Fast Delivery'],
    inStock: true,
    shipping: 'Free Shipping',
  },
]

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-windows-dark-bg">
      <Header />
      <div className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-windows-dark-surface border-b border-windows-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm text-windows-dark-text-secondary">
              <Link href="/" className="hover:text-windows-dark-accent">Home</Link>
              <span>/</span>
              <span className="text-white">Shop</span>
            </div>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-windows-dark-accent/20 to-windows-dark-accent/10 border-b border-windows-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Shop IT Solutions</h1>
            <p className="text-lg md:text-xl text-windows-dark-text-secondary max-w-2xl">
              Enterprise-grade IT products and services. Trusted by businesses worldwide.
            </p>
          </div>
        </div>

        {/* Filters and Sort Bar - Fixed */}
        <div className="bg-windows-dark-surface border-b border-windows-dark-border fixed top-16 left-0 right-0 z-40 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
                <button className="px-4 py-2 bg-windows-dark-accent/20 text-windows-dark-accent rounded hover:bg-windows-dark-accent/30 transition-colors text-sm font-medium whitespace-nowrap">
                  All Products
                </button>
                <button className="px-4 py-2 bg-windows-dark-hover text-windows-dark-text-secondary rounded hover:bg-windows-dark-accent/20 transition-colors text-sm whitespace-nowrap">
                  Managed Servers
                </button>
                <button className="px-4 py-2 bg-windows-dark-hover text-windows-dark-text-secondary rounded hover:bg-windows-dark-accent/20 transition-colors text-sm whitespace-nowrap">
                  Virtual Machines
                </button>
                <button className="px-4 py-2 bg-windows-dark-hover text-windows-dark-text-secondary rounded hover:bg-windows-dark-accent/20 transition-colors text-sm whitespace-nowrap">
                  Email Solutions
                </button>
                <button className="px-4 py-2 bg-windows-dark-hover text-windows-dark-text-secondary rounded hover:bg-windows-dark-accent/20 transition-colors text-sm whitespace-nowrap">
                  Hardware
                </button>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <select className="windows-input text-sm py-2 px-4 w-full md:w-auto">
                  <option>Sort by: Best Match</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating: Highest</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid - Newegg Style */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pt-24 md:pt-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="windows-card p-4 md:p-6 hover:border-windows-dark-accent transition-all duration-300 group cursor-pointer bg-windows-dark-surface"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-2 right-2 z-10">
                    <span className="px-2 py-1 bg-windows-dark-accent text-white text-xs font-bold rounded">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Product Image */}
                <div className="relative mb-4 bg-windows-dark-bg rounded-lg p-8 flex items-center justify-center min-h-[200px]">
                  <span className="text-7xl md:text-8xl">{product.image}</span>
                  {product.inStock && (
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">
                      <Check className="w-3 h-3" />
                      In Stock
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <div className="text-xs text-windows-dark-accent font-medium">{product.category}</div>
                  <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-windows-dark-accent transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-windows-dark-text-secondary'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-windows-dark-text-secondary">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1 text-xs text-windows-dark-text-secondary">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-windows-dark-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="pt-2 border-t border-windows-dark-border">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl md:text-2xl font-bold text-windows-dark-accent">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-windows-dark-text-secondary line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-xs text-windows-dark-text-secondary">
                      <Truck className="w-4 h-4" />
                      {product.shipping}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <button className="flex-1 windows-button windows-button-primary text-sm py-2 flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                    <button className="px-4 py-2 windows-button text-sm">
                      <Shield className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="bg-windows-dark-surface border-t border-windows-dark-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <Truck className="w-8 h-8 text-windows-dark-accent mx-auto mb-2" />
                <div className="text-sm font-semibold text-white">Free Shipping</div>
                <div className="text-xs text-windows-dark-text-secondary">On orders over $100</div>
              </div>
              <div>
                <Shield className="w-8 h-8 text-windows-dark-accent mx-auto mb-2" />
                <div className="text-sm font-semibold text-white">Secure Payment</div>
                <div className="text-xs text-windows-dark-text-secondary">100% Protected</div>
              </div>
              <div>
                <Check className="w-8 h-8 text-windows-dark-accent mx-auto mb-2" />
                <div className="text-sm font-semibold text-white">30-Day Returns</div>
                <div className="text-xs text-windows-dark-text-secondary">Money-back guarantee</div>
              </div>
              <div>
                <Star className="w-8 h-8 text-windows-dark-accent mx-auto mb-2" />
                <div className="text-sm font-semibold text-white">24/7 Support</div>
                <div className="text-xs text-windows-dark-text-secondary">Expert assistance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
