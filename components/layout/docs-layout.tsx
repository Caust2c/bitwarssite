import * as React from "react"
import Image from "next/image"

import { DocsContainer } from "@/components/layout/docs-container"
import { Sidebar } from "@/components/layout/sidebar"
import { Searchbar } from "@/components/ui/searchbar"
import { ThemeSwitcher } from "@/components/ui/theme-switcher"
import type { Topic, TopicCategory } from "@/lib/hardware-topics"

type DocsLayoutProps = {
  children: React.ReactNode
  categories: TopicCategory[]
  selectedTopic: string
  onSelectTopic: (topicId: string) => void
  searchQuery: string
  onSearchQueryChange: (value: string) => void
  searchResults: Topic[]
  onOpenTopicFromSearch: (topicId: string) => void
}

export function DocsLayout({
  children,
  categories,
  selectedTopic,
  onSelectTopic,
  searchQuery,
  onSearchQueryChange,
  searchResults,
  onOpenTopicFromSearch,
}: DocsLayoutProps) {
  return (
    <DocsContainer>
      <div className="relative z-40 shrink-0 border-b border-border/60 bg-accent/12 px-4 py-3 sm:px-5 md:px-6 backdrop-blur-sm">
        <div className="flex flex-wrap items-center gap-3">
          <div className="mr-3 flex shrink-0 items-center gap-3 px-0.5 py-0.5">
            <Image
              src="/assets/OIP-removebg-preview.png"
              alt="Tech Deck logo"
              width={34}
              height={34}
              className="h-[34px] w-[34px] object-contain"
            />
            <p className="text-xl font-extrabold tracking-[0.14em] sm:text-2xl md:text-3xl">
              TECH DECK
            </p>
          </div>
          <Searchbar
            value={searchQuery}
            onChange={onSearchQueryChange}
            results={searchResults}
            onSelectTopic={onOpenTopicFromSearch}
            className="relative z-50 min-w-[220px] flex-1"
          />
          <ThemeSwitcher />
        </div>
      </div>

      <div className="relative z-0 grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[300px_1fr]">
        <Sidebar
          categories={categories}
          selectedTopic={selectedTopic}
          onSelectTopic={onSelectTopic}
        />
        <main className="themed-scrollbar min-h-0 min-w-0 overflow-y-auto">{children}</main>
      </div>
    </DocsContainer>
  )
}
