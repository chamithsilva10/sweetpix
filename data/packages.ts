export type PackageTier = {
  name: string
  price: string
  unit?: string
  badge?: string
  isPopular?: boolean
  duration?: string
  photos?: string
  description?: string
  features: string[]
}

export type SizeItem = {
  size: string
  price: string
  popular?: boolean
  description?: string
  category?: "desktop" | "wall" | "gallery"
  badge?: string
}

export type GalleryPhoto = {
  src: string
  caption: string
  tag?: string
}

export type SweetPixPackage = {
  id: string
  title: string
  subtitle: string
  category: "event" | "graduation" | "birthday" | "frames" | "prints" | "albums"
  startingPrice: string
  previewTags: string[]
  cardHighlights: string[]
  overview: string
  gallery?: GalleryPhoto[]
  highlightBanner?: {
    icon?: string
    text: string
    subtext?: string
  }
  tiers?: PackageTier[]
  subTabs?: {
    id: string
    label: string
    description?: string
    badge?: string
    tiers: PackageTier[]
  }[]
  items?: SizeItem[]
  materialSpecs?: {
    title: string
    description: string
  }[]
  addons?: {
    name: string
    price: string
    note?: string
  }[]
  guarantees?: string[]
}

export const sweetPixContact = {
  phone: "+94771234567",
  whatsappNumber: "94771234567",
  displayPhone: "+94 77 123 4567",
  instagram: "@sweetpix.official",
  instagramUrl: "https://instagram.com/sweetpix.official",
  location: "Colombo & Island-wide Coverage, Sri Lanka",
  email: "bookings@sweetpix.lk",
}

