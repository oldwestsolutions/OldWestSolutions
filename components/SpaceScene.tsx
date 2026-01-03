'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, Sphere } from '@react-three/drei'

function CelestialSphere() {
  const meshRef = useRef<any>(null)
  
  const textures = useMemo(() => {
    const createGrayscaleTexture = (size: number, baseGray: number, variation: number) => {
      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext('2d')!
      
      const imageData = ctx.createImageData(size, size)
      const data = imageData.data
      
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * variation
        const gray = Math.max(0, Math.min(255, baseGray + noise))
        data[i] = gray
        data[i + 1] = gray
        data[i + 2] = gray
        data[i + 3] = 255
      }
      
      ctx.putImageData(imageData, 0, 0)
      return canvas
    }
    
    return {
      color: createGrayscaleTexture(1024, 70, 25),
      normal: createGrayscaleTexture(1024, 128, 15),
      roughness: createGrayscaleTexture(1024, 200, 20),
    }
  }, [])

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.01
    }
  })

  return (
    <>
      <Environment
        preset="night"
        environmentIntensity={0.3}
        background={false}
      />
      
      <ambientLight intensity={0.15} color="#E0E0E0" />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.4}
        color="#D0D0D0"
        castShadow={false}
      />
      
      <Sphere ref={meshRef} args={[1, 128, 128]} scale={2.2}>
        <meshStandardMaterial
          color="#4A4A4A"
          roughness={0.85}
          metalness={0.1}
          envMapIntensity={0.2}
        />
      </Sphere>
    </>
  )
}

export default function SpaceScene() {
  return <CelestialSphere />
}

