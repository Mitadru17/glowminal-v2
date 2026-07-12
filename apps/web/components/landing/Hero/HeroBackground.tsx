'use client'

import { useEffect, useState } from 'react'
import { HERO_VIDEOS } from '@/lib/hero-video'
import { HeroVideoPlayer } from './HeroVideoPlayer'
import { preload } from 'react-dom'

export function HeroBackground() {
  preload(HERO_VIDEOS[0]!.poster, { as: 'image', fetchPriority: 'high' })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  // To prevent hydration mismatch, we wait until mounted
  if (!isMounted) return <div className="absolute inset-0 z-0 bg-background" />

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-background">
      
      {prefersReducedMotion ? (
        <img 
          src={HERO_VIDEOS[0]!.poster}
          alt={HERO_VIDEOS[0]!.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-[20s] ease-linear scale-105"
        />
      ) : (
        <HeroVideoPlayer />
      )}

      {/* Atmospheric overlays to ensure text readability and blend with the background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-background/20 backdrop-saturate-[1.1] pointer-events-none" />
      
      {/* Subtle grain/noise for filmic quality */}
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
