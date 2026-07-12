'use client'

import { useRef, useState, MouseEvent } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SplitTextReveal } from '@/components/shared/SplitTextReveal'
import { EASING, DURATION } from '@/lib/theme/motion'
import { toast } from 'sonner'

// Upgraded Magnetic Button (Optimized with useMotionValue)
const MagneticButton = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void }) => {
  const ref = useRef<HTMLButtonElement>(null)
  
  // Use MotionValues to prevent React re-renders on every mouse move
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouse = (e: MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current!.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    x.set(middleX * 0.15)
    y.set(middleY * 0.15)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <button 
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        onClick={onClick}
        className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full touch-manipulation active:scale-[0.98] transition-transform ${className}`}
      >
        <span className="absolute inset-0 h-full w-full bg-text-primary transition-colors duration-500 ease-expensive md:group-hover:bg-primary"></span>
        <span className="relative flex items-center gap-2 text-white font-medium transition-transform duration-500 ease-expensive md:group-hover:scale-95">
          {children}
        </span>
      </button>
    </motion.div>
  )
}

export function HeroContent() {
  const { scrollYProgress } = useScroll()
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Subtle parallax for the content over the video
  const heroY = useTransform(smoothProgress, [0, 0.2], [0, 150])
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.95])

  return (
    <motion.div 
      style={{ y: heroY, opacity: heroOpacity, scale: heroScale, willChange: "transform, opacity" }}
      className="relative z-10 flex w-full max-w-7xl flex-col items-center px-4 md:px-6 text-center mt-[10vh] md:mt-0"
    >
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: EASING.expensive }}
        className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full glass-premium px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-mono font-medium uppercase tracking-widest text-text-secondary shadow-sm backdrop-blur-3xl bg-surface-elevated/40"
      >
        <span className="h-2 w-2 rounded-full bg-accent-lime shadow-[0_0_8px_rgba(217,249,157,0.8)]"></span>
        Glowminal 1.0
      </motion.div>

      <h1 className="max-w-5xl text-[14vw] sm:text-[12vw] leading-[0.95] md:leading-[0.9] tracking-tighter text-text-primary md:text-[9rem] font-light text-shadow-sm flex flex-col items-center">
        <span>Skin Intelligence,</span>
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: EASING.expensive }}
          className="inline-block font-editorial italic text-primary pr-4"
        >
          elevated.
        </motion.span>
      </h1>

      <SplitTextReveal delay={0.6} className="mt-6 md:mt-8 max-w-xs md:max-w-xl text-base md:text-xl text-text-secondary font-light leading-relaxed">
        Stop guessing. Start knowing. Glowminal uses computer vision to analyze your skin's microscopic reality.
      </SplitTextReveal>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8, ease: EASING.expensive }}
        className="mt-8 md:mt-12 w-full px-4 md:px-0 md:w-auto"
      >
        <MagneticButton 
          onClick={() => {
            toast('Coming Soon', {
              description: 'We are currently in private beta. You can join the waitlist below.',
            })
            document.getElementById('waitlist-footer')?.scrollIntoView({ behavior: 'smooth' })
          }} 
          className="h-14 md:h-16 w-full md:w-auto px-8 md:px-12 text-base md:text-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
        >
          Begin Free Scan <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </MagneticButton>
      </motion.div>
    </motion.div>
  )
}
