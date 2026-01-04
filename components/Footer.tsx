'use client'

import { useState } from 'react'
import { MapPin, Mail, Phone, Github } from 'lucide-react'

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    businessEmail: '',
    company: '',
    jobTitle: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      businessEmail: '',
      company: '',
      jobTitle: '',
      phone: '',
      message: '',
    })
    setIsContactModalOpen(false)
  }

  return (
    <>
      <footer className="bg-windows-dark-surface border-t border-windows-dark-border mt-12 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <h3 className="text-lg md:text-xl font-bold text-white">Old West Solutions</h3>
              <a 
                href="https://www.github.com/oldwestsolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-windows-dark-text-secondary hover:text-windows-dark-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-windows-dark-text-secondary text-xs md:text-sm">
              Enterprise IT services and solutions for modern businesses.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Products</h4>
            <ul className="space-y-2 text-xs md:text-sm text-windows-dark-text-secondary">
              <li><a href="/products/virtual-machines" className="hover:text-windows-dark-accent">Virtual Machines</a></li>
              <li><a href="/products/software" className="hover:text-windows-dark-accent">Software</a></li>
              <li><a href="/products/hardware" className="hover:text-windows-dark-accent">Hardware</a></li>
              <li><a href="/products/decentralized" className="hover:text-windows-dark-accent">Decentralized</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Services</h4>
            <ul className="space-y-2 text-xs md:text-sm text-windows-dark-text-secondary">
              <li><a href="/solutions/dev-ops-ci-cd" className="hover:text-windows-dark-accent">Dev Ops CI/CD</a></li>
              <li><a href="/solutions/cybersecurity" className="hover:text-windows-dark-accent">CyberSecurity</a></li>
              <li><a href="/solutions/kubernetes" className="hover:text-windows-dark-accent">Kubernetes</a></li>
              <li><a href="/solutions/full-stack" className="hover:text-windows-dark-accent">Full Stack</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Company</h4>
            <ul className="space-y-2 text-xs md:text-sm text-windows-dark-text-secondary">
              <li><a href="/university" className="hover:text-windows-dark-accent">University</a></li>
              <li><a href="/careers" className="hover:text-windows-dark-accent">Careers</a></li>
              <li><a href="/about" className="hover:text-windows-dark-accent">About Us</a></li>
              <li><a href="/legal" className="hover:text-windows-dark-accent">Legal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
            <ul className="space-y-3 text-xs md:text-sm text-windows-dark-text-secondary">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-windows-dark-accent" />
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setIsContactModalOpen(true)
                  }}
                  className="hover:text-windows-dark-accent transition-colors text-left cursor-pointer"
                >
                  Mail Us
                </button>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-windows-dark-accent" />
                <a href="tel:9453824660" className="hover:text-windows-dark-accent transition-colors">
                  (945) 382-4660
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-windows-dark-accent" />
                <span>Dallas, Texas</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-windows-dark-border text-center text-xs md:text-sm text-windows-dark-text-secondary">
          <p>&copy; {new Date().getFullYear()} Old West Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>

    {/* Contact Modal */}
    {isContactModalOpen && (
      <div
        className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
        onClick={() => setIsContactModalOpen(false)}
      >
        <div
          className="windows-card p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Contact Us</h2>
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="text-windows-dark-text-secondary hover:text-white text-3xl leading-none"
              aria-label="Close contact form"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-windows-dark-text-secondary mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="windows-input w-full"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="contact-businessEmail" className="block text-sm font-medium text-windows-dark-text-secondary mb-2">
                Business Email *
              </label>
              <input
                type="email"
                id="contact-businessEmail"
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleChange}
                required
                className="windows-input w-full"
                placeholder="your.email@company.com"
              />
            </div>

            <div>
              <label htmlFor="contact-company" className="block text-sm font-medium text-windows-dark-text-secondary mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="contact-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="windows-input w-full"
                placeholder="Your Company Inc."
              />
            </div>

            <div>
              <label htmlFor="contact-jobTitle" className="block text-sm font-medium text-windows-dark-text-secondary mb-2">
                Job Title *
              </label>
              <input
                type="text"
                id="contact-jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                className="windows-input w-full"
                placeholder="CTO, IT Director, etc."
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium text-windows-dark-text-secondary mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="windows-input w-full"
                placeholder="(945) 382-4660"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-windows-dark-text-secondary mb-2">
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="windows-input w-full resize-none"
                placeholder="Tell us about your business needs and how we can help..."
              />
            </div>

            <div className="flex gap-4">
              <button type="submit" className="windows-button windows-button-primary flex-1">
                Send Message
              </button>
              <button
                type="button"
                onClick={() => setIsContactModalOpen(false)}
                className="windows-button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
    </>
  )
}

