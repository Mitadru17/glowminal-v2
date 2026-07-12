import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'From your first scan to long-term progress tracking — understand the complete Glowminal journey in five steps.',
}

const STEPS = [
  {
    number: '01',
    title: 'Take a Scan',
    subtitle: 'Begin',
    description: 'Open your camera in a well-lit environment. Our quality validation system checks lighting, focus, alignment, and face detection in real-time before accepting your photo. No filters. No editing. Just your skin as it is.',
    detail: 'The scan takes less than 10 seconds. We validate image quality before processing so you never waste time on an unusable photo.',
  },
  {
    number: '02',
    title: 'AI Analysis',
    subtitle: 'Understand',
    description: 'Our vision models evaluate ten independent skin metrics — hydration, texture, acne, pigmentation, redness, oil balance, sensitivity, pores, elasticity, and an Overall Skin Score. Each metric includes a confidence value and a plain-language explanation.',
    detail: 'Analysis completes in under 20 seconds. Every conclusion is explainable. We never present results without telling you why.',
  },
  {
    number: '03',
    title: 'Skin Memory',
    subtitle: 'Remember',
    description: 'Your scan is stored in your personal Skin Memory — a persistent timeline that tracks how each metric evolves over days, weeks, and months. Over time, patterns emerge that single scans cannot reveal.',
    detail: 'Skin Memory detects micro-changes between scans, correlates environmental factors, and identifies which products and habits are actually working.',
  },
  {
    number: '04',
    title: 'Routine Builder',
    subtitle: 'Act',
    description: 'Based on your analysis, we generate personalized AM and PM routines. Products are recommended based on scientific evidence and ingredient compatibility — not sponsorships. Your routine adapts as your skin improves.',
    detail: 'We consider active ingredient interactions, weather conditions, and your adherence history. Routines are never static.',
  },
  {
    number: '05',
    title: 'Long-term Progress',
    subtitle: 'Evolve',
    description: 'Compare scans across your entire history. See metric trends visualized. Understand which routines delivered measurable improvements. Glowminal becomes more valuable the longer you use it.',
    detail: 'Your data belongs to you. Export it anytime. Delete it anytime. We believe trust is earned through transparency.',
  },
]

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col w-full pt-32 pb-24">
      {/* Header */}
      <div className="container-marketing text-center mb-24">
        <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-6">Process</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-text-primary mb-8 max-w-3xl mx-auto leading-[1.05]">
          Five steps to <span className="font-editorial italic">understanding.</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
          From your first scan to long-term progress tracking, Glowminal builds a complete picture of your skin — one analysis at a time.
        </p>
      </div>

      {/* Steps */}
      <div className="container-marketing">
        <div className="flex flex-col gap-0">
          {STEPS.map((step, i) => (
            <article
              key={step.number}
              className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-16 md:py-24 ${i < STEPS.length - 1 ? 'border-b border-divider' : ''}`}
            >
              {/* Left: Number + Label */}
              <div className="md:col-span-3 flex flex-col gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">{step.subtitle}</span>
                <span className="text-6xl md:text-7xl font-extralight tracking-tighter text-text-primary/10">{step.number}</span>
              </div>

              {/* Right: Content */}
              <div className="md:col-span-9 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-text-primary mb-6 leading-snug">
                  {step.title}
                </h2>
                <p className="text-lg text-text-secondary font-light leading-relaxed mb-6 max-w-2xl">
                  {step.description}
                </p>
                <p className="text-sm text-text-secondary/70 font-light leading-relaxed max-w-xl">
                  {step.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
