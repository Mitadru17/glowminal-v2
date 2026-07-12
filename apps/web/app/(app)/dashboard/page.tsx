import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Calendar, ArrowRight, Droplets, Sun, Activity, Sparkle, Wind, Eye } from 'lucide-react'
import { GlowminalLogo } from '@/components/ui/GlowminalLogo'
import { Button, buttonVariants } from '@/components/ui/button'
import { SkinScoreRing } from '@/components/shared/SkinScoreRing'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

// Mock data until Epic 5 (AI Integration)
const MOCK_METRICS = [
  { name: 'Hydration', score: 82, trend: 'up', icon: Droplets, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { name: 'Acne', score: 95, trend: 'up', icon: Activity, color: 'text-green-500', bg: 'bg-green-500/10' },
  { name: 'Pigmentation', score: 78, trend: 'neutral', icon: Sun, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { name: 'Texture', score: 88, trend: 'up', icon: Sparkle, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { name: 'Oil Balance', score: 72, trend: 'down', icon: Wind, color: 'text-teal-500', bg: 'bg-teal-500/10' },
  { name: 'Sensitivity', score: 90, trend: 'neutral', icon: Eye, color: 'text-rose-500', bg: 'bg-rose-500/10' },
]

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const isGuest = user?.is_anonymous

  return (
    <div className="flex flex-col gap-10 pb-20">
      
      {/* 1. Welcome Section */}
      <AnimatedSection delay={0}>
        <div>
          <h1 className="text-3xl font-heading font-bold tracking-tight text-text-primary">
            {isGuest ? 'Welcome, Guest' : 'Good Morning'}
          </h1>
          <p className="mt-1 text-text-secondary">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
          {isGuest && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <GlowminalLogo variant="symbol" size={16} />
              <span>Create an account to save your Skin Memory</span>
              <Link href="/signup" className="ml-2 font-bold hover:underline">
                Sign Up &rarr;
              </Link>
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* 2. Hero Card & Quick Actions */}
      <div className="grid gap-6 md:grid-cols-3">
        <AnimatedSection delay={0.1} className="md:col-span-2">
          <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-divider bg-surface p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
            <div className="mb-6 sm:mb-0">
              <div className="inline-flex items-center gap-2 rounded-full bg-surface-hover px-3 py-1 text-xs font-medium text-text-secondary">
                <Calendar className="h-3 w-3" />
                Last scan: Today
              </div>
              <h2 className="mt-4 text-2xl font-bold text-text-primary">Your Skin is Glowing</h2>
              <p className="mt-2 max-w-sm text-sm text-text-secondary">
                Hydration is up 12% this week. Keep up the morning routine with the Hyaluronic Acid serum.
              </p>
              <Link
                href="/scan"
                className={buttonVariants({
                  className: 'mt-6 bg-primary text-white hover:bg-primary-dark active:scale-[0.97]'
                })}
              >
                Start New Scan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="flex justify-center sm:justify-end">
              <div className="w-40 sm:w-48">
                <SkinScoreRing score={84} size={160} strokeWidth={8} />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="md:col-span-1">
          <div className="flex h-full flex-col gap-4">
            <Link 
              href="/routine"
              className="group flex flex-1 flex-col justify-between rounded-2xl border border-divider bg-surface p-6 transition-all hover:border-primary/50 hover:shadow-md active:scale-[0.98]"
            >
              <div className="flex items-center gap-3 text-text-primary">
                <div className="rounded-lg bg-surface-hover p-2">
                  <Sun className="h-5 w-5" />
                </div>
                <span className="font-semibold">Morning Routine</span>
              </div>
              <div className="mt-4">
                <div className="text-sm text-text-secondary">3/4 steps completed</div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-hover">
                  <div className="h-full w-3/4 rounded-full bg-primary" />
                </div>
              </div>
            </Link>

            <Link 
              href="/timeline"
              className="group flex flex-1 flex-col justify-between rounded-2xl border border-divider bg-surface p-6 transition-all hover:border-primary/50 hover:shadow-md active:scale-[0.98]"
            >
              <div className="flex items-center gap-3 text-text-primary">
                <div className="rounded-lg bg-surface-hover p-2">
                  <Activity className="h-5 w-5" />
                </div>
                <span className="font-semibold">Skin Memory</span>
              </div>
              <p className="mt-4 text-sm text-text-secondary">
                View your progress timeline
              </p>
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* 3. Skin Metrics */}
      <AnimatedSection delay={0.3}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-text-primary">Skin Metrics</h2>
          <Link href="/analysis" className="text-sm font-medium text-primary hover:underline">
            View full analysis &rarr;
          </Link>
        </div>
        
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
          {MOCK_METRICS.map((metric, i) => (
            <div 
              key={metric.name} 
              className="flex flex-col items-center justify-center rounded-2xl border border-divider bg-surface p-4 text-center transition-transform hover:-translate-y-1 hover:shadow-sm"
            >
              <div className={`mb-3 rounded-full p-2.5 ${metric.bg} ${metric.color}`}>
                <metric.icon className="h-5 w-5" />
              </div>
              <div className="text-2xl font-bold text-text-primary">{metric.score}</div>
              <div className="mt-1 text-xs font-medium text-text-secondary">{metric.name}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* 4. Product Suggestions */}
      <AnimatedSection delay={0.4}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-text-primary">Recommended for you</h2>
          <Link href="/products" className="text-sm font-medium text-primary hover:underline">
            View all &rarr;
          </Link>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-divider bg-surface p-6 transition-all hover:border-primary/50 hover:shadow-md active:scale-[0.98]">
              <div>
                <div className="mb-4 flex h-32 w-full items-center justify-center rounded-xl bg-surface-hover/50 text-text-secondary/30">
                  <GlowminalLogo variant="symbol" size={40} theme="current" />
                </div>
                <div className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary mb-2">
                  Match: 9{item}%
                </div>
                <h3 className="font-bold text-text-primary">Ceramide Barrier Cream</h3>
                <p className="mt-1 text-sm text-text-secondary line-clamp-2">
                  Helps lock in moisture and repairs your skin barrier. Recommended due to your recent Hydration score.
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

    </div>
  )
}
