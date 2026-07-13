'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { m as motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, Copy } from 'lucide-react'
import { EASING, DURATION } from '@/lib/theme/motion'
import { useNavThemeStore } from '@/store/nav-theme'
import { WaitlistForm } from '@/components/landing/WaitlistForm'
import { toast } from 'sonner'

// ─────────────────────────────────────────────────────────────
// SOCIAL ICONS (inline SVG — zero dependency)
// ─────────────────────────────────────────────────────────────

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const SOCIALS = [
  { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/glowminal.tech/' },
  { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/company/glowminal.tech' },
  { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/glowminal' },
  { name: 'X', icon: XIcon, href: 'https://x.com/glowminal' },
]

const NAV_LEFT = [
  { name: 'Features', href: '/features' },
  { name: 'Science', href: '/science' },
  { name: 'Technology', href: '/technology' },
  { name: 'About', href: '/about' },
  { name: 'Waitlist', href: '#waitlist' },
]

const NAV_RIGHT = [
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
]

// ─────────────────────────────────────────────────────────────
// STAGGER CHILDREN
// ─────────────────────────────────────────────────────────────

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.hero, ease: EASING.expensive },
  },
}

// ─────────────────────────────────────────────────────────────
// FOOTER NAV LINK
// ─────────────────────────────────────────────────────────────

function FooterNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.li variants={fadeUp}>
      <Link
        href={href}
        className="group relative inline-block text-[15px] text-white/60 hover:text-white transition-colors duration-300"
      >
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 inline-block">
          {children}
        </span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-white/30 transition-all duration-300 ease-out group-hover:w-full" />
      </Link>
    </motion.li>
  )
}

// ─────────────────────────────────────────────────────────────
// SOCIAL LINK
// ─────────────────────────────────────────────────────────────

function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.FC<React.SVGProps<SVGSVGElement>>; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] text-white/50 hover:text-white hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300 hover:scale-105"
    >
      <Icon className="w-4 h-4" />
    </a>
  )
}

// ─────────────────────────────────────────────────────────────
// CURSOR SPOTLIGHT
// ─────────────────────────────────────────────────────────────

function useCursorSpotlight(containerRef: React.RefObject<HTMLElement | null>) {
  const [pos, setPos] = useState({ x: -1000, y: -1000 })
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return
    const el = containerRef.current
    if (!el) return

    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
    const leave = () => setPos({ x: -1000, y: -1000 })

    el.addEventListener('mousemove', handler)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', handler)
      el.removeEventListener('mouseleave', leave)
    }
  }, [containerRef, prefersReducedMotion])

  return pos
}

// ─────────────────────────────────────────────────────────────
// AMBIENT LIGHT SWEEP
// ─────────────────────────────────────────────────────────────

function AmbientSweep() {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) return null

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.04, 0] }}
      transition={{
        repeat: Infinity,
        duration: 8,
        repeatDelay: 12 + Math.random() * 8,
        ease: 'easeInOut',
      }}
      style={{
        background: 'linear-gradient(135deg, transparent 30%, rgba(4,120,87,0.15) 50%, transparent 70%)',
      }}
    />
  )
}

// ─────────────────────────────────────────────────────────────
// GIANT WATERMARK
// ─────────────────────────────────────────────────────────────

function GiantWatermark() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5, ease: EASING.expensive }}
      viewport={{ once: true }}
      className="absolute bottom-0 left-0 right-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* The giant GLOWMINAL watermark, bottom-aligned, partially bleeding off-screen */}
      <div
        className="w-full text-center leading-[0.8]"
        style={{
          fontSize: 'clamp(120px, 16vw, 280px)',
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 900,
          letterSpacing: '-0.04em',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.04)',
          // Gradient mask: fade from visible at center to invisible at top and bottom
          maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.4) 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.4) 70%, transparent 100%)',
          transform: 'translateY(18%)',
        }}
      >
        GLOWMINAL
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// MAIN FOOTER
// ─────────────────────────────────────────────────────────────

