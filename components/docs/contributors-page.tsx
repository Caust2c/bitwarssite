"use client"
//Code used form monolab ui and refined for our use case
import { motion } from "framer-motion"

type Contributor = {
  name: string
  role: string
  avatar: string
  github?: string
}

const contributors: Contributor[] = [
  {
    name: "Hardik Lalla",
    role: "Developer",
    avatar: "/assets/C9yE1aIq0aw-1-png__880.jpg",
    github: "https://github.com/Caust2c",
  },
  {
    name: "Kratagya Gupta",
    role: "Developer",
    avatar: "/assets/Cw3eFuEqgb8-png__880.jpg",
    github: "https://github.com/krata317",
  },
]

export function ContributorsPage() {
  return (
    <section className="flex h-full flex-col items-center justify-center p-6 md:p-9">
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        <h1 className="mb-2 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Contributors
        </h1>
        <p className="mb-8 text-center text-sm text-muted-foreground">
          The people behind Tech Deck
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {contributors.map((contributor) => (
            <ContributorCard key={contributor.name} contributor={contributor} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function ContributorCard({ contributor }: { contributor: Contributor }) {
  return (
    <div className="flex w-48 flex-col items-center rounded-lg border border-border/40 bg-accent/8 p-6 transition-colors hover:border-accent/60 hover:bg-accent/12">
      <img
        src={contributor.avatar}
        alt={contributor.name}
        className="h-20 w-20 rounded-full border-2 border-accent/40 object-cover"
      />
      <h3 className="mt-4 text-sm font-semibold text-foreground">
        {contributor.name}
      </h3>
      <p className="text-xs text-muted-foreground">{contributor.role}</p>
      {contributor.github && (
        <a
          href={contributor.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 rounded-md border border-accent/40 bg-accent/12 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/20"
        >
          GitHub
        </a>
      )}
    </div>
  )
}
