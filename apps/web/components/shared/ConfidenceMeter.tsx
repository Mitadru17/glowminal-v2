'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface ConfidenceMeterProps {
  label: string
  score: number
  confidence: number
  explanation: string
}

export function ConfidenceMeter({ label, score, confidence, explanation }: ConfidenceMeterProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="rounded-2xl border border-divider bg-surface p-6 shadow-card sm:p-8">
      <div className="flex items-baseline justify-between">
        <span className="font-semibold text-text-primary">{label}</span>
        <span className="text-2xl font-bold text-text-primary">
          {score}
          <span className="text-base font-medium text-text-secondary">/100</span>
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-text-secondary">AI confidence</span>
          <span className="font-semibold text-primary-dark">{confidence}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-divider">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={shouldReduceMotion ? false : { width: 0 }}
            whileInView={{ width: `${confidence}%` }}
            viewport={{ once: true, margin: '-80px' }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }
            }
          />
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-text-secondary">{explanation}</p>
    </div>
  )
}
