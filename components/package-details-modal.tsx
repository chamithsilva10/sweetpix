"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import {
  X,
  Check,
  CheckCheck,
  Sparkles,
  GraduationCap,
  Gift,
  Frame,
  Printer,
  BookOpen,
  Clock,
  ImageIcon,
  MessageCircle,
  ShieldCheck,
  PlusCircle,
  ArrowUpRight,
  Layers,
  ChevronLeft,
  ChevronRight,
  Camera,
  Users,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { SweetPixPackage, PackageTier, GalleryPhoto } from "@/data/packages"
import { sweetPixContact } from "@/data/packages"
import DotPattern from "@/components/dot-pattern"
import DominoGallery from "@/components/ui/domino-gallery"

type Props = {
  pkg: SweetPixPackage
  isOpen: boolean
  onClose: () => void
}

export default function PackageDetailsModal({ pkg, isOpen, onClose }: Props) {
  const [activeSubTab, setActiveSubTab] = useState<string>(
    pkg.subTabs?.[0]?.id || ""
  )
  const [sizeFilter, setSizeFilter] = useState<string>("all")

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Reset active subtab whenever package changes
  useEffect(() => {
    if (pkg.subTabs && pkg.subTabs.length > 0) {
      setActiveSubTab(pkg.subTabs[0].id)
    } else {
      setActiveSubTab("")
    }
    setSizeFilter("all")
  }, [pkg])

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  if (!isOpen) return null

  const createWhatsAppLink = (customNote?: string) => {
    const message = customNote
      ? `Hi SweetPix! 👋 I'm interested in booking the *${pkg.title}* package [${customNote}]. Could you please share more details, date availability, and reservation info?`
      : `Hi SweetPix! 👋 I'm interested in your *${pkg.title}* package. Could you please share more details and availability?`
    return `https://wa.me/${sweetPixContact.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`
  }

  // Determine active tiers (support sub-tabs like Graduation Individual vs Friendship vs Group)
  const currentSubTabObj = pkg.subTabs?.find((tab) => tab.id === activeSubTab)
  const activeTiers = currentSubTabObj?.tiers || pkg.tiers

  // Filter items (for Frames / Prints)
  const filteredItems = pkg.items?.filter((item) => {
    if (sizeFilter === "all") return true
    return item.category === sizeFilter
  })

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`dialog-title-${pkg.id}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {/* MODAL CONTAINER: Dot Grid Pattern Background */}
      <div className="relative flex flex-col w-full max-w-5xl max-h-[92svh] rounded-[32px] border border-white/15 bg-black text-white shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden">
        {/* Dot Matrix Grid texture matching user screenshot */}
        <DotPattern
          className="opacity-70"
          spacing={16}
          dotSize={1.3}
          dotColor="rgba(255, 255, 255, 0.22)"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />

        {/* MODAL HEADER DIVISION SECTION */}
        <div className="relative z-10 flex items-start justify-between border-b border-white/10 px-6 py-5 sm:px-8 sm:py-6 bg-black/80 backdrop-blur-md">
          <div className="space-y-1.5 pr-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                <Sparkles className="h-3 w-3 text-white/80" />
                SweetPix Official
              </span>
              <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/60">
                Starting from {pkg.startingPrice}
              </span>
            </div>

            <h2
              id={`dialog-title-${pkg.id}`}
              className="text-2xl sm:text-3xl font-black tracking-tight text-white"
            >
              {pkg.title}
            </h2>

            <p className="text-xs sm:text-sm text-white/65 max-w-2xl leading-relaxed">
              {pkg.subtitle}
            </p>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="shrink-0 size-9 sm:size-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            <X className="size-4 sm:size-5" />
          </button>
        </div>

        {/* SCROLLABLE CONTENT BODY */}
        <div className="relative z-10 flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-7 space-y-7 custom-scrollbar">
          {/* DOMINO 3D SCROLL PHOTO GALLERY */}
          {pkg.gallery && pkg.gallery.length > 0 && (
            <div className="space-y-3 pb-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      <Sparkles className="h-3 w-3 text-white" />
                      Visual Showcase
                    </span>
                    <span className="text-xs text-white/50">Scroll down to topple domino cards</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-white mt-1">
                    Featured Photography
                  </h3>
                </div>
                <p className="text-xs text-white/50 max-w-xs text-left sm:text-right leading-relaxed">
                  Cards stand like dominoes and fall flat as you scroll; scroll back up and they rise.
                </p>
              </div>

              <DominoGallery
                items={pkg.gallery.map((photo) => ({
                  src: photo.src,
                  alt: photo.caption,
                  title: photo.caption,
                  tag: photo.tag,
                }))}
                standAngle={64}
                cardWidth={240}
                cardHeight={360}
                gap={16}
                scrollLength={650}
              />
            </div>
          )}

          {/* SPECIAL PERK / HIGHLIGHT BANNER */}
          {pkg.highlightBanner && (
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-neutral-950/80 backdrop-blur-md p-4 sm:p-5 flex items-start sm:items-center gap-3.5 shadow-sm">
              <div className="rounded-xl border border-white/15 bg-white/10 p-2.5 shrink-0 text-white">
                {pkg.category === "graduation" ? (
                  <GraduationCap className="h-5 w-5" />
                ) : pkg.category === "birthday" ? (
                  <Gift className="h-5 w-5" />
                ) : pkg.category === "frames" ? (
                  <Frame className="h-5 w-5" />
                ) : pkg.category === "prints" ? (
                  <Printer className="h-5 w-5" />
                ) : pkg.category === "albums" ? (
                  <BookOpen className="h-5 w-5" />
                ) : (
                  <Sparkles className="h-5 w-5" />
                )}
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs sm:text-sm font-bold tracking-wide uppercase text-white">
                  {pkg.highlightBanner.text}
                </h4>
                {pkg.highlightBanner.subtext && (
                  <p className="text-xs text-white/70 leading-relaxed">
                    {pkg.highlightBanner.subtext}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* SUB-TABS: Segmented Switcher with Spring Layout Indicator */}
          {pkg.subTabs && (
            <div className="space-y-3">
              <div className="inline-flex p-1.5 rounded-full border border-white/15 bg-neutral-900/90 backdrop-blur-md gap-1.5 shadow-inner">
                {pkg.subTabs.map((subTab) => {
                  const isActive = activeSubTab === subTab.id
                  return (
                    <button
                      key={subTab.id}
                      type="button"
                      onClick={() => setActiveSubTab(subTab.id)}
                      className={cn(
                        "relative rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold transition-colors duration-200 flex items-center gap-2 select-none cursor-pointer",
                        isActive
                          ? "text-black font-extrabold"
                          : "text-white/65 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="modalSubTabActivePill"
                          className="absolute inset-0 rounded-full border border-white/40 shadow-lg shadow-white/15 bg-gradient-to-t from-neutral-200 via-white to-white"
                          transition={{ type: "spring", stiffness: 480, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{subTab.label}</span>
                      {subTab.badge && (
                        <span
                          className={cn(
                            "relative z-10 rounded-full px-2 py-0.5 text-[10px] uppercase font-bold",
                            isActive
                              ? "bg-black/15 text-black"
                              : "bg-white/10 text-white/60"
                          )}
                        >
                          {subTab.badge}
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
              {currentSubTabObj?.description && (
                <p className="text-xs text-white/60 pl-2">
                  {currentSubTabObj.description}
                </p>
              )}
            </div>
          )}

          {/* MODERN PRICING TIERS SECTION WITH GRADIENT AURA & STAGGER ANIMATIONS */}
          {activeTiers && activeTiers.length > 0 && (
            <div className="relative rounded-[32px] p-6 sm:p-8 overflow-hidden border border-white/15 bg-neutral-950/90 shadow-2xl">
              {/* LUMINOUS MONOCHROME RADIAL GRADIENT WASH */}
              <div
                className="pointer-events-none absolute top-0 left-[5%] right-[5%] w-[90%] h-full z-0"
                style={{
                  backgroundImage: `radial-gradient(ellipse at 50% 15%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.03) 50%, transparent 75%)`,
                  opacity: 0.9,
                }}
              />
              <div className="pointer-events-none absolute inset-0 dot-grid-pattern-subtle opacity-35 z-0" />

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      <Sparkles className="h-3 w-3 text-white" />
                      Official Price List
                    </span>
                    <span className="text-xs text-white/40">Prices in LKR (Rs.)</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
                    <Layers className="h-5 w-5 text-white/80" />
                    Select Package Tier
                  </h3>
                </div>

                <div className="text-xs text-white/60 bg-white/5 border border-white/10 rounded-full px-3.5 py-1.5 self-start sm:self-auto flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Instant WhatsApp Booking</span>
                </div>
              </div>

              {/* ANIMATED CARDS GRID WITH STAGGER REVEAL */}
              <motion.div
                key={activeSubTab || pkg.id}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.05,
                    },
                  },
                }}
                className={cn(
                  "relative z-10 grid gap-5 sm:gap-6",
                  activeTiers.length === 2 && "grid-cols-1 md:grid-cols-2",
                  activeTiers.length === 3 && "grid-cols-1 md:grid-cols-3",
                  activeTiers.length >= 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                )}
              >
                {activeTiers.map((tier, idx) => (
                  <ModernAnimatedTierCard
                    key={tier.name}
                    tier={tier}
                    index={idx}
                    categoryTitle={pkg.title}
                    onBook={(tierSummary) =>
                      window.open(createWhatsAppLink(tierSummary), "_blank")
                    }
                  />
                ))}
              </motion.div>
            </div>
          )}

          {/* SIZE MATRIX & CATALOG (For Frames & Prints) */}
          {pkg.items && pkg.items.length > 0 && (
            <div className="relative rounded-[32px] p-6 sm:p-8 overflow-hidden border border-white/15 bg-neutral-950/90 shadow-2xl space-y-6">
              {/* LUMINOUS RADIAL GRADIENT AURA */}
              <div
                className="pointer-events-none absolute top-0 left-[5%] right-[5%] w-[90%] h-full z-0"
                style={{
                  backgroundImage: `radial-gradient(ellipse at 50% 15%, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.02) 50%, transparent 75%)`,
                  opacity: 0.85,
                }}
              />
              <div className="pointer-events-none absolute inset-0 dot-grid-pattern-subtle opacity-35 z-0" />

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      <Frame className="h-3 w-3 text-white" />
                      Size &amp; Pricing Catalog
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
                    Dimensions &amp; Price Catalog
                  </h3>
                </div>

                {/* Segmented Filter Pills with animated spring active indicator */}
                <div className="flex flex-wrap gap-1 p-1 rounded-full border border-white/15 bg-neutral-900/90 backdrop-blur-md">
                  {[
                    { id: "all", label: "All Sizes" },
                    { id: "desktop", label: "Tabletop / Desk" },
                    { id: "wall", label: "Standard Wall" },
                    { id: "gallery", label: "Statement Gallery" },
                  ].map((filter) => {
                    const isActive = sizeFilter === filter.id
                    return (
                      <button
                        key={filter.id}
                        type="button"
                        onClick={() => setSizeFilter(filter.id)}
                        className={cn(
                          "relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors duration-200 cursor-pointer select-none",
                          isActive
                            ? "text-black font-extrabold"
                            : "text-white/60 hover:text-white"
                        )}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="catalogFilterActivePill"
                            className="absolute inset-0 rounded-full border border-white/40 shadow-md shadow-white/10 bg-gradient-to-t from-neutral-200 via-white to-white"
                            transition={{ type: "spring", stiffness: 480, damping: 32 }}
                          />
                        )}
                        <span className="relative z-10">{filter.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Animated items grid */}
              <motion.div
                key={sizeFilter}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05 },
                  },
                }}
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {filteredItems?.map((item) => (
                  <motion.div
                    key={item.size}
                    variants={{
                      hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
                      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className={cn(
                      "group relative flex flex-col justify-between rounded-[24px] border p-5 sm:p-6 transition-all duration-300 overflow-hidden",
                      item.popular
                        ? "border-2 border-white/60 bg-gradient-to-b from-white/[0.12] via-neutral-900/95 to-neutral-950 shadow-xl shadow-white/5 ring-2 ring-white/15 scale-[1.01]"
                        : "border-white/15 bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-xl hover:border-white/30 hover:bg-white/[0.07]"
                    )}
                  >
                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-base sm:text-lg font-black text-white group-hover:text-white/80 transition-colors">
                          {item.size}
                        </span>
                        {item.badge && (
                          <span
                            className={cn(
                              "rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider",
                              item.popular
                                ? "bg-white text-black font-black"
                                : "bg-white/10 text-white/80 border border-white/15"
                            )}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <div className="mt-3 flex items-baseline gap-1.5">
                        <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                          {item.price}
                        </span>
                        <span className="text-[11px] text-white/50 font-mono">per unit</span>
                      </div>

                      {item.description && (
                        <p className="mt-2.5 text-xs text-white/60 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          createWhatsAppLink(`Size: ${item.size} (${item.price})`),
                          "_blank"
                        )
                      }
                      className={cn(
                        "relative z-10 mt-5 flex items-center justify-center gap-1.5 rounded-xl py-2.5 px-4 text-xs font-bold transition-all duration-300 cursor-pointer shadow-md",
                        item.popular
                          ? "bg-gradient-to-t from-neutral-200 via-white to-white text-black hover:bg-neutral-100 border border-white hover:scale-[1.02]"
                          : "border border-white/20 bg-gradient-to-t from-neutral-900 to-neutral-800 text-white hover:border-white/40 hover:bg-neutral-800 hover:scale-[1.02]"
                      )}
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Order {item.size}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 ml-0.5 opacity-70" />
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* MATERIAL / FINISHING SPECS */}
          {pkg.materialSpecs && (
            <div className="rounded-[24px] border border-white/15 bg-neutral-950/70 backdrop-blur-md p-5 sm:p-6 shadow-md">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/80 mb-3 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-white/70" />
                Handcrafted Finishing &amp; Materials
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {pkg.materialSpecs.map((spec) => (
                  <div
                    key={spec.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-white/20"
                  >
                    <p className="text-xs font-bold text-white">{spec.title}</p>
                    <p className="mt-1 text-[11px] text-white/60 leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ADD-ONS SECTION */}
          {pkg.addons && pkg.addons.length > 0 && (
            <div className="rounded-[24px] border border-white/15 bg-neutral-950/70 backdrop-blur-md p-5 sm:p-6 shadow-md">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/80 mb-3 flex items-center gap-2">
                <PlusCircle className="h-4 w-4 text-white/70" />
                Popular Add-ons
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {pkg.addons.map((addon) => (
                  <div
                    key={addon.name}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-white/25 hover:bg-white/[0.06]"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-bold text-white">{addon.name}</span>
                        <span className="text-xs font-black text-white shrink-0">
                          {addon.price}
                        </span>
                      </div>
                      {addon.note && (
                        <p className="mt-1.5 text-[11px] text-white/50 leading-normal">
                          {addon.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SWEETPIX STANDARDS STRIP */}
          {pkg.guarantees && (
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-3 border-t border-white/[0.1] text-xs text-white/60">
              <span className="font-bold text-white/90">SweetPix Standards:</span>
              {pkg.guarantees.map((guarantee) => (
                <div key={guarantee} className="flex items-center gap-2">
                  <span className="size-4 rounded-full bg-white/10 border border-white/20 grid place-content-center shrink-0">
                    <CheckCheck className="h-2.5 w-2.5 text-white" />
                  </span>
                  <span>{guarantee}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* MODAL BOTTOM BAR: Clean Black & White */}
        <div className="relative z-10 border-t border-white/10 bg-black/85 backdrop-blur-md px-6 py-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="text-xs font-medium text-white/85">
              Ready to reserve your date or have special requests?
            </p>
            <p className="text-[11px] text-white/45">
              Direct consultation via WhatsApp or phone
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <Button
              asChild
              className="w-full sm:w-auto rounded-full bg-white text-black hover:bg-neutral-200 font-bold text-xs sm:text-sm px-6 py-2.5 shadow-sm transition-all"
            >
              <a
                href={createWhatsAppLink(`General inquiry regarding ${pkg.title}`)}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="mr-1.5 h-4 w-4" />
                Book via WhatsApp
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="rounded-full border-white/20 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white text-xs px-4 cursor-pointer"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ModernAnimatedTierCard({
  tier,
  index,
  categoryTitle,
  onBook,
}: {
  tier: PackageTier
  index: number
  categoryTitle: string
  onBook: (tierSummary: string) => void
}) {
  const isPopular = tier.isPopular

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 28,
          filter: "blur(6px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className={cn(
        "relative flex flex-col justify-between rounded-[28px] p-6 sm:p-7 transition-all duration-300 overflow-hidden group",
        isPopular
          ? "border-2 border-white/70 bg-gradient-to-b from-white/[0.14] via-neutral-900/95 to-neutral-950 shadow-[0_20px_55px_rgba(255,255,255,0.09)] ring-4 ring-white/10 scale-[1.02] z-10"
          : "border border-white/15 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl hover:border-white/35 hover:bg-white/[0.08] shadow-lg shadow-black/40"
      )}
    >
      {/* Subdued inner radial aura on hover or when popular */}
      {isPopular ? (
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full bg-white/15 blur-3xl" />
      ) : (
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      {/* Subtle dot pattern inside card */}
      <div className="pointer-events-none absolute inset-0 dot-grid-pattern-subtle opacity-30" />

      {/* Popular Pill Badge in Pure Crisp White */}
      {tier.badge && (
        <div className="absolute top-4 right-4 z-20">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-md",
              isPopular
                ? "bg-white text-black ring-2 ring-white/30"
                : "bg-white/15 text-white border border-white/20 backdrop-blur-md"
            )}
          >
            <Sparkles className={cn("size-3", isPopular ? "text-black fill-black" : "text-white")} />
            {tier.badge}
          </span>
        </div>
      )}

      <div className="relative z-10">
        {/* Tier Title */}
        <div className="pr-16">
          <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {tier.name}
          </h4>
        </div>

        {/* Price Display */}
        <div className="mt-3.5 flex items-baseline gap-1.5 flex-wrap">
          <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {tier.price}
          </span>
          {tier.unit && (
            <span className="text-xs sm:text-sm font-mono text-white/50 lowercase">
              / {tier.unit}
            </span>
          )}
        </div>

        {/* Specs Pills (Duration / Photos) */}
        {(tier.duration || tier.photos) && (
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {tier.duration && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/90">
                <Clock className="h-3 w-3 text-white/70" />
                {tier.duration}
              </span>
            )}
            {tier.photos && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/90">
                <ImageIcon className="h-3 w-3 text-white/70" />
                {tier.photos}
              </span>
            )}
          </div>
        )}

        {/* Description */}
        {tier.description && (
          <p className="mt-3 text-xs sm:text-sm text-white/60 leading-relaxed min-h-[38px]">
            {tier.description}
          </p>
        )}

        {/* Modern Divider */}
        <div className="my-4 h-px w-full bg-white/10" />

        {/* Inclusions Header */}
        <div className="text-[11px] font-bold uppercase tracking-wider text-white/70 mb-3 flex items-center gap-1.5">
          <Sparkles className="size-3 text-white/60" />
          <span>{isPopular ? "Everything in Standard, plus:" : "Package includes:"}</span>
        </div>

        {/* Feature List with CheckCheck badges */}
        <ul className="space-y-2.5">
          {tier.features.map((feature, fIdx) => (
            <li
              key={fIdx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85 leading-snug"
            >
              <span
                className={cn(
                  "h-5 w-5 rounded-full border grid place-content-center shrink-0 mt-0.5",
                  isPopular
                    ? "bg-white/20 border-white/40 text-white"
                    : "bg-white/10 border-white/20 text-white/90"
                )}
              >
                <CheckCheck className="h-3 w-3" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Booking Action Button with Luminous Top Gradient */}
      <div className="relative z-10 mt-6 pt-2">
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() =>
            onBook(
              `${tier.name} (${tier.price}${tier.unit ? ` / ${tier.unit}` : ""})`
            )
          }
          className={cn(
            "w-full rounded-2xl py-3.5 px-5 text-xs sm:text-sm font-black transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer",
            isPopular
              ? "bg-gradient-to-t from-neutral-200 via-white to-white text-black shadow-white/15 hover:shadow-white/25 border border-white"
              : "bg-gradient-to-t from-neutral-900 to-neutral-800 text-white border border-white/20 hover:border-white/45 shadow-black/50"
          )}
        >
          <MessageCircle className="h-4 w-4 shrink-0" />
          <span>Book {tier.name}</span>
          <ArrowUpRight className="h-4 w-4 shrink-0 opacity-70" />
        </motion.button>
      </div>
    </motion.div>
  )
}
