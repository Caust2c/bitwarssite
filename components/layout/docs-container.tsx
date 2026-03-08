import * as React from "react"

import { GlassPanel } from "@/components/ui/glass-panel"

export function DocsContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-dvh flex-col bg-background p-3 sm:p-4 lg:p-5">
      <GlassPanel className="flex min-h-0 flex-1 flex-col overflow-hidden">
        {children}
      </GlassPanel>
    </div>
  )
}
