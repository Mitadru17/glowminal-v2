/**
 * Glowminal Skeleton System
 * 
 * Premium loading primitives that mirror final layouts.
 * Uses the botanical palette instead of generic grays.
 * Subtle shimmer animation. Zero CLS.
 */
import { GlowminalLogo } from '@/components/ui/GlowminalLogo'

export function SkeletonPulse({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-surface animate-pulse ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_2s_infinite]" />
    </div>
  )
}

export function SkeletonText({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-3 ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonPulse
          key={i}
          className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
        />
      ))}
    </div>
  )
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`p-8 md:p-10 rounded-3xl bg-surface-elevated border border-divider/30 ${className}`} aria-hidden="true">
      <div className="flex items-center gap-4 mb-6">
        <SkeletonPulse className="w-10 h-10 rounded-xl" />
        <SkeletonPulse className="h-3 w-24" />
      </div>
      <SkeletonPulse className="h-6 w-3/4 mb-4" />
      <SkeletonText lines={3} />
    </div>
  )
}

export function SkeletonPage() {
  return (
    <div className="flex flex-col w-full pt-32 pb-24" aria-label="Loading content">
      <div className="container-marketing text-center mb-24">
        <SkeletonPulse className="h-3 w-16 mx-auto mb-6" />
        <SkeletonPulse className="h-12 w-2/3 mx-auto mb-8" />
        <SkeletonPulse className="h-5 w-1/2 mx-auto" />
      </div>
      <div className="container-marketing grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  )
}

export function SkeletonLogoLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center min-h-[400px] w-full ${className}`} aria-label="Loading Glowminal">
      <GlowminalLogo variant="symbol" size={60} loading />
    </div>
  )
}
