"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type ToggleOption = {
  label: string
  value: string
}

type ToggleGroupProps = {
  options: ToggleOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  className?: string
}

export function ToggleGroup({
  options,
  value,
  defaultValue,
  onValueChange,
  className,
}: ToggleGroupProps) {
  const isControlled = value !== undefined
  const [internalValue, setInternalValue] = React.useState<string>(
    defaultValue ?? options[0]?.value ?? ""
  )

  const selectedValue = isControlled ? value : internalValue

  const handleSelect = (nextValue: string) => {
    if (!isControlled) {
      setInternalValue(nextValue)
    }
    onValueChange?.(nextValue)
  }

  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-border/20 bg-muted p-1",
        className
      )}
    >
      {options.map((option) => {
        const isSelected = selectedValue === option.value

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => handleSelect(option.value)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm transition-colors",
              isSelected
                ? "bg-foreground font-medium text-background"
                : "text-foreground/60 hover:text-foreground"
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}