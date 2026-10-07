import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { AnimatedMetrics } from "@/components/motion/AnimatedMetrics";

export const metadata: Metadata = {
  title: "Ambur Leather Heritage | Verified Industrial History | Dino Leathers",
  description:
    "Verified history of commercial tanning along the Palar River in Ambur, Tamil Nadu. From 1900s origins to CSIR-CLRI research and modern zero-liquid discharge environmental compliance.",
};

const CHAPTERS = [
  {
    number: "01",
    era: "c. 1900–1905",
    title: "Origins in the Palar River Basin",
    summary:
      "Commercial tanning in the Ambur and Palar river basin dates back to the early 20th century.",
    details: [
      "Commercial tanning in the Palar river basin was recorded c. 1900–1905 (North Arcot District Gazetteer, 1981).",
      "Early operations utilized regional water sources and botanical tanning infusions.",
      "Established Ambur as an important processing center for bovine hides in southern India.",
    ],
    tag: "Commercial Origins",
  },
  {
    number: "02",
    era: "1948 Onward",
    title: "Scientific Anchor: CSIR-CLRI",
    summary:
      "Modernization and technological rigor were anchored by national leather research institutions.",
    details: [
      "Central Leather Research Institute (CSIR-CLRI) was established April 24, 1948 as the world's largest leather research institute.",
      "CSIR-CLRI provided technological support and testing standards to Ambur tanners.",
      "Supported the cluster's shift toward high-precision finished leather in the 1970s–1980s.",
    ],
    tag: "CSIR-CLRI Anchor",
  },
  {
    number: "03",
    era: "2009 & Modern Era",
    title: "Town of Export Excellence & National Production",
    summary:
      "Recognized for its pivotal contribution to national leather production and export revenue.",
    details: [
      "Recognized as a Town of Export Excellence (TEE) for leather by the Government of India (DGFT Foreign Trade Policy, 2009).",
      "Tamil Nadu accounts for 40%–45% of India's leather exports, with Ambur as a primary hub (CLE Annual Report, 2023).",
      "The sector employs approximately 4.4 million workers across India with ~30% female participation (Ministry of Commerce, 2024).",
    ],
    tag: "Export Excellence",
  },
  {
    number: "04",
    era: "Present",
    title: "Zero Liquid Discharge & Sustainable Infrastructure",
    summary:
      "Modern Ambur tanneries operate with stringent environmental standards and effluent management.",
    details: [
      "Ambur tanneries operate Common Effluent Treatment Plants (CETPs) with Zero Liquid Discharge (ZLD) (TNPCB, 2018).",
      "Advanced reverse osmosis and water recovery systems ensure environmental compliance.",
      "Dino Leathers curates finished bovine leather directly from this compliant regional cluster.",
    ],
    tag: "Eco Compliance",
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
            Palar River Basin • Ambur, Tamil Nadu
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-20 border-b border-[#EADDD3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3ECE5] border border-[#EADDD3] text-xs font-semibold uppercase tracking-widest text-[#7A3E1D]">
            <Compass className="w-3.5 h-3.5 text-[#7A3E1D]" />
            <span>The Ambur Heritage • Grounded Fact Registry</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2C1A11] leading-[1.08]">
            A Century of Tanning Heritage{" "}
            <span className="text-[#7A3E1D] italic font-normal block sm:inline">
              along the Palar River.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[#6B5B52] max-w-3xl mx-auto font-sans font-light leading-relaxed">
            From early 1900s commercial tanning origins to modern Zero Liquid Discharge CETP facilities, 
            explore the verified industrial and craftsmanship heritage of Ambur, Tamil Nadu.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#collection"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#7A3E1D] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#633216] transition-all shadow-warm"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#customization"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#EADDD3] text-[#2C1A11] hover:border-[#7A3E1D] hover:text-[#7A3E1D] text-xs font-semibold uppercase tracking-widest transition-all shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>Complimentary Monogramming</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Cluster Metrics Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#EADDD3]">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7A3E1D] font-bold">
            Verified Industry Telemetry
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2C1A11]">
            Documented Production History
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5B52]">
            Data grounded in official Council for Leather Exports and District Gazetteer records.
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
            Verified Milestones in Ambur Leather
          </h2>
          <p className="text-sm text-[#6B5B52]">
            Historical progression from early botanical vats to modern environmental standards.
          </p>
        </div>

        <div className="space-y-10">
          {CHAPTERS.map((chap) => (
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
                        <span>Source Fact {pIdx + 1}</span>
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

      {/* Sourcing Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E140E] text-[#F3ECE5] p-8 sm:p-14 rounded-3xl border border-[#3E2B1E] shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF3EA] leading-tight">
              Bovine Leather Goods from Ambur.
            </h2>

            <p className="text-xs sm:text-sm text-[#D4C3B3] leading-relaxed">
              Dino Leathers curates bovine leather wallets and belts sourced from trusted Ambur workshops. 
              Quality-checked before dispatch, with optional custom initial debossing.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/#collection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#7A3E1D] hover:bg-[#944D25] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-warm"
              >
                <span>View Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <span className="text-xs font-mono text-[#A89484]">
                Ambur, Tamil Nadu
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
