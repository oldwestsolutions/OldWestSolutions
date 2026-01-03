'use client'

import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Environment, Sphere } from '@react-three/drei'

function CelestialSphere() {
  const meshRef = useRef<any>(null)
  const { gl } = useThree()

  useEffect(() => {
    gl.physicallyCorrectLights = true
    gl.outputColorSpace = 'srgb'
    gl.toneMapping = 1
    gl.toneMappingExposure = 0.8
  }, [gl])

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

