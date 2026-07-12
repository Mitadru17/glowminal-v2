'use client'

import { useRef, useEffect } from 'react'
import { m as motion, useInView } from "framer-motion"
import { ArrowUp, Check } from 'lucide-react'
import { useNavThemeStore } from '@/store/nav-theme'
import { FooterLogoReveal } from '@/components/ui/FooterLogoReveal'

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const SOCIALS = [
  { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/glowminal.tech/' },
  { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/company/glowminal.tech' },
  { name: 'X', icon: () => <span className="font-bold font-mono text-sm leading-none flex items-center justify-center">X</span>, href: 'https://x.com/glowminal' },
  { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/glowminal' },
]

const SITEMAP = [
  { name: 'Features', href: '/features' },
  { name: 'Science', href: '/science' },
  { name: 'Technology', href: '/technology' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

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
    <footer ref={ref} className="relative bg-[#022C22] text-white min-h-screen flex flex-col overflow-hidden selection:bg-accent-lime/30 selection:text-white">
      
      {/* Background Pattern - Large minimal circles mimicking the reference */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden mix-blend-screen">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full border-[2px] border-accent-lime/10" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full border-[1px] border-white/5" />
        <div className="absolute top-1/2 right-1/3 w-[200px] h-[200px] rounded-full border-[1.5px] border-accent-lime/10" />
        
        {/* Soft volumetric lighting */}
        <div className="absolute top-[-20%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle,rgba(4,120,87,0.15)_0%,transparent_70%)]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(217,249,157,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Seamless Top Blend */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent z-10 opacity-30 pointer-events-none" />

      {/* Upper Section - Hero Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-16 relative z-10">
        {/* Tag Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-mono text-xs md:text-sm tracking-[0.3em] text-white/70 mb-12 uppercase"
        >
          You've reached the bottom
        </motion.p>

        {/* Large Title / Logo Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20 w-full flex justify-center"
        >
          <FooterLogoReveal className="scale-110 md:scale-125 lg:scale-150 transform origin-center" />
        </motion.div>

        {/* Email Signup - Recreated exactly like reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-xl"
        >
          <form className="flex gap-3 items-center relative" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="flex-1 bg-transparent border-b border-white/30 px-2 py-4 font-mono text-sm md:text-base text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors tracking-widest"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-4 bg-white text-[#022C22] font-mono font-bold text-sm rounded-full hover:bg-white/90 transition-colors"
            >
              JOIN
            </motion.button>
          </form>
          <div className="flex justify-between mt-4 font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase">
            <span>*Phase 1 Rolling Out</span>
            <span>Privacy Guaranteed</span>
          </div>
        </motion.div>
      </div>

      {/* Lower Section - Footer Info */}
      <div className="relative z-10 px-6 md:px-12 pb-12 w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 border-t border-white/10 pt-16">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Logo Badge */}
            <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center">
              <span className="font-editorial text-2xl italic">G</span>
            </div>
            
            <p className="text-sm font-light leading-relaxed text-white/70 max-w-xs">
              The future of explainable skin intelligence. Precision analysis and personalized science for long-term health.
            </p>
            
            <div className="flex gap-3 pt-2">
              <span className="font-mono text-[10px] px-4 py-1.5 border border-white/20 rounded-full uppercase tracking-wider text-white/60">
                EST. 2026
              </span>
              <span className="font-mono text-[10px] px-4 py-1.5 border border-white/20 rounded-full uppercase tracking-wider text-white/60">
                GLOBAL
              </span>
            </div>
          </motion.div>

          {/* Sitemap Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-mono text-xs tracking-widest text-white/40 mb-8 uppercase">
              Sitemap
            </h4>
            <div className="space-y-5">
              {SITEMAP.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 8 }}
                  className="block text-lg font-light text-white hover:text-accent-lime transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-mono text-xs tracking-widest text-white/40 mb-8 uppercase">
              Connect
            </h4>
            <div className="space-y-5">
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 text-lg font-light text-white hover:text-accent-lime transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-start md:items-end justify-end"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <span className="font-mono text-[11px] tracking-widest text-white/60 group-hover:text-white transition-colors uppercase">
                Back to Top
              </span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all">
                <ArrowUp className="w-5 h-5 text-white" />
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
            © 2026 GLOWMINAL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 font-mono text-[10px] text-white/40 tracking-widest uppercase">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
