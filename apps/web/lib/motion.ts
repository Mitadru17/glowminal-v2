/**
 * Glowminal Motion Variants
 *
 * Pre-configured Framer Motion variants aligned with:
 * - Brand.md: 180–250ms duration, fade/scale/slide allowed
 * - Emil Kowalski: ease-out for enter, correct transform-origin, no scale(0)
 *
 * Usage:
 *   <motion.div variants={fadeIn} initial="hidden" animate="visible" />
 *   <motion.div variants={slideUp} initial="hidden" animate="visible" />
 */

import type { Variants } from 'framer-motion'

// ── Easing Curves (Emil Kowalski custom curves) ───────────────────────────

/** Strong ease-out — use for enter animations. Feels immediately responsive. */
export const EASE_OUT = [0.23, 1, 0.32, 1] as const

/** Strong ease-in-out — use for on-screen movement. */
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const

/** Drawer/sheet curve — iOS-like. */
export const EASE_DRAWER = [0.32, 0.72, 0, 1] as const

// ── Duration Constants (aligned with Brand.md 180–250ms) ─────────────────

export const DURATION = {
  /** 180ms — button press feedback, tiny interactions */
  fast: 0.18,
  /** 220ms — tooltips, small popovers, hover states */
  normal: 0.22,
  /** 300ms — modals, drawers, page transitions */
  slow: 0.3,
} as const

// ── Base Variants ─────────────────────────────────────────────────────────

/** Simple opacity fade. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    transition: { duration: DURATION.fast, ease: 'easeIn' },
  },
}

/**
 * Fade + subtle scale. Standard enter for cards, modals, panels.
 * Starts at scale(0.95) — never scale(0). Per Emil: "Nothing in the real
 * world appears from nothing."
 */
export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.normal, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: { duration: DURATION.fast, ease: 'easeIn' },
  },
}

/** Slide up + fade. Use for toasts, bottom sheets, success states. */
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: { duration: DURATION.fast, ease: 'easeIn' },
  },
}

/** Slide down + fade. Use for dropdowns, menus. */
export const slideDown: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: DURATION.fast, ease: 'easeIn' },
  },
}

/** Slide from right. Use for sheets, drawers. */
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE_DRAWER },
  },
  exit: {
    opacity: 0,
    x: 16,
    transition: { duration: DURATION.fast, ease: 'easeIn' },
  },
}

/**
 * Staggered list container.
 * Wrap a list of items — children animate in sequence.
 * Per Emil: stagger 30–80ms between items. Never block interaction.
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,  // 50ms — within Emil's 30–80ms range
      delayChildren: 0.05,
    },
  },
}

/**
 * Stagger child — use with staggerContainer.
 * Each child slides up slightly and fades in.
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE_OUT },
  },
}

/**
 * Page transition — used at the route level.
 * Subtle: just a fade. Fast enough to not feel sluggish.
 */
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    transition: { duration: DURATION.fast },
  },
}
