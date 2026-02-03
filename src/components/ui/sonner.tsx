import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: 'group toaster group-[.toaster]:bg-space-700 group-[.toaster]:text-silver-100 group-[.toaster]:border-white/10 group-[.toaster]:shadow-lg group-[.toaster]:min-h-12 group-[.toaster]:py-3',
          title: 'text-offwhite-200 font-semibold',
          description: 'text-offwhite-400',
          success: '!bg-green !border-green !text-offwhite-100',
          error: '!bg-red !border-red !text-offwhite-100',
        },
      }}
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      {...props}
    />
  )
}

export { Toaster }
