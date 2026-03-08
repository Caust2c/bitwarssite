"use client"

import * as React from "react"
import { Search, X } from "lucide-react"

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
  const [isOpen, setIsOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const hasQuery = value.trim().length > 0

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelectTopic = (topicId: string) => {
    onSelectTopic(topicId)
    setIsOpen(false)
  }

  const handleClear = () => {
    onChange("")
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className={className ?? "relative z-50 min-w-[220px] flex-1"}>
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search CPU core, tensor core, DDR5..."
        value={value}
        onChange={(event) => {
          onChange(event.target.value)
          setIsOpen(true)
        }}
        onFocus={() => setIsOpen(true)}
        className="h-9 border-border/60 bg-background/60 pr-9 pl-9 font-mono"
      />
      {hasQuery && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-sm p-0.5 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Clear search"
        >
          <X className="size-4" />
        </button>
      )}
      {hasQuery && isOpen && (
        <div className="absolute z-[70] mt-1 w-full overflow-hidden rounded-md border border-border/60 bg-background/95 backdrop-blur-sm">
          {results.length > 0 ? (
            <ul className="themed-scrollbar max-h-72 overflow-auto py-1">
              {results.map((topic) => (
                <li key={topic.id}>
                  <button
                    className="w-full px-3 py-2 text-left text-sm transition-colors duration-200 hover:bg-accent/15"
                    onClick={() => handleSelectTopic(topic.id)}
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