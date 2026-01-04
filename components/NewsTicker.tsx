'use client'

import { useEffect, useState } from 'react'

const applications = [
  {
    name: 'Wintergarden',
    description: 'A music learning site that helps users master musical instruments through interactive lessons and personalized learning paths.',
  },
  {
    name: 'moneyba.gg',
    description: 'A link embedded website platform that enables seamless content sharing and link management for businesses and creators.',
  },
  {
    name: 'Pressbox',
    description: 'A new SaaS platform designed to streamline content management and publishing workflows for modern teams.',
  },
  {
    name: 'Consequence',
    description: 'An AI-powered music creation tool that leverages machine learning to help producers generate original compositions, optimize their workflow, and explore new sonic possibilities.',
  },
  {
    name: 'PayPhone',
    description: 'A neural network dedicated to generating song lyrics. Leveraging advanced sequence models and LLMs to produce context-aware, coherent, and adaptable lyrics across musical genres.',
  },
]

export default function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % applications.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-6 md:p-8 h-full flex flex-col justify-center bg-transparent/80 border border-windows-dark-border/30 backdrop-blur-md transform -skew-x-2 shadow-lg">
      <div className="mb-4 transform skew-x-2">
        <h3 className="text-sm md:text-base font-semibold text-windows-dark-accent mb-2 uppercase tracking-wide text-white">
          Our Applications
        </h3>
        <div className="h-px bg-windows-dark-border/50 mb-4"></div>
      </div>
      
      <div className="relative h-44 md:h-52 overflow-hidden">
        <div
          className="transition-transform duration-700 ease-in-out transform skew-x-2"
          style={{
            transform: `translateY(-${currentIndex * 100}%) skew-x-2`,
          }}
        >
          {applications.map((app, index) => (
            <div
              key={index}
              className="h-44 md:h-52 flex flex-col justify-center px-2"
            >
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                {app.name}
              </h4>
              <p className="text-sm md:text-base text-white leading-relaxed opacity-90 line-clamp-4">
                {app.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex gap-2 mt-4 transform skew-x-2">
        {applications.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 flex-1 transition-all duration-300 ${
              index === currentIndex
                ? 'bg-windows-dark-accent'
                : 'bg-windows-dark-border/50 hover:bg-windows-dark-border/70'
            }`}
            aria-label={`Go to application ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

