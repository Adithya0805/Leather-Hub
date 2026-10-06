"use client";

import React from "react";
import Link from "next/link";
import { Compass, Award, ArrowRight, ShieldCheck, Flame } from "lucide-react";
import { motion } from "framer-motion";

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
                <span>Palar River Basin • MC Road, Ambur (PIN 635802)</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#2C1A11]">
                New Brand. <br />
                <span className="text-[#7A3E1D]">Centuries of Uncompromised Mastery.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#6B5B52] leading-relaxed">
                While Dino Leathers is fresh to the retail market, our collections come directly from Ambur—South India&rsquo;s 
                leather capital with over two centuries of tanning expertise along the Palar River basin. Every piece 
                is cut from the exact same export-grade bovine hides crafted for international luxury markets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EADDD3] space-y-1">
                  <span className="font-serif text-2xl font-bold text-[#7A3E1D] block">200+ Yrs</span>
                  <span className="text-xs font-bold text-[#2C1A11] block">Palar Tannage</span>
                  <span className="text-[11px] text-[#6B5B52]">Native bark &amp; nut extracts</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EADDD3] space-y-1">
                  <span className="font-serif text-2xl font-bold text-[#7A3E1D] block">700+ Units</span>
                  <span className="text-xs font-bold text-[#2C1A11] block">Export Cluster</span>
                  <span className="text-[11px] text-[#6B5B52]">Supplying global fashion capitals</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EADDD3] space-y-1">
                  <span className="font-serif text-2xl font-bold text-[#7A3E1D] block">0% Fillers</span>
                  <span className="text-xs font-bold text-[#2C1A11] block">Zero Cardboard</span>
                  <span className="text-[11px] text-[#6B5B52]">Solid single-ply bovine hide</span>
                </div>
              </div>
            </div>

            {/* Right Action Callout */}
            <div className="lg:col-span-5 bg-[#1E140E] text-[#F3ECE5] p-8 rounded-2xl border border-[#3E2B1E] shadow-xl space-y-6">
              <div className="border-b border-[#3E2B1E] pb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4A359] font-bold block mb-1">
                  The Ambur Heritage Chronicle
                </span>
                <div className="font-serif text-2xl font-bold text-[#FAF3EA]">
                  Discover the 200-Year Legacy
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#D4C3B3] leading-relaxed">
                Dive deep into our ancient Chola Dynasty roots, 19th-century MC Road guilds, and how our direct workshop model bypasses retail mall markups.
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
                  <span>Shop Proven Collections</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
