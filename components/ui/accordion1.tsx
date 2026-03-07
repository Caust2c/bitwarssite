"use client"

import * as React from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

type Accordion1Props = {
  title: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  className?: string
  triggerClassName?: string
  contentClassName?: string
}

export function Accordion1({
  title,
  open,
  onOpenChange,
  children,
  className,
  triggerClassName,
  contentClassName,
}: Accordion1Props) {
  return (
    <Collapsible
      open={open}
      onOpenChange={onOpenChange}
      className={cn("block w-full min-w-0", className)}
    >
      <CollapsibleTrigger
        className={cn(
          "grid w-full min-w-0 grid-cols-[1fr_auto] items-center gap-2 py-3 pr-1 text-left text-sm font-medium transition-colors hover:text-foreground/80",
          triggerClassName
        )}
      >
        <span className="block min-w-0 truncate pr-2">{title}</span>
        <span className="ml-auto mr-0 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border/30">
          {open ? (
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          ) : (
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          )}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className={cn("w-full space-y-1 pb-2", contentClassName)}>
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
}