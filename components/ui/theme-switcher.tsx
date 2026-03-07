"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button3Group } from "@/components/ui/button3"

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
    <Button3Group
      className="rounded-lg border border-border/70"
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
