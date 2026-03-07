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
  // Single-open accordion: only one category can be open at a time
  const [openCategoryId, setOpenCategoryId] = React.useState<string | null>(
    categories.length > 1 ? categories[1].id : categories[0]?.id ?? null
  )

  const handleCategoryToggle = (categoryId: string, isOpening: boolean) => {
    if (isOpening) {
      setOpenCategoryId(categoryId)
    } else {
      setOpenCategoryId(null)
    }
  }

  return (
    <aside className="flex h-full flex-col border-r border-border/60 bg-background/25 backdrop-blur-[2px]">
      <div className="shrink-0 p-4 pb-2 md:p-5 md:pb-2">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Table of Contents
        </h2>
      </div>

      {categories.length > 0 ? (
        <nav className="themed-scrollbar flex-1 space-y-2.5 overflow-y-auto px-4 pb-4 md:px-5 md:pb-5">
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              selectedTopic={selectedTopic}
              onSelectTopic={onSelectTopic}
              isOpen={openCategoryId === category.id}
              onToggle={(isOpening) => handleCategoryToggle(category.id, isOpening)}
            />
          ))}
        </nav>
      ) : (
        <p className="mx-4 rounded-md border border-border/50 bg-background/35 px-3 py-2 text-sm text-muted-foreground">
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
  isOpen,
  onToggle,
}: {
  category: TopicCategory
  selectedTopic: string
  onSelectTopic: (topicId: string) => void
  isOpen: boolean
  onToggle: (isOpening: boolean) => void
}) {
  return (
    <Collapsible open={isOpen} onOpenChange={(nextOpen) => onToggle(nextOpen)}>
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className="group flex w-full items-center justify-between rounded-md border border-border/60 px-2 py-1.5 text-left text-sm font-semibold transition-colors duration-200 hover:bg-accent/10"
        >
          <span>{category.label}</span>
          <ChevronDown
            className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </button>
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
