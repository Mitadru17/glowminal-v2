import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

/**
 * Auth layout — login, signup, forgot password, reset password.
 * Redirects authenticated users to the dashboard.
 * (Middleware also handles this redirect — this is a belt-and-suspenders check.)
 */
interface AuthLayoutProps {
  children: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">{children}</div>
    </div>
  )
}
