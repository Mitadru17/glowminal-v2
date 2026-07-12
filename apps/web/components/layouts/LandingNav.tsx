'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useScroll, useMotionValueEvent, AnimatePresence, m as motion } from "framer-motion"
import { Sparkles, Menu, X } from 'lucide-react'
import { GlowminalLogo } from '@/components/ui/GlowminalLogo'
import { EASING, DURATION } from '@/lib/theme/motion'
import { useNavThemeStore, NavTheme } from '@/store/nav-theme'
import { toast } from 'sonner'

const NAV_LINKS = [
  { href: '/features', label: 'Features' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/info', label: 'Info' },
]

const THEMES: Record<NavTheme, any> = {
  hero: {
    background: "rgba(2, 44, 34, 0.25)", // deep emerald translucent
    backdropFilter: "blur(24px) saturate(1.2)",
    borderColor: "rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.1)",
    color: "#FFFFFF",
    logoBg: "rgba(255, 255, 255, 0.15)",
    logoIcon: "#FFFFFF",
    ctaBg: "rgba(255, 255, 255, 0.95)",
    ctaText: "#022C22",
    ctaHover: "#FFFFFF" },
  editorial: {
    background: "rgba(255, 255, 255, 0.65)", // soft frosted white
    backdropFilter: "blur(24px) saturate(1.4)",
    borderColor: "rgba(0, 0, 0, 0.05)",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.04), inset 0 1px 0px rgba(255, 255, 255, 0.8)",
    color: "#1C1917", // warm charcoal
    logoBg: "#1C1917",
    logoIcon: "#FFFFFF",
    ctaBg: "#1C1917",
    ctaText: "#FFFFFF",
    ctaHover: "#2E3A23" },
  scientific: {
    background: "rgba(255, 255, 255, 0.75)", // soft frosted white
    backdropFilter: "blur(24px) saturate(1.2)",
    borderColor: "rgba(0, 0, 0, 0.05)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.02)",
    color: "#1C1917",
    logoBg: "#1C1917",
    logoIcon: "#FFFFFF",
    ctaBg: "#1C1917",
    ctaText: "#FFFFFF",
    ctaHover: "#2E3A23" },
  botanical: {
    background: "rgba(4, 120, 87, 0.4)", // mid emerald translucent
    backdropFilter: "blur(32px) saturate(1.5)",
    borderColor: "rgba(255, 255, 255, 0.15)",
    boxShadow: "0 16px 48px rgba(2, 44, 34, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.1)",
    color: "#FFFFFF",
    logoBg: "rgba(255, 255, 255, 0.2)",
    logoIcon: "#FFFFFF",
    ctaBg: "rgba(255, 255, 255, 0.95)",
    ctaText: "#047857",
    ctaHover: "#FFFFFF" },
  footer: {
    background: "rgba(2, 44, 34, 0.6)", // deep emerald glass
    backdropFilter: "blur(48px) saturate(1.2)",
    borderColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2), inset 0 1px 0px rgba(255, 255, 255, 0.05)",
    color: "#FFFFFF",
    logoBg: "rgba(255, 255, 255, 0.15)",
    logoIcon: "#FFFFFF",
    ctaBg: "var(--color-primary)",
    ctaText: "#FFFFFF",
    ctaHover: "rgba(16, 185, 129, 1)" }
}

