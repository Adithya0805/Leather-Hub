import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass, ShieldCheck, Award, MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Legacy of Ambur: 200 Years of Master Craftsmanship | Dino Leathers",
  description:
    "Explore the 200-year history of Ambur, South India's leather capital along the Palar River. From Chola botanical tanning to modern luxury export workshops.",
};

export default function HeritagePage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#2C1A11] pt-10 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb / Back Link */}
        <div className="flex items-center justify-between border-b border-[#EADDD3] pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7A3E1D] hover:text-[#633216] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Storefront</span>
          </Link>

          <span className="text-xs font-mono uppercase tracking-widest text-[#9A8C84]">
            Palar River Basin • PIN 635802
          </span>
        </div>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE5] border border-[#EADDD3] text-xs font-semibold uppercase tracking-widest text-[#7A3E1D]">
            <Compass className="w-3.5 h-3.5 text-[#7A3E1D]" />
            <span>A Two-Century Saga Along the Palar River</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C1A11] leading-tight">
            The Legacy of Ambur: 200 Years of Master Craftsmanship
          </h1>

          <p className="text-base sm:text-lg text-[#6B5B52] leading-relaxed font-light">
            Before European luxury fashion houses stamped their logos in Milan and Paris, their hides 
            began their journey in the soil, waters, and tanning vats of Ambur.
          </p>
        </div>

        {/* Narrative Chapters */}
        <div className="space-y-8 text-sm sm:text-base text-[#6B5B52] leading-relaxed">
          
          <div className="bg-white p-8 rounded-3xl border border-[#EADDD3] shadow-warm space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#2C1A11]">
              1. The Ancient Roots: Chola Dynasty Botanical Tanning
            </h2>
            <p>
              Tucked along the northern Palar River basin in Tamil Nadu, the town of Ambur has lived and breathed leathercraft across generations. What began centuries ago during the Chola era as artisanal botanical tanning—using native <strong className="text-[#2C1A11]">Avaram senna bark</strong>, crushed <strong className="text-[#2C1A11]">Myrobalan nuts (Kadukkai)</strong>, and natural river currents—evolved into an unparalleled tanning discipline.
            </p>
            <p>
              The indigenous vegetable tanning formulas developed here penetrated deep into the bovine hide, locking collagen fibers into a flexible, tear-resistant matrix capable of surviving harsh equatorial heat without drying or cracking.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#EADDD3] shadow-warm space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#2C1A11]">
              2. 19th Century &amp; Colonial Trade Expansions
            </h2>
            <p>
              During 19th-century colonial trade and global military campaigns, international merchants sought hides capable of enduring rigorous saddle and boot standards. Ambur emerged as South India&rsquo;s primary export cluster due to its unique water chemistry and disciplined generational guilds.
            </p>
            <p>
              Generations of Ambur master curriers and pattern cutters passed down closely guarded trade secrets: the art of manual skiving, natural beeswax burnishing, and drum-dyeing full-grain hides with botanical oils rather than surface plastic films.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#EADDD3] shadow-warm space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#2C1A11]">
              3. Modern Ambur: South India&rsquo;s Leather Capital
            </h2>
            <p>
              Today, Ambur houses over 700 certified manufacturing units and more than 100,000 skilled generational craftsmen. It produces the raw materials demanded by the world&rsquo;s most prestigious luxury labels. Yet, when these goods reach commercial mall boutiques, exorbitant retail markups and celebrity licensing hide the true craftsmen behind the leather.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#EADDD3] text-center">
              <div>
                <span className="font-serif text-3xl font-bold text-[#7A3E1D] block">700+</span>
                <span className="text-[11px] uppercase font-mono text-[#6B5B52]">Tanning Units</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-[#7A3E1D] block">100K+</span>
                <span className="text-[11px] uppercase font-mono text-[#6B5B52]">Artisans</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-bold text-[#7A3E1D] block">200+</span>
                <span className="text-[11px] uppercase font-mono text-[#6B5B52]">Years History</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1E140E] text-[#F3ECE5] p-8 sm:p-12 rounded-3xl border border-[#3E2B1E] shadow-2xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4A359] block">
              The Dino Leathers Mission
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF3EA]">
              The Direct Workshop Link to Your Pocket
            </h2>
            <p className="text-sm text-[#D4C3B3] leading-relaxed">
              Dino Leathers was founded on MC Road in Ambur to eliminate retail facades. We invite you directly onto the workshop floor. Every wallet and belt is hand-selected from our local Ambur tanneries, hand-skived, assembled with beeswax burnishing, and shipped from PIN 635802 directly to your hands with complimentary heated brass die monogramming.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/#collection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#7A3E1D] hover:bg-[#944D25] text-white text-xs font-bold uppercase tracking-widest transition-all"
              >
                <span>Shop Full-Grain Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <span className="text-xs text-[#A89484] font-mono">
                Workshop Bench: MC Road, Ambur (PIN 635802)
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
