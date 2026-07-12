'use client'

import React from 'react'
import { motion } from 'framer-motion'

export type LogoVariant = 'primary' | 'horizontal' | 'vertical' | 'symbol' | 'wordmark' | 'monogram'
export type LogoTheme = 'light' | 'dark' | 'current'
export type LogoSize = 'sm' | 'md' | 'lg' | 'xl' | number

export interface GlowminalLogoProps {
  variant?: LogoVariant
  theme?: LogoTheme
  size?: LogoSize
  animated?: boolean
  loading?: boolean
  showTagline?: boolean
  className?: string
}

export function GlowminalLogo({
  variant = 'horizontal',
  theme = 'current',
  size = 'md',
  animated = false,
  loading = false,
  showTagline = true,
  className = '',
}: GlowminalLogoProps) {
  // Theme resolution
  let themeClass = ''
  if (theme === 'light') themeClass = 'text-white'
  else if (theme === 'dark') themeClass = 'text-[#022C22]'

  // Size and ViewBox resolution
  let width: string | number
  let height: string | number
  let viewBox = '0 0 460 100'

  if (variant === 'symbol' || variant === 'monogram') {
    viewBox = '0 0 100 100'
    const sizes: Record<string, number> = { sm: 24, md: 48, lg: 80, xl: 120 }
    width = typeof size === 'number' ? size : sizes[size as string] || 48
    height = width
  } else if (variant === 'wordmark') {
    viewBox = '120 15 340 85'
    const sizes: Record<string, number> = { sm: 120, md: 200, lg: 300, xl: 400 }
    width = typeof size === 'number' ? size : sizes[size as string] || 200
    height = (Number(width) * 85) / 340
  } else if (variant === 'vertical') {
    viewBox = '-50 0 200 220'
    const sizes: Record<string, number> = { sm: 80, md: 140, lg: 200, xl: 300 }
    width = typeof size === 'number' ? size : sizes[size as string] || 140
    height = (Number(width) * 220) / 200
  } else {
    // horizontal / primary
    viewBox = '0 0 460 100'
    const sizes: Record<string, number> = { sm: 160, md: 260, lg: 360, xl: 460 }
    width = typeof size === 'number' ? size : sizes[size as string] || 260
    height = (Number(width) * 100) / 460
  }

  // Symbol Generator
  const renderSymbol = (yOffset = 0) => {
    const rays = Array.from({ length: 32 }).map((_, i) => {
      const angle = (i * 360) / 32
      let outerRadius = 23
      if (i % 8 === 0) outerRadius = 50
      else if (i % 8 === 4) outerRadius = 38
      else if (i % 2 === 0) outerRadius = 28
      return { id: i, angle, outerRadius, innerRadius: 18 }
    })

    return (
      <motion.g 
        transform={`translate(50, ${50 + yOffset})`} 
        className="origin-center"
        animate={(loading ? { rotate: 360 } : undefined) as any}
        transition={(loading ? { repeat: Infinity, duration: 8, ease: "linear" } : undefined) as any}
        style={{ transformOrigin: `50px ${50 + yOffset}px` }}
      >
        {rays.map((ray, i) => (
          <motion.line
            key={ray.id}
            x1="0"
            y1={-ray.innerRadius}
            x2="0"
            y2={-ray.outerRadius}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            transform={`rotate(${ray.angle})`}
            initial={(animated ? { opacity: 0, scale: 0.2 } : false) as any}
            animate={(animated ? { opacity: 1, scale: 1 } : false) as any}
            transition={(animated ? { delay: i * 0.02, duration: 0.8, ease: [0.22, 1, 0.36, 1] } : undefined) as any}
          />
        ))}
      </motion.g>
    )
  }

  const renderWordmark = (yOffset = 0, xOffset = 130) => {
    return (
      <g>
        <motion.text
          x={xOffset}
          y={70 + yOffset}
          fontFamily="var(--font-jost)"
          fontSize="68"
          fontWeight="300"
          fill="currentColor"
          initial={(animated ? { opacity: 0, x: -10 } : false) as any}
          animate={(animated ? { opacity: 1, x: 0 } : false) as any}
          transition={(animated ? { delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] } : undefined) as any}
        >
          Glowminal
        </motion.text>
        {showTagline && (
          <motion.text
            x={xOffset + 2}
            y={94 + yOffset}
            fontFamily="var(--font-jost)"
            fontSize="10"
            fontWeight="400"
            letterSpacing="0.27em"
            fill="currentColor"
            className="uppercase"
            initial={(animated ? { opacity: 0 } : false) as any}
            animate={(animated ? { opacity: 1 } : false) as any}
            transition={(animated ? { delay: 0.8, duration: 1 } : undefined) as any}
          >
            THE FUTURE OF EXPLAINABLE SKIN INTELLIGENCE
          </motion.text>
        )}
      </g>
    )
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${themeClass} ${className} transition-colors duration-300`}
      aria-label="Glowminal Logo"
      role="img"
    >
      {(variant === 'horizontal' || variant === 'primary') && (
        <>
          {renderSymbol()}
          {renderWordmark()}
        </>
      )}
      {variant === 'symbol' && renderSymbol()}
      {variant === 'wordmark' && renderWordmark()}
      {variant === 'vertical' && (
        <>
          {renderSymbol(0)}
          {renderWordmark(110, -50)}
        </>
      )}
    </svg>
  )
}
