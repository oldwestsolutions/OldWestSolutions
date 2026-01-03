'use client'

import { useState, useEffect } from 'react'

const partners = [
  { name: 'Snowflake', logo: '❄️', color: 'from-blue-500/20 to-cyan-500/20' },
  { name: 'IBM', logo: '🔵', color: 'from-blue-600/20 to-indigo-600/20' },
  { name: 'Microsoft Azure', logo: '🔷', color: 'from-blue-500/20 to-azure-500/20' },
  { name: 'Google Cloud', logo: '🌐', color: 'from-blue-400/20 to-green-400/20' },
  { name: 'Salesforce', logo: '☁️', color: 'from-blue-300/20 to-cyan-300/20' },
]

export default function About() {
  const [currentPartner, setCurrentPartner] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="solutions" className="py-12 md:py-20 bg-windows-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Smarter business. Real impact.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Success Stories</h3>
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
            <div className="aspect-video bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 rounded mb-4 md:mb-6 flex items-center justify-center relative overflow-hidden">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 bg-gradient-to-br ${partner.color} transition-opacity duration-1000 ${
                    index === currentPartner ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>
              ))}
              <div className="relative z-10 text-center w-full">
                <div className="text-5xl md:text-7xl mb-4 transition-all duration-500">{partners[currentPartner].logo}</div>
                <div className="text-2xl md:text-3xl font-bold text-white">{partners[currentPartner].name}</div>
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">Enterprise Technology Partner</h3>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4 md:mb-6">
              As a certified Enterprise Partner, we deliver world-class solutions powered by industry-leading platforms.
            </p>
            
            {/* Stats Carousel */}
            <div className="relative h-48 md:h-56 overflow-hidden">
              <div 
                className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentPartner * 100}%)` }}
              >
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                    style={{ left: `${index * 100}%` }}
                  >
                    <div className="text-center w-full">
                      <div className="text-3xl md:text-4xl mb-2">{partner.logo}</div>
                      <div className="text-lg md:text-xl font-semibold text-white mb-4">{partner.name}</div>
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <div className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-windows-dark-accent mb-1">500+</div>
                          <div className="text-xs md:text-sm text-windows-dark-text-secondary">Clients Served</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-windows-dark-accent mb-1">15+</div>
                          <div className="text-xs md:text-sm text-windows-dark-text-secondary">Years Experience</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-windows-dark-accent mb-1">99.9%</div>
                          <div className="text-xs md:text-sm text-windows-dark-text-secondary">Uptime SLA</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-windows-dark-accent mb-1">24/7</div>
                          <div className="text-xs md:text-sm text-windows-dark-text-secondary">Support Available</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPartner(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentPartner
                      ? 'bg-windows-dark-accent w-8'
                      : 'bg-windows-dark-border w-2 hover:bg-windows-dark-hover'
                  }`}
                  aria-label={`View ${partners[index].name}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-windows-dark-accent mb-1 md:mb-2">500+</div>
            <div className="text-windows-dark-text-secondary text-xs md:text-sm">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-windows-dark-accent mb-1 md:mb-2">15+</div>
            <div className="text-windows-dark-text-secondary text-xs md:text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-windows-dark-accent mb-1 md:mb-2">99.9%</div>
            <div className="text-windows-dark-text-secondary text-xs md:text-sm">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-windows-dark-accent mb-1 md:mb-2">24/7</div>
            <div className="text-windows-dark-text-secondary text-xs md:text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}

