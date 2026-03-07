import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import type { Topic } from "@/lib/hardware-topics"

const ASCII_HEADER = `████████╗███████╗ ██████╗██╗  ██╗    ██████╗ ███████╗ ██████╗██╗  ██╗ 
╚══██╔══╝██╔════╝██╔════╝██║  ██║    ██╔══██╗██╔════╝██╔════╝██║ ██╔╝
   ██║   █████╗  ██║     ███████║    ██║  ██║█████╗  ██║     █████╔╝
   ██║   ██╔══╝  ██║     ██╔══██║    ██║  ██║██╔══╝  ██║     ██╔═██╗
   ██║   ███████╗╚██████╗██║  ██║    ██████╔╝███████╗╚██████╗██║  ██╗
   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝    ╚═════╝ ╚══════╝ ╚═════╝╚═╝  ╚═╝`

type TopicSectionProps = {
  topic: Topic
  previousTopic?: Topic | null
  nextTopic?: Topic | null
  onNavigate?: (topicId: string) => void
}

export function TopicSection({
  topic,
  previousTopic,
  nextTopic,
  onNavigate,
}: TopicSectionProps) {
  const isReadme = topic.id === "readme"

  return (
    <article className="mx-auto flex w-full max-w-4xl flex-col items-start justify-start space-y-7 text-left">
      <header className="w-full space-y-3">
        {isReadme ? (
          <div className="w-full overflow-x-auto">
            <pre className="w-max min-w-full whitespace-pre text-[8px] leading-[1.12] font-bold sm:text-[10px] md:text-xs lg:text-sm">
              {ASCII_HEADER}
            </pre>
          </div>
        ) : (
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            {topic.title}
          </h1>
        )}
      </header>

      <section className="w-full space-y-4 px-1">
        {topic.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-foreground/90">
            {paragraph}
          </p>
        ))}

        {/* Render images if present */}
        {topic.images && topic.images.length > 0 && (
          <div className="mt-6 space-y-4">
            {topic.images.map((image) => (
              <figure key={image.src} className="space-y-2">
                <div className="relative w-full overflow-hidden rounded-lg border border-border/60">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={450}
                    className="h-auto w-full object-contain"
                  />
                </div>
                {image.caption && (
                  <figcaption className="text-center text-sm text-muted-foreground">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        {!isReadme && (
          <p className="text-sm text-muted-foreground">
            Keywords: {topic.keywords.join(", ")}
          </p>
        )}
      </section>

      {/* Previous / Next Navigation */}
      {!isReadme && onNavigate && (previousTopic || nextTopic) && (
        <nav className="flex w-full items-center justify-between border-t border-border/40 pt-6">
          {previousTopic ? (
            <button
              type="button"
              onClick={() => onNavigate(previousTopic.id)}
              className="flex items-center gap-2 rounded-md border border-border/60 px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-accent/10"
            >
              <ChevronLeft className="size-4" />
              <span>{previousTopic.label}</span>
            </button>
          ) : (
            <div />
          )}
          {nextTopic ? (
            <button
              type="button"
              onClick={() => onNavigate(nextTopic.id)}
              className="flex items-center gap-2 rounded-md border border-border/60 px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-accent/10"
            >
              <span>{nextTopic.label}</span>
              <ChevronRight className="size-4" />
            </button>
          ) : (
            <div />
          )}
        </nav>
      )}
    </article>
  )
}
