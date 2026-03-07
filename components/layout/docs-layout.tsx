import * as React from "react"
import { Search } from "lucide-react"

import { DocsContainer } from "@/components/layout/docs-container"
import { Sidebar } from "@/components/layout/sidebar"
import { ThemeSwitcher } from "@/components/ui/theme-switcher"
import { Input } from "@/components/ui/input"
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
  const hasQuery = searchQuery.trim().length > 0

  return (
    <DocsContainer>
      <div className="relative z-40 shrink-0 border-b border-border/60 bg-accent/12 px-4 py-3 sm:px-5 md:px-6 backdrop-blur-sm">
        <div className="flex flex-wrap items-center gap-3">
          <p className="mr-2 shrink-0 text-base font-bold tracking-wide sm:text-lg">
            Tech Deck
          </p>
          <div className="relative z-50 min-w-[220px] flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search CPU core, tensor core, DDR5..."
              value={searchQuery}
              onChange={(event) => onSearchQueryChange(event.target.value)}
              className="h-9 border-border/60 bg-background/60 pl-9 font-mono"
            />
            {hasQuery && (
              <div className="absolute z-[70] mt-1 w-full overflow-hidden rounded-md border border-border/60 bg-background/95 backdrop-blur-sm">
                {searchResults.length > 0 ? (
                  <ul className="themed-scrollbar max-h-72 overflow-auto py-1">
                    {searchResults.map((topic) => (
                      <li key={topic.id}>
                        <button
                          className="w-full px-3 py-2 text-left text-sm transition-colors duration-200 hover:bg-accent/15"
                          onClick={() => onOpenTopicFromSearch(topic.id)}
                        >
                          <span className="font-semibold">{topic.label}</span>
                          <span className="ml-2 text-xs text-muted-foreground">
                            {topic.keywords.join(", ")}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-3 py-2 text-sm text-muted-foreground">
                    No matching topics.
                  </p>
                )}
              </div>
            )}
          </div>
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
