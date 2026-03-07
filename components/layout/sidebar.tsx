"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { SidebarItem } from "@/components/ui/sidebar-item"
import type { TopicCategory } from "@/lib/hardware-topics"

type SidebarProps = {
  categories: TopicCategory[]
  selectedTopic: string
  onSelectTopic: (topicId: string) => void
}

export function Sidebar({
  categories,
  selectedTopic,
  onSelectTopic,
}: SidebarProps) {
  return (
    <aside className="h-full border-r border-border/60 bg-background/25 p-4 md:p-5 backdrop-blur-[2px]">
      <div className="mb-5">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Table of Contents
        </h2>
      </div>

      {categories.length > 0 ? (
        <nav className="space-y-2.5">
          {categories.map((category, index) => (
            <CategoryItem
              key={category.id}
              category={category}
              selectedTopic={selectedTopic}
              onSelectTopic={onSelectTopic}
              defaultOpen={index <= 1}
            />
          ))}
        </nav>
      ) : (
        <p className="rounded-md border border-border/50 bg-background/35 px-3 py-2 text-sm text-muted-foreground">
          No topics match the current search.
        </p>
      )}
    </aside>
  )
}

function CategoryItem({
  category,
  selectedTopic,
  onSelectTopic,
  defaultOpen,
}: {
  category: TopicCategory
  selectedTopic: string
  onSelectTopic: (topicId: string) => void
  defaultOpen: boolean
}) {
  const [open, setOpen] = React.useState(defaultOpen)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-md border border-border/60 px-2 py-1.5 text-left text-sm font-semibold transition-colors duration-200 hover:bg-accent/10">
        <span>{category.label}</span>
        <ChevronDown
          className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-1 space-y-1">
        {category.topics.map((topic) => (
          <SidebarItem
            key={topic.id}
            isActive={selectedTopic === topic.id}
            onClick={() => onSelectTopic(topic.id)}
          >
            {topic.label}
          </SidebarItem>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}
