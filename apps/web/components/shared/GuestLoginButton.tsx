'use client'

import { useActionState } from 'react'
import { guestLoginAction } from '@/app/actions/auth'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

export function GuestLoginButton() {
  const [state, formAction, isPending] = useActionState(
    async () => {
      const result = await guestLoginAction()
      return result || null // Use Action State expects a return value if we have a state
    },
    null
  )

  return (
    <form action={formAction}>
      <Button
        type="submit"
        variant="ghost"
        disabled={isPending}
        className="h-11 w-full text-text-secondary hover:text-text-primary active:scale-[0.97]"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating guest session...
          </>
        ) : (
          'Continue as Guest'
        )}
      </Button>
      {state?.error && <p className="mt-2 text-center text-xs text-destructive">{state.error}</p>}
    </form>
  )
}
