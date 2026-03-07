import Image from "next/image"

import { cn } from "@/lib/utils"

type Card1Props = {
  src: string
  alt: string
  caption?: string
  className?: string
}

export function Card1({ src, alt, caption, className }: Card1Props) {
  return (
    <figure
      className={cn(
        "mx-auto w-[86%] rounded-xl border border-border/60 bg-accent/12 p-2 text-foreground sm:p-2.5",
        className
      )}
    >
      <div className="relative w-full overflow-hidden rounded-lg border border-border/50 bg-background">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="h-auto w-full object-contain"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
