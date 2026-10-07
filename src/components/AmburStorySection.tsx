"use client";

import React from "react";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

export function AmburStorySection() {
  return (
    <section id="our-ambur-story" className="py-20 bg-[#FBF9F5] text-[#2C1A11] relative overflow-hidden border-b border-[#EADDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Streamlined Heritage Banner Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#EADDD3] shadow-warm relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A3E1D]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE5] text-[#7A3E1D] text-xs font-semibold uppercase tracking-widest border border-[#EADDD3]">
                <Compass className="w-3.5 h-3.5 text-[#7A3E1D]" />
                <span>Palar River Basin • Ambur, Tamil Nadu</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#2C1A11]">
                Ambur Craftsmanship. <br />
                <span className="text-[#7A3E1D]">A Century of Regional Tanning.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#6B5B52] leading-relaxed">
                Dino Leathers curates bovine leather items from Ambur—recognized as a Town of Export 
                Excellence (TEE) for leather by the Government of India, with commercial tanning dating back to c. 1900–1905.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EADDD3] space-y-1">
                  <span className="font-serif text-2xl font-bold text-[#7A3E1D] block">c. 1900</span>
                  <span className="text-xs font-bold text-[#2C1A11] block">Palar Basin</span>
                  <span className="text-[11px] text-[#6B5B52]">Commercial tanning origins</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EADDD3] space-y-1">
                  <span className="font-serif text-2xl font-bold text-[#7A3E1D] block">40%–45%</span>
                  <span className="text-xs font-bold text-[#2C1A11] block">Tamil Nadu Share</span>
                  <span className="text-[11px] text-[#6B5B52]">National leather exports (CLE)</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EADDD3] space-y-1">
                  <span className="font-serif text-2xl font-bold text-[#7A3E1D] block">TEE</span>
                  <span className="text-xs font-bold text-[#2C1A11] block">DGFT Status</span>
                  <span className="text-[11px] text-[#6B5B52]">Town of Export Excellence</span>
                </div>
              </div>
            </div>

            {/* Right Action Callout */}
            <div className="lg:col-span-5 bg-[#1E140E] text-[#F3ECE5] p-8 rounded-2xl border border-[#3E2B1E] shadow-xl space-y-6">
              <div className="border-b border-[#3E2B1E] pb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4A359] font-bold block mb-1">
                  The Ambur Heritage
                </span>
                <div className="font-serif text-2xl font-bold text-[#FAF3EA]">
                  Verified Craftsmanship
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#D4C3B3] leading-relaxed">
                Explore the verified history of tanning in the Palar river basin, CLRI research backing, and modern zero-liquid discharge environmental compliance.
              </p>

              <div className="space-y-3 pt-2">
                <Link
                  href="/ambur-heritage"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#7A3E1D] hover:bg-[#944D25] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-warm text-center"
                >
                  <span>Explore The Ambur Legacy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#collection"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white/10 hover:bg-white/15 text-[#FAF3EA] text-xs font-semibold uppercase tracking-wider transition-colors text-center border border-white/10"
                >
                  <span>View Catalog</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