export function LandingNav() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const themeKey = useNavThemeStore(state => state.theme)

  // Hide nav when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0
    if (latest > 150 && latest > previous && !mobileMenuOpen) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  // Prevent hydration errors by ensuring we only animate after mount
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    // Always default to editorial theme on non-landing pages unless overridden by a zone
    if (pathname !== '/') {
      useNavThemeStore.getState().setTheme('editorial')
    }
  }, [pathname])
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Body scroll lock for fullscreen menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  if (!mounted) return null

  const activeTheme = THEMES[themeKey]

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: '-100%', opacity: 0 } }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: DURATION.hero, ease: EASING.expensive }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-[calc(max(1.5rem,env(safe-area-inset-top)))] px-4"
      >
        <motion.nav
          initial={false}
          animate={{
            backgroundColor: mobileMenuOpen ? (activeTheme.color === "#FFFFFF" ? "rgba(2, 44, 34, 0.95)" : "rgba(255, 255, 255, 0.95)") : activeTheme.background,
            backdropFilter: activeTheme.backdropFilter,
            borderColor: mobileMenuOpen ? "rgba(0, 0, 0, 0)" : activeTheme.borderColor,
            boxShadow: activeTheme.boxShadow,
            color: activeTheme.color
          }}
          transition={{ duration: DURATION.scene, ease: EASING.expensive }}
          className="relative z-50 flex items-center justify-between mx-auto w-full max-w-[900px] py-3 px-6 rounded-full border border-solid"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80 shrink-0 group focus-visible:outline-none"
            aria-label="Glowminal Home"
          >
            <GlowminalLogo variant="horizontal" size={160} showTagline={false} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-opacity focus-visible:outline-none ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ backgroundColor: "currentColor" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-[1px] origin-left scale-x-0 transition-transform duration-300 ease-out hover:scale-x-100 opacity-30"
                      style={{ backgroundColor: "currentColor" }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 shrink-0 md:flex">
            <button 
              onClick={() => {
                toast('Coming Soon', { description: 'We are currently in private beta. You can join the waitlist below.' })
                document.getElementById('waitlist-footer')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity px-2 focus-visible:outline-none focus-visible:ring-2 rounded-sm"
            >
              Sign In
            </button>
            <button 
              onClick={() => {
                toast('Coming Soon', { description: 'We are currently in private beta. You can join the waitlist below.' })
                document.getElementById('waitlist-footer')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-2.5 text-sm font-medium shadow-sm transition-transform duration-500 ease-expensive hover:scale-[0.98] active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              <motion.span 
                initial={false}
                animate={{ backgroundColor: activeTheme.ctaBg }}
                transition={{ duration: 0.8, ease: EASING.expensive }}
                className="absolute inset-0 h-full w-full" 
              />
              
              <motion.span 
                initial={false}
                animate={{ backgroundColor: activeTheme.ctaHover }}
                transition={{ duration: 0.8, ease: EASING.expensive }}
                className="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              />
              
              <motion.span 
                initial={false}
                animate={{ color: activeTheme.ctaText }}
                transition={{ duration: 0.8, ease: EASING.expensive }}
                className="relative tracking-wide font-semibold"
              >
                 Start Free Scan
              </motion.span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -mr-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ 
              opacity: 1, y: 0, scale: 1,
              backgroundColor: activeTheme.color === "#FFFFFF" ? "rgba(2, 44, 34, 0.98)" : "rgba(250, 250, 249, 0.98)",
              color: activeTheme.color === "#FFFFFF" ? "#FFFFFF" : "#1C1917"
            }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: EASING.expensive }}
            className="fixed inset-0 z-40 backdrop-blur-3xl flex flex-col justify-center px-8 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(4,120,87,0.05),transparent_70%)] pointer-events-none" />
            
            <nav className="flex flex-col gap-8 text-2xl font-light tracking-tight z-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASING.expensive }}
                  key={link.href}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-4 text-current hover:opacity-70 transition-opacity py-2 active:scale-95 origin-left touch-manipulation"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <div className="h-px w-12 bg-current opacity-20 my-4" />
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: EASING.expensive }}
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    toast('Coming Soon', { description: 'We are currently in private beta. You can join the waitlist below.' })
                    document.getElementById('waitlist-footer')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-xl font-medium text-current opacity-70 hover:opacity-100 transition-opacity text-left py-2 active:scale-95 origin-left touch-manipulation"
                >
                  Sign In
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: EASING.expensive }}
                className="mt-4"
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    toast('Coming Soon', { description: 'We are currently in private beta. You can join the waitlist below.' })
                    document.getElementById('waitlist-footer')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-full inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-5 text-lg font-medium bg-primary text-white hover:bg-primary-dark transition-transform active:scale-[0.98] touch-manipulation"
                >
                  Start Free Scan
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
