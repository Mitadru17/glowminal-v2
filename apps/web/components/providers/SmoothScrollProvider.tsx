'use client'

import { ReactNode, useEffect, useRef } from 'react'
import Lenis from 'lenis'

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis for premium smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expensive easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })
    lenisRef.current = lenis

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Handle anchor links natively with Lenis
    const handleHashChange = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (anchor && anchor.hash && anchor.pathname === window.location.pathname) {
        e.preventDefault()
        lenis.scrollTo(anchor.hash, { offset: -100 })
      }
    }
    
    document.documentElement.addEventListener('click', handleHashChange)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      document.documentElement.removeEventListener('click', handleHashChange)
    }
  }, [])

  return <>{children}</>
}
