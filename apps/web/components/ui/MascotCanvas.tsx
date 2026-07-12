'use client'

import React, { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows, Float, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import { useSpring, animated, config } from '@react-spring/three'
import * as THREE from 'three'

// The GLTF model component
function MascotModel({ url, hovered, clicked }: { url: string; hovered: boolean; clicked: boolean }) {
  const { scene } = useGLTF(url)
  const groupRef = useRef<THREE.Group>(null)
  const { mouse, viewport, camera } = useThree()

  // Track delayed mouse position for natural "noticing"
  const targetMouse = useRef(new THREE.Vector2())
  const currentMouse = useRef(new THREE.Vector2())
  const lastMouseMove = useRef(0)

  // Glow intensity based on proximity
  const [glowIntensity, setGlowIntensity] = useState(0)

  // Springs for behavioral animation
  const [{ rotation, scale, position }] = useSpring(() => ({
    rotation: [0, 0, 0],
    scale: clicked ? [1.05, 0.9, 1.05] : hovered ? [1.02, 1.02, 1.02] : [1, 1, 1],
    position: [0, 0, 0],
    config: hovered ? config.wobbly : config.gentle
  }), [hovered, clicked])

  // Periodic random "thinking" mode
  const [thinking, setThinking] = useState(false)

  useEffect(() => {
    const thinkInterval = setInterval(() => {
      if (Math.random() > 0.5) {
        setThinking(true)
        setTimeout(() => setThinking(false), 2000 + Math.random() * 2000)
      }
    }, 15000 + Math.random() * 15000)
    return () => clearInterval(thinkInterval)
  }, [])

  useFrame((state, delta) => {
    // 1. Mouse Interaction with delay
    const now = performance.now()
    if (mouse.x !== targetMouse.current.x || mouse.y !== targetMouse.current.y) {
      targetMouse.current.copy(mouse)
      lastMouseMove.current = now
    }

    // Only react if 200ms has passed since last move, or just interpolate smoothly
    if (now - lastMouseMove.current > 200) {
      currentMouse.current.lerp(targetMouse.current, 0.05)
    }

    // 2. Calculate rotations (Head/Body tracking)
    // Max body rotation 5 deg (approx 0.08 rad), Max head 12 deg (approx 0.2 rad)
    // Since we only have the root group, we'll simulate it by rotating the whole group slightly
    let targetX = 0
    let targetY = 0

    if (thinking) {
      targetX = -0.15 // Look up
      targetY = 0.1 // Slight tilt
    } else {
      targetX = (currentMouse.current.y * viewport.height) / 100
      targetY = (currentMouse.current.x * viewport.width) / 100
      
      // Clamp to max angles
      targetX = THREE.MathUtils.clamp(targetX, -0.2, 0.2)
      targetY = THREE.MathUtils.clamp(targetY, -0.15, 0.15)
    }

    if (groupRef.current) {
      // Smooth interpolation using slerp or simple lerp for rotation
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05)
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05)
      
      // Idle breathing/sway combined with hover
      const t = state.clock.elapsedTime
      const breathe = Math.sin(t * 1.5) * 0.02
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, breathe + (hovered ? 0.1 : 0), 0.1)
    }

    // 3. Proximity Glow
    const dist = currentMouse.current.length()
    const targetGlow = hovered ? 2.5 : Math.max(0.5, 1 - dist)
    setGlowIntensity(THREE.MathUtils.lerp(glowIntensity, targetGlow, 0.05))
  })

  // Traverse and enhance materials if possible (e.g. increase metalness)
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        mesh.castShadow = true
        mesh.receiveShadow = true
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial
          mat.roughness = Math.min(mat.roughness, 0.4) // make slightly more polished
        }
      }
    })
  }, [scene])

  return (
    <animated.group ref={groupRef} scale={scale as any} rotation={rotation as any} position={position as any}>
      <primitive object={scene} position={[0, -1.5, 0]} />
      {/* Internal/Ambient Emerald Pulse */}
      <pointLight position={[0, 0.5, 0]} color="#10B981" intensity={glowIntensity} distance={5} />
    </animated.group>
  )
}

useGLTF.preload('/the_joyful_world_of_botanical_cartoon_character.glb')

export function MascotCanvas() {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => {
      setClicked(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 200)
    // Optional haptic
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50)
    }
  }

  return (
    <div 
      className="w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center cursor-pointer"
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ powerPreference: "high-performance", antialias: false, toneMapping: THREE.ACESFilmicToneMapping }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          
          {/* Lighting Setup */}
          <ambientLight intensity={0.4} color="#E6F0EA" />
          <spotLight position={[5, 10, 5]} angle={0.2} penumbra={1} intensity={1.5} color="#FFFFFF" castShadow />
          <spotLight position={[-5, 5, -5]} angle={0.5} penumbra={1} intensity={1} color="#047857" />
          <pointLight position={[0, -2, 2]} color="#D9F99D" intensity={0.5} />
          
          <Environment preset="studio" />
          
          {/* Scene Fog */}
          <fog attach="fog" args={['#022C22', 4, 15]} />

          {/* Model */}
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <MascotModel url="/the_joyful_world_of_botanical_cartoon_character.glb" hovered={hovered} clicked={clicked} />
          </Float>

          {/* Soft Reflective Floor */}
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.6} 
            scale={10} 
            blur={2} 
            far={4} 
            resolution={512}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
