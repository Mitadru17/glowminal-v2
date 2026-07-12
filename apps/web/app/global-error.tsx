'use client'

import Link from 'next/link'
import { GlowminalLogo } from '@/components/ui/GlowminalLogo'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAF9] text-[#1C1917] antialiased">
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-6 text-center">
          <div className="flex items-center justify-center text-[#047857] mb-12">
            <GlowminalLogo variant="symbol" size={40} />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#78716C] mb-6">500</p>
          <h1 className="text-3xl font-light tracking-tight mb-4">
            Something went wrong.
          </h1>
          <p className="text-base text-[#78716C] font-light mb-12 max-w-sm">
            An unexpected error occurred. Our team has been notified.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium bg-[#047857] text-white hover:opacity-90 transition-opacity"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="text-sm font-medium text-[#78716C] hover:text-[#1C1917] transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
