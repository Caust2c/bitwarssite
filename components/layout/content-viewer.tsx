"use client"

import * as React from "react"
import { motion } from "framer-motion"

import type { Topic } from "@/lib/hardware-topics"
import { TopicSection } from "@/components/docs/topic-section"

type ContentViewerProps = {
  topic: Topic
  previousTopic?: Topic | null
  nextTopic?: Topic | null
  onNavigate?: (topicId: string) => void
}

export function ContentViewer({
  topic,
  previousTopic,
  nextTopic,
  onNavigate,
}: ContentViewerProps) {
  // Scroll to top when topic changes
  React.useEffect(() => {
    const mainContent = document.getElementById("main-content")
    if (mainContent) {
      mainContent.scrollTop = 0
    }
  }, [topic.id])

  return (
    <section className="flex min-h-full flex-col p-6 pb-12 md:p-9 md:pb-16">
      <motion.div
        className="w-full"
        key={topic.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        <TopicSection
          topic={topic}
          previousTopic={previousTopic}
          nextTopic={nextTopic}
          onNavigate={onNavigate}
        />
      </motion.div>
    </section>
  )
}
