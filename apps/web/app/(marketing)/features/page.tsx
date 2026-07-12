import type { Metadata } from 'next'
import { Sparkles, Activity, Droplets, Brain, Clock, Dna } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Precision skin analysis, Skin Memory timeline, personalized routines, and explainable AI — all powered by science.',
}

const FEATURES = [
  {
    icon: Sparkles,
    label: 'Precision Analysis',
    headline: 'See what the mirror cannot.',
    body: 'Our computer vision models analyze hydration, texture, pigmentation, redness, pore structure, oil balance, sensitivity, and elasticity — detecting changes before they become visible to the naked eye.',
    capabilities: ['Sub-pixel pigment mapping', 'Multi-metric confidence scoring', 'Lighting-normalized comparison'],
  },
  {
    icon: Activity,
    label: 'Skin Memory',
    headline: 'Your skin has a story. We record it.',
    body: 'Every scan adds to your personal Skin Memory — a persistent, data-driven timeline of how your skin responds to routines, seasons, stress, and aging. Not single snapshots. Continuous understanding.',
    capabilities: ['Longitudinal trend analysis', 'Environmental correlation', 'Routine efficacy tracking'],
  },
  {
    icon: Droplets,
    label: 'Routine Builder',
    headline: 'Routines that adapt to your life.',
    body: 'We generate personalized AM/PM regimens based on your scan data, not marketing trends. As your skin evolves, your routine evolves with it — adjusting for weather, hormonal cycles, and active ingredient interactions.',
    capabilities: ['Dynamic formulation pacing', 'Ingredient conflict detection', 'Progress-based adjustments'],
  },
  {
    icon: Brain,
    label: 'Explainable AI',
    headline: 'Every score has a reason.',
    body: 'We never hide behind "proprietary algorithms." Every metric includes a confidence value, a plain-language explanation, and a suggested next action. If we are uncertain, we tell you.',
    capabilities: ['Confidence-scored metrics', 'Visual evidence mapping', 'Limitation transparency'],
  },
  {
    icon: Clock,
    label: 'Progress Timeline',
    headline: 'See the difference. Prove the difference.',
    body: 'Compare scans side-by-side across weeks and months. Track individual metric trends with clinical precision. Know exactly what is working — and what is not.',
    capabilities: ['Before/after overlay', 'Metric trend graphs', 'Weekly progress reports'],
  },
  {
    icon: Dna,
    label: 'Skin Simulation',
    headline: 'Preview the future of your skin.',
    body: 'Based on your current trajectory and routine adherence, see an AI-generated estimate of where your skin is heading. Clearly labeled as a projection, never a promise.',
    capabilities: ['Trajectory modeling', 'Routine impact preview', 'Scenario comparison'],
  },
]

export default function FeaturesPage() {
  return (
    <div className="flex flex-col w-full pt-32 pb-24">
      {/* Header */}
      <div className="container-marketing text-center mb-24">
        <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-6">Product</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-text-primary mb-8 max-w-3xl mx-auto leading-[1.05]">
          Intelligence your skin <span className="font-editorial italic">deserves.</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
          Six interconnected systems that work together to build a complete, evolving understanding of your skin — backed by science, explained in plain language.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="container-marketing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FEATURES.map((feature) => (
            <article
              key={feature.label}
              className="group relative p-8 md:p-10 rounded-3xl bg-surface-elevated border border-divider/50 transition-all duration-500 hover:shadow-glass-elevated hover:border-divider"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-primary">
                  <feature.icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">{feature.label}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-text-primary mb-4 leading-snug">
                {feature.headline}
              </h2>

              <p className="text-base text-text-secondary font-light leading-relaxed mb-8">
                {feature.body}
              </p>

              <ul className="space-y-3">
                {feature.capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-3 text-sm text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
