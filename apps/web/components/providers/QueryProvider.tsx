'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

/**
 * TanStack Query provider.
 * Creates one QueryClient per session with production-appropriate defaults.
 * Wrap the root layout with this component.
 */
export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 5 minutes — reasonable for skin data that doesn't change constantly
            staleTime: 5 * 60 * 1000,
            // Retry once on failure. AI calls can be slow; don't spam.
            retry: 1,
            // Refetch on window focus — keeps dashboard fresh when user returns
            refetchOnWindowFocus: true,
          },
          mutations: {
            retry: 0,
          },
        },
      })
  )

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
