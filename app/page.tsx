"use client"

import { useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotPattern from "@/components/dot-pattern"
import PerspectiveTunnelHero from "@/components/ui/perspective-tunnel-hero"
import { TiltedGridHero } from "@/components/ui/tilted-grid-hero"
import PreviousEventsModal, { PREVIOUS_EVENTS_IMAGES } from "@/components/previous-events-modal"
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer"

import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"
import { sweetPixPackages, sweetPixContact } from "@/data/packages"

export default function Page() {
  const [isPreviousEventsOpen, setIsPreviousEventsOpen] = useState(false)

  const projectImages = [
    "/images/project-1.webp",
    "/images/project-2.webp",
    "/images/project-3.webp",
    "/images/project-4.webp",
    "/images/project-5.webp",
    "/images/project-6.webp",
  ]

  const projects = sweetPixPackages.map((item, index) => ({
    title: item.title,
    subtitle: item.subtitle,
    imageSrc: projectImages[index] || "/placeholder.svg",
    tags: item.previewTags,
    details: item.cardHighlights,
    href: `#package-${index + 1}`,
    priority: index === 0,
    gradientFrom: "#1c1c1c",
    gradientTo: "#2e2e2e",
    pkg: item,
  }))

  const whatsappInquiryUrl = `https://wa.me/${sweetPixContact.whatsappNumber}?text=${encodeURIComponent(
    "Hi SweetPix! 👋 I'm interested in booking a photography package. Could you please share more details and availability?"
  )}`

  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      {/* 1. 3D PERSPECTIVE TUNNEL SPLASH SCREEN (FIRST PART OF PAGE) */}
      <PerspectiveTunnelHero onEnter={() => {
        const el = document.getElementById("previous-events-section") || document.getElementById("portfolio-showcase")
        el?.scrollIntoView({ behavior: "smooth" })
      }} />

      {/* 2. PREVIOUS EVENTS CYLINDER STREAM SECTION */}
      <section id="previous-events-section" className="px-4 py-8 max-w-[1400px] mx-auto">
        <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-black shadow-2xl">
          <DotPattern
            className="opacity-40"
            spacing={16}
            dotSize={1.3}
            dotColor="rgba(255, 255, 255, 0.22)"
          />

          <TiltedGridHero
            images={PREVIOUS_EVENTS_IMAGES}
            speed={4.5}
            tileHeight={32}
            aspectRatio={16 / 9}
            gap={6}
            curve={75}
            className="h-[520px] sm:h-[600px] w-full"
          >
            <div className="relative z-10 flex h-full flex-col items-center justify-between py-10 sm:py-14 text-center pointer-events-none select-none">
              <div className="px-6 space-y-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5" />
                  Previous Events Archive
                </span>
                <h2 className="text-balance text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-2xl">
                  Every frame,
                  <br />
                  brought into focus.
                </h2>
              </div>

              <div className="px-6 space-y-3 pointer-events-auto">
                <p className="max-w-md mx-auto text-balance text-xs sm:text-sm text-white/70 leading-relaxed drop-shadow-md">
                  A streaming 3D cylindrical gallery of our past celebrations, corporate galas, convocation ceremonies, and milestone birthdays.
                </p>
                <Button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("portfolio-showcase")
                    el?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="rounded-full bg-white text-black hover:bg-neutral-200 font-bold px-6 py-2.5 shadow-xl text-xs sm:text-sm transition-all"
                >
                  <span>Explore Pricing & Packages</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TiltedGridHero>
        </div>
      </section>

      {/* 3. MAIN PORTFOLIO & PRICING SHOWCASE */}
      <section id="portfolio-showcase" className="px-4 pt-6 pb-16 lg:pb-6">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[440px_1fr]">
          {/* LEFT: sticky and full height, modern monochrome black & white aesthetic */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-xl"
              staggerChildren
            >
              {/* Dot Matrix Grid texture matching user screenshot */}
              <DotPattern
                className="opacity-70"
                spacing={16}
                dotSize={1.3}
                dotColor="rgba(255, 255, 255, 0.22)"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/75 via-neutral-950/40 to-neutral-950/80" />

              {/* TOP SECTION */}
              <div className="relative">
                {/* Wordmark & Upper Right "Previous Events" Button */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold tracking-tight text-white">SweetPix</span>
                    <span className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                  </div>

                  {/* Renamed from "Price List" to "Previous Events" button */}
                  <button
                    type="button"
                    onClick={() => setIsPreviousEventsOpen(true)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white hover:text-black shadow-sm cursor-pointer active:scale-95 group"
                    aria-label="Open Previous Events gallery"
                  >
                    <Sparkles className="h-3 w-3 transition-transform group-hover:rotate-12" />
                    <span>Previous Events</span>
                  </button>
                </div>

                {/* Headline with intro blur effect */}
                <AnimatedHeading
                  className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl text-white"
                  lines={["Capturing Your", "Sweetest Moments"]}
                />

                <p className="mt-4 max-w-[42ch] text-base sm:text-lg text-white/70 leading-relaxed">
                  Premium photography, luxury hardcover albums, handcrafted frames, and archival lab prints tailored for your milestones.
                </p>

                {/* Modern Black & White CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-white text-black hover:bg-neutral-200 font-semibold px-6 shadow-sm transition-all"
                  >
                    <a href={whatsappInquiryUrl} target="_blank" rel="noreferrer">
                      Book on WhatsApp
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* BOTTOM SECTION: Bold watermark typography & clean footer */}
              <div className="relative mt-10">
                <p className="mb-3 text-xs font-semibold tracking-widest text-white/50 uppercase">
                  SERVICES & COLLECTIONS
                </p>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-2xl font-black text-white/25 sm:grid-cols-3">
                  <li className="hover:text-white/60 transition-colors">Birthday</li>
                  <li className="hover:text-white/60 transition-colors">Events</li>
                  <li className="hover:text-white/60 transition-colors">Graduation</li>
                  <li className="hover:text-white/60 transition-colors">Frames</li>
                  <li className="hover:text-white/60 transition-colors">Prints</li>
                  <li className="hover:text-white/60 transition-colors">Albums</li>
                </ul>

                {/* Clean minimalist contact metadata strip */}
                <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-y-2 text-xs text-white/50">
                  <span>Colombo, Sri Lanka</span>
                  <a
                    href={`tel:${sweetPixContact.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {sweetPixContact.displayPhone}
                  </a>
                  <a
                    href={sweetPixContact.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {sweetPixContact.instagram}
                  </a>
                </div>
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: Portfolio and Pricing Cards */}
          <div className="space-y-4">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                details={p.details}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-[calc(100svh-2rem)]"
                revealDelay={idx * 0.05}
                pkg={p.pkg}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Halftone Wordmark Footer with "sweetpix" spring canvas */}
      <HalftoneWordmarkFooter
        wordmark="sweetpix"
        label="SweetPix Photography"
        meta="©2026 · Colombo & Island-wide Coverage"
        height="540px"
      />

      {/* Previous Events Modal triggered by the upper right button */}
      <PreviousEventsModal
        isOpen={isPreviousEventsOpen}
        onClose={() => setIsPreviousEventsOpen(false)}
      />
    </main>
  )
}
