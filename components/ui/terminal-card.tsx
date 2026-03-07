import * as React from "react"

import { cn } from "@/lib/utils"

function TerminalCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border/80 bg-card/70 p-5 backdrop-blur-sm",
        className
      )}
      style={{ boxShadow: "0 0 10px var(--accent)" }}
      {...props}
    />
  )
}

export { TerminalCard }
