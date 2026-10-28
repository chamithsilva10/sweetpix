"use client"

import React, { useEffect } from "react"
import { X, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TiltedGridHero } from "@/components/ui/tilted-grid-hero"
import DotPattern from "@/components/dot-pattern"

const CDN = "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev"

export const PREVIOUS_EVENTS_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    alt: "Grand Ballroom Gala Event",
  },
  {
    src: `${CDN}/gradients/hero_gradient/hero-gradients-01.png`,
    alt: "Soft multi-tone gradient wash",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
    alt: "Graduation Convocation Cap Toss",
  },
  {
    src: `${CDN}/gradients/moon/moon-grade-03.png`,
    alt: "Moon-toned gradient",
  },
  {
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=85",
    alt: "Milestone Birthday Studio Celebration",
  },
  {
    src: `${CDN}/gradients/shade_shiters/shade-shifters-05.png`,
    alt: "Shifting shade gradient",
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
    alt: "Live Music & Event Stage Highlights",
  },
  {
    src: `${CDN}/gradients/shade_shiters/shade-shifters-09.png`,
    alt: "Shifting shade gradient",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
    alt: "Banquet Toast & Candid Moments",
  },
  {
    src: `${CDN}/gradients/moon/moon-grade-06.png`,
    alt: "Moon-toned gradient",
  },
]

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function PreviousEventsModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    const orig = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = orig
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative flex flex-col w-full max-w-6xl max-h-[94svh] rounded-[32px] border border-white/15 bg-black text-white shadow-[0_30px_100px_rgba(0,0,0,0.95)] overflow-hidden">
        {/* Background Dot Matrix Pattern */}
        <DotPattern
          className="opacity-50"
          spacing={16}
          dotSize={1.3}
          dotColor="rgba(255, 255, 255, 0.22)"
        />

        {/* Modal Header */}
        <div className="relative z-20 flex items-center justify-between border-b border-white/10 px-6 py-4 sm:px-8 bg-black/80 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
              <Sparkles className="h-3.5 w-3.5" />
              SweetPix Archive
            </span>
            <span className="text-xs text-white/50 hidden sm:inline-block">
              Previous Events Showcase
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="size-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-all"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Tilted Cylinder Grid Hero */}
        <div className="relative flex-1 min-h-[500px] sm:min-h-[580px] w-full overflow-hidden">
          <TiltedGridHero
            images={PREVIOUS_EVENTS_IMAGES}
            speed={4.5}
            tileHeight={34}
            aspectRatio={16 / 9}
            gap={6}
            curve={75}
            className="h-full w-full"
          >
            <div className="relative z-10 flex h-full flex-col items-center justify-between py-10 sm:py-16 text-center pointer-events-none select-none">
              <div className="px-6 space-y-3">
                <h1 className="text-balance text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-2xl">
                  Every frame,
                  <br />
                  brought into focus.
                </h1>
                <p className="max-w-md mx-auto text-balance text-xs sm:text-sm text-white/70 leading-relaxed drop-shadow-md">
                  A streaming 3D cylindrical gallery of our past celebrations, corporate galas, convocation ceremonies, and milestone birthdays.
                </p>
              </div>

              <div className="px-6 pointer-events-auto">
                <Button
                  type="button"
                  onClick={onClose}
                  className="rounded-full bg-white text-black hover:bg-neutral-200 font-bold px-6 py-2.5 shadow-xl text-xs sm:text-sm transition-all"
                >
                  <span>Explore Current Packages</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TiltedGridHero>
        </div>
      </div>
    </div>
  )
}
