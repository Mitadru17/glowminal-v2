'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Activity, Sparkle, ScanFace, Droplets, ArrowRight } from 'lucide-react'

const CHAPTERS = [
  {
    index: "01",
    subtitle: "Precision Analysis",
    icon: ScanFace,
    title: <>Microscopic <span className="font-editorial italic font-light text-primary">reality.</span></>,
    description: "Our vision models detect changes in hydration, pigmentation, and texture before they are visible to the naked eye. We don't just guess your skin type—we measure it.",
    capabilities: ["Sub-surface pigment tracking", "Pore structural analysis", "Hydration mapping"],
    readingTime: "1 MIN READ",
    status: "ACTIVE MODEL",
    imageSrc: "/1.png",
    imageAlt: "Microscopic precision analysis visualization",
    bgColors: ["#FFFFFF", "#FAFAF9", "#F2F5F3", "#F2F5F3"] // White to Ivory transition
  },
  {
    index: "02",
    subtitle: "Skin Memory",
    icon: Activity,
    title: <>A perfect timeline of your <span className="font-editorial italic font-light text-primary">evolution.</span></>,
    description: "Most skincare advice is static. Your skin is not. We track changes across time, creating an undeniable, data-driven record of what actually works for your biology.",
    capabilities: ["Historical efficacy tracking", "Environmental correlation", "Micro-change detection"],
    readingTime: "2 MIN READ",
    status: "RECORDING",
    imageSrc: "/2.png",
    imageAlt: "Skin memory timeline and evolution tracking",
    bgColors: ["#FAFAF9", "#F2F5F3", "#E6EBE7", "#E6EBE7"] // Natural stone to Sage
  },
  {
    index: "03",
    subtitle: "Personalized Routine",
    icon: Droplets,
    title: <>Syncs with your <span className="font-editorial italic font-light text-primary">life.</span></>,
    description: "A routine only works if you stick to it. We build dynamic AM/PM regimens that adapt to your progress, your local weather, and your schedule.",
    capabilities: ["Weather-synced formulations", "Hormonal cycle adaptation", "Active ingredient pacing"],
    readingTime: "2 MIN READ",
    status: "ADAPTIVE",
    imageSrc: "/3.png",
    imageAlt: "Personalized intelligent skincare routine generation",
    bgColors: ["#F2F5F3", "#E6EBE7", "#F0F4F1", "#F0F4F1"] // Sage to Botanical Green
  },
  {
    index: "04",
    subtitle: "Explainable AI",
    icon: Sparkle,
    title: <>No black <span className="font-editorial italic font-light text-primary">boxes.</span></>,
    description: "True intelligence is transparent. Every product recommendation and score change comes with a clear, scientific explanation. You always know exactly why a routine was suggested.",
    capabilities: ["Confidence scoring", "Ingredient rationale logic", "Cross-reference sourcing"],
    readingTime: "1 MIN READ",
    status: "TRANSPARENT",
    imageSrc: "/4.png",
    imageAlt: "Explainable AI model breakdown and logic visualization",
    bgColors: ["#E6EBE7", "#F0F4F1", "#022C22", "#022C22"] // Botanical to Emerald
  }
]

