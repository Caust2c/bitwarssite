import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import type { Topic } from "@/lib/hardware-topics"

type SearchbarProps = {
  value: string
  onChange: (value: string) => void
  results: Topic[]
  onSelectTopic: (topicId: string) => void
  className?: string
}

export function Searchbar({
  value,
  onChange,
  results,
  onSelectTopic,
  className,
}: SearchbarProps) {
  const hasQuery = value.trim().length > 0

  return (
    <div className={className ?? "relative z-50 min-w-[220px] flex-1"}>
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search CPU core, tensor core, DDR5..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-9 border-border/60 bg-background/60 pl-9 font-mono"
      />
      {hasQuery && (
        <div className="absolute z-[70] mt-1 w-full overflow-hidden rounded-md border border-border/60 bg-background/95 backdrop-blur-sm">
          {results.length > 0 ? (
            <ul className="themed-scrollbar max-h-72 overflow-auto py-1">
              {results.map((topic) => (
                <li key={topic.id}>
                  <button
                    className="w-full px-3 py-2 text-left text-sm transition-colors duration-200 hover:bg-accent/15"
                    onClick={() => onSelectTopic(topic.id)}
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
            <p className="px-3 py-2 text-sm text-muted-foreground">No matching topics.</p>
          )}
        </div>
      )}
    </div>
  )
}