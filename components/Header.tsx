'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        setIsScrolled(false)
        setIsVisible(true)
      } else {
        setIsScrolled(true)
        // Hide header when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header 
      className={`bg-windows-dark-surface border-b border-windows-dark-border fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'shadow-lg' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-white">Old West Solutions</h1>
            
            <nav className="hidden md:flex space-x-1">
              <a href="#home" className="px-4 py-2 text-windows-dark-text hover:bg-windows-dark-hover rounded transition-colors">
                Home
              </a>
              <a href="#services" className="px-4 py-2 text-windows-dark-text hover:bg-windows-dark-hover rounded transition-colors">
                Services
              </a>
              <a href="#about" className="px-4 py-2 text-windows-dark-text hover:bg-windows-dark-hover rounded transition-colors">
                About
              </a>
              <a href="#contact" className="px-4 py-2 text-windows-dark-text hover:bg-windows-dark-hover rounded transition-colors">
                Contact
              </a>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="windows-button windows-button-primary hidden md:block">
              Get Started
            </button>

            <button
              className="md:hidden windows-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-windows-dark-border">
            <a href="#home" className="block px-4 py-2 text-windows-dark-text hover:bg-windows-dark-hover rounded">
              Home
            </a>
            <a href="#services" className="block px-4 py-2 text-windows-dark-text hover:bg-windows-dark-hover rounded">
              Services
            </a>
            <a href="#about" className="block px-4 py-2 text-windows-dark-text hover:bg-windows-dark-hover rounded">
              About
            </a>
            <a href="#contact" className="block px-4 py-2 text-windows-dark-text hover:bg-windows-dark-hover rounded">
              Contact
            </a>
            <button className="windows-button windows-button-primary mt-2 w-full">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

