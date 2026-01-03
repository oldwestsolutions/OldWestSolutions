'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-windows-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-windows-dark-text-secondary text-lg max-w-2xl mx-auto">
            Ready to transform your IT infrastructure? Contact us today for a free consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="windows-card p-8 mb-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-windows-dark-text-secondary mb-1">Email</div>
                  <div className="text-white">info@oldwestsolutions.com</div>
                </div>
                <div>
                  <div className="text-windows-dark-text-secondary mb-1">Phone</div>
                  <div className="text-white">(555) 123-4567</div>
                </div>
                <div>
                  <div className="text-windows-dark-text-secondary mb-1">Address</div>
                  <div className="text-white">123 Tech Street<br />San Francisco, CA 94105</div>
                </div>
                <div>
                  <div className="text-windows-dark-text-secondary mb-1">Business Hours</div>
                  <div className="text-white">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 1:00 PM</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="windows-card p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-windows-dark-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="windows-input w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-windows-dark-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="windows-input w-full"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-windows-dark-text-secondary mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="windows-input w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-windows-dark-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="windows-input w-full resize-none"
                />
              </div>
              <button type="submit" className="windows-button windows-button-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

