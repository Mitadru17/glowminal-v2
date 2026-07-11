'use client'

import Link from 'next/link'
import { Sparkles, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { EXPENSIVE_EASING } from '@/components/animations/ScrollReveal'

export function LandingFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-surface-dark text-white overflow-hidden pt-48 pb-12 z-30">
      
      {/* 
        PREMIUM EMERALD CTA (Upper Footer)
        Creates a glowing, warm emerald environment that softly transitions into the deep botanical footer.
      */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] bg-[radial-gradient(ellipse_at_top_center,var(--color-surface-cta),transparent_70%)] opacity-70 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-surface-cta/50 to-transparent pointer-events-none mix-blend-overlay" />
      
      {/* Atmospheric Grain */}
      <div className="absolute inset-0 opacity-[0.035] mix-blend-screen pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <div className="container-marketing flex flex-col items-center justify-center relative z-10 mb-48 text-center mt-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EXPENSIVE_EASING }}
          viewport={{ once: true, margin: '-50px' }}
          className="font-mono text-xs uppercase tracking-widest text-accent-mint/70 mb-12 flex items-center gap-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent-mint" /> The science of better skin
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: EXPENSIVE_EASING }}
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col items-center mb-32"
        >
          {/* Iconic Typography Lockup - Reduced Dominance */}
          <div className="relative group cursor-default">
            <h2 className="text-[11vw] sm:text-[9vw] md:text-[7vw] leading-[0.8] tracking-[0.02em] font-light text-white text-shadow-sm flex items-center justify-center">
              GLOW<span className="font-editorial italic font-extralight pr-3">MINAL</span>
              <span className="font-editorial italic font-light text-white/50 absolute -right-6 md:-right-8 -top-1 md:-top-2 text-xl md:text-2xl">®</span>
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EXPENSIVE_EASING }}
          viewport={{ once: true, margin: '-50px' }}
          className="w-full max-w-xl relative group"
        >
          {/* Integrated Premium Glass Input */}
          <div className="absolute inset-0 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full" />
          
          <div className="relative flex p-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-glass-premium shadow-botanical overflow-hidden transition-all duration-700 hover:border-white/20 hover:bg-white/10 focus-within:border-white/30 focus-within:bg-white/10">
            {/* Inner Glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 pointer-events-none mix-blend-overlay" />
            
            <input
              type="email"
              placeholder="Request early access"
              className="flex-1 bg-transparent px-8 py-5 text-base font-light text-white placeholder:text-white/40 focus:outline-none placeholder:transition-opacity focus:placeholder:opacity-0"
            />
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden px-10 py-5 bg-white/10 border border-white/20 text-white font-medium text-sm rounded-full transition-colors shadow-glass-elevated flex items-center gap-2 hover:bg-white/20"
            >
              <span className="relative z-10">Subscribe</span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none mix-blend-overlay" />
            </motion.button>
          </div>
          <div className="mt-8 flex justify-between font-mono text-[10px] uppercase tracking-widest text-white/40 px-4">
            <span>Research Updates Only</span>
            <span>No Spam</span>
          </div>
        </motion.div>
      </div>

      {/* 
        LOWER FOOTER (Deep Botanical Space)
      */}
      <div className="container-marketing relative z-10 pt-24 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: EXPENSIVE_EASING }} viewport={{ once: true }}
            className="space-y-8 md:col-span-1"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shadow-inner">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs font-light">
              AI Skin Intelligence. Understand your skin, build personalized routines, and track real improvements over time—backed by science.
            </p>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: EXPENSIVE_EASING }} viewport={{ once: true }}
          >
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-8">Product</h4>
            <div className="space-y-5">
              {['Features', 'Science', 'Sign In'].map((link) => (
                <motion.a key={link} href="#" whileHover={{ x: 6, color: 'rgba(255,255,255,1)' }} transition={{ duration: 0.4, ease: 'easeOut' }} className="block text-sm font-light text-white/60 transition-colors">
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: EXPENSIVE_EASING }} viewport={{ once: true }}
          >
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-8">Legal</h4>
            <div className="space-y-5">
              {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((link) => (
                <motion.a key={link} href="#" whileHover={{ x: 6, color: 'rgba(255,255,255,1)' }} transition={{ duration: 0.4, ease: 'easeOut' }} className="block text-sm font-light text-white/60 transition-colors">
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: EXPENSIVE_EASING }} viewport={{ once: true }}
            className="flex flex-col items-start md:items-end justify-start md:justify-start"
          >
            <motion.button onClick={scrollToTop} whileHover="hover" className="flex items-center gap-6 group">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/30 group-hover:text-white/80 transition-colors">
                Back to Top
              </span>
              <motion.div 
                variants={{ hover: { y: -6, backgroundColor: 'rgba(255,255,255,0.1)' } }}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-colors bg-white/5"
              >
                <ArrowUp className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </motion.div>
            </motion.button>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 mb-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/20">
            © {new Date().getFullYear()} Glowminal. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/20">
            Not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
