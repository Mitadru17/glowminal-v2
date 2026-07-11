'use client'

import Link from 'next/link'
import { Sparkles, Bell, User } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { logoutAction } from '@/app/actions/auth'
import { useActionState } from 'react'

export function AppNav() {
  const [, formAction] = useActionState(logoutAction, null)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-divider bg-surface/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-text-primary">
            Glowminal
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-text-secondary hover:text-text-primary hidden sm:flex">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          
          <form action={formAction}>
            <Button variant="ghost" type="submit" size="sm" className="text-text-secondary hover:text-text-primary hidden sm:flex">
              Sign Out
            </Button>
          </form>

          {/* Simple avatar placeholder */}
          <Link href="/profile" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform hover:scale-105 active:scale-[0.97]">
            <User className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}
