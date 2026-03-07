"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { ToggleGroup } from "@/components/ui/button2"

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

  const selectedTheme = mounted ? theme : undefined

  return (
    <ToggleGroup
      className="rounded-lg border border-border/70 bg-background/70 p-1"
      options={themeOptions.map((option) => ({
        label: option.label,
        value: option.value,
      }))}
      value={selectedTheme}
      defaultValue="terminal-green"
      onValueChange={(value) => setTheme(value)}
    />
  )
}
