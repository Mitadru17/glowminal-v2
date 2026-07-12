'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { Sparkles, ArrowUp, ArrowRight, Shield } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { GlowminalLogo } from '@/components/ui/GlowminalLogo'
import { EASING, DURATION } from '@/lib/theme/motion'
import { useNavThemeStore } from '@/store/nav-theme'
import ShinyText from '@/components/animations/ShinyText'
import { WaitlistForm } from '@/components/landing/WaitlistForm'

export function LandingFooter() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: "-20% 0px 0px 0px" })
  const setNavTheme = useNavThemeStore(s => s.setTheme)

  useEffect(() => {
    if (isInView) setNavTheme('footer')
  }, [isInView, setNavTheme])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div ref={ref} className="relative w-full z-30 flex flex-col min-h-[100svh]">
      {/* 
        THE CONCLUSION (Emotional Payoff)
      */}
      <section className="relative flex-1 bg-surface-dark text-white overflow-hidden py-32 flex flex-col items-center justify-center">
        {/* Soft Emerald Bounce Light */}
        <div className="absolute top-0 left-0 right-0 h-[1000px] bg-[radial-gradient(ellipse_at_top_center,rgba(4,120,87,0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#033c2f]/40 to-transparent pointer-events-none mix-blend-overlay" />
        
        {/* Atmospheric Grain */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div className="container-marketing relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASING.expensive }}
            viewport={{ once: true, margin: '100px' }}
            className="flex flex-col items-center"
          >
            <p className="text-xl md:text-2xl font-light text-white/80 mb-12 tracking-editorial max-w-lg">
              My skin has always been changing.<br/>
              <span className="text-white font-normal italic font-editorial">Now I finally have a way to understand it.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: 'blur(16px)', scale: 0.98 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 1.2, ease: EASING.expensive }}
            viewport={{ once: true, margin: '100px' }}
            className="mb-20"
          >
            {/* The Signature */}
            <h2 className="text-[14vw] sm:text-[12vw] md:text-[9vw] leading-[0.8] tracking-tight font-light flex items-center justify-center relative select-none">
              <ShinyText 
                color="rgba(255,255,255,0.2)" 
                shineColor="rgba(255,255,255,0.9)" 
                speed={4}
                className="flex items-center justify-center"
              >
                <span className="font-[family-name:var(--font-jost)] tracking-[0.1em] font-light uppercase mr-1 opacity-90">GLOW</span>
                <span className="font-editorial italic font-light pr-4 uppercase">MINAL</span>
              </ShinyText>
              <span className="font-editorial italic font-light text-white/30 absolute -right-6 md:-right-8 -top-1 md:-top-2 text-xl md:text-3xl">®</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASING.expensive }}
            viewport={{ once: true, margin: '100px' }}
            className="w-full max-w-md flex flex-col items-center"
          >
            <div id="waitlist-footer" className="w-full">
              <WaitlistForm theme="dark" />
            </div>
            <div className="mt-6 flex flex-col items-center text-center space-y-2 opacity-80">
              <p className="text-white/50 text-xs font-light tracking-wide flex items-center justify-center gap-2">
                <Shield className="w-3.5 h-3.5 opacity-70" /> Phase 1 access is rolling out in limited batches.
              </p>
              <p className="text-white/40 text-[10px] font-mono tracking-widest uppercase">
                Privacy guaranteed. Zero spam.
              </p>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* 
        UTILITY FOOTER (Minimal, Elegant, Quiet)
      */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASING.expensive }}
        viewport={{ once: true }}
        className="w-full bg-[#011C15] text-white/40 pt-12 pb-[calc(max(3rem,env(safe-area-inset-bottom)))] border-t border-white/5 relative z-10 px-4 md:px-0"
      >
        {/* Desktop Utility Footer */}
        <div className="hidden md:flex container-marketing flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-white/80 transition-colors">
              <GlowminalLogo variant="symbol" size={16} showTagline={false} />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest">
              © {new Date().getFullYear()} Glowminal
            </span>
          </div>

          <nav className="flex flex-wrap gap-8">
            {[
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Science', href: '/info' },
              { label: 'Contact', href: '/contact' }
            ].map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-widest hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="Scroll to top"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest group-hover:text-white/80 transition-colors">
              Top
            </span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
              <ArrowUp className="w-3 h-3 text-white/40 group-hover:text-white transition-colors" />
            </div>
          </button>
          
        </div>

        {/* Mobile Utility Footer */}
        <div className="flex md:hidden flex-col gap-10 px-2 sm:px-6">
          <div className="flex justify-between items-center">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/60 shadow-inner">
              <GlowminalLogo variant="symbol" size={20} showTagline={false} />
            </div>
            <button 
              onClick={scrollToTop} 
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 active:scale-95 touch-manipulation transition-transform shadow-inner"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-white/60" />
            </button>
          </div>
          
          <nav className="grid grid-cols-2 gap-y-8 gap-x-4">
            {[
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Science', href: '/info' },
              { label: 'Contact', href: '/contact' }
            ].map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-white/60 active:text-white transition-colors touch-manipulation py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
              © {new Date().getFullYear()} Glowminal
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
              Beta 1.0
            </span>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
