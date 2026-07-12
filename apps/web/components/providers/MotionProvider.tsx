'use client'

import { LazyMotion } from 'framer-motion'
import { ReactNode } from 'react'

const domAnimation = () => import('framer-motion').then((res) => res.domAnimation)

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}
