import type { Topic } from "@/lib/hardware-topics"

const ASCII_HEADER = `████████╗███████╗ ██████╗██╗  ██╗    ██████╗ ███████╗ ██████╗██╗  ██╗
╚══██╔══╝██╔════╝██╔════╝██║  ██║    ██╔══██╗██╔════╝██╔════╝██║ ██╔╝
  ██║   █████╗  ██║     ███████║    ██║  ██║█████╗  ██║     █████╔╝
  ██║   ██╔══╝  ██║     ██╔══██║    ██║  ██║██╔══╝  ██║     ██╔═██╗
  ██║   ███████╗╚██████╗██║  ██║    ██████╔╝███████╗╚██████╗██║  ██╗
  ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝    ╚═════╝ ╚══════╝ ╚═════╝╚═╝  ╚═╝`

export function TopicSection({ topic }: { topic: Topic }) {
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

      <section className="w-full max-h-[70vh] space-y-4 overflow-y-auto px-8 py-7 sm:px-9 sm:py-8">
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
