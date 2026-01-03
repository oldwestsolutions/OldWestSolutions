'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

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

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isSearchOpen])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search query:', searchQuery)
    // Handle search logic here
    setIsSearchOpen(false)
    setSearchQuery('')
  }

  return (
    <>
      <header 
        className={`bg-windows-dark-surface border-b border-windows-dark-border fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled ? 'shadow-lg' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4 md:gap-8">
              <h1 className="text-lg md:text-2xl font-bold text-white">Old West Solutions</h1>
              
              <nav className="hidden md:flex space-x-1">
                <a href="#products" className="px-4 py-2 text-windows-dark-text hover:bg-windows-dark-hover rounded transition-colors">
                  Products
                </a>
                <a href="#solutions" className="px-4 py-2 text-windows-dark-text hover:bg-windows-dark-hover rounded transition-colors">
                  Solutions
                </a>
              </nav>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="windows-button hidden md:flex items-center gap-2"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>

              <button
                className="md:hidden windows-button p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                ☰
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-windows-dark-border">
              <a href="#products" className="block px-4 py-2 text-windows-dark-text hover:bg-windows-dark-hover rounded">
                Products
              </a>
              <a href="#solutions" className="block px-4 py-2 text-windows-dark-text hover:bg-windows-dark-hover rounded">
                Solutions
              </a>
              <button
                onClick={() => {
                  setIsSearchOpen(true)
                  setIsMenuOpen(false)
                }}
                className="w-full text-left px-4 py-2 text-windows-dark-text hover:bg-windows-dark-hover rounded flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-[100] flex items-start justify-center pt-32 px-4"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="windows-card p-8 w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Search</h2>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-windows-dark-text-secondary hover:text-white text-2xl"
                aria-label="Close search"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSearchSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products, solutions, or services..."
                  className="windows-input w-full pl-12 pr-4 py-4 text-lg"
                  autoFocus
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-windows-dark-text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="flex gap-4">
                <button type="submit" className="windows-button windows-button-primary flex-1">
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="windows-button"
                >
                  Cancel
                </button>
              </div>
            </form>
            <div className="mt-6 pt-6 border-t border-windows-dark-border">
              <p className="text-windows-dark-text-secondary text-sm mb-3">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {['Cloud Solutions', 'Network Security', 'IT Consulting', 'Managed Services'].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setSearchQuery(term)
                      handleSearchSubmit(new Event('submit') as any)
                    }}
                    className="px-3 py-1 bg-windows-dark-hover hover:bg-windows-dark-accent/20 text-windows-dark-text-secondary hover:text-white rounded text-sm transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

