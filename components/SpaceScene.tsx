'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'

export default function SpaceScene() {
  const planetRef = useRef<THREE.Mesh>(null)
  const ringRef1 = useRef<THREE.Mesh>(null)
  const ringRef2 = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.2
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.z += delta * 0.1
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z -= delta * 0.15
    }
  })

  return (
    <>
      {/* Stars background - gray/white stars to match site theme */}
      <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Ambient lighting for space */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#E0E0E0" />
      <pointLight position={[5, -5, 5]} intensity={0.4} color="#B0B0B0" />
      
      {/* Detailed Dark Gray/Black Planet */}
      <group position={[0, 0, 0]}>
        {/* Main planet sphere with high detail */}
        <Sphere ref={planetRef} args={[1, 128, 128]} scale={2.5}>
          <meshStandardMaterial
            color="#1A1A1A"
            roughness={0.7}
            metalness={0.3}
            emissive="#0A0A0A"
            emissiveIntensity={0.1}
          />
        </Sphere>
        
        {/* Surface detail layer 1 - craters and variations */}
        <Sphere args={[1.01, 128, 128]} scale={2.5}>
          <meshStandardMaterial
            color="#2D2D2D"
            roughness={0.8}
            metalness={0.2}
            transparent
            opacity={0.6}
          />
        </Sphere>
        
        {/* Surface detail layer 2 - darker patches */}
        <Sphere args={[1.02, 128, 128]} scale={2.5}>
          <meshStandardMaterial
            color="#151515"
            roughness={0.9}
            metalness={0.1}
            transparent
            opacity={0.4}
          />
        </Sphere>
        
        {/* Highlighted surface features */}
        <Sphere args={[1.005, 128, 128]} scale={2.5}>
          <meshStandardMaterial
            color="#3D3D3D"
            roughness={0.6}
            metalness={0.4}
            transparent
            opacity={0.3}
          />
        </Sphere>
      </group>
      
      {/* Intricate orbital rings - dark gray */}
      <mesh ref={ringRef1} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.8, 3.2, 128]} />
        <meshStandardMaterial
          color="#2D2D2D"
          roughness={0.5}
          metalness={0.6}
          opacity={0.4}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
      
      <mesh ref={ringRef2} rotation={[Math.PI / 2, 0, Math.PI / 4]}>
        <ringGeometry args={[3.5, 3.7, 128]} />
        <meshStandardMaterial
          color="#1A1A1A"
          roughness={0.6}
          metalness={0.5}
          opacity={0.3}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Additional inner ring for detail */}
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 8]}>
        <ringGeometry args={[2.2, 2.4, 64]} />
        <meshStandardMaterial
          color="#3D3D3D"
          roughness={0.4}
          metalness={0.7}
          opacity={0.2}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  )
}

