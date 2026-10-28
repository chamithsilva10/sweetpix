"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  motion,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  MotionValue,
} from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    title: "Event Photography",
    subtitle: "From Rs. 8,000",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
    title: "Graduation Shoots",
    subtitle: "Free Cap & Scroll",
  },
  {
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=85",
    title: "Birthday Photography",
    subtitle: "Studio & Outdoor",
  },
  {
    src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85",
    title: "Photo Frames",
    subtitle: "4x6 to 20x30",
  },
  {
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=1200&q=85",
    title: "Archival Prints",
    subtitle: "Matte & Glossy",
  },
  {
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85",
    title: "Albums Printing",
    subtitle: "180° Layflat",
  },
  {
    src: "/images/project-1.webp",
    title: "Milestone Galas",
    subtitle: "4K Cinematic",
  },
  {
    src: "/images/project-2.webp",
    title: "Convocation Honors",
    subtitle: "Class of 2026",
  },
  {
    src: "/images/project-3.webp",
    title: "Celebrations",
    subtitle: "Sweet Memories",
  },
]

interface TunnelCardData {
  item: { src: string; title: string; subtitle?: string }
  angleCos: number
  angleSin: number
  radiusFactorX: number
  radiusFactorY: number
  rotationZ: number
  index: number
}

const TUNNEL_CARDS: TunnelCardData[] = IMAGES.map((item, i) => {
  const goldenAngle = i * 137.5 * (Math.PI / 180)
  const radiusFactorX = 0.28 + (i % 3) * 0.08
  const radiusFactorY = 0.26 + (i % 2) * 0.09

  return {
    item,
    angleCos: Math.cos(goldenAngle),
    angleSin: Math.sin(goldenAngle),
    radiusFactorX,
    radiusFactorY,
    rotationZ: (i % 2 === 0 ? 1 : -1) * (3 + (i % 5) * 2),
    index: i,
  }
})

const SPRING_CONFIG = { stiffness: 60, damping: 25, mass: 0.5 }

interface StageDimensions {
  width: number
  height: number
  isMobile: boolean
}

function useCameraParallax(enabled: boolean) {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, SPRING_CONFIG)
  const y = useSpring(rawY, SPRING_CONFIG)

  useEffect(() => {
    if (!enabled) return
    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2)
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2)
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [enabled, rawX, rawY])

  return { x, y }
}

interface TunnelCardProps {
  card: TunnelCardData
  progress: MotionValue<number>
  pointer: { x: MotionValue<number>; y: MotionValue<number> }
  total: number
  stage: StageDimensions
  onCardClick?: () => void
}

