"use client"

import {
  CheckCircledIcon,
  CrossCircledIcon,
  DotsHorizontalIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon
} from "@radix-ui/react-icons";
import type { ToasterProps } from "sonner";
import { Toaster as Sonner, toast } from "sonner";
import { useTheme } from "./theme";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme() as { theme?: string };

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CheckCircledIcon className="size-4" />,
        info: <InfoCircledIcon className="size-4" />,
        warning: <ExclamationTriangleIcon className="size-4" />,
        error: <CrossCircledIcon className="size-4" />,
        loading: <DotsHorizontalIcon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  )
}

export { toast, Toaster };

