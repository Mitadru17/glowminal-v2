'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface TrendBarChartProps {
  data: { label: string; value: number }[]
}

export function TrendBarChart({ data }: TrendBarChartProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="flex h-32 items-end justify-between gap-2">
      {data.map((point, i) => (
        <div key={point.label} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex h-full w-full items-end">
            <motion.div
              className="w-full rounded-t-sm bg-primary/25 transition-colors hover:bg-primary/40"
              initial={shouldReduceMotion ? false : { height: 0 }}
              whileInView={{ height: `${point.value}%` }}
              viewport={{ once: true, margin: '-80px' }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 }
              }
            />
          </div>
          <span className="text-caption font-medium text-text-secondary">{point.label}</span>
        </div>
      ))}
    </div>
  )
}
