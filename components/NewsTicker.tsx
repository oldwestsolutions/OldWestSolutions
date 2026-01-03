'use client'

import { useEffect, useState } from 'react'

const newsItems = [
  'New Cloud Migration Services Now Available',
  'Partnership with Microsoft Azure Expanded',
  'Enterprise Security Solutions Updated',
  'AI-Powered Automation Tools Launched',
  '24/7 Support Now Available Globally',
  'Data Analytics Platform Enhanced',
  'Blockchain Solutions for Enterprise',
  'Hybrid Cloud Architecture Services',
]

export default function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="windows-card p-6 md:p-8 h-full flex flex-col justify-center">
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-semibold text-windows-dark-accent mb-2 uppercase tracking-wide">
          Latest News
        </h3>
        <div className="h-px bg-windows-dark-border mb-4"></div>
      </div>
      
      <div className="relative h-32 md:h-40 overflow-hidden">
        <div
          className="transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateY(-${currentIndex * 100}%)`,
          }}
        >
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="h-32 md:h-40 flex items-center"
            >
              <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex gap-2 mt-4">
        {newsItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 flex-1 transition-all ${
              index === currentIndex
                ? 'bg-windows-dark-accent'
                : 'bg-windows-dark-border'
            }`}
            aria-label={`Go to news item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