export function LandingFooter() {
  const footerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(footerRef, { margin: '-10% 0px 0px 0px' })
  const setNavTheme = useNavThemeStore(s => s.setTheme)
  const cursorPos = useCursorSpotlight(footerRef)
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)

  useEffect(() => {
    if (isInView) setNavTheme('footer')
  }, [isInView, setNavTheme])

  const handleCopyEmail = useCallback((email: string) => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    toast.success(`Copied ${email}`)
    setTimeout(() => setCopiedEmail(null), 2000)
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#022C22] text-white overflow-hidden selection:bg-accent-lime/30 selection:text-white"
      role="contentinfo"
    >
      {/* ─── SECTION TRANSITION GRADIENT ─── */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, var(--color-primary-dark), transparent)',
        }}
      />

      {/* ─── ATMOSPHERIC BACKGROUND ─── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft radial ambient light */}
        <div className="absolute top-[-30%] left-[10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(4,120,87,0.12)_0%,transparent_65%)]" />
        <div className="absolute bottom-[-20%] right-[5%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(167,243,208,0.04)_0%,transparent_65%)]" />

        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.025] mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ─── CURSOR SPOTLIGHT ─── */}
      <div
        className="absolute pointer-events-none z-[1] transition-opacity duration-700"
        style={{
          left: cursorPos.x - 250,
          top: cursorPos.y - 250,
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(4,120,87,0.06) 0%, transparent 70%)',
          opacity: cursorPos.x > -500 ? 1 : 0,
        }}
      />

      {/* ─── AMBIENT SWEEP ─── */}
      <AmbientSweep />

      {/* ─── GIANT WATERMARK ─── */}
      <GiantWatermark />

      {/* ─── MAIN CONTENT ─── */}
      <motion.div
        className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={staggerContainer}
      >
        {/* ═══════════════════════════════════════════
            UPPER SECTION — CTA
            ═══════════════════════════════════════════ */}
        <div className="pt-28 md:pt-40 pb-20 md:pb-28 flex flex-col items-center text-center">
          {/* Subtle tagline */}
          <motion.p
            variants={fadeUp}
            className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] text-white/40 uppercase mb-10"
          >
            AI Skin Intelligence Platform
          </motion.p>

          {/* Waitlist — the centrepiece */}
          <motion.div variants={fadeUp} className="w-full max-w-lg" id="waitlist">
            <WaitlistForm theme="dark" />
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════
            MIDDLE SECTION — Three-Column Editorial Grid
            ═══════════════════════════════════════════ */}
        <motion.div
          variants={fadeUp}
          className="border-t border-white/[0.07] pt-16 pb-16 md:pb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-8">

            {/* ── LEFT: Brand Identity ── */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-5 space-y-8"
            >
              {/* Logo + Brand Name */}
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xs">G</span>
                </div>
                <span className="text-[15px] font-medium tracking-tight text-white/90">Glowminal</span>
              </motion.div>

              {/* Tagline */}
              <motion.p variants={fadeUp} className="text-[22px] md:text-[26px] font-light leading-[1.3] text-white/80 max-w-sm tracking-tight">
                Understand Your Skin.<br />
                <span className="italic font-light text-white/50">Finally.</span>
              </motion.p>

              {/* Social Icons */}
              <motion.div variants={fadeUp} className="flex items-center gap-3 pt-2">
                {SOCIALS.map((s) => (
                  <SocialLink key={s.name} href={s.href} icon={s.icon} label={s.name} />
                ))}
              </motion.div>

              {/* Emails */}
              <motion.div variants={fadeUp} className="space-y-2 pt-2">
                {['hello@glowminal.tech', 'founders@glowminal.tech'].map((email) => (
                  <button
                    key={email}
                    onClick={() => handleCopyEmail(email)}
                    className="group flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 transition-colors duration-300"
                  >
                    <span>{email}</span>
                    {copiedEmail === email ? (
                      <Check className="w-3.5 h-3.5 text-primary" />
                    ) : (
                      <Copy className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                    )}
                  </button>
                ))}
              </motion.div>
            </motion.div>

            {/* ── CENTRE: Spacer on desktop (maintains the reference's breathing room) ── */}
            <div className="hidden md:block md:col-span-2" />

            {/* ── RIGHT: Navigation ── */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-5"
            >
              <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                {/* Nav Column 1 */}
                <div>
                  <motion.h4
                    variants={fadeUp}
                    className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase mb-6"
                  >
                    Platform
                  </motion.h4>
                  <ul className="space-y-4">
                    {NAV_LEFT.map((l) => (
                      <FooterNavLink key={l.name} href={l.href}>{l.name}</FooterNavLink>
                    ))}
                  </ul>
                </div>

                {/* Nav Column 2 */}
                <div>
                  <motion.h4
                    variants={fadeUp}
                    className="font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase mb-6"
                  >
                    Company
                  </motion.h4>
                  <ul className="space-y-4">
                    {NAV_RIGHT.map((l) => (
                      <FooterNavLink key={l.name} href={l.href}>{l.name}</FooterNavLink>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            BOTTOM BAR
            ═══════════════════════════════════════════ */}
        <motion.div
          variants={fadeUp}
          className="border-t border-white/[0.05] py-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-[10px] tracking-[0.15em] text-white/25 uppercase">
            © 2026 Glowminal. All Rights Reserved.
          </p>
          <p className="font-mono text-[10px] tracking-[0.15em] text-white/25 uppercase italic">
            Understand Your Skin. Finally.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
