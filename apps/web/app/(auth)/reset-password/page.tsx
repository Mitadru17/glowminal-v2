'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AlertCircle } from 'lucide-react'
import { GlowminalLogo } from '@/components/ui/GlowminalLogo'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SubmitButton } from '@/components/shared/SubmitButton'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { createClient } from '@/lib/supabase/client'
import { z } from 'zod'

export type ResetPasswordState = {
  error: string | null
}

async function updatePasswordAction(prevState: ResetPasswordState, formData: FormData): Promise<ResetPasswordState> {
  const password = formData.get('password') as string

  const parsed = z.string().min(8).safeParse(password)
  if (!parsed.success) {
    return { error: 'Password must be at least 8 characters long' }
  }

  const supabase = createClient()
  const { error } = await supabase.auth.updateUser({ password: parsed.data })

  if (error) {
    return { error: error.message }
  }

  // Next.js client-side redirect will be triggered after success.
  return { error: null }
}

export default function ResetPasswordPage() {
  const router = useRouter()
  const [state, formAction] = useActionState(updatePasswordAction, { error: null })

  // We check state inside a useEffect or directly after action if we want to redirect
  const handleAction = async (formData: FormData) => {
    // Manually run the action and redirect on success
    const result = await updatePasswordAction(state, formData)
    if (!result.error) {
      router.push('/dashboard')
    }
    // If we return result, we can't easily hook into useActionState perfectly for redirect in Client Components without an extra state.
  }

  // To cleanly use useActionState + router, we can wrap the action
  const [wrappedState, wrappedFormAction] = useActionState(
    async (prevState: ResetPasswordState, formData: FormData) => {
      const result = await updatePasswordAction(prevState, formData)
      if (!result.error) {
        router.push('/dashboard')
      }
      return result
    },
    { error: null }
  )

  return (
    <AnimatedSection className="w-full">
      <div className="flex flex-col items-center text-center">
        <Link
          href="/"
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-sm transition-transform hover:scale-105"
        >
          <GlowminalLogo variant="symbol" size={24} theme="light" />
        </Link>
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-text-primary">
          Update Password
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          Enter your new password below.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-divider bg-surface p-6 shadow-sm sm:p-8">
        <form action={wrappedFormAction} className="space-y-5">
          {wrappedState.error && (
            <div className="flex items-center gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
              <AlertCircle className="h-4 w-4" />
              <p>{wrappedState.error}</p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="password" className="text-text-primary">
              New Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="h-11 bg-background"
              minLength={8}
            />
            <p className="text-xs text-text-secondary mt-1">Must be at least 8 characters long.</p>
          </div>

          <SubmitButton pendingText="Updating...">Update Password</SubmitButton>
        </form>
      </div>
    </AnimatedSection>
  )
}
