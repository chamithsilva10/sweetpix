"use client"

import * as React from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * NotchedProjectCard
 *
 * A project card whose cover has a rounded notch bitten out of its
 * bottom-right corner, with the "open" arrow nested inside it. The cut is
 * concentric with the arrow disc, and filleted where it meets the cover's
 * edges, so the cover curves into it instead of ending on a point.
 */

export interface NotchedProjectCardProps {
  href: string
  title: string
  description?: string
  /** cover photograph */
  image: string
  imageAlt?: string
  /** a pill at the top of the cover, e.g. the year */
  badge?: string
  tags?: string[]
  /** a product screen over the photo (transparent PNG/WebP works best) */
  screen?: { src: string; alt: string; className?: string }
  /** a dark wash between the photo and the screen, 0 to 1 */
  dim?: number
  monochrome?: boolean
  /** the colour behind the card; the notch is painted in it */
  surface?: string
  /** the arrow disc's fill on hover (any CSS colour); defaults to the theme's primary */
  accent?: string
  /** the arrow's colour on that fill; pick one that contrasts with `accent` */
  accentForeground?: string
  className?: string
  onClick?: (e: React.MouseEvent) => void
}

const DISC = 64 // the arrow disc, px
const BLOCK = 80 // the notch block, px (radius = BLOCK - DISC / 2)
const FILLET = 28 // the curve where the cut meets the cover's edges, px

export function NotchedProjectCard({
  href,
  title,
  description,
  image,
  imageAlt = "",
  badge,
  tags = [],
  screen,
  dim = screen ? 0.45 : 0,
  monochrome = false,
  surface = "var(--color-background, #0a0a0a)",
  accent = "#D4AF37",
  accentForeground = "#0a0a0a",
  className,
  onClick,
}: NotchedProjectCardProps) {
  const tone = monochrome
    ? "grayscale transition-[filter,scale] duration-500 group-hover:grayscale-0 group-focus-visible:grayscale-0"
    : "transition-[scale] duration-500"

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "group flex flex-col rounded-[28px] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background cursor-pointer",
        className
      )}
    >
      <div className="relative">
        {/* the cover */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-neutral-900 border border-white/10">
          <img
            src={image}
            alt={screen ? "" : imageAlt}
            className={cn(
              "absolute inset-0 h-full w-full object-cover",
              tone,
              !screen && "group-hover:scale-[1.04]"
            )}
          />
          {dim > 0 && (
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ backgroundColor: `rgb(0 0 0 / ${dim})` }}
            />
          )}
          {screen && (
            <img
              src={screen.src}
              alt={screen.alt}
              className={cn(
                "absolute bottom-0 right-0 w-[82%] origin-bottom-right drop-shadow-[0_18px_40px_rgba(0,0,0,0.5)] group-hover:scale-[1.07]",
                tone,
                screen.className
              )}
            />
          )}
          {badge && (
            <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center pt-4 z-10">
              <span className="rounded-full border border-white/30 bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md shadow-sm">
                {badge}
              </span>
            </div>
          )}
        </div>

        {/* the notch: a block with a concave corner, and a fillet at each
            end where the cut meets the cover's right and bottom edges */}
        <div
          aria-hidden
          className="absolute bottom-0 right-0"
          style={{
            width: BLOCK,
            height: BLOCK,
            borderTopLeftRadius: BLOCK - DISC / 2,
            background: surface,
          }}
        />
        {[
          { bottom: BLOCK, right: 0 },
          { bottom: 0, right: BLOCK },
        ].map((pos, i) => (
          <div
            key={i}
            aria-hidden
            className="absolute"
            style={{
              ...pos,
              width: FILLET,
              height: FILLET,
              background: `radial-gradient(circle at top left, transparent ${
                FILLET - 0.5
              }px, ${surface} ${FILLET}px)`,
            }}
          />
        ))}

        {/* the arrow, nested in the notch */}
        <span
          aria-hidden
          className={cn(
            "absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white/10 text-white transition-[background-color,color,scale] duration-300 group-hover:scale-105 border border-white/15 backdrop-blur-md shadow-lg",
            accent
              ? "group-hover:bg-[var(--card-accent)] group-hover:text-[var(--card-accent-fg)]"
              : "group-hover:bg-primary group-hover:text-primary-foreground"
          )}
          style={
            {
              width: DISC,
              height: DISC,
              "--card-accent": accent,
              "--card-accent-fg": accentForeground,
            } as React.CSSProperties
          }
        >
          <ArrowUpRight className="size-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>

      <h3 className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-amber-300 transition-colors">
        {title}
      </h3>
      {description && (
        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-white/65">
          {description}
        </p>
      )}
      {tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((t, i) => (
            <li
              key={`${t}-${i}`}
              className="rounded-full bg-white/10 border border-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </a>
  )
}

export default NotchedProjectCard
