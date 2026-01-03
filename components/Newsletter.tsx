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
    <section className="py-20 bg-windows-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="windows-card p-12 bg-gradient-to-br from-windows-dark-accent/10 to-windows-dark-accent/5">
            <div className="w-full h-64 bg-gradient-to-br from-windows-dark-accent/20 to-transparent rounded flex items-center justify-center">
              <div className="text-8xl opacity-50">🌐</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
            <h3 className="text-xl font-semibold text-white mb-2">What's New at Old West Solutions</h3>
            <p className="text-windows-dark-text-secondary mb-6">
              Subscribe to stay on top of new product features, releases, use cases, 
              expert insights, and learning opportunities.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="newsletter-email" className="block text-windows-dark-text-secondary mb-2">
                  Business email
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your.email@company.com"
                  className="windows-input w-full"
                />
              </div>
              <button type="submit" className="windows-button windows-button-primary w-full">
                Subscribe
              </button>
            </form>
            
            <p className="text-xs text-windows-dark-text-secondary mt-4">
              Subscriptions will be delivered in English. You can manage your subscription preferences or 
              <a href="#" className="text-windows-dark-accent hover:underline ml-1">learn more</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

