import * as React from "react"

import { cn } from "@/lib/utils"

type SidebarItemProps = {
  isActive: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function SidebarItem({
  className,
  isActive,
  children,
  ...props
}: SidebarItemProps) {
  return (
    <button
      className={cn(
        "w-full rounded-md px-3 py-2 text-left text-sm transition-colors duration-200",
        "hover:bg-[color:var(--accent)]/20",
        isActive
          ? "bg-[color:var(--accent)] text-black font-semibold"
          : "text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
