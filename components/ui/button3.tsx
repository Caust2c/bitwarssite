"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type ButtonGroupOption = {
  label: string
  value: string
}

type Button3GroupProps = {
  options: ButtonGroupOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  className?: string
}

export function Button3Group({
  options,
  value,
  defaultValue,
  onValueChange,
  className,
}: Button3GroupProps) {
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
        "inline-flex rounded-md border border-border/20 bg-background/70",
        className
      )}
    >
      {options.map((option, index) => {
        const isSelected = selectedValue === option.value
        const isFirst = index === 0
        const isLast = index === options.length - 1

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => handleSelect(option.value)}
            className={cn(
              "px-4 py-2 text-sm transition-colors",
              !isFirst && "border-l border-border/20",
              isFirst && "rounded-l-md",
              isLast && "rounded-r-md",
              isSelected
                ? "bg-muted text-foreground"
                : "text-foreground/60 hover:bg-muted"
            )}
          >
            {option.label}
          </button>
        )}
      )}
    </div>
  )
}