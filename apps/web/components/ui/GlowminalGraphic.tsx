'use client'

import React, { useRef, useState, useCallback, useEffect } from 'react'
import { m as motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { EASING } from '@/lib/theme/motion'

// ─────────────────────────────────────────────────────────────
// GLOWMINAL GRAPHIC — Interactive SVG Recreation
// ─────────────────────────────────────────────────────────────
// Recreated from the brand PNG as a production SVG.
// Layers: 3 overlapping pills → GLOWMINAL typography → ™
// All layers individually animatable.
// ─────────────────────────────────────────────────────────────

interface GlowminalGraphicProps {
  /** Width in pixels. Height auto-calculated from aspect ratio. */
  width?: number
  /** Theme: 'footer' renders on dark bg, 'light' renders on light bg */
  theme?: 'footer' | 'light'
  /** Enable interactive hover/click animations */
  interactive?: boolean
  /** Custom class name */
  className?: string
  /** Click handler — defaults to scroll-to-top */
  onClick?: () => void
}

// Pill geometry constants (proportional to viewBox 520×280)
const PILL_RX = 84
const PILL_RY = 112
const PILL_CY = 100
const PILL_CXS = [222, 330, 438] // left, center, right pill centers — tighter overlap
const PILL_COLOR = '#BFFF00' // Neon lime-green from the brand graphic

// Spring config for premium feel
const SPRING = { stiffness: 200, damping: 25, mass: 0.8 }
const SPRING_GENTLE = { stiffness: 120, damping: 20, mass: 1 }

export function GlowminalGraphic({
  width = 320,
  theme = 'footer',
  interactive = true,
  className = '',
  onClick,
}: GlowminalGraphicProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  // Mouse position for magnetic cursor effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, SPRING_GENTLE)
  const smoothY = useSpring(mouseY, SPRING_GENTLE)

  // Transform mouse position to subtle translation for magnetic effect
  const magnetX = useTransform(smoothX, [-1, 1], [-3, 3])
  const magnetY = useTransform(smoothY, [-1, 1], [-2, 2])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current || !interactive || prefersReducedMotion) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    mouseX.set(x)
    mouseY.set(y)
  }, [interactive, prefersReducedMotion, mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }, [mouseX, mouseY])

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick()
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [onClick])

  // Colors based on theme
  const textColor = theme === 'footer' ? '#FFFFFF' : '#0A0A0A'
  const tmColor = theme === 'footer' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)'

  // ViewBox dimensions
  const viewBoxW = 660
  const viewBoxH = 240
  const height = (width * viewBoxH) / viewBoxW

  // Pill floating animation variants
  const floatVariants = [
    { y: [0, -3, 0], duration: 5.2 },
    { y: [0, -4, 0], duration: 4.6 },
    { y: [0, -3.5, 0], duration: 5.8 },
  ]

  // Sequential pill hover offsets
  const pillHoverDelays = [0, 0.06, 0.12]

  return (
    <motion.div
      ref={containerRef}
      className={`relative select-none ${interactive ? 'cursor-pointer' : ''} ${className}`}
      style={{ width, height }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => interactive && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={interactive ? handleClick : undefined}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label="Glowminal — scroll to top"
      onKeyDown={(e) => {
        if (interactive && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          handleClick()
        }
      }}
    >
      {/* Magnetic wrapper */}
      <motion.div
        style={interactive && !prefersReducedMotion ? { x: magnetX, y: magnetY } : {}}
      >
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${viewBoxW} ${viewBoxH}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Glow filter for hover state */}
            <filter id="glowminal-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feFlood floodColor={PILL_COLOR} floodOpacity="0.25" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Light sweep gradient */}
            <linearGradient id="glowminal-sweep" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="40%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="white" stopOpacity="0.3" />
              <stop offset="60%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            {/* Clip path for light sweep contained within pills */}
            <clipPath id="glowminal-pills-clip">
              {PILL_CXS.map((cx, i) => (
                <ellipse key={i} cx={cx} cy={PILL_CY} rx={PILL_RX} ry={PILL_RY} />
              ))}
            </clipPath>
          </defs>

          {/* ─── LAYER 1-3: BACKGROUND PILLS ─── */}
          <motion.g
            filter={isHovered && !prefersReducedMotion ? 'url(#glowminal-glow)' : undefined}
            animate={isPressed ? { scale: 0.97 } : isHovered ? { scale: 1.02 } : { scale: 1 }}
            transition={{ type: 'spring', ...SPRING }}
            style={{ originX: '50%', originY: '42%' }}
          >
            {PILL_CXS.map((cx, i) => (
              <motion.ellipse
                key={`pill-${i}`}
                cx={cx}
                cy={PILL_CY}
                rx={PILL_RX}
                ry={PILL_RY}
                fill={PILL_COLOR}
                // Idle: subtle individual floating
                animate={
                  prefersReducedMotion
                    ? {}
                    : isHovered
                    ? {
                        y: [-2 + i * 1.5, 2 - i * 1.5, -2 + i * 1.5],
                        x: [i === 0 ? -3 : i === 2 ? 3 : 0, 0, i === 0 ? -3 : i === 2 ? 3 : 0],
                      }
                    : {
                        y: floatVariants[i]!.y,
                      }
                }
                transition={
                  isHovered
                    ? {
                        y: { repeat: Infinity, duration: 2.4, ease: 'easeInOut' as const, delay: pillHoverDelays[i] ?? 0 },
                        x: { repeat: Infinity, duration: 3.2, ease: 'easeInOut' as const, delay: pillHoverDelays[i] ?? 0 },
                      }
                    : {
                        y: { repeat: Infinity, duration: floatVariants[i]!.duration, ease: 'easeInOut' },
                      }
                }
                style={{ willChange: 'transform' }}
              />
            ))}

            {/* ─── LIGHT SWEEP (idle + hover) ─── */}
            {!prefersReducedMotion && (
              <motion.rect
                x={-100}
                y={0}
                width={720}
                height={280}
                fill="url(#glowminal-sweep)"
                clipPath="url(#glowminal-pills-clip)"
                animate={{
                  x: [-720, 720],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    duration: isHovered ? 2.5 : 6,
                    ease: 'easeInOut',
                    repeatDelay: isHovered ? 0.5 : 3,
                  },
                }}
                style={{ willChange: 'transform', pointerEvents: 'none' }}
              />
            )}
          </motion.g>

          {/* ─── LAYER 4: GLOWMINAL TYPOGRAPHY ─── */}
          <motion.text
            x={viewBoxW / 2}
            y={175}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={textColor}
            fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
            fontSize="94"
            fontWeight="900"
            letterSpacing="-1.5"
            style={{ willChange: 'transform' }}
            animate={
              isPressed
                ? { y: 2 }
                : isHovered
                ? { y: -2 }
                : { y: 0 }
            }
            transition={{ type: 'spring', ...SPRING }}
          >
            GLOWMINAL
          </motion.text>

          {/* ─── LAYER 5: TRADEMARK ─── */}
          <motion.text
            x={548}
            y={130}
            fill={tmColor}
            fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
            fontSize="18"
            fontWeight="500"
            style={{ willChange: 'opacity' }}
            animate={isHovered ? { opacity: 0.7 } : { opacity: 0.4 }}
            transition={{ duration: 0.3 }}
          >
            ™
          </motion.text>
        </svg>
      </motion.div>

      {/* ─── BREATHING GLOW (ambient, behind everything) ─── */}
      {!prefersReducedMotion && theme === 'footer' && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center 40%, ${PILL_COLOR}15, transparent 70%)`,
            willChange: 'opacity',
          }}
          animate={{
            opacity: isHovered ? [0.4, 0.7, 0.4] : [0.15, 0.3, 0.15],
          }}
          transition={{
            opacity: {
              repeat: Infinity,
              duration: isHovered ? 2 : 4,
              ease: 'easeInOut',
            },
          }}
        />
      )}
    </motion.div>
  )
}
