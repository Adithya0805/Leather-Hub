"use client";

import React from "react";
import Image from "next/image";
import { Check, ShieldCheck, Award, MapPin, Feather } from "lucide-react";
import { BRAND_STORY } from "@/data/products";

export function AmburStorySection() {
  return (
    <section id="our-ambur-story" className="py-24 bg-[#FDFBF7] text-[#1A1412] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1412] text-[#C89D66] text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Palar River Basin • Tamil Nadu 635802</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1A1412]">
            Why Ambur Leather Has No Rival.
          </h2>

          <p className="text-sm sm:text-base text-[#5A4B45] leading-relaxed">
            Nestled in the historic hills of Northern Tamil Nadu, Ambur has been the heartbeat of global master tanneries for generations, supplying premier fashion houses across Europe. We bring that export pedigree directly to your pocket.
          </p>
        </div>

        {/* 4 Brand Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {BRAND_STORY.highlights.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-[#E4DCD7] shadow-micro hover:shadow-subtle hover:border-[#C89D66] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F5] border border-[#E4DCD7] flex items-center justify-center text-[#C89D66] group-hover:bg-[#1A1412] group-hover:text-[#C89D66] transition-colors mb-5 font-serif font-bold text-lg">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#1A1412] mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#5A4B45] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Story Narrative & Craft Comparison Grid */}
        <div className="bg-[#1A1412] text-[#FDFBF7] rounded-3xl p-8 sm:p-14 border border-[#3D322E] shadow-leather">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#C89D66] text-xs uppercase tracking-widest font-semibold">
                <Award className="w-4 h-4" />
                <span>The Factory-Direct Ambur Advantage</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-semibold leading-tight">
                No Retail Malls. No Royalties. <br />
                <span className="text-[#C89D66]">Pure Uncut Full-Grain Bovine.</span>
              </h3>

              <p className="text-xs sm:text-sm text-[#C4B6AF] leading-relaxed">
                Most mall brands sell &ldquo;bonded leather&rdquo;&mdash;reconstituted scrap dust glued together that peels within six months. Ambur Craft works exclusively with tight-grain bovine hides drum-dyed with oils and natural waxes. It doesn&rsquo;t deteriorate; it matures into a magnificent, glossy heirloom.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#C89D66]/20 text-[#C89D66] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-[#FDFBF7]">5-Year Patina Guarantee</strong>
                    <span className="text-[#9C8980]">If the leather cracks or splits, we replace it free.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#C89D66]/20 text-[#C89D66] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-[#FDFBF7]">Direct Dispatch From Pin 635802</strong>
                    <span className="text-[#9C8980]">Zero warehousing delays; freshly handcrafted batches.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Visual Card */}
            <div className="lg:col-span-5 bg-[#221B18] rounded-2xl p-6 border border-[#3D322E]">
              <h4 className="font-serif text-lg font-semibold text-[#FDFBF7] mb-4 pb-3 border-b border-[#3D322E] flex justify-between items-center">
                <span>The Authenticity Test</span>
                <span className="text-[11px] font-sans text-[#C89D66] font-normal uppercase tracking-wider">
                  Ambur vs. Commercial
                </span>
              </h4>

              <div className="space-y-4 text-xs">
                <div className="p-3 rounded-xl bg-[#2D2421] border-l-4 border-[#C89D66]">
                  <div className="font-bold text-[#C89D66] mb-0.5">
                    Ambur Craft Full-Grain Bovine
                  </div>
                  <div className="text-[#C4B6AF] leading-relaxed">
                    Retains natural dermal pores. Heals light scratches with thumb friction. Ages gracefully with rich caramel depth.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#1A1412] border-l-4 border-rose-500/60 opacity-80">
                  <div className="font-bold text-rose-400 mb-0.5">
                    Retail Synthetic / PU / Bonded Leather
                  </div>
                  <div className="text-[#9C8980] leading-relaxed">
                    Cardboard or plastic core coated with polyurethane. Chipping, bubbling, and peeling within 180 days.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
