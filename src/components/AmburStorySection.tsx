"use client";

import React from "react";
import Image from "next/image";
import { Check, ShieldCheck, Award, MapPin, Feather } from "lucide-react";

interface StoryPillar {
  title: string;
  desc: string;
}

const AMBUR_PILLARS: StoryPillar[] = [
  {
    title: "Tannery Heritage",
    desc: "Ambur along the Palar river basin has anchored South Indian leather tanning and craftsmanship for over a century.",
  },
  {
    title: "100% Genuine Bovine Hide",
    desc: "We exclusively utilize genuine full-grain bovine leather that develops an organic patina rather than bonded or PU substitutes.",
  },
  {
    title: "Direct Workshop Value",
    desc: "Shipped straight from the workshop floor in Ambur directly to your hands with transparent, honest pricing.",
  },
  {
    title: "Complimentary Monogramming",
    desc: "Individual brass typeface heated and hand-pressed for personalized initials on every order.",
  },
];

export function AmburStorySection() {
  return (
    <section id="our-ambur-story" className="py-24 bg-[#FBF9F5] text-[#2C1A11] relative overflow-hidden border-b border-[#EADDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F3ECE5] text-[#7A3E1D] text-xs font-semibold uppercase tracking-widest border border-[#EADDD3]">
            <MapPin className="w-3.5 h-3.5 text-[#7A3E1D]" />
            <span>Palar River Basin • Tamil Nadu 635802</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#2C1A11]">
            Why Ambur Leather Has No Rival.
          </h2>

          <p className="text-sm sm:text-base text-[#6B5B52] leading-relaxed">
            Nestled in Northern Tamil Nadu along the Palar River, Ambur has been the heartbeat of South Indian leather tanning for generations. We bring that export-grade craftsmanship directly to your hands.
          </p>
        </div>

        {/* 4 Brand Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {AMBUR_PILLARS.map((pillar: StoryPillar, idx: number) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-[#EADDD3] shadow-warm hover:border-[#7A3E1D] transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F3ECE5] border border-[#EADDD3] flex items-center justify-center text-[#7A3E1D] group-hover:bg-[#7A3E1D] group-hover:text-white transition-colors mb-5 font-serif font-bold text-lg">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2C1A11] mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#6B5B52] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Story Narrative & Craft Comparison Grid */}
        <div className="bg-white text-[#2C1A11] rounded-3xl p-8 sm:p-14 border border-[#EADDD3] shadow-warm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#7A3E1D] text-xs uppercase tracking-widest font-bold">
                <Award className="w-4 h-4 text-[#C29B38]" />
                <span>The Factory-Direct Ambur Advantage</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-bold leading-tight text-[#2C1A11]">
                No Retail Malls. No Royalties. <br />
                <span className="text-[#7A3E1D]">Pure Uncut Full-Grain Bovine.</span>
              </h3>

              <p className="text-xs sm:text-sm text-[#6B5B52] leading-relaxed">
                Most mall brands sell &ldquo;bonded leather&rdquo;&mdash;reconstituted scrap dust glued together that peels within six months. Dino Leathers works exclusively with tight-grain bovine hides drum-dyed with oils and natural waxes. It doesn&rsquo;t deteriorate; it matures into a magnificent, glossy heirloom.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#F3ECE5] text-[#7A3E1D] border border-[#EADDD3] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-[#2C1A11]">Full-Grain Integrity</strong>
                    <span className="text-[#6B5B52]">Single-ply solid bovine leather that will not crack or peel.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#F3ECE5] text-[#7A3E1D] border border-[#EADDD3] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-[#2C1A11]">Direct Dispatch From Pin 635802</strong>
                    <span className="text-[#6B5B52]">Direct from Ambur workshops to your doorstep.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Visual Card */}
            <div className="lg:col-span-5 bg-[#FBF9F5] rounded-2xl p-6 border border-[#EADDD3]">
              <h4 className="font-serif text-lg font-bold text-[#2C1A11] mb-4 pb-3 border-b border-[#EADDD3] flex justify-between items-center">
                <span>The Authenticity Test</span>
                <span className="text-[11px] font-sans text-[#7A3E1D] font-bold uppercase tracking-wider">
                  Dino vs. Commercial
                </span>
              </h4>

              <div className="space-y-4 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-[#EADDD3] border-l-4 border-l-[#7A3E1D] shadow-sm flex items-start gap-3">
                  <Image
                    src="/images/logo.png"
                    alt="Dino Leathers Seal"
                    width={40}
                    height={40}
                    className="rounded-full shadow-sm shrink-0 object-cover mt-0.5"
                  />
                  <div>
                    <div className="font-bold text-[#7A3E1D] mb-0.5">
                      Dino Leathers Full-Grain Bovine
                    </div>
                    <div className="text-[#6B5B52] leading-relaxed">
                      Retains natural dermal pores. Heals light scratches with thumb friction. Ages gracefully with rich caramel depth.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F3ECE5] border border-[#EADDD3] border-l-4 border-l-rose-400">
                  <div className="font-bold text-rose-800 mb-0.5">
                    Retail Synthetic / PU / Bonded Leather
                  </div>
                  <div className="text-[#8C7E76] leading-relaxed">
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
