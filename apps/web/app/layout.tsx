import type { Metadata, Viewport } from 'next'
import { Inter, Newsreader, Jost } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryProvider } from '@/components/providers/QueryProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-editorial',
  style: ['normal', 'italic'],
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: {
    default: 'Glowminal — AI Skin Intelligence',
    template: '%s | Glowminal',
  },
  description:
    'Understand your skin through explainable AI. Track long-term progress, build personalized routines, and see real improvements — backed by science.',
  keywords: [
    'skin analysis',
    'AI skincare',
    'skin intelligence',
    'personalized routine',
    'skin tracking',
    'explainable AI',
  ],
  authors: [{ name: 'Glowminal' }],
  creator: 'Glowminal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'Glowminal',
    title: 'Glowminal — AI Skin Intelligence',
    description:
      'Understand your skin through explainable AI. Build personalized routines and track real improvements over time.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glowminal — AI Skin Intelligence',
    description: 'Understand your skin through explainable AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#047857',
}

interface RootLayoutProps {
  children: React.ReactNode
}

/**
 * Root layout.
 * Applies Inter font, design system tokens, and global providers.
 * Every route inherits this layout.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} ${jost.variable}`} suppressHydrationWarning>
      <body className="overflow-x-hidden antialiased">
        <QueryProvider>
          <TooltipProvider>
            {children}
            <Toaster
              theme="system"
              position="bottom-right"
              toastOptions={{
                style: {
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-divider)',
                  color: 'var(--color-text-primary)',
                },
              }}
            />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
