'use client'

import React, { useEffect, useState, useRef } from 'react'
import { m as motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { GlowminalGraphic } from '@/components/ui/GlowminalGraphic'
import { EASING, DURATION } from '@/lib/theme/motion'

interface FooterLogoRevealProps {
  className?: string
}

// Generate organic particle starting positions
const generateParticles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => {
    // Distribute particles in a wide ring/ellipse around the center
    const angle = (Math.random() * Math.PI * 2)
    const radius = 200 + Math.random() * 400 // Start far away
    
    // Add some organic curvature to the path
    const controlPointRadius = radius * 0.5
    const controlPointAngle = angle + (Math.random() - 0.5) * Math.PI
    
    return {
      id: i,
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      cx: Math.cos(controlPointAngle) * controlPointRadius,
      cy: Math.sin(controlPointAngle) * controlPointRadius,
      size: 1 + Math.random() * 3,
      delay: Math.random() * 0.5,
      duration: 1 + Math.random() * 0.5,
      opacity: 0.2 + Math.random() * 0.8,
    }
  })
}

export function FooterLogoReveal({ className = '' }: FooterLogoRevealProps) {
  const [hasPlayed, setHasPlayed] = useState(true) // Default to true to prevent flash, then check storage
  const [isPlaying, setIsPlaying] = useState(false)
  const [isAssembled, setIsAssembled] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const PARTICLES_COUNT = 150
  const [particles] = useState(() => generateParticles(PARTICLES_COUNT))

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('glowminal_footer_revealed')
      if (!stored && !prefersReducedMotion) {
        setHasPlayed(false)
      } else {
        setHasPlayed(true)
        setIsAssembled(true)
      }
    }
  }, [prefersReducedMotion])

  // Trigger animation when in view
  useEffect(() => {
    if (hasPlayed) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]!.isIntersecting && !isPlaying) {
          setIsPlaying(true)
          sessionStorage.setItem('glowminal_footer_revealed', 'true')
          
          // Finish assembly after max duration
          setTimeout(() => {
            setIsAssembled(true)
            setTimeout(() => setIsPlaying(false), 500)
          }, 1500)
        }
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasPlayed, isPlaying])

  return (
    <div ref={containerRef} className={`relative flex items-center justify-center ${className}`}>
      
      {/* 1. The Assembled Logo */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: isAssembled || hasPlayed ? 1 : 0,
          scale: isAssembled || hasPlayed ? 1 : 0.95,
          filter: isAssembled || hasPlayed ? 'blur(0px)' : 'blur(10px)'
        }}
        transition={{ duration: 1.2, ease: EASING.expensive }}
        className="relative z-10"
      >
        <GlowminalGraphic 
          width={340}
          theme="footer"
          interactive
          className="w-[clamp(240px,60vw,400px)]"
        />
      </motion.div>

      {/* 2. The Particle Assembly Animation */}
      {isPlaying && !hasPlayed && !prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-accent-lime shadow-[0_0_8px_rgba(217,249,157,0.8)]"
              style={{
                width: p.size,
                height: p.size,
              }}
              initial={{ 
                x: p.x, 
                y: p.y, 
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                x: [p.x, p.cx, 0], 
                y: [p.y, p.cy, 0], 
                opacity: [0, p.opacity, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                ease: [0.25, 0.1, 0.25, 1], // Natural curved ease
                times: [0, 0.6, 1]
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
