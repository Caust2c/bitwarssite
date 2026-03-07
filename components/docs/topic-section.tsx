import type { Topic } from "@/lib/hardware-topics"

export function TopicSection({ topic }: { topic: Topic }) {
  const isReadme = topic.id === "readme"

  return (
    <article className="mx-auto flex w-full max-w-4xl flex-col items-start justify-start space-y-7 text-left">
      <header className="w-full space-y-3">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
          {topic.title}
        </h1>
      </header>

      <section className="w-full space-y-4 rounded-md border border-border/55 bg-background/35 px-8 py-7 backdrop-blur-[2px] sm:px-9 sm:py-8">
        {topic.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-foreground/90">
            {paragraph}
          </p>
        ))}

        {!isReadme && (
          <p className="text-sm text-muted-foreground">
            Keywords: {topic.keywords.join(", ")}
          </p>
        )}
      </section>
    </article>
  )
}
