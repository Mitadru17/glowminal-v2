'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { m as motion, useInView } from 'framer-motion'
import { ArrowRight, Check, Copy } from 'lucide-react'
import { EASING } from '@/lib/theme/motion'
import { useNavThemeStore } from '@/store/nav-theme'
import { GlowminalLogo } from '@/components/ui/GlowminalLogo'
import { joinWaitlist } from '@/app/actions/waitlist'
import { toast } from 'sonner'

// ─────────────────────────────────────────────────────────────
// SOCIAL ICONS
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
// INLINE FOOTER EMAIL FORM (matches Daylight reference exactly)
// ─────────────────────────────────────────────────────────────

function FooterEmailForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || state === 'loading') return

    setState('loading')
    const hp = (document.getElementById('footer-hp') as HTMLInputElement)?.value
    const result = await joinWaitlist({ email, source: 'footer', hp })

    if (result.status === 'success') {
      setState('success')
      toast.success("You're on the list.", { description: `Confirmation sent to ${email}` })
    } else {
      setState('error')
      toast.error(result.message || 'Something went wrong.')
      setTimeout(() => setState('idle'), 2000)
    }
  }

  if (state === 'success') {
    return (
      <div className="flex items-center gap-3 h-12 px-5 rounded-full border border-white/20 bg-white/[0.03] text-white/70 text-sm">
        <Check className="w-4 h-4 text-primary" />
        <span>You're in. Check your inbox.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-stretch w-full max-w-[520px]">
      {/* Honeypot */}
      <input type="text" name="hp" id="footer-hp" className="hidden" tabIndex={-1} autoComplete="off" />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-MAIL"
        required
        autoComplete="email"
        autoCapitalize="none"
        className="flex-1 h-12 bg-white/[0.04] border border-white/15 border-r-0 rounded-l-full px-6 text-sm text-white placeholder:text-white/30 font-mono tracking-wider focus:outline-none focus:border-white/30 focus:bg-white/[0.06] transition-all duration-300"
      />
      <button
        type="submit"
        disabled={state === 'loading'}
        className="h-12 px-7 bg-white text-[#022C22] text-xs font-bold tracking-[0.15em] uppercase rounded-r-full border border-white hover:bg-white/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 whitespace-nowrap"
      >
        {state === 'loading' ? '...' : 'GET UPDATES'}
      </button>
    </form>
  )
}

// ─────────────────────────────────────────────────────────────
// MAIN FOOTER
// ─────────────────────────────────────────────────────────────

export function LandingFooter() {
  const footerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(footerRef, { margin: '-10% 0px 0px 0px' })
  const setNavTheme = useNavThemeStore(s => s.setTheme)
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
      className="relative bg-[#022C22] text-white overflow-hidden"
      role="contentinfo"
    >
      {/* ─── ATMOSPHERIC BACKGROUND ─── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm emerald glow — top-left, mimicking the Daylight amber glow */}
        <div className="absolute top-0 left-0 w-[70%] h-[70%] bg-[radial-gradient(ellipse_at_20%_20%,rgba(4,120,87,0.25)_0%,transparent_70%)]" />
        {/* Secondary glow — softer, right side */}
        <div className="absolute top-0 right-0 w-[50%] h-[60%] bg-[radial-gradient(ellipse_at_80%_30%,rgba(167,243,208,0.06)_0%,transparent_70%)]" />
        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ─── CONTENT ─── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">

        {/* ═══════════════════════════════════════
            ROW 1 — Logo + Nav + Who We Are + Socials
            ═══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASING.expensive }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pt-20 md:pt-28 pb-16 md:pb-20"
        >
          {/* Logo + Company Name */}
          <div className="md:col-span-4 flex items-start gap-4">
            <GlowminalLogo variant="symbol" theme="light" size={44} />
            <div className="flex flex-col">
              <span className="text-[22px] md:text-[26px] font-bold tracking-tight leading-[1.15] uppercase">
                GLOWMINAL
              </span>
              <span className="text-[11px] font-mono tracking-[0.15em] text-white/40 uppercase mt-0.5">
                AI Skin Intelligence
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Features', href: '/features' },
                { name: 'Science', href: '/science' },
                { name: 'About', href: '/about' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Are */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase mb-5">
              Who We Are
            </h4>
            <p className="text-[15px] text-white/60 leading-relaxed max-w-[240px]">
              The future of explainable skin intelligence. Precision analysis for long-term health.
            </p>
          </div>

          {/* Socials */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase mb-5">
              Socials
            </h4>
            <div className="flex items-center gap-4">
              {[
                { icon: XIcon, href: 'https://x.com/glowminal', label: 'X' },
                { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/glowminal.tech', label: 'LinkedIn' },
                { icon: InstagramIcon, href: 'https://www.instagram.com/glowminal.tech/', label: 'Instagram' },
                { icon: GithubIcon, href: 'https://github.com/glowminal', label: 'GitHub' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/60 hover:text-white transition-colors duration-300"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════
            ROW 2 — Copyright + Email Form
            (separated by a thin border, exactly like reference)
            ═══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASING.expensive }}
          viewport={{ once: true }}
          className="border-t border-white/[0.08] py-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-center"
        >
          {/* Left — Copyright + Legal */}
          <div className="md:col-span-5 flex flex-col gap-1.5">
            <p className="text-[11px] font-mono tracking-[0.1em] text-white/30">
              © MMXXVI • Glowminal • AI Skin Intelligence Platform
            </p>
            <div className="flex items-center gap-3">
              <Link href="/privacy" className="text-[11px] font-mono tracking-[0.1em] text-white/30 hover:text-white/60 underline underline-offset-2 decoration-white/10 hover:decoration-white/30 transition-colors duration-300">
                Privacy Policy
              </Link>
              <span className="text-white/15">•</span>
              <Link href="/terms" className="text-[11px] font-mono tracking-[0.1em] text-white/30 hover:text-white/60 underline underline-offset-2 decoration-white/10 hover:decoration-white/30 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Right — Email Form */}
          <div className="md:col-span-7 flex flex-col md:flex-row md:items-center gap-3 md:justify-end">
            <span className="text-[10px] font-mono tracking-[0.2em] text-white/35 uppercase shrink-0">
              Get Updates
            </span>
            <FooterEmailForm />
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════
            ROW 3 — Contact Emails (bonus — same copy feature)
            ═══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-white/[0.05] py-6 flex flex-wrap items-center gap-6"
        >
          {['hello@glowminal.tech', 'founders@glowminal.tech'].map((email) => (
            <button
              key={email}
              onClick={() => handleCopyEmail(email)}
              className="group flex items-center gap-2 text-[12px] font-mono text-white/25 hover:text-white/50 transition-colors duration-300"
            >
              <span>{email}</span>
              {copiedEmail === email ? (
                <Check className="w-3 h-3 text-primary" />
              ) : (
                <Copy className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              )}
            </button>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
