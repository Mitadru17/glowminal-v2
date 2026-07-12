'use client'

import { m as motion } from "framer-motion"

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      {/* Ambient moving glow - Optimized for GPU */}
      <motion.div
        animate={{
          x: ['-5%', '5%', '-5%'],
          y: ['-5%', '5%', '-5%'] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ willChange: 'transform' }}
        className="absolute -top-[20%] -left-[10%] h-[150vw] w-[150vw] md:h-[80vw] md:w-[80vw] bg-[radial-gradient(circle_at_center,rgba(167,243,208,0.08)_0%,transparent_50%)] mix-blend-multiply rounded-full"
      />
      
      <motion.div
        animate={{
          x: ['5%', '-5%', '5%'],
          y: ['5%', '-5%', '5%'] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ willChange: 'transform' }}
        className="absolute top-[10%] -right-[10%] h-[120vw] w-[120vw] md:h-[70vw] md:w-[70vw] bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.04)_0%,transparent_50%)] mix-blend-multiply rounded-full"
      />
    </div>
  )
}
