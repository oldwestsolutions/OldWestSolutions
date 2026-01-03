'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter subscription:', email)
    alert('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <section className="py-12 md:py-20 bg-windows-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="windows-card p-6 md:p-12 bg-gradient-to-br from-windows-dark-accent/10 to-windows-dark-accent/5 order-2 lg:order-1">
            <div className="w-full h-48 md:h-64 bg-gradient-to-br from-windows-dark-accent/20 to-transparent rounded flex items-center justify-center">
              <div className="text-5xl md:text-8xl opacity-50">🌐</div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Stay Connected</h2>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">What's New at Old West Solutions</h3>
            <p className="text-windows-dark-text-secondary mb-4 md:mb-6 text-sm md:text-base">
              Subscribe to stay on top of new product features, releases, use cases, 
              expert insights, and learning opportunities.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label htmlFor="newsletter-email" className="block text-windows-dark-text-secondary mb-2 text-sm md:text-base">
                  Business email
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your.email@company.com"
                  className="windows-input w-full text-sm md:text-base"
                />
              </div>
              <button type="submit" className="windows-button windows-button-primary w-full text-sm md:text-base py-2 md:py-3">
                Subscribe
              </button>
            </form>
            
            <p className="text-xs text-windows-dark-text-secondary mt-3 md:mt-4">
              Subscriptions will be delivered in English. You can manage your subscription preferences or 
              <a href="#" className="text-windows-dark-accent hover:underline ml-1">learn more</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

