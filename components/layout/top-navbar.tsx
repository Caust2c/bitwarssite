import { Search } from "lucide-react"

import { ThemeSwitcher } from "@/components/ui/theme-switcher"
import { Input } from "@/components/ui/input"

export function TopNavbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center gap-4 px-4 sm:px-6">
        <p className="shrink-0 text-base font-bold tracking-wide text-foreground sm:text-lg">
          PC Hardware Glossary
        </p>

        <div className="relative hidden flex-1 md:block">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search terms like GPU, VRAM, DDR5..."
            className="pl-9 font-mono"
          />
        </div>

        <ThemeSwitcher />
      </div>
    </header>
  )
}
