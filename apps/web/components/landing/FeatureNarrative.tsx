'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion'
import { Activity, Sparkle, ScanFace, Droplets, ArrowRight } from 'lucide-react'
import { useNavThemeStore } from '@/store/nav-theme'
import Image from 'next/image'

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

  const setNavTheme = useNavThemeStore(state => state.setTheme)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.05) return // Let Hero handle it
    if (latest < 0.33) {
      setNavTheme('editorial')
    } else if (latest < 0.8) {
      setNavTheme('scientific')
    } else if (latest <= 1) {
      setNavTheme('botanical')
    }
  })

  // We have 4 chapters. Progress chunks: 
  // 0.0 - 0.25 : Chapter 1
  // 0.25 - 0.50 : Chapter 2
  // 0.50 - 0.75 : Chapter 3
  // 0.75 - 1.00 : Chapter 4
  
  return (
    <div ref={containerRef} className="relative w-full">
      {/* DESKTOP / TABLET LANDSCAPE: Sticky Crossfade Engine */}
      <div className="hidden lg:block relative w-full h-[400vh]">
      <div className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden flex items-center">
        
        {/* Dynamic Environmental Background */}
        <motion.div 
          className="absolute inset-0 z-0 transition-colors duration-1000"
          style={{
            backgroundColor: useTransform(
              smoothProgress,
              [0, 0.33, 0.66, 0.85, 1],
              ["#FAFAF9", "#F2F5F3", "#E8F0EA", "#184133", "#022C22"]
            )
          }}
        />

        {/* Global Grain */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none z-0"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />

        {/* Dynamic Architectural Lighting */}
        <motion.div 
          className="absolute inset-0 opacity-50 z-0 pointer-events-none"
          style={{
            background: useTransform(
              smoothProgress,
              [0, 0.66, 1],
              [
                "radial-gradient(circle at 50% 0%, rgba(4,120,87,0.02), transparent 70%)",
                "radial-gradient(circle at 50% 50%, rgba(4,120,87,0.05), transparent 70%)",
                "radial-gradient(circle at 50% 100%, rgba(4,120,87,0.2), transparent 80%)"
              ]
            ),
            mixBlendMode: useTransform(smoothProgress, [0.66, 1], ["multiply", "screen"]) as any
          }}
        />

        {/* Main Layout Container */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-24 pt-[80px] sm:pt-[100px] lg:pt-0 pb-6 lg:pb-0">
          
          {/* LEFT/BOTTOM: Feature Information */}
          <div className="w-full lg:w-5/12 h-[55%] lg:h-full flex flex-col justify-start lg:justify-center relative z-20">
            
            {/* Scroll Progress Indicator */}
            <div className="absolute top-0 lg:top-12 left-0 flex items-center gap-4 lg:gap-6">
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
            <div className="relative w-full h-full mt-12 lg:mt-0">
              {CHAPTERS.map((chapter, i) => {
                // Determine opacity mapping for crossfading
                const start = (i - 0.5) * 0.33
                const peak = i * 0.33
                const end = (i + 0.5) * 0.33

                // Staggered starts
                const startTitle = start + 0.05
                const startDesc = start + 0.10
                const startCaps = start + 0.15
                
                const isDark = i === 3

                return (
                  <motion.div
                    key={chapter.index}
                    className="absolute top-1/2 left-0 w-full -translate-y-1/2"
                    style={{
                      opacity: useTransform(smoothProgress, [start, peak, end], [0, 1, 0]),
                      pointerEvents: i === 0 ? "auto" : "none", // Manage clicking
                      willChange: "opacity, transform"
                    }}
                  >
                    <motion.div 
                      className="font-mono text-[10px] uppercase tracking-mono flex items-center gap-3 lg:gap-4 mb-4 lg:mb-8"
                      style={{ 
                        color: isDark ? "rgba(255,255,255,0.6)" : "var(--color-text-secondary)",
                        y: useTransform(smoothProgress, [start, peak, end], [30, 0, -30])
                      }}
                    >
                      <span className="opacity-60">{chapter.index}</span>
                      <span className="h-px w-12 bg-current opacity-20"></span>
                      <span className="flex items-center gap-2 text-primary font-medium">
                        <chapter.icon className="w-4 h-4" /> 
                        {chapter.subtitle}
                      </span>
                    </motion.div>
                    
                    <motion.h2 
                      className="text-[8.5vw] xs:text-4xl sm:text-5xl lg:text-[5rem] font-light tracking-tight leading-[1] mb-4 lg:mb-8"
                      style={{ 
                        color: isDark ? "#FFFFFF" : "var(--color-text-primary)",
                        opacity: useTransform(smoothProgress, [startTitle, peak, end], [0, 1, 0]),
                        y: useTransform(smoothProgress, [startTitle, peak, end], [40, 0, -40])
                      }}
                    >
                      {chapter.title}
                    </motion.h2>
                    
                    <motion.p 
                      className="text-sm xs:text-base lg:text-xl font-light leading-relaxed max-w-md mb-6 lg:mb-12"
                      style={{ 
                        color: isDark ? "rgba(255,255,255,0.8)" : "var(--color-text-secondary)",
                        opacity: useTransform(smoothProgress, [startDesc, peak, end], [0, 1, 0]),
                        y: useTransform(smoothProgress, [startDesc, peak, end], [40, 0, -40])
                      }}
                    >
                      {chapter.description}
                    </motion.p>

                    {/* Micro Capabilities & Meta */}
                    <motion.div 
                      className="flex flex-col gap-4 lg:gap-8 hidden xs:flex"
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
                              style={{ color: isDark ? "rgba(255,255,255,0.9)" : "var(--color-text-primary)" }}
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
                            style={{ color: isDark ? "rgba(255,255,255,0.8)" : "var(--color-text-secondary)" }}
                          >
                            Status
                          </motion.span>
                          <motion.span 
                            className="font-mono text-[10px] uppercase tracking-mono flex items-center gap-2"
                            style={{ color: isDark ? "rgba(255,255,255,1)" : "var(--color-text-primary)" }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
                            {chapter.status}
                          </motion.span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <motion.span 
                            className="font-mono text-[8px] uppercase tracking-mono opacity-50"
                            style={{ color: isDark ? "rgba(255,255,255,0.8)" : "var(--color-text-secondary)" }}
                          >
                            Read Time
                          </motion.span>
                          <motion.span 
                            className="font-mono text-[10px] uppercase tracking-mono"
                            style={{ color: isDark ? "rgba(255,255,255,1)" : "var(--color-text-primary)" }}
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

          {/* RIGHT/TOP: Campaign Artwork (Museum Framed) */}
          <div className="w-full lg:w-7/12 h-[45%] lg:h-[80vh] relative flex items-center justify-center pt-2 lg:pt-0">
            
            <div className="relative w-full h-full max-h-[800px] rounded-3xl lg:rounded-[2rem] bg-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.05)] overflow-hidden border border-white/20 ring-1 ring-black/5 backdrop-blur-2xl">
              {CHAPTERS.map((chapter, i) => {
                const start = (i - 0.5) * 0.33
                const peak = i * 0.33
                const end = (i + 0.5) * 0.33

                return (
                  <motion.div
                    key={chapter.index}
                    className="absolute inset-2 sm:inset-4 lg:inset-6 rounded-2xl lg:rounded-card overflow-hidden bg-background shadow-inner"
                    style={{
                      opacity: useTransform(smoothProgress, [start, peak, end], [0, 1, 0]),
                      scale: useTransform(smoothProgress, [start, peak, end], [0.95, 1, 1.05]),
                      filter: useTransform(smoothProgress, [start, peak, end], ["blur(10px)", "blur(0px)", "blur(10px)"]),
                      willChange: "transform, opacity, filter"
                    }}
                  >
                    <Image 
                      src={chapter.imageSrc} 
                      alt={chapter.imageAlt}
                      fill
                      priority={true}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
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

      {/* MOBILE / PORTRAIT: Premium Stacked Editorial Cards */}
      <motion.div 
        className="block lg:hidden w-full px-4 sm:px-6 py-24 space-y-8"
        style={{
          backgroundColor: useTransform(
            smoothProgress,
            [0, 0.33, 0.66, 0.85, 1],
            ["#FAFAF9", "#F2F5F3", "#E8F0EA", "#184133", "#022C22"]
          )
        }}
      >
        <div className="text-center mb-16">
          <span className="font-mono text-[10px] uppercase tracking-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
            Glowminal OS Narrative
          </span>
        </div>

        {CHAPTERS.map((chapter, i) => {
          const isDark = i === 3;

          return (
            <motion.div 
              key={chapter.index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col w-full rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border ${
                isDark 
                  ? "bg-[#022C22] border-white/10 text-white" 
                  : "bg-surface-elevated border-black/5 text-text-primary"
              }`}
            >
              
              {/* Image Section (Always Top) */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-black/5">
                <Image 
                  src={chapter.imageSrc} 
                  alt={chapter.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  style={{ filter: 'saturate(85%) contrast(110%) brightness(95%) sepia(10%) hue-rotate(-5deg)' }}
                />
                <div className="absolute inset-0 bg-background/5 backdrop-saturate-[1.05] mix-blend-overlay pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
              </div>

              {/* Text Section (Always Bottom) */}
              <div className="flex flex-col p-8 sm:p-10">
                <div 
                  className={`font-mono text-[10px] uppercase tracking-mono flex items-center gap-3 mb-6 ${
                    isDark ? "text-white/60" : "text-text-secondary"
                  }`}
                >
                  <span className="opacity-60">{chapter.index}</span>
                  <span className="h-px w-8 bg-current opacity-20"></span>
                  <span className="flex items-center gap-2 font-medium text-primary">
                    <chapter.icon className="w-3.5 h-3.5" /> 
                    {chapter.subtitle}
                  </span>
                </div>
                
                <h2 className="text-4xl xs:text-5xl font-light tracking-tight leading-[1] mb-6">
                  {chapter.title}
                </h2>
                
                <p className={`text-base font-light leading-relaxed mb-8 ${isDark ? "text-white/80" : "text-text-secondary"}`}>
                  {chapter.description}
                </p>

                <div className={`space-y-3 pl-4 mb-8 border-l ${isDark ? "border-white/20" : "border-primary/20"}`}>
                  {chapter.capabilities.map((cap, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-primary/50" />
                      <span className={`text-sm font-light tracking-wide ${isDark ? "text-white/90" : "text-text-primary"}`}>
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto pt-4">
                  <div className="flex flex-col gap-1">
                    <span className={`font-mono text-[8px] uppercase tracking-mono opacity-50 ${isDark ? "text-white" : "text-text-secondary"}`}>
                      Status
                    </span>
                    <span className={`font-mono text-[10px] uppercase tracking-mono flex items-center gap-2 ${isDark ? "text-white" : "text-text-primary"}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
                      {chapter.status}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className={`font-mono text-[8px] uppercase tracking-mono opacity-50 ${isDark ? "text-white" : "text-text-secondary"}`}>
                      Read Time
                    </span>
                    <span className={`font-mono text-[10px] uppercase tracking-mono ${isDark ? "text-white" : "text-text-primary"}`}>
                      {chapter.readingTime}
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
