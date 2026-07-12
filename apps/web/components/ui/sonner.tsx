"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme()
  const resolvedTheme = (theme ?? 'system') as NonNullable<ToasterProps['theme']>

  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        style: {
          background: '#011C15',
          color: '#ffffff',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        },
        classNames: {
          title: "text-white font-medium text-base",
          description: "text-white/60 font-light text-sm mt-1",
          actionButton: "bg-primary text-white font-medium",
          cancelButton: "bg-white/10 text-white font-medium",
        },
      }}
      icons={{
        success: <CircleCheckIcon className="size-4 text-primary" />,
        info: <InfoIcon className="size-4 text-primary" />,
        warning: <TriangleAlertIcon className="size-4 text-amber-500" />,
        error: <OctagonXIcon className="size-4 text-red-500" />,
        loading: <Loader2Icon className="size-4 animate-spin text-primary" />,
      }}
      {...props}
    />
  )
}

export { Toaster }
