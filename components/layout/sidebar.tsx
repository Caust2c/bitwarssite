"use client"

import * as React from "react"

import { Accordion1 } from "@/components/ui/accordion1"
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
    categories[0]?.id ?? null
  )

  const handleCategoryToggle = (categoryId: string, isOpening: boolean) => {
    if (isOpening) {
      setOpenCategoryId(categoryId)
    } else {
      setOpenCategoryId(null)
    }
  }

  return (
    <aside className="flex h-full flex-col border-r border-border/60 bg-accent/12 backdrop-blur-[2px]">
      <div className="shrink-0 p-4 pb-2 md:p-5 md:pb-2">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Table of Contents
        </h2>
      </div>

      {categories.length > 0 ? (
        <nav className="themed-scrollbar min-h-0 flex-1 space-y-2.5 overflow-y-auto px-4 pb-4 md:px-5 md:pb-5">
          {categories.map((category) => (
            <div key={category.id} className="w-full min-w-0">
              <CategoryItem
                category={category}
                selectedTopic={selectedTopic}
                onSelectTopic={onSelectTopic}
                isOpen={openCategoryId === category.id}
                onToggle={(isOpening) => handleCategoryToggle(category.id, isOpening)}
              />
            </div>
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
  const showNewBadge = category.id === "storage" || category.id === "networking"

  return (
    <Accordion1
      title={
        <span className="inline-flex items-center gap-2">
          <span>{category.label}</span>
          {showNewBadge && (
            <span className="inline-flex items-center rounded-md bg-foreground px-2 py-0.5 text-xs font-medium text-background">
              New
            </span>
          )}
        </span>
      }
      open={isOpen}
      onOpenChange={(nextOpen) => onToggle(nextOpen)}
      className="w-full min-w-0"
      triggerClassName="w-full py-2 text-sm font-semibold"
      contentClassName="mt-1 space-y-1 pb-2"
    >
        {category.topics.map((topic) => (
          <SidebarItem
            key={topic.id}
            isActive={selectedTopic === topic.id}
            onClick={() => onSelectTopic(topic.id)}
          >
            {topic.label}
          </SidebarItem>
        ))}
    </Accordion1>
  )
}
