import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  Flame,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { AnimatedMetrics } from "@/components/motion/AnimatedMetrics";

export const metadata: Metadata = {
  title: "The Ambur Legacy: 200 Years of Master Craftsmanship | Dino Leathers",
  description:
    "Explore the 200-year history of botanical tanning along the Palar River in Ambur, Tamil Nadu. From Chola Dynasty bark tanning to MC Road's modern export workshops.",
};

const CHAPTERS = [
  {
    number: "01",
    era: "Ancient Chola Dynasty",
    title: "Indigenous Botanical Tanning in the Palar Basin",
    summary:
      "Long before commercial chemical tanning salts existed, artisans along the Palar River in Tamil Nadu perfected native vegetable drum tannage.",
    details: [
      "Natural infusions of native Avaram senna (Cassia auriculata) bark and crushed Myrobalan nuts (Kadukkai) provided dense plant polyphenols.",
      "The mineral composition and neutral PH of the Palar River waters opened the bovine hide's dense dermal collagen fibers without weakening tensile strength.",
      "Resulted in royal armor, equestrian saddles, and trade vessels that resisted tropical rot, equatorial heat, and cracking.",
    ],
    tag: "Chola Botanical Guilds",
  },
  {
    number: "02",
    era: "19th Century & Colonial Era",
    title: "The Organized Tanning Enclaves of MC Road",
    summary:
      "Global maritime trade routes discovered Ambur's unique water chemistry, leading to the establishment of strict tanning guilds along MC Road.",
    details: [
      "Generational families organized specialized work guilds: raw hide curation, botanical currying, manual skiving, and vegetable fat-liquoring.",
      "Strict apprentice systems ensured master craftsmen passed down tactile discernment for natural grain density and unbuffed pores.",
      "Supplied heavy-duty cavalry tack, military footwear, and expedition bags across international trade corridors.",
    ],
    tag: "MC Road Historic Enclave",
  },
  {
    number: "03",
    era: "Modern Industrial Cluster",
    title: "South India's Undisputed Export Leather Hub",
    summary:
      "Today, Ambur quietly houses 700+ certified manufacturing facilities and over 100,000 generational master tanners and leather artisans.",
    details: [
      "Supplies export-grade raw bovine hides to global fashion capitals including Paris, Milan, London, and Tokyo.",
      "European luxury fashion houses quietly rely on Ambur's high-tensile drum-dyed bovine hides for their flagship runway accessories.",
      "However, traditional distribution layers inflate prices by 400% to 800% through brand licensing and metropolitan showroom overheads.",
    ],
    tag: "Global Export Powerhouse",
  },
  {
    number: "04",
    era: "Dino Leathers Today",
    title: "The Direct Workshop Link to Your Hands",
    summary:
      "Dino Leathers was founded directly on MC Road in Ambur (PIN 635802) to build a direct, transparent bridge between master workshops and patrons.",
    details: [
      "100% full-grain bovine hide exclusively: zero split shavings, zero PU plastic lamination, and zero cardboard sandwiches.",
      "Factory-direct pricing from PIN 635802: luxury export quality without middleman distributor markups or high-street mall rents.",
      "Complimentary hand-stamped 115°C heated brass die monogramming personalized on our workshop bench before dispatch.",
    ],
    tag: "A Bold New Direct Era",
  },
];

