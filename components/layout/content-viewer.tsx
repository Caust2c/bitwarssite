import { motion } from "framer-motion"

import type { Topic } from "@/lib/hardware-topics"
import { TopicSection } from "@/components/docs/topic-section"

export function ContentViewer({ topic }: { topic: Topic }) {
  return (
    <section className="flex min-h-[680px] items-start justify-start p-6 md:p-9">
      <motion.div
        className="w-full"
        key={topic.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        <TopicSection topic={topic} />
      </motion.div>
    </section>
  )
}
