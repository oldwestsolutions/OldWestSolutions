'use client'

import { Canvas } from '@react-three/fiber'
import SpaceScene from './SpaceScene'

export default function Hero() {
  return (
    <section id="home" className="relative py-12 md:py-20 min-h-[600px] md:min-h-[700px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0F0F0F]"></div>
      
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={(canvas) => {
            const { WebGLRenderer } = require('three')
            const renderer = new WebGLRenderer({ canvas, antialias: true })
            renderer.physicallyCorrectLights = true
            renderer.outputColorSpace = 'srgb'
            renderer.toneMapping = 1
            renderer.toneMappingExposure = 0.8
            return renderer
          }}
        >
          <SpaceScene />
        </Canvas>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[600px] md:min-h-[700px]">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Enterprise IT Solutions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-windows-dark-text-secondary mb-6 md:mb-8 leading-relaxed">
              Empowering your business with cutting-edge technology and reliable IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button className="windows-button windows-button-primary text-base md:text-lg px-6 md:px-8 py-2 md:py-3">
                Get Started
              </button>
              <button className="windows-button text-base md:text-lg px-6 md:px-8 py-2 md:py-3">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