export function FeatureNarrative() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // We have 4 chapters. Progress chunks: 
  // 0.0 - 0.25 : Chapter 1
  // 0.25 - 0.50 : Chapter 2
  // 0.50 - 0.75 : Chapter 3
  // 0.75 - 1.00 : Chapter 4
  
  return (
    <div ref={containerRef} className="relative w-full h-[400vh]">
      <div className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden flex items-center">
        
        {/* Dynamic Environmental Background */}
        <motion.div 
          className="absolute inset-0 z-0 transition-colors duration-1000"
          style={{
            backgroundColor: useTransform(
              smoothProgress,
              [0, 0.33, 0.66, 1],
              ["#FFFFFF", "#F2F5F3", "#F0F4F1", "#043026"]
            )
          }}
        />

        {/* Global Grain */}
        <div 
          className="absolute inset-0 opacity-[0.025] mix-blend-multiply pointer-events-none z-0"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />

        {/* Dynamic Architectural Lighting */}
        <motion.div 
          className="absolute inset-0 opacity-50 z-0 mix-blend-overlay pointer-events-none"
          style={{
            background: useTransform(
              smoothProgress,
              [0, 1],
              [
                "radial-gradient(circle at 50% 0%, rgba(4,120,87,0.03), transparent 70%)",
                "radial-gradient(circle at 50% 100%, rgba(4,120,87,0.15), transparent 70%)"
              ]
            )
          }}
        />

        {/* Main Layout Container */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24 pt-24 pb-12 lg:py-0">
          
          {/* LEFT: Feature Information */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center h-full relative">
            
            {/* Scroll Progress Indicator */}
            <div className="absolute top-12 left-0 flex items-center gap-6">
              <div className="flex gap-2">
                {[0, 1, 2, 3].map((i) => {
                  return (
                    <motion.div 
                      key={i}
                      className="w-8 h-px bg-primary/20 rounded-full overflow-hidden relative"
                    >
                      <motion.div 
                        className="absolute top-0 left-0 bottom-0 bg-primary"
                        style={{
                          width: useTransform(
                            smoothProgress,
                            [Math.max(0, (i - 1) * 0.33), i * 0.33, Math.min(1, (i + 1) * 0.33)],
                            ["0%", "100%", "100%"]
                          ),
                          opacity: useTransform(
                            smoothProgress,
                            [(i - 0.5) * 0.33, i * 0.33, (i + 0.5) * 0.33],
                            [0, 1, 0]
                          )
                        }}
                      />
                    </motion.div>
                  )
                })}
              </div>
              <motion.span 
                className="font-mono text-[10px] tracking-mono text-primary uppercase"
                style={{
                  color: useTransform(smoothProgress, [0.66, 1], ["var(--color-primary)", "rgba(255,255,255,0.7)"])
                }}
              >
                Glowminal OS Narrative
              </motion.span>
            </div>

            {/* Chapters Content */}
            <div className="relative w-full">
              {CHAPTERS.map((chapter, i) => {
                // Determine opacity mapping for crossfading
                const start = (i - 0.5) * 0.33
                const peak = i * 0.33
                const end = (i + 0.5) * 0.33

                // Staggered starts
                const startTitle = start + 0.05
                const startDesc = start + 0.10
                const startCaps = start + 0.15

                return (
                  <motion.div
                    key={chapter.index}
                    className="absolute top-1/2 left-0 w-full -translate-y-1/2"
                    style={{
                      opacity: useTransform(smoothProgress, [start, peak, end], [0, 1, 0]),
                      y: useTransform(smoothProgress, [start, peak, end], [40, 0, -40]),
                      pointerEvents: i === 0 ? "auto" : "none" // Manage clicking (can dynamically update via state if needed)
                    }}
                  >
                    <motion.div 
                      className="font-mono text-[10px] uppercase tracking-mono flex items-center gap-4 mb-8"
                      style={{ color: useTransform(smoothProgress, [0.66, 1], ["var(--color-text-secondary)", "rgba(255,255,255,0.6)"]) }}
                    >
                      <span className="opacity-60">{chapter.index}</span>
                      <span className="h-px w-12 bg-current opacity-20"></span>
                      <span className="flex items-center gap-2 text-primary font-medium">
                        <chapter.icon className="w-4 h-4" /> 
                        {chapter.subtitle}
                      </span>
                    </motion.div>
                    
                    <motion.h2 
                      className="text-5xl sm:text-6xl lg:text-[5rem] font-light tracking-tight leading-[1] mb-8"
                      style={{ 
                        color: useTransform(smoothProgress, [0.66, 1], ["var(--color-text-primary)", "#FFFFFF"]) as any,
                        opacity: useTransform(smoothProgress, [startTitle, peak, end], [0, 1, 0]),
                        y: useTransform(smoothProgress, [startTitle, peak, end], [40, 0, -40])
                      }}
                    >
                      {chapter.title}
                    </motion.h2>
                    
                    <motion.p 
                      className="text-lg lg:text-xl font-light leading-relaxed max-w-md mb-12"
                      style={{ 
                        color: useTransform(smoothProgress, [0.66, 1], ["var(--color-text-secondary)", "rgba(255,255,255,0.8)"]) as any,
                        opacity: useTransform(smoothProgress, [startDesc, peak, end], [0, 1, 0]),
                        y: useTransform(smoothProgress, [startDesc, peak, end], [40, 0, -40])
                      }}
                    >
                      {chapter.description}
                    </motion.p>

                    {/* Micro Capabilities & Meta */}
                    <motion.div 
                      className="flex flex-col gap-8"
                      style={{ 
                        opacity: useTransform(smoothProgress, [startCaps, peak, end], [0, 1, 0]),
                        y: useTransform(smoothProgress, [startCaps, peak, end], [40, 0, -40])
                      }}
                    >
                      <div className="space-y-4 border-l border-primary/20 pl-6">
                        {chapter.capabilities.map((cap, j) => (
                          <div key={j} className="flex items-center gap-3">
                            <div className="w-1 h-1 rounded-full bg-primary/40" />
                            <motion.span 
                              className="text-sm font-light tracking-wide"
                              style={{ color: useTransform(smoothProgress, [0.66, 1], ["var(--color-text-primary)", "rgba(255,255,255,0.9)"]) as any }}
                            >
                              {cap}
                            </motion.span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-6 mt-4">
                        <div className="flex flex-col gap-1">
                          <motion.span 
                            className="font-mono text-[8px] uppercase tracking-mono opacity-50"
                            style={{ color: useTransform(smoothProgress, [0.66, 1], ["var(--color-text-secondary)", "rgba(255,255,255,0.8)"]) as any }}
                          >
                            Status
                          </motion.span>
                          <motion.span 
                            className="font-mono text-[10px] uppercase tracking-mono flex items-center gap-2"
                            style={{ color: useTransform(smoothProgress, [0.66, 1], ["var(--color-text-primary)", "rgba(255,255,255,1)"]) as any }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
                            {chapter.status}
                          </motion.span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <motion.span 
                            className="font-mono text-[8px] uppercase tracking-mono opacity-50"
                            style={{ color: useTransform(smoothProgress, [0.66, 1], ["var(--color-text-secondary)", "rgba(255,255,255,0.8)"]) as any }}
                          >
                            Read Time
                          </motion.span>
                          <motion.span 
                            className="font-mono text-[10px] uppercase tracking-mono"
                            style={{ color: useTransform(smoothProgress, [0.66, 1], ["var(--color-text-primary)", "rgba(255,255,255,1)"]) as any }}
                          >
                            {chapter.readingTime}
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>

                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* RIGHT: Campaign Artwork (Museum Framed) */}
          <div className="w-full lg:w-7/12 h-[50vh] lg:h-[80vh] relative mt-auto lg:mt-0 pb-12 lg:pb-0 flex items-center justify-center">
            
            <div className="relative w-full h-full max-h-[800px] rounded-[2rem] bg-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.05)] overflow-hidden border border-white/20 ring-1 ring-black/5 backdrop-blur-2xl">
              {CHAPTERS.map((chapter, i) => {
                const start = (i - 0.5) * 0.33
                const peak = i * 0.33
                const end = (i + 0.5) * 0.33

                return (
                  <motion.div
                    key={chapter.index}
                    className="absolute inset-4 md:inset-6 rounded-card overflow-hidden bg-background shadow-inner"
                    style={{
                      opacity: useTransform(smoothProgress, [start, peak, end], [0, 1, 0]),
                      scale: useTransform(smoothProgress, [start, peak, end], [0.95, 1, 1.05]),
                      filter: useTransform(smoothProgress, [start, peak, end], ["blur(10px)", "blur(0px)", "blur(10px)"])
                    }}
                  >
                    <img 
                      src={chapter.imageSrc} 
                      alt={chapter.imageAlt}
                      className="w-full h-full object-cover"
                      style={{ 
                        filter: 'saturate(85%) contrast(110%) brightness(95%) sepia(10%) hue-rotate(-5deg)' 
                      }}
                    />
                    
                    {/* Museum Anti-Reflective Glass Layer */}
                    <div className="absolute inset-0 bg-background/5 backdrop-saturate-[1.05] mix-blend-overlay pointer-events-none" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/40 rounded-card pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-60 pointer-events-none mix-blend-screen" />
                    <div className="absolute top-0 right-0 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),_transparent_60%)] -translate-x-1/4 -translate-y-1/4 pointer-events-none mix-blend-soft-light" />
                  </motion.div>
                )
              })}
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}
