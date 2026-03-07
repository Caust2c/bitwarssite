"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  "CPUs",
  "GPUs",
  "RAM",
  "Motherboards",
  "Storage",
  "Cooling",
  "Power Supplies",
  "Networking",
]

export function Sidebar() {
  return (
    <aside className="border-r border-border/70 bg-muted/10 p-4 md:p-5">
      <div className="mb-4">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Table of Contents
        </h2>
      </div>

      <nav className="space-y-2">
        {categories.map((category) => (
          <CategoryItem key={category} category={category} />
        ))}
      </nav>
    </aside>
  )
}

function CategoryItem({ category }: { category: string }) {
  const anchor = category.toLowerCase().replace(/\s+/g, "-")

  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger
        render={
          <Button
            variant="ghost"
            className="group w-full justify-between px-2 py-1.5 font-mono text-sm"
          />
        }
      >
        {category}
        <ChevronDown className="size-4 transition-transform group-data-[panel-open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-1">
        <a
          href={`#${anchor}`}
          className={cn(
            "block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors",
            "hover:bg-accent/10 hover:text-accent"
          )}
        >
          {category} basics
        </a>
      </CollapsibleContent>
    </Collapsible>
  )
}
