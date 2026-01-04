'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    businessEmail: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({
      name: '',
      businessEmail: '',
      company: '',
      phone: '',
      service: '',
      message: '',
    })
    setIsModalOpen(false)
  }

  return (
    <>
      <section className="py-12 md:py-20 bg-windows-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="windows-card p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-windows-dark-text-secondary text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Ready to transform your IT infrastructure? Contact us today to discuss your business needs and discover how our services can help you achieve your goals.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="windows-button windows-button-primary text-lg md:text-xl px-8 md:px-10 py-3 md:py-4"
            >
              Contact Us for Services
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="windows-card p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Contact Us</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-windows-dark-text-secondary hover:text-white text-3xl leading-none"
                aria-label="Close contact form"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-windows-dark-text-secondary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="windows-input w-full"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="businessEmail" className="block text-sm font-medium text-windows-dark-text-secondary mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  id="businessEmail"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  required
                  className="windows-input w-full"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-windows-dark-text-secondary mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="windows-input w-full"
                  placeholder="Your Company Inc."
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-windows-dark-text-secondary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="windows-input w-full"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-windows-dark-text-secondary mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="windows-input w-full"
                >
                  <option value="">Select a service...</option>
                  <option value="virtual-machines">Virtual Machines</option>
                  <option value="applications">Applications</option>
                  <option value="blockchain">Blockchain</option>
                  <option value="kubernetes">Kubernetes</option>
                  <option value="crypto">Crypto</option>
                  <option value="dev-ops">Dev Ops CI/CD</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="ml">Machine Learning</option>
                  <option value="quantum">Quantum Computing</option>
                  <option value="cybersecurity">CyberSecurity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-windows-dark-text-secondary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="windows-input w-full resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <div className="flex gap-4">
                <button type="submit" className="windows-button windows-button-primary flex-1">
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
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