export default function AmburHeritagePage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#2C1A11] pt-8 pb-28">
      {/* Top Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between border-b border-[#EADDD3] pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7A3E1D] hover:text-[#633216] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Storefront</span>
          </Link>

          <span className="text-[11px] font-mono uppercase tracking-widest text-[#9A8C84]">
            Palar River Basin • MC Road, Ambur (PIN 635802)
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-20 border-b border-[#EADDD3]">
        {/* Atelier Glow Ambient */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#7A3E1D]/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#C29B38]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3ECE5] border border-[#EADDD3] text-xs font-semibold uppercase tracking-widest text-[#7A3E1D]">
            <Compass className="w-3.5 h-3.5 text-[#7A3E1D]" />
            <span>The Ambur Legacy • South India's Leather Capital</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2C1A11] leading-[1.08]">
            200 Years of Botanical Tanning Mastery{" "}
            <span className="text-[#7A3E1D] italic font-normal block sm:inline">
              along the Palar River.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[#6B5B52] max-w-3xl mx-auto font-sans font-light leading-relaxed">
            Before European luxury fashion houses stamped their logos in Milan and Paris, their hides began 
            their journey in the soil, mineral-rich river waters, and master tanning vats of Ambur.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#collection"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#7A3E1D] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#633216] transition-all shadow-warm"
            >
              <span>Explore Proven Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#customization"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#EADDD3] text-[#2C1A11] hover:border-[#7A3E1D] hover:text-[#7A3E1D] text-xs font-semibold uppercase tracking-widest transition-all shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>Free Brass Monogramming</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Cluster Metrics Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#EADDD3]">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7A3E1D] font-bold">
            The Ambur Manufacturing Cluster
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2C1A11]">
            Generations of Uncompromised Industry
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5B52]">
            Data reflecting Ambur's recognized contribution to the global luxury leather trade.
          </p>
        </div>

        <AnimatedMetrics />
      </section>

      {/* Historical Narrative Chapters */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7A3E1D] font-bold">
            Chronicles of Craft
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1A11]">
            From Ancient River Vats to Global Workshops
          </h2>
          <p className="text-sm text-[#6B5B52]">
            Four pivotal eras that established MC Road as the gold standard in full-grain bovine leather.
          </p>
        </div>

        <div className="space-y-10">
          {CHAPTERS.map((chap, idx) => (
            <div
              key={chap.number}
              className="bg-white rounded-3xl border border-[#EADDD3] p-8 sm:p-12 shadow-warm hover:border-[#7A3E1D] transition-all relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EADDD3] gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-2xl bg-[#F3ECE5] text-[#7A3E1D] flex items-center justify-center font-mono font-bold text-sm">
                    {chap.number}
                  </span>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#7A3E1D] font-bold block">
                      {chap.era}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C1A11]">
                      {chap.title}
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-[#FBF9F5] border border-[#EADDD3] text-[10px] font-mono text-[#6B5B52] uppercase self-start sm:self-auto">
                  {chap.tag}
                </span>
              </div>

              <div className="py-6 space-y-4">
                <p className="text-sm sm:text-base text-[#2C1A11] font-medium leading-relaxed">
                  {chap.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {chap.details.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EADDD3]/80 space-y-2 text-xs text-[#6B5B52] leading-relaxed"
                    >
                      <div className="flex items-center gap-1.5 text-[#7A3E1D] font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7A3E1D] shrink-0" />
                        <span>Pillar {pIdx + 1}</span>
                      </div>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Direct Workshop Link Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E140E] text-[#F3ECE5] p-8 sm:p-14 rounded-3xl border border-[#3E2B1E] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C29B38]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E2017] border border-[#4D382A] text-xs font-mono uppercase tracking-widest text-[#D4A359]">
              <Flame className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Radical Workshop Transparency</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF3EA] leading-tight">
              Bypassing Mall Facades. Connecting You to the Source.
            </h2>

            <p className="text-xs sm:text-sm text-[#D4C3B3] leading-relaxed">
              When you purchase from Dino Leathers, your wallet or belt isn&rsquo;t passing through importers, 
              distributors, and retail landlords. It is hand-selected from our local Ambur tanneries, 
              carefully stitched with high-tensile nylon, hand-stamped with your initials using 115°C brass dies, 
              and dispatched directly from MC Road (PIN 635802).
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/#collection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#7A3E1D] hover:bg-[#944D25] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-warm"
              >
                <span>Shop Ambur Full-Grain</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <span className="text-xs font-mono text-[#A89484]">
                Direct Dispatch: MC Road, Ambur (PIN 635802)
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
