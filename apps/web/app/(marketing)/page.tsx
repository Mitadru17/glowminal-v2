import { Hero } from '@/components/landing/Hero/Hero'
import { FeatureNarrative } from '@/components/landing/FeatureNarrative'

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