export const sweetPixPackages: SweetPixPackage[] = [
  {
    id: "event-photography",
    title: "Event Photography",
    subtitle: "Capture every special moment with signature SweetPix aesthetics",
    category: "event",
    startingPrice: "Rs. 8,000",
    previewTags: ["Mini Rs. 8,000", "Classic Rs. 10,000 (Most Popular)", "Premium Rs. 16,000"],
    cardHighlights: [
      "Mini: Rs. 8,000 (1 Hour, 200 Photos)",
      "Classic: Rs. 10,000 (3 Hours, 450 Photos + RAW) ★ MOST POPULAR",
      "Premium: Rs. 16,000 (4–6 Hours Full Day, Unlimited Photos)",
      "Add-on: 2nd Photographer Rs. 8,000 · Custom Prints from Rs. 150",
    ],
    overview:
      "From milestone corporate gatherings and anniversaries to parties and gala dinners, our signature event photography delivers vibrant, timeless photos with prompt delivery.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85",
        caption: "Grand Ballroom & Gala Celebration Lighting",
        tag: "4K CINEMATIC",
      },
      {
        src: "/images/project-1.webp",
        caption: "Signature SweetPix Event Masterpiece",
        tag: "PORTFOLIO",
      },
      {
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
        caption: "Vibrant Celebration Atmosphere & Guest Highlights",
        tag: "RAW GRADED",
      },
      {
        src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
        caption: "Banquet Toast & Candid Celebration Moments",
        tag: "CANDID",
      },
    ],
    highlightBanner: {
      icon: "Sparkles",
      text: "CLASSIC PACKAGE (Rs. 10,000) IS OUR MOST POPULAR CHOICE",
      subtext: "Includes 3 Hours Coverage, 450 High-Res Photos + ALL Original RAW files.",
    },
    tiers: [
      {
        name: "MINI",
        price: "Rs. 8,000",
        duration: "1 Hour Coverage",
        photos: "200 Photos",
        description: "Ideal for brief ceremonies, speeches, ribbon cutting or intimate gatherings.",
        features: [
          "1 Hour continuous professional coverage",
          "200 High-resolution color corrected photos",
          "Private secure online digital gallery",
          "Full digital download rights in high-res",
          "Delivery within 4 business days",
        ],
      },
      {
        name: "CLASSIC",
        price: "Rs. 10,000",
        badge: "MOST POPULAR",
        isPopular: true,
        duration: "3 Hours Coverage",
        photos: "450 Photos + RAW",
        description: "The gold standard for standard celebrations, private events, and birthday parties.",
        features: [
          "3 Hours comprehensive event coverage",
          "450 High-resolution retouched photos",
          "ALL original unedited RAW files included FREE",
          "Signature SweetPix fine-art color grading",
          "Private online gallery with instant client sharing",
          "Priority delivery within 72 hours",
        ],
      },
      {
        name: "PREMIUM",
        price: "Rs. 16,000",
        duration: "4–6 Hours Full Day",
        photos: "Unlimited Photos",
        description: "Complete full-day celebration coverage. Never miss a single guest or memorable moment.",
        features: [
          "4 to 6 Hours full day dedicated coverage",
          "Unlimited photos captured & retouched",
          "ALL original unedited RAW files included",
          "Full color grading & exposure correction",
          "High-speed master gallery & USB ready",
          "Expedited 48-hour sneak peek preview",
          "Full commercial & personal printing rights",
        ],
      },
    ],
    addons: [
      {
        name: "2nd Professional Photographer",
        price: "Rs. 8,000",
        note: "Ensures multi-angle candid and guest reactions for larger events",
      },
      {
        name: "Instant Event Photo Prints",
        price: "From Rs. 150 / print",
        note: "Available in Matte & Glossy finishes with custom event watermark",
      },
      {
        name: "Laser Engraved Keepsake USB Box",
        price: "Rs. 2,500",
        note: "Custom luxury wooden presentation box with laser engraving",
      },
    ],
    guarantees: [
      "Zero hidden fees — transparent pricing",
      "Signature SweetPix fine-art editing style",
      "High-speed digital delivery guarantee",
    ],
  },
  {
    id: "graduation-shoots",
    title: "Graduation Packages",
    subtitle: "Celebrate your hard-earned academic milestone in style",
    category: "graduation",
    startingPrice: "Rs. 2,000 / person",
    previewTags: ["Individual Rs. 8,000", "Friendship Rs. 3,000/p", "Group Rs. 2,000/p (Best Value)"],
    cardHighlights: [
      "Individual: Rs. 8,000 — 1 Hour, Outdoor, 40 Edited Photos, Digital Gallery",
      "Friendship (3–8 Persons): Rs. 3,000 / person — 15 min each, 30 Enhanced / person",
      "Group (8–20 Persons): Rs. 2,000 / person ★ BEST VALUE",
      "FREE Graduation cap & scroll props included with all shoots",
    ],
    overview:
      "Commemorate your degree or diploma with cinematic outdoor graduation portraits. Whether you're graduating individually, with your closest best friends, or with your entire university batch.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=85",
        caption: "Joyful Graduation Cap Toss Celebration",
        tag: "4K CINEMATIC",
      },
      {
        src: "/images/project-2.webp",
        caption: "Official Academic Convocation Portrait",
        tag: "PORTFOLIO",
      },
      {
        src: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=1200&q=85",
        caption: "Graduate Gown & Scroll Diploma Portrait",
        tag: "PORTRAIT",
      },
      {
        src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85",
        caption: "Friendship Squad & Campus Group Portrait",
        tag: "COHORT",
      },
    ],
    highlightBanner: {
      icon: "GraduationCap",
      text: "FREE GRADUATION CAP & SCROLL PROPS INCLUDED",
      subtext: "We provide high-quality graduation caps and ribbon scrolls with every graduation package!",
    },
    tiers: [
      {
        name: "Individual",
        price: "Rs. 8,000",
        duration: "1 Hour Outdoor Session",
        photos: "40 Edited Photos",
        description: "Dedicated one-on-one portrait session tailored to honor your individual achievement.",
        features: [
          "1 Hour outdoor session at your campus or scenic location",
          "40 Professionally retouched high-res portraits",
          "FREE graduation cap & ribbon scroll props provided",
          "Multiple poses: formal cap & gown, candid joy, & family shots",
          "Private online gallery with lifetime digital downloads",
          "Fast delivery within 3–4 days",
        ],
      },
      {
        name: "Friendship (3–8 Pax)",
        price: "Rs. 3,000",
        unit: "per person",
        duration: "15 min each + Group",
        photos: "30 Enhanced / person",
        description: "Perfect for celebrating your degree alongside your college squad and study partners.",
        features: [
          "15 Minutes dedicated individual session per graduate",
          "30 Professionally enhanced portraits per person",
          "Multiple group friendship portraits included",
          "FREE graduation caps & scrolls for all members",
          "Gown styling & creative posing guidance",
          "Separate private digital download folders for each graduate",
        ],
      },
      {
        name: "Group (8–20 Pax)",
        price: "Rs. 2,000",
        unit: "per person",
        badge: "BEST VALUE",
        isPopular: true,
        duration: "Full Cohort Session",
        photos: "30 Enhanced / person + Group",
        description: "Our top recommended package for university batches, clubs, and large friend groups.",
        features: [
          "Best value rate — only Rs. 2,000 per person",
          "30 Enhanced portraits for each individual member",
          "Epic wide-angle & drone-style cohort group portraits",
          "Cap-toss celebration shots & candid memories",
          "FREE graduation caps & scroll props for the whole team",
          "Central high-speed Google Drive link + Web gallery",
        ],
      },
    ],
    addons: [
      {
        name: "A4 Hardcover Graduation Photobook",
        price: "Rs. 15,000",
        note: "20 Layflat pages with custom foil name embossing",
      },
      {
        name: "Framed A4 Convocation Portrait",
        price: "Rs. 3,000",
        note: "UV glass protected luxury frame ready to hang",
      },
    ],
    guarantees: [
      "Props provided free of charge",
      "Posing direction for camera-shy graduates",
      "Family & parents can join for free portraits",
    ],
  },
  {
    id: "birthday-photography",
    title: "Birthday Photography",
    subtitle: "Indoor luxury studio setups or vibrant outdoor celebrations",
    category: "birthday",
    startingPrice: "Rs. 10,000",
    previewTags: ["Studio from Rs. 12,000", "Outdoor from Rs. 10,000", "Classic Best Sellers"],
    cardHighlights: [
      "Indoor Studio: Basic Rs. 12k · Classic Rs. 18k (BEST SELLER) · Premium Rs. 25k",
      "Outdoor Birthday: Basic Rs. 10k · Classic Rs. 15k (BEST SELLER) · Premium Rs. 22k",
      "Luxury cards with clean borders & studio lighting",
      "Vertical posters ready for WhatsApp Status & Instagram",
    ],
    overview:
      "Whether you prefer a temperature-controlled indoor studio with luxury backdrops and softbox lighting, or a sunny outdoor birthday party, we have customized tiers for both!",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1600&q=85",
        caption: "Studio Celebration with Warm Golden Sparklers",
        tag: "4K CINEMATIC",
      },
      {
        src: "/images/project-3.webp",
        caption: "Signature Milestone Birthday Session",
        tag: "PORTFOLIO",
      },
      {
        src: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=1200&q=85",
        caption: "Aesthetic Cake Cutting & Custom Studio Setup",
        tag: "STUDIO",
      },
      {
        src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85",
        caption: "Vibrant Outdoor Garden Birthday & Balloons",
        tag: "OUTDOOR",
      },
    ],
    highlightBanner: {
      icon: "Gift",
      text: "CLASSIC TIERS ARE VERIFIED BEST SELLERS",
      subtext: "Includes all original RAW files, extra backdrop/outfit changes, and custom lighting.",
    },
    subTabs: [
      {
        id: "indoor",
        label: "Indoor Studio Shoots",
        description: "Luxury studio environment with softbox lighting, creative backdrops, and props.",
        badge: "Air-Conditioned Studio",
        tiers: [
          {
            name: "BASIC",
            price: "Rs. 12,000",
            duration: "1 Hour Studio Session",
            photos: "25 Edited Photos",
            description: "Clean, elegant studio portrait session for intimate birthday commemorations.",
            features: [
              "1 Studio backdrop setup with warm softbox lighting",
              "1 Outfit change allowed",
              "25 High-resolution master edited photos",
              "Access to number balloons & birthday accessories",
              "Private digital gallery delivery",
            ],
          },
          {
            name: "CLASSIC",
            price: "Rs. 18,000",
            badge: "BEST SELLER",
            isPopular: true,
            duration: "2 Hours Studio Session",
            photos: "45 Edited Photos + RAW",
            description: "Our top seller. Multiple setups, creative lighting, and all RAW files included.",
            features: [
              "2 Creative studio backdrops",
              "2 Outfit changes allowed",
              "45 Retouched photos + ALL original RAW files included",
              "Cake smash or themed celebration styling setup",
              "Family portraits included at no extra charge",
              "Priority 3-day turnaround",
            ],
          },
          {
            name: "PREMIUM",
            price: "Rs. 25,000",
            duration: "3 Hours VIP Studio",
            photos: "70 Retouched + RAW",
            description: "The ultimate luxury VIP studio birthday experience with premium keepsakes.",
            features: [
              "VIP luxury studio setup with custom backdrops & props",
              "Up to 3 outfit changes + Full family portraits",
              "70 Master retouched photos + ALL original RAW files",
              "Complimentary 8x12 luxury framed print included",
              "Cinematic 30-sec Instagram reel/video teaser",
              "Expedited 48-hour delivery",
            ],
          },
        ],
      },
      {
        id: "outdoor",
        label: "Outdoor Birthday Shoots",
        description: "Golden-hour natural lighting, scenic garden/park backdrops, and active party coverage.",
        badge: "Scenic Outdoor",
        tiers: [
          {
            name: "BASIC",
            price: "Rs. 10,000",
            duration: "1 Hour Outdoor Session",
            photos: "30 Edited Photos",
            description: "Perfect for intimate outdoor cake cutting or scenic family birthday portraits.",
            features: [
              "1 Hour scenic outdoor location session",
              "30 High-resolution color graded photos",
              "Natural golden-hour portrait lighting",
              "Private digital download gallery",
              "Delivery within 4 business days",
            ],
          },
          {
            name: "CLASSIC",
            price: "Rs. 15,000",
            badge: "BEST SELLER",
            isPopular: true,
            duration: "2 Hours Outdoor Coverage",
            photos: "60 Edited Photos + RAW",
            description: "The favorite choice for outdoor birthday celebrations, garden parties & dinners.",
            features: [
              "2 Hours continuous outdoor event / location coverage",
              "60 Retouched photos + ALL original unedited RAW files",
              "Family & guest group portraits included",
              "Creative dusk/party lighting setup",
              "Fast 3-day gallery turnaround",
            ],
          },
          {
            name: "PREMIUM",
            price: "Rs. 22,000",
            duration: "Full Party Coverage (3–4 Hours)",
            photos: "Unlimited Photos + RAW",
            description: "Comprehensive end-to-end coverage for large birthday parties and milestone bashes.",
            features: [
              "Complete birthday party coverage (decor, arrivals, cake cutting, party)",
              "100+ Master retouched photos + Unlimited captures",
              "ALL unedited RAW files provided",
              "Candid guest moments and highlights",
              "24-Hour expedited sneak peek photos for social media",
            ],
          },
        ],
      },
    ],
    addons: [
      {
        name: "Cake Smash Setup Clean-up & Props",
        price: "Rs. 3,500",
        note: "Includes balloons, themed backdrop, and clean-up assistance",
      },
      {
        name: "Extra Hour of Coverage",
        price: "Rs. 4,000 / hour",
        note: "Available for both studio and outdoor shoots",
      },
    ],
    guarantees: [
      "Kid-friendly patience and warm atmosphere",
      "Free outfit change assistance",
      "High resolution files suitable for large prints",
    ],
  },
  {
    id: "photo-frames",
    title: "Photo Frames & Enlargements",
    subtitle: "Museum-grade luxury frames with crystal glass & archival protection",
    category: "frames",
    startingPrice: "Rs. 850",
    previewTags: ["9 Standard Sizes", "4x6 to 20x30", "From Rs. 850 to Rs. 10,000"],
    cardHighlights: [
      "4x6: Rs. 850 · 6x8: Rs. 1,500 · 8x10: Rs. 2,800 · A4: Rs. 3,000",
      "10x12: Rs. 3,500 · 10x15: Rs. 3,500 · 12x18: Rs. 5,000",
      "16x24: Rs. 8,000 · 20x30: Rs. 10,000",
      "Luxury finishes: Solid Black, Crisp White, & Natural Wood",
    ],
    overview:
      "Transform your sweetest memories into timeless wall and desk art. Every SweetPix frame is handcrafted with precision moulding, UV-protective glass or lamination, and heavy-duty hanging hardware.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=85",
        caption: "Curated Gallery Wall in Modern Living Space",
        tag: "4K CINEMATIC",
      },
      {
        src: "/images/project-4.webp",
        caption: "Custom Handcrafted Museum-Grade Frame",
        tag: "PORTFOLIO",
      },
      {
        src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85",
        caption: "Fine Art Framed Portrait Detail & Moulding",
        tag: "CRAFT",
      },
      {
        src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=85",
        caption: "Large Scale 20x30 Statement Gallery Piece",
        tag: "STATEMENT",
      },
    ],
    highlightBanner: {
      icon: "Frame",
      text: "PREMIUM HANDCRAFTED FRAMES IN SOLID BLACK & NATURAL FINISHES",
      subtext: "Available in Tabletop Stands and Wall Mounts. A4 (Rs. 3,000) and 12x18 (Rs. 5,000) are top sellers!",
    },
    items: [
      {
        size: "4 x 6",
        price: "Rs. 850",
        category: "desktop",
        description: "Compact desktop frame with fold-out kickstand. Great for gifts & desks.",
      },
      {
        size: "6 x 8",
        price: "Rs. 1,500",
        category: "desktop",
        description: "Classic bedside or office desk frame. Clean border profile.",
      },
      {
        size: "8 x 10",
        price: "Rs. 2,800",
        category: "desktop",
        description: "Traditional portrait size. Dual desktop stand and wall mount.",
      },
      {
        size: "A4 (8.3 x 11.7)",
        price: "Rs. 3,000",
        popular: true,
        category: "wall",
        badge: "POPULAR",
        description: "The #1 choice for graduation certificates, convocation portraits & awards.",
      },
      {
        size: "10 x 12",
        price: "Rs. 3,500",
        category: "wall",
        description: "Medium wall frame. Balanced proportions for bedroom & hallway walls.",
      },
      {
        size: "10 x 15",
        price: "Rs. 3,500",
        category: "wall",
        description: "Wide aspect portrait frame. Excellent for couple & individual portraits.",
      },
      {
        size: "12 x 18",
        price: "Rs. 5,000",
        popular: true,
        category: "wall",
        badge: "BEST SELLER",
        description: "Large living room centerpiece frame. Perfect for family portraits & weddings.",
      },
      {
        size: "16 x 24",
        price: "Rs. 8,000",
        category: "gallery",
        badge: "STATEMENT",
        description: "Exhibition gallery frame. High visual impact for living rooms and offices.",
      },
      {
        size: "20 x 30",
        price: "Rs. 10,000",
        category: "gallery",
        badge: "MASTERPIECE",
        description: "Grand master size. Premium reinforced backing & museum clarity glass.",
      },
    ],
    materialSpecs: [
      {
        title: "Frame Moulding",
        description: "High-density moisture-resistant synthetic wood moulding that resists warping & humidity.",
      },
      {
        title: "Protective Surface",
        description: "Ultra-clear 2mm optical crystal glass or anti-glare scratch-resistant matte lamination.",
      },
      {
        title: "Hardware Included",
        description: "Pre-installed stainless steel dual hanging brackets (landscape & portrait) plus kickstand.",
      },
      {
        title: "Safe Courier Packaging",
        description: "Double corner guards, bubble cushioning, and custom corrugated outer box for zero transit damage.",
      },
    ],
    guarantees: [
      "100% replacement warranty if damaged during transit",
      "Archival photo print included inside every frame",
      "Ready to hang right out of the box",
    ],
  },
  {
    id: "photo-prints",
    title: "Photo Prints",
    subtitle: "Lab-grade archival photographic prints in Smooth Matte or Ultra Glossy",
    category: "prints",
    startingPrice: "Rs. 150",
    previewTags: ["Matte & Glossy", "From Rs. 150 to Rs. 4,500", "Archival Fujifilm Paper"],
    cardHighlights: [
      "4x6: Rs. 150 · 6x8: Rs. 250 · 8x12: Rs. 450 · A4: Rs. 450",
      "10x15: Rs. 800 · 12x15: Rs. 1,100 · 12x18: Rs. 1,500",
      "16x24: Rs. 2,800 · 20x30: Rs. 4,500",
      "Choice of Smooth Matte or High Glossy finishes at identical pricing",
    ],
    overview:
      "Don't leave your favorite memories trapped on phone screens. Our professional photographic lab utilizes genuine silver-halide photographic paper that brings rich, accurate colors and skin tones to life.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=1600&q=85",
        caption: "Archival Photographic Lab Prints Spread",
        tag: "4K CINEMATIC",
      },
      {
        src: "/images/project-5.webp",
        caption: "Fujifilm Crystal Archive Master Print",
        tag: "PORTFOLIO",
      },
      {
        src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1200&q=85",
        caption: "Rich Color Fidelity & Smooth Matte Texture",
        tag: "LAB GRADE",
      },
      {
        src: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=1200&q=85",
        caption: "Ultra Glossy Chemical Lab Processing",
        tag: "GLOSSY",
      },
    ],
    highlightBanner: {
      icon: "Printer",
      text: "PREMIUM ARCHIVAL PRINTS — MATTE OR GLOSSY FINISH",
      subtext: "Same price for Matte or Glossy. 50+ year fade-resistant photographic paper.",
    },
    items: [
      {
        size: "4 x 6",
        price: "Rs. 150",
        category: "desktop",
        description: "Standard postcard print. Perfect for photo albums & memory boxes.",
      },
      {
        size: "6 x 8",
        price: "Rs. 250",
        category: "desktop",
        description: "Desk print size. Generous dimensions with sharp detail.",
      },
      {
        size: "8 x 12",
        price: "Rs. 450",
        category: "wall",
        description: "Pro 2:3 aspect ratio print. Fits standard camera frames.",
      },
      {
        size: "A4 (8.3 x 11.7)",
        price: "Rs. 450",
        popular: true,
        category: "wall",
        badge: "POPULAR",
        description: "Standard portfolio and graduation photo sheet size.",
      },
      {
        size: "10 x 15",
        price: "Rs. 800",
        category: "wall",
        description: "Medium wall enlargement. Rich tone transitions.",
      },
      {
        size: "12 x 15",
        price: "Rs. 1,100",
        category: "wall",
        description: "Balanced display format for albums or mounts.",
      },
      {
        size: "12 x 18",
        price: "Rs. 1,500",
        popular: true,
        category: "wall",
        badge: "POPULAR",
        description: "Large portrait format. Full resolution output with zero compression.",
      },
      {
        size: "16 x 24",
        price: "Rs. 2,800",
        category: "gallery",
        description: "Poster enlargement print. Brilliant sharpness for room decoration.",
      },
      {
        size: "20 x 30",
        price: "Rs. 4,500",
        category: "gallery",
        badge: "MAX SIZE",
        description: "Full exhibition size. Ultra-wide chemical lab precision.",
      },
    ],
    materialSpecs: [
      {
        title: "Smooth Matte Finish",
        description: "Non-reflective surface that suppresses glare and fingerprints. Ideal for framed display under glass.",
      },
      {
        title: "Ultra Glossy Finish",
        description: "Maximum color saturation, deepest blacks, and glossy shine that makes colors pop.",
      },
      {
        title: "Fujifilm Crystal Archive Paper",
        description: "True photographic paper that prevents yellowing and fading for over 50 years under normal indoor light.",
      },
    ],
    guarantees: [
      "Custom color correction on every file prior to printing",
      "Bulk order discounts available for 50+ prints",
      "Island-wide courier delivery with waterproof packaging",
    ],
  },
  {
    id: "albums-printing",
    title: "Albums Printing",
    subtitle: "Heirloom A4 hardcover albums with 180° seamless layflat binding",
    category: "albums",
    startingPrice: "Rs. 15,000",
    previewTags: ["A4 Hardcover", "20 to 50 Pages", "From Rs. 15k to 24k"],
    cardHighlights: [
      "A4 Hardcover 20 Pages — Rs. 15,000 (Compact)",
      "A4 Hardcover 30 Pages — Rs. 18,000 (Standard — MOST LOVED)",
      "A4 Hardcover 40 Pages — Rs. 21,000 (Extended)",
      "A4 Hardcover 50 Pages — Rs. 24,000 (Extended Grand)",
    ],
    overview:
      "A true family heirloom. Our signature A4 hardcover photobooks are custom designed with thick rigid photographic sheets that open completely flat at 180 degrees, allowing seamless panoramic spreads across both pages without losing anything in the spine.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=85",
        caption: "180° Seamless Layflat Panoramic Spread",
        tag: "4K CINEMATIC",
      },
      {
        src: "/images/project-6.webp",
        caption: "A4 Hardcover Luxury Milestone Photobook",
        tag: "PORTFOLIO",
      },
      {
        src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=85",
        caption: "400gsm Heavyweight Archival Rigid Pages",
        tag: "LAYFLAT",
      },
      {
        src: "https://images.unsplash.com/photo-1532012164546-f432f2e3777a?auto=format&fit=crop&w=1200&q=85",
        caption: "Custom Luxury Keepsake Presentation Box",
        tag: "HEIRLOOM",
      },
    ],
    highlightBanner: {
      icon: "BookOpen",
      text: "30 PAGES STANDARD (Rs. 18,000) IS OUR MOST LOVED ALBUM",
      subtext: "Seamless 180° Layflat pages, personalized foil cover, and free presentation box!",
    },
    tiers: [
      {
        name: "20 Pages (Compact)",
        price: "Rs. 15,000",
        badge: "COMPACT",
        duration: "Holds ~50–70 Photos",
        description: "Ideal for graduation shoots, milestone birthday sessions, and intimate celebrations.",
        features: [
          "A4 (8.3 x 11.7 inches) landscape or portrait hardcover",
          "20 Rigid panoramic layflat sheets (400gsm photographic core)",
          "Personalized photo wrap cover with custom embossed title",
          "Waterproof & fingerprint-resistant luster coating",
          "Complete layout designing and digital preview before printing",
          "Turnaround time: 5–7 business days",
        ],
      },
      {
        name: "30 Pages (Standard)",
        price: "Rs. 18,000",
        badge: "MOST LOVED",
        isPopular: true,
        duration: "Holds ~90–120 Photos",
        description: "Our top seller. Perfect balance for full event celebrations, graduations, and wedding functions.",
        features: [
          "30 Rigid panoramic layflat sheets (zero gutter seam cut)",
          "Signature SweetPix foil embossed hardcover",
          "Holds 90–120 professionally curated photographs",
          "Custom graphic design story sequence with caption styling",
          "Includes complimentary luxury presentation storage box",
          "VIP expedited printing & proofing",
        ],
      },
      {
        name: "40 Pages (Extended)",
        price: "Rs. 21,000",
        badge: "EXTENDED",
        duration: "Holds ~130–160 Photos",
        description: "Designed for grand parties, multi-session celebrations, and extended family milestones.",
        features: [
          "40 Heavyweight rigid layflat pages for extensive story coverage",
          "Holds up to 160 high-resolution photos",
          "Full panoramic spreads for big group and hall photos",
          "Choice of luxury leatherette spine or custom metallic photo wrap",
          "Free luxury keepsake gift box included",
          "Multiple revision rounds until you are 100% happy with design",
        ],
      },
      {
        name: "50 Pages (Grand Celebration)",
        price: "Rs. 24,000",
        badge: "GRAND MASTER",
        duration: "Holds ~180–220+ Photos",
        description: "The ultimate collector's heirloom. Unmatched elegance that will last for generations.",
        features: [
          "50 Heavyweight archival pages (Ultimate photo collection)",
          "Chronological story design from prep to after-party highlights",
          "Gold foil stamped cover and spine details",
          "Archival silver-halide photo paper that will never yellow",
          "Delivered in a premium presentation gift box",
          "Includes free digital flipbook version for easy mobile sharing",
        ],
      },
    ],
    materialSpecs: [
      {
        title: "180° Layflat Binding",
        description: "Opens completely flat so wide panoramic pictures flow seamlessly across left and right pages with no gutter cut.",
      },
      {
        title: "400gsm Heavyweight Paper",
        description: "Thick, board-like rigid pages that do not crease, curl, or tear over time.",
      },
      {
        title: "Luxury Box Packaging",
        description: "Each album arrives in a custom-fitted SweetPix protective box, making it ready as a luxury gift.",
      },
    ],
    guarantees: [
      "100% satisfaction digital proof before sending to print",
      "Free island-wide insured courier delivery",
      "Handcrafted binding built to last 50+ years",
    ],
  },
]
