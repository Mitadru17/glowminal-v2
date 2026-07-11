'use client'

import { Activity, Sparkle, ScanFace, Droplets } from 'lucide-react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const BENTO_ITEMS = [
  {
    index: "01",
    subtitle: "Precision Analysis",
    icon: ScanFace,
    title: <>Microscopic <span className="font-editorial italic text-primary">reality.</span></>,
    description: "Our vision models detect changes in hydration, pigmentation, and texture before they are visible to the naked eye. We don't just guess your skin type—we measure it.",
    imageSrc: "/1.png",
    imageAlt: "Microscopic precision analysis visualization",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    index: "02",
    subtitle: "Skin Memory",
    icon: Activity,
    title: <>A perfect timeline of your <span className="font-editorial italic text-primary">evolution.</span></>,
    description: "We track changes across time, creating an undeniable, data-driven record of what actually works for your biology.",
    imageSrc: "/2.png",
    imageAlt: "Skin memory timeline and evolution tracking",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    index: "03",
    subtitle: "Personalized Routine",
    icon: Droplets,
    title: <>Syncs with your <span className="font-editorial italic text-primary">life.</span></>,
    description: "We build dynamic AM/PM regimens that adapt to your progress, your local weather, and your schedule.",
    imageSrc: "/3.png",
    imageAlt: "Personalized intelligent skincare routine generation",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    index: "04",
    subtitle: "Explainable AI",
    icon: Sparkle,
    title: <>No black <span className="font-editorial italic text-primary">boxes.</span></>,
    description: "True intelligence is transparent. Every product recommendation and score change comes with a clear explanation.",
    imageSrc: "/4.png",
    imageAlt: "Explainable AI model breakdown and logic visualization",
    className: "md:col-span-2 md:row-span-1 flex-row"
  }
]

export function BentoGrid() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 max-w-[1400px] mx-auto z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[450px]">
        {BENTO_ITEMS.map((item, i) => (
          <ScrollReveal 
            key={item.index} 
            delay={i * 0.1}
            className={`group relative rounded-surface bg-surface-elevated/40 shadow-glass-elevated overflow-hidden border border-white/80 ring-1 ring-black/5 backdrop-blur-glass flex flex-col ${item.className}`}
          >
            {/* Ambient Lighting Background behind image */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(4,120,87,0.03),_transparent_60%)] pointer-events-none" />
            
            {/* Text Content */}
            <div className="relative z-20 flex flex-col justify-end p-8 md:p-12 h-full">
              <div className="font-mono text-[10px] uppercase tracking-mono text-text-secondary flex items-center gap-4 mb-4">
                <span>{item.index}</span>
                <span className="h-px w-8 bg-divider"></span>
                <span className="flex items-center gap-2"><item.icon className="w-3.5 h-3.5 text-primary" /> {item.subtitle}</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-text-primary leading-display mb-4">
                {item.title}
              </h3>
              
              <p className="text-base md:text-lg text-text-secondary font-light leading-body max-w-md">
                {item.description}
              </p>
            </div>

            {/* Campaign Visual Layer */}
            <div className="absolute inset-0 z-0">
               <img 
                 src={item.imageSrc} 
                 alt={item.imageAlt}
                 className="w-full h-full object-cover opacity-90 scale-105 transition-transform duration-cinematic ease-expensive group-hover:scale-100"
                 // Cinematic Color Grading
                 style={{ 
                   filter: 'saturate(85%) contrast(110%) brightness(95%) sepia(10%) hue-rotate(-5deg)' 
                 }}
               />
               
               {/* Runtime Environmental Lighting Overlays */}
               <div className="absolute inset-0 bg-background/20 backdrop-saturate-[1.05] mix-blend-overlay pointer-events-none" />
               <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated/90 via-surface-elevated/40 to-transparent pointer-events-none" />
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(4,120,87,0.08),_transparent_50%)] pointer-events-none mix-blend-multiply" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
