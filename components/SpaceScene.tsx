'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'

// Create moon surface texture with noise for realistic craters and surface detail
function createMoonTexture() {
  const size = 512
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  
  // Base gray color
  ctx.fillStyle = '#2D2D2D'
  ctx.fillRect(0, 0, size, size)
  
  // Add noise for surface texture
  const imageData = ctx.getImageData(0, 0, size, size)
  const data = imageData.data
  
  for (let i = 0; i < data.length; i += 4) {
    const noise = Math.random() * 30 - 15
    data[i] = Math.max(0, Math.min(255, 45 + noise))     // R
    data[i + 1] = Math.max(0, Math.min(255, 45 + noise)) // G
    data[i + 2] = Math.max(0, Math.min(255, 45 + noise)) // B
  }
  
  // Add larger craters
  for (let i = 0; i < 20; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const radius = Math.random() * 30 + 10
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
    gradient.addColorStop(0, 'rgba(20, 20, 20, 0.8)')
    gradient.addColorStop(1, 'rgba(45, 45, 45, 0)')
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
  }
  
  // Add smaller craters
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const radius = Math.random() * 8 + 3
    ctx.fillStyle = `rgba(20, 20, 20, ${0.6 + Math.random() * 0.3})`
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
  }
  
  ctx.putImageData(imageData, 0, 0)
  
  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  return texture
}

// Create normal map for surface depth
function createMoonNormalMap() {
  const size = 512
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  
  // Base normal map color (neutral)
  ctx.fillStyle = '#8080ff'
  ctx.fillRect(0, 0, size, size)
  
  // Add variations for surface depth
  const imageData = ctx.getImageData(0, 0, size, size)
  const data = imageData.data
  
  for (let i = 0; i < data.length; i += 4) {
    const variation = Math.random() * 20 - 10
    data[i] = Math.max(0, Math.min(255, 128 + variation))     // R
    data[i + 1] = Math.max(0, Math.min(255, 128 + variation)) // G
    data[i + 2] = 255 // B (always max for normal maps)
  }
  
  ctx.putImageData(imageData, 0, 0)
  
  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  return texture
}

export default function SpaceScene() {
  const moonRef = useRef<THREE.Mesh>(null)
  
  // Create textures once
  const moonTexture = useMemo(() => createMoonTexture(), [])
  const moonNormalMap = useMemo(() => createMoonNormalMap(), [])

  useFrame((state, delta) => {
    // Very slow, smooth moon rotation (moonwatch style)
    if (moonRef.current) {
      moonRef.current.rotation.y += delta * 0.02
    }
  })

  return (
    <>
      {/* Stars background - gray/white stars to match site theme */}
      <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Moon lighting - realistic lighting like moonwatch */}
      <ambientLight intensity={0.2} />
      {/* Main light source (sun) - creates realistic moon phases */}
      <directionalLight position={[10, 5, 5]} intensity={1.2} color="#E0E0E0" castShadow />
      {/* Fill light for dark side */}
      <directionalLight position={[-5, -3, -5]} intensity={0.15} color="#B0B0B0" />
      {/* Rim light for edge definition */}
      <pointLight position={[-8, 8, -8]} intensity={0.3} color="#E0E0E0" />
      
      {/* Realistic 3D Moon - moonwatch inspired design */}
      <Sphere ref={moonRef} args={[1, 256, 256]} scale={2.5}>
        <meshStandardMaterial
          map={moonTexture}
          normalMap={moonNormalMap}
          color="#2D2D2D"
          roughness={0.95}
          metalness={0.05}
          emissive="#1A1A1A"
          emissiveIntensity={0.02}
        />
      </Sphere>
      
      {/* Slow auto-rotate for viewing - moonwatch style */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.05}
      />
    </>
  )
}

