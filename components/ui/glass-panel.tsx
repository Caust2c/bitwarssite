import * as React from "react"

import { cn } from "@/lib/utils"

export function GlassPanel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border/60 bg-background/55 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  )
}
