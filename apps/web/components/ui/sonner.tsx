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
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#011C15] group-[.toaster]:text-white group-[.toaster]:border-white/10 group-[.toaster]:shadow-2xl rounded-2xl backdrop-blur-md px-5 py-4",
          description: "group-[.toast]:text-white/60 font-light text-sm",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-white font-medium",
          cancelButton:
            "group-[.toast]:bg-white/10 group-[.toast]:text-white font-medium",
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
