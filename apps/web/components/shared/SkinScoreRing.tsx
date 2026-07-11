'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SkinScoreRingProps {
  score: number
  size?: number
  strokeWidth?: number
  className?: string
  animate?: boolean
}

export function SkinScoreRing({
  score,
  size = 120,
  strokeWidth = 9,
  className,
  animate = true,
}: SkinScoreRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const targetOffset = circumference * (1 - score / 100)
  const shouldReduceMotion = useReducedMotion()
  const shouldAnimate = animate && !shouldReduceMotion

  return (
    <div className={cn('relative inline-flex items-center justify-center', className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-divider)"
          strokeWidth={strokeWidth}
        />
        {/* Progress */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={shouldAnimate ? { strokeDashoffset: circumference } : false}
          animate={{ strokeDashoffset: targetOffset }}
          transition={
            shouldAnimate ? { duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.3 } : { duration: 0 }
          }
        />
      </svg>
      {/* Score label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="font-bold leading-none text-text-primary"
          style={{ fontSize: size * 0.28 }}
        >
          {score}
        </span>
        <span
          className="mt-0.5 font-medium text-text-secondary"
          style={{ fontSize: size * 0.12 }}
        >
          / 100
        </span>
      </div>
    </div>
  )
}
