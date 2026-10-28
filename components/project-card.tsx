"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import RevealOnView from "@/components/reveal-on-view"
import PackageDetailsModal from "@/components/package-details-modal"
import type { SweetPixPackage } from "@/data/packages"

type Props = {
  title?: string
  subtitle?: string
  imageSrc?: string
  tags?: string[]
  details?: readonly string[]
  href?: string
  priority?: boolean
  gradientFrom?: string
  gradientTo?: string
  imageContainerClassName?: string
  containerClassName?: string
  revealDelay?: number
  pkg?: SweetPixPackage
}

export default function ProjectCard({
  title = "Project title",
  subtitle = "Project subtitle",
  imageSrc = "/placeholder.svg?height=720&width=1280",
  tags = ["Photography", "Pricing"],
  details = [],
  href = "#",
  priority = false,
  gradientFrom = "#171717",
  gradientTo = "#262626",
  imageContainerClassName,
  containerClassName,
  revealDelay = 0,
  pkg,
}: Props) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const displayTags = pkg?.previewTags || tags
  const displayHighlights = pkg?.cardHighlights || details

  return (
    <article className={cn("group relative", containerClassName)}>
      <RevealOnView
        delay={revealDelay}
        className="rounded-[30px] border border-white/10 p-1 shadow-[0_15px_60px_-10px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:-translate-y-1.5 lg:h-full"
        style={{
          backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        <div className="relative overflow-hidden rounded-[26px] bg-neutral-950 lg:h-full">
          {/* Image */}
          <div
            onClick={() => setIsDetailsOpen(true)}
            className={cn(
              "relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full cursor-pointer",
              imageContainerClassName
            )}
          >
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              priority={priority}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Subtle monochrome gradient vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/30" />
          </div>

          {/* Top-left tags: Clean Black & White */}
          <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-1.5 sm:gap-2 max-w-[85%] z-10">
            {displayTags.map((t, idx) => {
              const isPopularTag = t.toLowerCase().includes("popular") || t.toLowerCase().includes("best")
              return (
                <Badge
                  key={t}
                  variant="secondary"
                  className={cn(
                    "pointer-events-auto border backdrop-blur-md text-[11px] font-semibold tracking-wide shadow-sm",
                    isPopularTag
                      ? "border-white/40 bg-white/20 text-white font-bold"
                      : "border-white/15 bg-black/60 text-white/90"
                  )}
                >
                  {isPopularTag && (
                    <Sparkles className="mr-1 h-3 w-3 text-white" />
                  )}
                  {t}
                </Badge>
              )
            })}
          </div>

          {/* Bottom content: Modern Black & White */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent z-10">
            {/* Subtle dot matrix texture */}
            <div className="pointer-events-none absolute inset-0 dot-grid-pattern-subtle opacity-20 -z-10" />
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {title}
                  </h3>
                  {pkg?.startingPrice && (
                    <span className="rounded-full bg-white/10 border border-white/15 px-2.5 py-0.5 text-xs font-semibold text-white/90">
                      From {pkg.startingPrice}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-white/70 max-w-xl leading-relaxed">
                  {subtitle}
                </p>

                {/* Highlights preview */}
                <ul className="mt-2.5 max-w-2xl space-y-1 text-xs text-white/80">
                  {displayHighlights.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <span className="text-white/40 select-none">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* View More Details Button: Clean Black & White */}
              <button
                type="button"
                onClick={() => setIsDetailsOpen(true)}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-black hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white self-start sm:self-auto shadow-lg shadow-black/50 group-hover:scale-105"
                aria-label={`View more details about ${title}`}
              >
                <span>View More Details</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </RevealOnView>

      {/* Modern Pop-up / Modal */}
      {pkg ? (
        <PackageDetailsModal
          pkg={pkg}
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
        />
      ) : null}
    </article>
  )
}
