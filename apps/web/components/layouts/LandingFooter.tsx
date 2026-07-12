'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { m as motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight, ArrowUp, Mail, Copy, Check } from 'lucide-react'
import { EASING } from '@/lib/theme/motion'
import { useNavThemeStore } from '@/store/nav-theme'
import { WaitlistForm } from '@/components/landing/WaitlistForm'
import { FooterLogoReveal } from '@/components/ui/FooterLogoReveal'
import { toast } from 'sonner'

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
  { name: 'X', icon: () => <span className="font-bold font-mono text-sm">X</span>, href: 'https://x.com/glowminal' },
  { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/glowminal' },
]

const SITEMAP = [
  { name: 'Features', href: '/features' },
  { name: 'Science', href: '/science' },
  { name: 'Technology', href: '/technology' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resources', href: '/resources' },
]

export function LandingFooter() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: "-20% 0px 0px 0px" })
  const setNavTheme = useNavThemeStore(s => s.setTheme)
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  // Subtle parallax for background elements
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"])

  useEffect(() => {
    if (isInView) setNavTheme('footer')
  }, [isInView, setNavTheme])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    toast.success(`Copied ${email}`, {
      description: 'Ready to paste.',
      icon: <Check className="w-4 h-4 text-accent-lime" />
    })
    setTimeout(() => setCopiedEmail(null), 2000)
  }

  return (
    <div ref={ref} className="relative w-full z-30 flex flex-col min-h-screen bg-primary-dark text-white overflow-hidden selection:bg-accent-lime/30 selection:text-white">
      
      {/* ─── ATMOSPHERIC BACKGROUND ─── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        {/* Soft volumetric lighting */}
        <div className="absolute top-[-20%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle,rgba(4,120,87,0.08)_0%,transparent_70%)] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(217,249,157,0.03)_0%,transparent_70%)] mix-blend-screen" />
        
        {/* Film grain / scientific dust */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-screen" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />

        {/* Ambient Shimmer Particles (CSS animated in globals or inline) */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 animate-pulse"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 4 + 3}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Seamless Top Blend */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent z-10 opacity-20 pointer-events-none" />

      {/* ─── CONTENT CONTAINER ─── */}
      <div className="relative z-20 flex flex-col flex-1 container-marketing px-6 md:px-12 lg:px-24 pt-32 pb-12 w-full max-w-[1440px] mx-auto">
        
        {/* UPPER SECTION: The Brand Signature */}
        <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh] mb-24">
          <FooterLogoReveal className="mb-16" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASING.expensive }}
            viewport={{ once: true, margin: '100px' }}
            className="w-full max-w-md flex flex-col items-center relative z-30" // z-30 to stay above particles
          >
            <WaitlistForm theme="dark" />
            <p className="mt-6 text-center text-[11px] font-mono tracking-widest text-white/40 uppercase">
              Phase 1 rolling out. Privacy guaranteed.
            </p>
          </motion.div>
        </div>

        {/* LOWER SECTION: Navigation & Information */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 gap-x-8 w-full border-t border-white/10 pt-16 pb-8">
          
          {/* Tagline & Identity (Col 1-4) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASING.expensive }}
            viewport={{ once: true }}
            className="md:col-span-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-editorial italic text-3xl md:text-4xl text-white/90 leading-tight mb-4">
                Understand Your Skin.<br/>Finally.
              </h3>
              <p className="text-sm font-light text-white/50 max-w-[280px] leading-relaxed">
                The future of explainable skin intelligence. Precision analysis and personalized science for long-term health.
              </p>
            </div>
            
            <div className="hidden md:flex flex-col gap-1 mt-24">
              <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase">© 2026 Glowminal</span>
              <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase">Built for the future.</span>
            </div>
          </motion.div>

          {/* Sitemap (Col 5-7) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASING.expensive }}
            viewport={{ once: true }}
            className="md:col-span-3 md:col-start-6"
          >
            <h4 className="font-mono text-[10px] tracking-widest text-white/30 uppercase mb-8">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {SITEMAP.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="group relative inline-flex items-center text-sm md:text-base font-light text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">{link.name}</span>
                    {/* Center-out underline */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-px bg-accent-lime/50 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect & Contact (Col 8-12) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASING.expensive }}
            viewport={{ once: true }}
            className="md:col-span-4 md:col-start-9 flex flex-col justify-between"
          >
            <div className="grid grid-cols-2 gap-8 w-full">
              {/* Socials */}
              <div>
                <h4 className="font-mono text-[10px] tracking-widest text-white/30 uppercase mb-8">Socials</h4>
                <ul className="flex flex-col gap-4">
                  {SOCIALS.map((social) => (
                    <li key={social.name}>
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-sm md:text-base font-light text-white/70 hover:text-white transition-colors duration-300"
                      >
                        <span className="p-1.5 rounded-full bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.1)]">
                          <social.icon className="w-3.5 h-3.5" />
                        </span>
                        <span>{social.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-mono text-[10px] tracking-widest text-white/30 uppercase mb-8">Contact</h4>
                <ul className="flex flex-col gap-5">
                  <li>
                    <span className="block text-[10px] font-mono text-white/40 mb-1.5 uppercase">General</span>
                    <button 
                      onClick={() => handleCopyEmail('hello@glowminal.tech')}
                      className="group flex items-center gap-2 text-sm md:text-base font-light text-white/70 hover:text-white transition-colors"
                    >
                      hello@glowminal.tech
                      {copiedEmail === 'hello@glowminal.tech' ? (
                        <Check className="w-3.5 h-3.5 text-accent-lime" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      )}
                    </button>
                  </li>
                  <li>
                    <span className="block text-[10px] font-mono text-white/40 mb-1.5 uppercase">Founders</span>
                    <button 
                      onClick={() => handleCopyEmail('founders@glowminal.tech')}
                      className="group flex items-center gap-2 text-sm md:text-base font-light text-white/70 hover:text-white transition-colors"
                    >
                      founders@glowminal.tech
                      {copiedEmail === 'founders@glowminal.tech' ? (
                        <Check className="w-3.5 h-3.5 text-accent-lime" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      )}
                    </button>
                  </li>
                  <li>
                    <span className="block text-[10px] font-mono text-white/40 mb-1.5 uppercase">Website</span>
                    <a 
                      href="https://glowminal.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-sm md:text-base font-light text-white/70 hover:text-white transition-colors"
                    >
                      glowminal.tech
                      <ArrowRight className="w-3.5 h-3.5 -rotate-45 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Back to top (Desktop) */}
            <div className="hidden md:flex justify-end mt-24">
              <button 
                onClick={scrollToTop} 
                className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors focus-visible:outline-none"
              >
                Back to Top
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                  <ArrowUp className="w-3.5 h-3.5 text-current group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM MOBILE UTILITIES */}
        <div className="md:hidden flex flex-col gap-8 mt-12 pt-8 border-t border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <Link href="/privacy" className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">Terms</Link>
            </div>
            <button 
              onClick={scrollToTop} 
              className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 text-white/40"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase">© 2026 Glowminal. Built for the future.</span>
          </div>
        </div>

        {/* Privacy/Terms Desktop */}
        <div className="hidden md:flex justify-between items-center pt-8 border-t border-white/5 mt-auto">
          <div className="flex gap-8">
            <Link href="/privacy" className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </div>
  )
}
