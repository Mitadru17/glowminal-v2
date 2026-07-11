'use client'

import { motion } from 'framer-motion'
import { HeroBackground } from './HeroBackground'
import { HeroContent } from './HeroContent'

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[800px] w-full flex-col items-center justify-center overflow-hidden">
      {/* Background layer with crossfading videos */}
      <HeroBackground />
      
      {/* Foreground layer with typography and CTAs */}
      <HeroContent />

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 z-10 flex flex-col items-center gap-4 text-text-secondary/60 font-mono text-[10px] uppercase tracking-widest mix-blend-difference text-white/80"
      >
        <span>Scroll</span>
        <div className="h-16 w-px bg-gradient-to-b from-white/30 to-transparent overflow-hidden mix-blend-overlay">
          <motion.div 
            animate={{ y: [0, 64] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="h-1/2 w-full bg-white" 
          />
        </div>
      </motion.div>
    </section>
  )
}
