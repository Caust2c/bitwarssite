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
  return (
    <section className="themed-scrollbar flex h-full flex-col overflow-y-auto p-6 md:p-9">
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
