'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { Sparkles, ArrowUp, ArrowRight, Shield } from 'lucide-react'
import { useInView, m as motion } from "framer-motion"
import { GlowminalLogo } from '@/components/ui/GlowminalLogo'
import { EASING, DURATION } from '@/lib/theme/motion'
import { useNavThemeStore } from '@/store/nav-theme'
import { GlowminalGraphic } from '@/components/ui/GlowminalGraphic'
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
      <footer id="footer" className="relative w-full flex-1 bg-gradient-to-b from-[#022C22] via-[#011C15] to-[#011C15] text-white overflow-hidden pt-32 pb-[calc(max(3rem,env(safe-area-inset-bottom)))] flex flex-col items-center">
        {/* Soft Emerald Bounce Light */}
        <div className="absolute top-0 left-0 right-0 h-[800px] bg-[radial-gradient(ellipse_at_top_center,rgba(4,120,87,0.1),transparent_70%)] pointer-events-none mix-blend-screen" />
        
        {/* Seamless Edge Mask at the top to dissolve from the previous section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#022C22] to-transparent pointer-events-none z-10" />

        {/* Atmospheric Grain */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-screen pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div className="container-marketing relative z-20 flex flex-col items-center text-center px-6 md:px-0 mt-8 md:mt-0 w-full max-w-5xl">
          
          {/* 1. Emotional Hook & Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASING.expensive }}
            viewport={{ once: true, margin: '100px' }}
            className="flex flex-col items-center w-full mb-16 md:mb-20"
          >
            <p className="text-[22px] leading-tight md:text-3xl font-light text-white/80 mb-14 md:mb-16 tracking-editorial max-w-[280px] xs:max-w-sm md:max-w-lg">
              My skin has always been changing.<br/>
              <span className="text-white font-normal italic font-editorial mt-2 block">Now I finally have a way to understand it.</span>
            </p>
            
            {/* The Interactive Brand Graphic */}
            <GlowminalGraphic 
              width={340}
              theme="footer"
              interactive
              className="w-[clamp(240px,60vw,400px)]"
            />
          </motion.div>

          {/* 2. Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASING.expensive }}
            viewport={{ once: true, margin: '100px' }}
            className="w-full max-w-md flex flex-col items-center mb-24 md:mb-32"
          >
            <div className="w-full">
              <WaitlistForm theme="dark" />
            </div>
            <div className="mt-6 md:mt-8 flex flex-col items-center text-center space-y-3 opacity-90">
              <p className="text-white/60 text-[11px] md:text-xs font-light tracking-wide flex items-center justify-center gap-2">
                <Shield className="w-3.5 h-3.5 opacity-70" /> Phase 1 access is rolling out in limited batches.
              </p>
              <p className="text-white/40 text-[9px] md:text-[10px] font-mono tracking-widest uppercase">
                Privacy guaranteed. Zero spam.
              </p>
            </div>
          </motion.div>

          <div className="w-full h-px bg-white/10 mb-16 md:mb-20" />

          {/* 3. Navigation & Socials */}
          <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-24 w-full mb-20 md:mb-24 text-left">
            
            {/* Navigation Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 md:gap-x-20 gap-y-12">
              <div className="flex flex-col gap-5">
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono mb-1">Product</span>
                <Link href="/features" className="text-sm font-light text-white/60 hover:text-white transition-colors active:scale-95 origin-left">Features</Link>
                <Link href="/info" className="text-sm font-light text-white/60 hover:text-white transition-colors active:scale-95 origin-left">Science</Link>
                <Link href="/how-it-works" className="text-sm font-light text-white/60 hover:text-white transition-colors active:scale-95 origin-left">How It Works</Link>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono mb-1">Company</span>
                <Link href="/about" className="text-sm font-light text-white/60 hover:text-white transition-colors active:scale-95 origin-left">About</Link>
                <Link href="/contact" className="text-sm font-light text-white/60 hover:text-white transition-colors active:scale-95 origin-left">Contact</Link>
                <button onClick={() => document.getElementById('waitlist-footer')?.scrollIntoView({ behavior: 'smooth' })} className="text-left text-sm font-light text-white/60 hover:text-white transition-colors active:scale-95 origin-left">
                  Waitlist
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-6 md:min-w-[240px]">
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono">Socials</span>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.instagram.com/glowminal.tech/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 py-2 text-left focus-visible:outline-none w-full border-b border-white/5 hover:border-white/20 pb-3 transition-colors touch-manipulation group"
                >
                  <span className="text-sm font-light tracking-wide text-white/70 group-hover:text-white transition-colors">
                    Instagram
                  </span>
                  <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-white/70 transition-colors -rotate-45" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/glowminal.tech" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 py-2 text-left focus-visible:outline-none w-full border-b border-white/5 hover:border-white/20 pb-3 transition-colors touch-manipulation group"
                >
                  <span className="text-sm font-light tracking-wide text-white/70 group-hover:text-white transition-colors">
                    LinkedIn
                  </span>
                  <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-white/70 transition-colors -rotate-45" />
                </a>
              </div>
            </div>
          </div>

          {/* 5. Legal & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 pt-8 border-t border-white/5 w-full">
            
            <div className="flex items-center gap-3 order-2 md:order-1">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/40 shadow-inner">
                <GlowminalLogo variant="symbol" size={16} showTagline={false} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                © {new Date().getFullYear()} Glowminal
              </span>
            </div>

            <div className="flex items-center gap-8 order-1 md:order-2">
              <Link href="/privacy" className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">Terms</Link>
              <button 
                onClick={scrollToTop} 
                className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors group ml-4 focus-visible:outline-none"
              >
                Top
                <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                  <ArrowUp className="w-3 h-3 text-current" />
                </div>
              </button>
            </div>
            
          </div>

        </div>
      </footer>
    </div>
  )
}

