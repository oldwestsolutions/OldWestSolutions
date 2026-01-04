'use client'

import { useState } from 'react'

const partners = [
  { name: 'Snowflake', logo: '❄️', color: 'from-blue-500/20 to-cyan-500/20' },
  { name: 'IBM', logo: '🔵', color: 'from-blue-600/20 to-indigo-600/20' },
  { name: 'Microsoft Azure', logo: '🔷', color: 'from-blue-500/20 to-azure-500/20' },
  { name: 'Google Cloud', logo: '🌐', color: 'from-blue-400/20 to-green-400/20' },
  { name: 'Salesforce', logo: '☁️', color: 'from-blue-300/20 to-cyan-300/20' },
]

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Newsletter subscription:', email)
    setIsSubmitted(true)
    setEmail('')
    setIsSubmitting(false)
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <label htmlFor="newsletter-email" className="block text-sm font-medium text-windows-dark-text-secondary mb-3">
              Email Address
            </label>
            <div className="relative group">
              <input
                type="email"
                id="newsletter-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your.email@company.com"
                className="windows-input w-full pl-4 pr-12 py-4 text-base md:text-lg transition-all duration-300 focus:ring-2 focus:ring-windows-dark-accent focus:border-windows-dark-accent group-hover:border-windows-dark-accent/50"
                disabled={isSubmitting || isSubmitted}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-windows-dark-text-secondary group-focus-within:text-windows-dark-accent transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-auto">
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="windows-button windows-button-primary whitespace-nowrap px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-semibold w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-windows-dark-accent/20 disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </span>
              ) : isSubmitted ? (
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Subscribed!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Subscribe
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              )}
            </button>
          </div>
        </div>
      </form>
      {isSubmitted && (
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-windows-dark-accent/10 border border-windows-dark-accent/30 rounded-lg backdrop-blur-sm">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-windows-dark-accent/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-windows-dark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-windows-dark-accent text-base md:text-lg font-medium">
              Thank you for subscribing! You'll receive updates from Rockefeller Press.
            </p>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}

export default function About() {

  return (
    <section id="solutions" className="py-12 md:py-20 bg-windows-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Partners</h3>
            <p className="text-windows-dark-text-secondary mb-4 md:mb-6 text-base md:text-lg">
              Leading enterprises trust Old West Solutions to transform their IT infrastructure. 
              Our clients have seen significant improvements in efficiency, security, and operational excellence.
            </p>
            <p className="text-windows-dark-text-secondary mb-4 md:mb-6 text-sm md:text-base">
              From Fortune 500 companies to growing startups, we've helped organizations build 
              new digital capabilities, expand their reach, and increase productivity through 
              innovative technology solutions.
            </p>
            <a href="#" className="text-windows-dark-accent hover:text-windows-dark-accent-hover font-medium text-sm md:text-base">
              Learn how we help businesses transform →
            </a>
            
            <div className="mt-6 md:mt-8 space-y-2 md:space-y-3">
              {[
                { name: 'Enterprise Solutions', href: '/solutions/enterprise-solutions' },
                { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
                { name: 'Security Implementation', href: '/solutions/security-implementation' },
                { name: 'Digital Transformation', href: '/solutions/digital-transformation' }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center justify-between windows-card p-3 md:p-4 hover:border-windows-dark-accent transition-colors cursor-pointer group block"
                >
                  <span className="text-white group-hover:text-windows-dark-accent transition-colors text-sm md:text-base">{item.name}</span>
                  <span className="text-windows-dark-text-secondary group-hover:text-windows-dark-accent">→</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="windows-card p-6 md:p-8 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <div className="aspect-video rounded mb-4 md:mb-6 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80&auto=format"
                alt="Modern corporate office building"
                className="w-full h-full object-cover"
                style={{ imageRendering: 'auto' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 flex items-center justify-center"><div class="text-4xl md:text-6xl">💼</div></div>'
                }}
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">Why Choose Us?</h3>
            <ul className="space-y-3 md:space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-lg md:text-xl">✓</span>
                <span className="text-windows-dark-text-secondary text-sm md:text-base">
                  Certified Enterprise Partner with leading technology platforms
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-lg md:text-xl">✓</span>
                <span className="text-windows-dark-text-secondary text-sm md:text-base">
                  Authorized reseller and implementation partner for Salesforce, Microsoft Azure, Google Cloud, Snowflake, and IBM
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-lg md:text-xl">✓</span>
                <span className="text-windows-dark-text-secondary text-sm md:text-base">
                  Direct access to partner resources, training, and support channels
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-lg md:text-xl">✓</span>
                <span className="text-windows-dark-text-secondary text-sm md:text-base">
                  Certified consultants with up-to-date platform expertise and certifications
                </span>
              </li>
            </ul>
            <a 
              href="/partners" 
              className="windows-button windows-button-primary w-full text-center block"
            >
              View Partners →
            </a>
          </div>
        </div>

        {/* Rockefeller Press Newsletter Section */}
        <div className="mt-12 md:mt-20">
          <div className="windows-card p-8 md:p-12 lg:p-16 bg-gradient-to-br from-windows-dark-surface via-windows-dark-bg to-windows-dark-surface relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-windows-dark-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-windows-dark-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-windows-dark-accent/3 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10 md:mb-12">
                <div className="inline-block mb-4 md:mb-6">
                  <span className="text-5xl md:text-6xl">📰</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 bg-gradient-to-r from-white via-windows-dark-accent to-white bg-clip-text text-transparent">
                  Subscribe to Rockefeller Press
                </h2>
                <p className="text-windows-dark-text-secondary text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                  Stay informed with the latest crypto news, DeFi updates, and cryptocurrency reviews from Rockefeller Press.
                </p>
              </div>
              
              <div className="max-w-2xl mx-auto">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

