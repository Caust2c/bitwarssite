import * as React from "react"

import { GlassPanel } from "@/components/ui/glass-panel"

export function DocsContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-background p-3 sm:p-4 lg:p-5">
      <GlassPanel className="flex h-full w-full flex-col overflow-hidden">
        {children}
      </GlassPanel>
    </div>
  )
}
