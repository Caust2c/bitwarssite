"use client"

import * as React from "react"

import { ContentViewer } from "@/components/layout/content-viewer"
import { DocsLayout } from "@/components/layout/docs-layout"
import { defaultTopicId, topicCategories, topicsById } from "@/lib/hardware-topics"

export function HardwarePage() {
  const [selectedTopic, setSelectedTopic] = React.useState(defaultTopicId)
  const [searchQuery, setSearchQuery] = React.useState("")

  const normalizedQuery = searchQuery.trim().toLowerCase()

  const matchesTopic = React.useCallback(
    (topic: { label: string; title: string; keywords: string[] }) => {
      if (!normalizedQuery) {
        return true
      }

      const haystack = [topic.label, topic.title, ...topic.keywords]
        .join(" ")
        .toLowerCase()

      return haystack.includes(normalizedQuery)
    },
    [normalizedQuery]
  )

  const filteredCategories = React.useMemo(() => {
    if (!normalizedQuery) {
      return topicCategories
    }

    return topicCategories
      .map((category) => ({
        ...category,
        topics: category.topics.filter(matchesTopic),
      }))
      .filter((category) => category.topics.length > 0)
  }, [matchesTopic, normalizedQuery])

  const searchResults = React.useMemo(
    () => topicCategories.flatMap((category) => category.topics).filter(matchesTopic),
    [matchesTopic]
  )

  const openTopic = React.useCallback((topicId: string) => {
    setSelectedTopic(topicId)
    setSearchQuery("")
  }, [])

  const selected = topicsById[selectedTopic] ?? topicsById[defaultTopicId]

  return (
    <DocsLayout
      categories={filteredCategories}
      selectedTopic={selectedTopic}
      onSelectTopic={openTopic}
      searchQuery={searchQuery}
      onSearchQueryChange={setSearchQuery}
      searchResults={searchResults.slice(0, 12)}
      onOpenTopicFromSearch={openTopic}
    >
      <ContentViewer topic={selected} />
    </DocsLayout>
  )
}
