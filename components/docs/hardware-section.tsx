import { TerminalCard } from "@/components/ui/terminal-card"

type HardwareSectionProps = {
  id: string
  title: string
  definition: string
  keywords: string[]
}

export function HardwareSection({
  id,
  title,
  definition,
  keywords,
}: HardwareSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 space-y-3">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <TerminalCard>
        <p className="text-base leading-relaxed text-foreground/90">{definition}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <span
              key={keyword}
              className="terminal-glow rounded-md border border-border/60 px-2 py-1 text-xs font-semibold tracking-wide text-accent uppercase"
            >
              {keyword}
            </span>
          ))}
        </div>
      </TerminalCard>
    </section>
  )
}
