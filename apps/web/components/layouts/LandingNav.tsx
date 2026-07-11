'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { EXPENSIVE_EASING } from '@/components/animations/ScrollReveal'

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#science', label: 'Science' },
]

export function LandingNav() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (window.scrollY > 50) setScrolled(true)
  }, [])

  // Hide nav when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0
    
    if (latest > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }

    if (latest > 150 && latest > previous) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  // Prevent hydration mismatch by enforcing a stable initial render
  const isScrolled = mounted ? scrolled : false

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: '-100%', opacity: 0 },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: EXPENSIVE_EASING }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <nav
        data-scrolled={isScrolled}
        className="flex items-center justify-between mx-auto w-full max-w-7xl py-4 px-0 bg-transparent border border-transparent transition-all duration-700 ease-expensive data-[scrolled=true]:max-w-[800px] data-[scrolled=true]:py-3 data-[scrolled=true]:px-6 data-[scrolled=true]:glass-premium data-[scrolled=true]:rounded-full"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-text-primary transition-opacity hover:opacity-80 shrink-0"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-primary text-white shadow-sm">
            <Sparkles className="h-4 w-4" />
          </span>
          Glowminal
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 shrink-0">
          <Link 
            href="/login" 
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hidden sm:block px-2"
          >
            Sign In
          </Link>
          <Link 
            href="/signup" 
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-transform duration-500 ease-expensive hover:scale-95 active:scale-90"
          >
            <span className="absolute inset-0 h-full w-full bg-text-primary transition-colors duration-500 ease-expensive group-hover:bg-primary"></span>
            <span className="relative">Start Scan</span>
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}
