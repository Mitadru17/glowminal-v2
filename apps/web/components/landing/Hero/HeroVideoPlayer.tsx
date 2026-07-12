'use client'

import { useEffect, useRef, useState } from 'react'
import { HERO_VIDEOS } from '@/lib/hero-video'
import { useLoadingStore } from '@/store/loading'

const CROSSFADE_DURATION_MS = 3000
const CROSSFADE_DURATION_SEC = CROSSFADE_DURATION_MS / 1000

export function HeroVideoPlayer() {
  const [activeBuffer, setActiveBuffer] = useState<'A' | 'B'>('A')
  
  const [indexA, setIndexA] = useState(0)
  const [indexB, setIndexB] = useState(1)
  
  const videoARef = useRef<HTMLVideoElement>(null)
  const videoBRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isTransitioning = useRef(false)
  const isVisible = useRef(true)

  // Robust Playback Manager
  const ensurePlayback = () => {
    if (!isVisible.current) return
    const activeVideo = activeBuffer === 'A' ? videoARef.current : videoBRef.current
    if (activeVideo && activeVideo.paused) {
      activeVideo.play().catch(() => {})
    }
  }

  // Intersection & Visibility Observer to prevent stalled playback when scrolling away
  useEffect(() => {
    const handleVisibilityChange = () => {
      isVisible.current = document.visibilityState === 'visible'
      ensurePlayback()
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.current = entry.isIntersecting
          ensurePlayback()
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      observer.disconnect()
    }
  }, [activeBuffer]) // Re-bind when active buffer changes

  // Initial Playback
  useEffect(() => {
    ensurePlayback()
  }, [])

  const handleTimeUpdate = (buffer: 'A' | 'B') => {
    const video = buffer === 'A' ? videoARef.current : videoBRef.current
    if (!video || isTransitioning.current) return

    // Calculate time remaining. Handle NaN gracefully.
    const timeRemaining = video.duration - video.currentTime
    if (isNaN(timeRemaining)) return

    if (timeRemaining <= CROSSFADE_DURATION_SEC) {
      isTransitioning.current = true
      
      const nextBuffer = buffer === 'A' ? 'B' : 'A'
      const nextVideo = nextBuffer === 'A' ? videoARef.current : videoBRef.current
      
      if (nextVideo) {
        nextVideo.currentTime = 0
        nextVideo.play().catch(() => {})
      }

      setActiveBuffer(nextBuffer)

      setTimeout(() => {
        if (buffer === 'A') {
          setIndexA((prev) => (indexB + 1) % HERO_VIDEOS.length)
        } else {
          setIndexB((prev) => (indexA + 1) % HERO_VIDEOS.length)
        }
        
        if (video) {
          video.pause()
          video.currentTime = 0
        }
        
        isTransitioning.current = false
      }, CROSSFADE_DURATION_MS)
    }
  }

  const commonVideoClasses = "absolute inset-0 w-full h-full object-cover transition-opacity ease-linear will-change-[opacity]"
  
  // Cinematic Color Normalization
  const cinematicFilter = "saturate(85%) contrast(110%) brightness(95%) sepia(10%) hue-rotate(-5deg)"

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 bg-background overflow-hidden">
      
      <video
        ref={videoARef}
        src={HERO_VIDEOS[indexA]!.src}
        poster={HERO_VIDEOS[indexA]!.poster}
        muted
        playsInline
        loop={false}
        preload="auto"
        onCanPlayThrough={() => {
          useLoadingStore.getState().setLoaded()
        }}
        onTimeUpdate={() => handleTimeUpdate('A')}
        className={commonVideoClasses}
        style={{
          opacity: activeBuffer === 'A' ? 0.6 : 0,
          transitionDuration: `${CROSSFADE_DURATION_MS}ms`,
          filter: cinematicFilter,
          zIndex: activeBuffer === 'A' ? 1 : 0
        }}
      />

      <video
        ref={videoBRef}
        src={HERO_VIDEOS[indexB]!.src}
        poster={HERO_VIDEOS[indexB]!.poster}
        muted
        playsInline
        loop={false}
        preload="auto"
        onTimeUpdate={() => handleTimeUpdate('B')}
        className={commonVideoClasses}
        style={{
          opacity: activeBuffer === 'B' ? 0.6 : 0,
          transitionDuration: `${CROSSFADE_DURATION_MS}ms`,
          filter: cinematicFilter,
          zIndex: activeBuffer === 'B' ? 1 : 0
        }}
      />

    </div>
  )
}
