import { Skeleton } from '@/components/ui/skeleton'
import { Sparkles, ArrowRight, Sun, Activity, Eye, Droplets, Wind, Sparkle } from 'lucide-react'

// Matching the mock metrics grid structure
const METRICS_COUNT = 6

export default function DashboardLoading() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-500">
      
      {/* 1. Welcome Section Skeleton */}
      <div>
        <Skeleton className="h-10 w-64 mb-2" />
        <Skeleton className="h-5 w-40" />
      </div>

      {/* 2. Hero Card & Quick Actions Skeleton */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-divider bg-surface p-6 shadow-card sm:flex-row sm:items-center sm:p-8">
            <div className="mb-6 sm:mb-0 w-full max-w-sm">
              <Skeleton className="h-6 w-32 mb-4 rounded-full" />
              <Skeleton className="h-8 w-64 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-4/5 mb-8" />
              <Skeleton className="h-12 w-48 rounded-full" />
            </div>
            <div className="flex justify-center sm:justify-end">
              <Skeleton className="h-40 w-40 rounded-full" />
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="flex h-full flex-col gap-4">
            <div className="flex flex-1 flex-col justify-between rounded-2xl border border-divider bg-surface p-6 shadow-card">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <Skeleton className="h-6 w-32" />
              </div>
              <div className="mt-8">
                <Skeleton className="h-4 w-24 mb-3" />
                <Skeleton className="h-2 w-full rounded-full" />
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-2xl border border-divider bg-surface p-6 shadow-card">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <Skeleton className="h-6 w-32" />
              </div>
              <Skeleton className="h-4 w-48 mt-8" />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Skin Metrics Skeleton */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-7 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
        
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
          {Array.from({ length: METRICS_COUNT }).map((_, i) => (
            <div key={i} className="flex flex-col items-center justify-center rounded-2xl border border-divider bg-surface p-4 text-center">
              <Skeleton className="h-12 w-12 rounded-full mb-4" />
              <Skeleton className="h-8 w-16 mb-2" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Product Suggestions Skeleton */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-4 w-24" />
        </div>
        
        <div className="grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex flex-col justify-between overflow-hidden rounded-2xl border border-divider bg-surface p-6 shadow-card">
              <Skeleton className="h-32 w-full rounded-xl mb-6" />
              <Skeleton className="h-5 w-20 rounded-full mb-3" />
              <Skeleton className="h-6 w-48 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
