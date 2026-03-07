"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { cn } from "@/lib/utils"

const themeOptions = [
  { label: "Green", value: "terminal-green" },
  { label: "Blue", value: "hacker-blue" },
  { label: "Black", value: "dark-black" },
  { label: "White", value: "clean-white" },
] as const

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ButtonGroup className="rounded-lg border border-border/70 bg-background/70 p-1">
      {themeOptions.map((option) => {
        const isActive = mounted && theme === option.value

        return (
          <Button
            key={option.value}
            size="sm"
            variant={isActive ? "default" : "ghost"}
            className={cn(
              "font-mono text-xs",
              isActive && "bg-primary text-primary-foreground"
            )}
            onClick={() => setTheme(option.value)}
          >
            {option.label}
          </Button>
        )
      })}
    </ButtonGroup>
  )
}
