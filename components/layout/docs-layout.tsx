import * as React from "react"

import { Sidebar } from "@/components/layout/sidebar"
import { TopNavbar } from "@/components/layout/top-navbar"

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNavbar />
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 md:grid-cols-[280px_1fr]">
        <Sidebar />
        <main className="p-6 md:p-10">{children}</main>
      </div>
    </div>
  )
}
