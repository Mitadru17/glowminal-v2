'use client'

import { Variants, m as motion } from "framer-motion"
import { ReactNode } from 'react'

interface SplitTextRevealProps {
  children: string | ReactNode
  delay?: number
  className?: string
  as?: React.ElementType
}

export function SplitTextReveal({ children, delay = 0, className = '', as: Component = 'div' }: SplitTextRevealProps) {
  if (typeof children !== 'string') {
    return (
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  const words = children.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i } }) }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] } },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] } } }

  const MotionComponent = motion.create(Component as any)

  return (
    <MotionComponent
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  )
}
