'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { GlowminalLogo } from '@/components/ui/GlowminalLogo'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SubmitButton } from '@/components/shared/SubmitButton'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { createClient } from '@/lib/supabase/client'
import { z } from 'zod'

export type ForgotPasswordState = {
  error: string | null
  success: boolean
}

async function forgotPasswordAction(prevState: ForgotPasswordState, formData: FormData): Promise<ForgotPasswordState> {
  const email = formData.get('email') as string

  const parsed = z.string().email().safeParse(email)
  if (!parsed.success) {
    return { error: 'Please enter a valid email address', success: false }
  }

  const supabase = createClient()
  const { error } = await supabase.auth.resetPasswordForEmail(parsed.data, {
    redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/reset-password`,
  })

  if (error) {
    return { error: error.message, success: false }
  }

  return { error: null, success: true }
}

export default function ForgotPasswordPage() {
  const [state, formAction] = useActionState(forgotPasswordAction, { error: null, success: false })

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
          Reset your password
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          Enter your email and we'll send you a link to reset your password.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-divider bg-surface p-6 shadow-sm sm:p-8">
        {state.success ? (
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 mb-4">
              <CheckCircle2 className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-lg font-medium text-text-primary">Check your email</h3>
            <p className="mt-2 text-sm text-text-secondary">
              We've sent password reset instructions to your email address.
            </p>
            <Link
              href="/login"
              className="mt-6 font-medium text-primary hover:underline"
            >
              Back to Sign In
            </Link>
          </div>
        ) : (
          <form action={formAction} className="space-y-5">
            {state.error && (
              <div className="flex items-center gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" />
                <p>{state.error}</p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-text-primary">
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="h-11 bg-background"
                placeholder="you@example.com"
              />
            </div>

            <SubmitButton pendingText="Sending...">Send Reset Link</SubmitButton>

            <div className="text-center mt-4">
              <Link
                href="/login"
                className="text-sm font-medium text-text-secondary hover:text-text-primary"
              >
                Back to Sign In
              </Link>
            </div>
          </form>
        )}
      </div>
    </AnimatedSection>
  )
}
