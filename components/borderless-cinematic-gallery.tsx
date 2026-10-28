"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { motion, AnimatePresence } from "motion/react"
import { Camera, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { GalleryPhoto } from "@/data/packages"

type Props = {
  photos: GalleryPhoto[]
  categoryTitle: string
}

export default function BorderlessCinematicGallery({
  photos,
  categoryTitle,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLDivElement | null>(null)
  const imageWrapperRef = useRef<HTMLDivElement | null>(null)
  const thumbStripRef = useRef<HTMLDivElement | null>(null)

  const activePhoto = photos[activeIndex] || photos[0]

  // GSAP Entrance Stagger Animation
  useEffect(() => {
    if (!canvasRef.current || !thumbStripRef.current) return

    const ctx = gsap.context(() => {
      // Main cinematic canvas reveal
      gsap.fromTo(
        canvasRef.current,
        {
          opacity: 0,
          y: 28,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
        }
      )

      // Thumbnails staggered slide up
      const thumbs = thumbStripRef.current?.querySelectorAll(".gsap-thumb")
      if (thumbs && thumbs.length > 0) {
        gsap.fromTo(
          thumbs,
          {
            opacity: 0,
            y: 20,
            scale: 0.92,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.2,
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [categoryTitle])

  // GSAP Smooth Cinematic Transition on Photo Change
  useEffect(() => {
    if (!imageWrapperRef.current) return

    gsap.fromTo(
      imageWrapperRef.current,
      {
        opacity: 0.35,
        scale: 1.04,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.out",
      }
    )
  }, [activeIndex])

  // Parallax subtle motion on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageWrapperRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    gsap.to(imageWrapperRef.current, {
      x: x * 16,
      y: y * 12,
      duration: 1.2,
      ease: "power1.out",
    })
  }

  const handleMouseLeave = () => {
    if (!imageWrapperRef.current) return
    gsap.to(imageWrapperRef.current, {
      x: 0,
      y: 0,
      duration: 1,
      ease: "power2.out",
    })
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1))
  }

  if (!photos || photos.length === 0) return null

  return (
    <div ref={containerRef} className="space-y-3 pt-1 pb-2">
      {/* Seamless BORDERLESS 4K Cinema Viewport */}
      <div
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-neutral-950 shadow-[0_20px_60px_rgba(0,0,0,0.9)] cursor-pointer select-none"
      >
        {/* Parallax Image Target with GSAP Motion */}
        <div ref={imageWrapperRef} className="relative h-full w-full will-change-transform">
          <Image
            src={activePhoto.src}
            alt={activePhoto.caption || `${categoryTitle} cinematic frame`}
            fill
            sizes="(min-width: 1024px) 1000px, 100vw"
            priority
            className="object-cover"
          />
        </div>

        {/* Soft borderless gradient vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/35" />

        {/* Floating pill badge without harsh borders */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold tracking-wider text-white shadow-md">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            {activePhoto.tag || "4K CINEMATIC"}
          </span>
        </div>

        {/* Prev / Next Chevrons on Hover */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-black/60 text-white backdrop-blur-md opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center hover:bg-white hover:text-black shadow-xl"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-black/60 text-white backdrop-blur-md opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center hover:bg-white hover:text-black shadow-xl"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Bottom Title & Counter Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 z-10 flex items-end justify-between gap-4">
          <div className="space-y-0.5 max-w-[80%]">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/50">
              {categoryTitle} • Live Preview
            </p>
            <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight leading-snug">
              {activePhoto.caption}
            </h4>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-white/60 shrink-0 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
            <span className="text-white font-bold">{activeIndex + 1}</span>
            <span>/</span>
            <span>{photos.length}</span>
          </div>
        </div>
      </div>

      {/* Fluid BORDERLESS Thumbnail Strip */}
      <div
        ref={thumbStripRef}
        className="flex items-center gap-2 sm:gap-3 overflow-x-auto py-1 scrollbar-none"
      >
        {photos.map((photo, idx) => {
          const isActive = idx === activeIndex
          return (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setActiveIndex(idx)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "gsap-thumb group relative h-16 sm:h-20 flex-1 min-w-[76px] sm:min-w-[110px] rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 focus-visible:outline-none",
                isActive
                  ? "opacity-100 ring-2 ring-white shadow-xl shadow-black/80"
                  : "opacity-45 hover:opacity-85"
              )}
              aria-label={`View photo ${idx + 1}`}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(min-width: 640px) 150px, 90px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className={cn(
                  "absolute inset-0 transition-colors",
                  isActive ? "bg-transparent" : "bg-black/30 group-hover:bg-transparent"
                )}
              />

              {/* Tag pill */}
              {photo.tag && (
                <div className="absolute bottom-1 left-1.5 z-10 hidden sm:block">
                  <span
                    className={cn(
                      "rounded-md px-1.5 py-0.5 text-[8px] font-bold tracking-wider uppercase backdrop-blur-md",
                      isActive
                        ? "bg-white text-black font-extrabold"
                        : "bg-black/70 text-white/90"
                    )}
                  >
                    {photo.tag}
                  </span>
                </div>
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
