import { LandingNav } from '@/components/layouts/LandingNav'
import dynamic from 'next/dynamic'

const LandingFooter = dynamic(() => import('@/components/layouts/LandingFooter').then(mod => mod.LandingFooter), {
  ssr: true,
})
import { AmbientBackground } from '@/components/shared/AmbientBackground'
import { SmoothScroll } from '@/components/shared/SmoothScroll'

/**
 * Marketing layout — landing page and public marketing routes.
 * No authentication required.
 * Lighter layout: no app chrome, no navigation sidebar.
 */
interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent-lime/40 selection:text-primary-dark font-sans">
        <AmbientBackground />
        <LandingNav />
      <main className="flex-1 relative z-0">{children}</main>
      <LandingFooter />
      </div>
    </SmoothScroll>
  )
}
