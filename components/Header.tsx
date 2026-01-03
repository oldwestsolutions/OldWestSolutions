'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-windows-dark-surface border-b border-windows-dark-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Old West Solutions</h1>
            <span className="ml-3 text-windows-dark-text-secondary text-sm">Enterprise IT Services</span>
          </div>
          
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
            <button className="windows-button windows-button-primary ml-4">
              Get Started
            </button>
          </nav>

          <button
            className="md:hidden windows-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
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

