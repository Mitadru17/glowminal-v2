import Link from 'next/link'
import { GlowminalLogo } from '@/components/ui/GlowminalLogo'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-background px-6 text-center">
      <div className="flex items-center justify-center text-primary mb-12">
        <GlowminalLogo variant="symbol" size={40} />
      </div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-6">404</p>
      <h1 className="text-3xl md:text-4xl font-light tracking-tight text-text-primary mb-4">
        Page not found.
      </h1>
      <p className="text-base text-text-secondary font-light mb-12 max-w-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium bg-primary text-white hover:opacity-90 transition-opacity"
      >
        Return Home
      </Link>
    </div>
  )
}
