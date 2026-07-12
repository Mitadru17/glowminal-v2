import { Hero } from '@/components/landing/Hero/Hero'
import dynamic from 'next/dynamic'

const FeatureNarrative = dynamic(
  () => import('@/components/landing/FeatureNarrative').then(mod => mod.FeatureNarrative)
)

export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center w-full relative selection:bg-accent-mint/30 selection:text-primary-dark">
      
      {/* --- 1. UNDERSTAND (HERO) --- */}
      <Hero />

      {/* --- 2. ARCHITECTURAL GALLERY (STICKY SCROLL NARRATIVE) --- */}
      <FeatureNarrative />

    </div>
  )
}