function TunnelCard({ card, progress, pointer, total, stage, onCardClick }: TunnelCardProps) {
  const staggerSpan = 0.55
  const start = (card.index / total) * (1 - staggerSpan)
  const end = start + staggerSpan

  const localProgress = useTransform(progress, [start, end], [0, 1])

  const farZ = stage.isMobile ? -1200 : -1700
  const nearZ = stage.isMobile ? 350 : 500
  const z = useTransform(localProgress, [0, 1], [farZ, nearZ])

  const opacity = useTransform(localProgress, [0, 0.18, 0.82, 0.98], [0, 1, 1, 0])

  const cardWidth = stage.isMobile
    ? Math.max(130, Math.min(180, stage.width * 0.38))
    : Math.max(180, Math.min(270, stage.width * 0.18))

  const baseX = card.angleCos * (stage.width * card.radiusFactorX)
  const baseY = card.angleSin * (stage.height * card.radiusFactorY)
  const panStrength = stage.isMobile ? 20 : 45

  const transform = useTransform(
    [z, pointer.x, pointer.y],
    ([currZ, px, py]: number[]) => {
      const offsetX = baseX - px * panStrength
      const offsetY = baseY - py * panStrength
      return `translate3d(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px), ${currZ}px) rotateZ(${card.rotationZ}deg)`
    }
  )

  return (
    <motion.div
      style={{
        width: cardWidth,
        transform,
        opacity,
        zIndex: card.index + 1,
      }}
      onClick={onCardClick}
      className="pointer-events-auto absolute left-1/2 top-1/2 aspect-[4/5] will-change-transform select-none cursor-pointer"
    >
      <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl shadow-black/90 ring-1 ring-white/15 transition-all duration-500 hover:ring-white/60 hover:shadow-white/20">
        <img
          src={card.item.src}
          alt={card.item.title}
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-5">
          <span className="text-xs sm:text-sm font-bold tracking-tight uppercase text-white drop-shadow-md">
            {card.item.title}
          </span>
          {card.item.subtitle && (
            <span className="text-[10px] sm:text-xs font-mono text-white/70">
              {card.item.subtitle}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

type Props = {
  onEnter?: () => void
}

export default function PerspectiveTunnelHero({ onEnter }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const [stage, setStage] = useState<StageDimensions>({
    width: 1440,
    height: 900,
    isMobile: false,
  })

  useEffect(() => {
    const updateDimensions = () => {
      setStage({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Raw motion value controlled directly by mouse wheel / touch trackpad
  const rawProgress = useMotionValue(0)
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.0001,
  })

  const scrollToPortfolio = () => {
    if (onEnter) {
      onEnter()
    } else {
      const target = document.getElementById("portfolio-showcase")
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  // Handle wheel scrolling locally inside the viewport container
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handleWheel = (e: WheelEvent) => {
      const current = rawProgress.get()
      const delta = e.deltaY * 0.001

      // If scrolling down and at the end of tunnel, let standard page scroll take over
      if (current >= 0.97 && e.deltaY > 0) {
        scrollToPortfolio()
        return
      }

      // If scrolling up at the beginning, let user scroll up normally
      if (current <= 0.02 && e.deltaY < 0) {
        return
      }

      e.preventDefault()
      const next = Math.min(1, Math.max(0, current + delta))
      rawProgress.set(next)
    }

    el.addEventListener("wheel", handleWheel, { passive: false })
    return () => el.removeEventListener("wheel", handleWheel)
  }, [rawProgress])

  // Touch support for mobile devices
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let startY = 0

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY
      const delta = (startY - currentY) * 0.002
      startY = currentY

      const current = rawProgress.get()
      if (current >= 0.98 && delta > 0) {
        scrollToPortfolio()
        return
      }

      const next = Math.min(1, Math.max(0, current + delta))
      rawProgress.set(next)
    }

    el.addEventListener("touchstart", handleTouchStart, { passive: true })
    el.addEventListener("touchmove", handleTouchMove, { passive: true })

    return () => {
      el.removeEventListener("touchstart", handleTouchStart)
      el.removeEventListener("touchmove", handleTouchMove)
    }
  }, [rawProgress])

  const pointer = useCameraParallax(!reduce)

  const titleScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 1.35])
  const titleOpacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0.35, 1, 1, 0.05])
  const promptOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0.3])

  return (
    <section
      ref={containerRef}
      id="sweetpix-splash"
      className="relative h-[100svh] w-full overflow-hidden bg-black text-white select-none flex items-center justify-center"
      style={{
        perspective: stage.isMobile ? "900px" : "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Immersive Dot Matrix Grid matching user screenshot */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundColor: "#000000",
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.22) 1.3px, transparent 1.3px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_75%)]" />

      {/* Depth Ring Guides */}
      <div className="pointer-events-none absolute h-[48vmin] w-[48vmin] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute h-[76vmin] w-[76vmin] rounded-full border border-dashed border-white/10" />

      {/* Central Anchor Typography: "SweetPix" */}
      <motion.div
        style={{ scale: titleScale, opacity: titleOpacity }}
        className="pointer-events-none z-0 flex flex-col items-center text-center px-6 max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-md mb-4 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-white" />
          <span>Official Price List</span>
        </div>

        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-[0.88] bg-gradient-to-b from-white via-white/95 to-white/40 bg-clip-text text-transparent drop-shadow-2xl">
          SWEETPIX
        </h1>

        <p className="mt-4 max-w-[36ch] text-sm sm:text-base font-light text-white/70 leading-relaxed">
          Premium photography, handcrafted frames, archival lab prints, and luxury albums.
        </p>
      </motion.div>

      {/* 3D Z-Space Plane with Tunnel Cards */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        {TUNNEL_CARDS.map((card, i) => (
          <TunnelCard
            key={i}
            card={card}
            progress={smoothProgress}
            pointer={pointer}
            total={TUNNEL_CARDS.length}
            stage={stage}
            onCardClick={scrollToPortfolio}
          />
        ))}
      </div>

      {/* Bottom Scroll / Enter Prompt */}
      <motion.div
        style={{ opacity: promptOpacity }}
        className="absolute bottom-6 sm:bottom-8 z-30 flex flex-col items-center gap-2.5"
      >
        <button
          type="button"
          onClick={scrollToPortfolio}
          className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white backdrop-blur-md transition-all duration-300 shadow-xl cursor-pointer"
        >
          <span>Explore Packages</span>
          <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
        </button>

        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40">
          Scroll or swipe through 3D corridor
        </span>
      </motion.div>
    </section>
  )
}
