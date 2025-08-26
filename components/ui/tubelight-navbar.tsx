"use client"

import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import { useState } from "react"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeItem, setActiveItem] = useState(items[0]?.name || "")

  return (
    <nav
      className={cn(
        "flex items-center justify-center p-2 bg-card/90 backdrop-blur-lg border border-border/50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
        className,
      )}
    >
      <div className="flex items-center space-x-1">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            onClick={() => setActiveItem(item.name)}
            className={cn(
              "flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 relative group",
              activeItem === item.name
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
            )}
          >
            <item.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{item.name}</span>
            {activeItem === item.name && (
              <div className="absolute inset-0 bg-primary rounded-full opacity-20 animate-pulse" />
            )}
          </a>
        ))}
      </div>
    </nav>
  )
}
