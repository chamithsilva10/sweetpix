"use client"

import { cn } from "@/lib/utils"

type Props = {
  className?: string
  dotColor?: string
  dotSize?: number
  spacing?: number
  fadeEdges?: boolean
}

export default function DotPattern({
  className,
  dotColor = "rgba(255, 255, 255, 0.22)",
  dotSize = 1.3,
  spacing = 16,
  fadeEdges = false,
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundColor: "#000000",
        backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        maskImage: fadeEdges
          ? "radial-gradient(ellipse at center, black 65%, transparent 100%)"
          : undefined,
        WebkitMaskImage: fadeEdges
          ? "radial-gradient(ellipse at center, black 65%, transparent 100%)"
          : undefined,
      }}
    />
  )
}
