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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email address"
        className="windows-input flex-1"
        disabled={isSubmitting || isSubmitted}
      />
      <button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className="windows-button windows-button-primary whitespace-nowrap px-6 md:px-8"
      >
        {isSubmitting ? 'Subscribing...' : isSubmitted ? 'Subscribed!' : 'Subscribe'}
      </button>
      {isSubmitted && (
        <p className="text-windows-dark-accent text-sm md:text-base mt-2 sm:mt-0 sm:ml-4 flex items-center">
          ✓ Thank you for subscribing!
        </p>
      )}
    </form>
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
          <div className="windows-card p-8 md:p-12 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Subscribe to Rockefeller Press</h2>
            <p className="text-windows-dark-text-secondary text-base md:text-lg mb-6 md:mb-8">
              Stay informed with the latest crypto news, DeFi updates, and cryptocurrency reviews from Rockefeller Press.
            </p>
            
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  )
}

