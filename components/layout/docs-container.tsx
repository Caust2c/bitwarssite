import * as React from "react"

import { GlassPanel } from "@/components/ui/glass-panel"

export function DocsContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background px-3 py-6 sm:px-4 sm:py-8 lg:py-10">
      <GlassPanel className="mx-auto w-full max-w-[1600px] min-h-[calc(100vh-5rem)] overflow-hidden">
        {children}
      </GlassPanel>
    </div>
  )
}
