'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

interface AnimatedNumberProps {
  value: number
  suffix?: string
  className?: string
}

export function AnimatedNumber({ value, suffix = '', className }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 })

  useEffect(() => {
    if (isInView || shouldReduceMotion) {
      motionValue.set(value)
    }
  }, [isInView, shouldReduceMotion, value, motionValue])

  useEffect(() => {
    if (!ref.current) return
    if (shouldReduceMotion) {
      ref.current.textContent = `${value}${suffix}`
      return
    }
    return spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`
      }
    })
  }, [spring, shouldReduceMotion, value, suffix])

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  )
}
