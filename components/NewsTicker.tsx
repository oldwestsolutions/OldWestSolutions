'use client'

import { useEffect, useState } from 'react'

const applications = [
  {
    name: 'Wintergarden',
    description: 'Music learning platform with interactive lessons and personalized paths.',
  },
  {
    name: 'moneyba.gg',
    description: 'Link embedded website for seamless content sharing and management.',
  },
  {
    name: 'Pressbox',
    description: 'SaaS platform for streamlined content management and publishing.',
  },
  {
    name: 'Consequence',
    description: 'AI-powered music creation tool for generating original compositions.',
  },
  {
    name: 'PayPhone',
    description: 'Neural network for generating context-aware song lyrics across genres.',
  },
]

export default function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % applications.length)
          return 0
        }
        return prev + 1.5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-6 md:p-8 h-full flex flex-col justify-center bg-transparent border border-windows-dark-border/30 backdrop-blur-md">
      <div className="mb-6">
        <h3 className="text-sm md:text-base font-semibold text-windows-dark-accent mb-2 uppercase tracking-wide text-white">
          Our Applications
        </h3>
        <div className="h-px bg-windows-dark-border/50 mb-4"></div>
      </div>
      
      <div className="relative h-56 md:h-64 overflow-hidden">
        <div
          className="transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateY(-${currentIndex * 100}%)`,
          }}
        >
          {applications.map((app, index) => (
            <div
              key={index}
              className="h-56 md:h-64 flex flex-col justify-center"
            >
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {app.name}
              </h4>
              <p className="text-base md:text-lg text-white leading-relaxed opacity-90">
                {app.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6">
        <div className="relative h-1 bg-windows-dark-border/30 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-windows-dark-accent transition-all duration-100 ease-linear"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
        <div className="flex gap-2 mt-3">
          {applications.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setProgress(0)
              }}
              className={`h-1.5 flex-1 transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-windows-dark-accent'
                  : 'bg-windows-dark-border/30 hover:bg-windows-dark-border/50'
              }`}
              aria-label={`Go to application ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

