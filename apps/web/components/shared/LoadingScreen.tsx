'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GlowminalLogo } from '@/components/ui/GlowminalLogo'
import { useLoadingStore } from '@/store/loading'
import { EASING, DURATION } from '@/lib/theme/motion'

export function LoadingScreen() {
  const isLoaded = useLoadingStore(s => s.isLoaded)
  const setLoaded = useLoadingStore(s => s.setLoaded)
  const [minTimePassed, setMinTimePassed] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [loadingText, setLoadingText] = useState('Initializing scan')

  useEffect(() => {
    const timer = setTimeout(() => setMinTimePassed(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setMounted(true)
    
    // Fallback: If the video fails to load or takes too long, 
    // remove the loading screen after a maximum of 4 seconds to prevent locking the user out.
    const fallbackTimeout = setTimeout(() => {
      setLoaded()
    }, 4000)

    // Cycle through intelligent loading states
    const texts = [
      'Calibrating vision models',
      'Establishing precision timeline',
      'Preparing intelligent routine',
      'Finalizing analysis'
    ]
    
    let i = 0
    const textInterval = setInterval(() => {
      if (i < texts.length) {
        setLoadingText(texts[i]!)
        i++
      }
    }, 800)

    return () => {
      clearTimeout(fallbackTimeout)
      clearInterval(textInterval)
    }
  }, [setLoaded])

  // Don't render anything during SSR to prevent hydration mismatch with motion elements,
  // but we DO want the screen to be there immediately.
  // Actually, we can render the markup safely on SSR if we don't rely on window logic initially.
  
  return (
    <AnimatePresence>
      {(!isLoaded || !minTimePassed) && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            filter: 'blur(10px)',
            scale: 1.05
          }}
          transition={{ 
            duration: 1.2, 
            ease: EASING.expensive 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#011C15] overflow-hidden"
        >
          {/* Subtle animated background gradients */}
          <motion.div 
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(4,120,87,0.15),transparent_60%)] pointer-events-none"
          />
          
          <div className="relative z-10 flex flex-col items-center gap-12">
            
            <div className="relative">
              {/* Precision Scanner Rings */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: EASING.expensive }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-primary/20"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 0], scale: [0.8, 1.1, 1.3] }}
                transition={{ duration: 3, delay: 1, repeat: Infinity, ease: EASING.expensive }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-primary/40"
              />
              
              <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, ease: EASING.expensive }}
                className="relative z-10"
              >
                <GlowminalLogo variant="symbol" size={64} className="text-white drop-shadow-[0_0_15px_rgba(4,120,87,0.5)]" showTagline={false} />
              </motion.div>
            </div>

            {mounted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                    System Status
                  </span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={loadingText}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm font-light text-white/80 tracking-wide"
                  >
                    {loadingText}...
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            )}
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
