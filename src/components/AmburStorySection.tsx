"use client";

import React from "react";
import { Check, ShieldCheck, Award, MapPin, Feather, Compass, Layers, Flame } from "lucide-react";

interface StoryMilestone {
  era: string;
  title: string;
  desc: string;
}

const HISTORICAL_TIMELINE: StoryMilestone[] = [
  {
    era: "Chola Dynasty",
    title: "Indigenous Botanical Tanning",
    desc: "Artisans along the Palar River perfected natural vegetable tanning using native Avaram senna bark and crushed Myrobalan nuts, yielding tear-resistant hides for royal saddles and armor.",
  },
  {
    era: "19th Century",
    title: "The Organized Tanning Enclave",
    desc: "Global maritime trade routes discovered Ambur's unique water chemistry. Strict tanning guilds formed along MC Road, supplying export-grade hides to international military and royal outfits.",
  },
  {
    era: "Modern Era",
    title: "South India's Leather Capital",
    desc: "With 700+ certified manufacturing facilities and over 100,000 generational master tanners, Ambur quietly crafts the raw luxury hides featured in Paris, London, and Milan boutique windows.",
  },
  {
    era: "Today: Dino Leathers",
    title: "The Direct Workshop Link",
    desc: "Born on MC Road (PIN 635802) to bypass luxury licensing markups. We bring Ambur's authentic full-grain bovine leather directly to your hands at workshop-floor pricing.",
  },
];

export function AmburStorySection() {
  return (
    <section id="our-ambur-story" className="py-24 bg-[#FBF9F5] text-[#2C1A11] relative overflow-hidden border-b border-[#EADDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE5] text-[#7A3E1D] text-xs font-semibold uppercase tracking-widest border border-[#EADDD3]">
            <Compass className="w-3.5 h-3.5 text-[#7A3E1D]" />
            <span>Palar River Basin • MC Road, Ambur (PIN 635802)</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#2C1A11]">
            The Legacy of Ambur: 200 Years of Master Craftsmanship
          </h2>

          <p className="text-sm sm:text-base text-[#6B5B52] leading-relaxed">
            Before European luxury fashion houses stamped their logos in Milan and Paris, their hides began 
            their journey in the soil, mineral-rich river waters, and master tanning vats of Ambur.
          </p>
        </div>

        {/* 4 Historical Timeline Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {HISTORICAL_TIMELINE.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-[#EADDD3] shadow-warm hover:border-[#7A3E1D] hover:shadow-elevated transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#7A3E1D] font-bold">
                    {item.era}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-[#F3ECE5] text-[#7A3E1D] flex items-center justify-center font-mono text-xs font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#2C1A11] mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#6B5B52] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EADDD3]/60 mt-4 text-[10px] font-mono text-[#9A8C84] uppercase">
                MC Road Craft Archive
              </div>
            </div>
          ))}
        </div>

        {/* The Direct Workshop Link Showcase */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#EADDD3] shadow-warm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#7A3E1D] text-xs uppercase tracking-widest font-bold">
                <Award className="w-4 h-4 text-[#C29B38]" />
                <span>The Factory-Direct Ambur Advantage</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-bold leading-tight text-[#2C1A11]">
                No Retail Malls. No Middleman Fees. <br />
                <span className="text-[#7A3E1D]">Pure Uncut Full-Grain Bovine.</span>
              </h3>

              <p className="text-xs sm:text-sm text-[#6B5B52] leading-relaxed">
                Most mall brands sell &ldquo;bonded leather&rdquo;&mdash;reconstituted scrap dust glued together that peels within six months. Dino Leathers works exclusively with tight-grain bovine hides drum-dyed with oils and natural waxes. It doesn&rsquo;t deteriorate; it matures into a magnificent, glossy heirloom.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
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
                    <strong className="block text-[#2C1A11]">Zero Cardboard Fillers</strong>
                    <span className="text-[#6B5B52]">No paperboard cores. 100% genuine hide from edge to edge.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#F3ECE5] text-[#7A3E1D] border border-[#EADDD3] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-[#2C1A11]">Free Heated Monogram</strong>
                    <span className="text-[#6B5B52]">Custom initials pressed with 115°C heated vintage brass dies.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#F3ECE5] text-[#7A3E1D] border border-[#EADDD3] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-[#2C1A11]">PIN 635802 Dispatch</strong>
                    <span className="text-[#6B5B52]">Shipped straight from our MC Road workshop floor.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Workshop Metrics Box */}
            <div className="lg:col-span-5 bg-[#FBF9F5] p-8 rounded-2xl border border-[#EADDD3] space-y-6">
              <div className="border-b border-[#EADDD3] pb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#7A3E1D] font-bold block mb-1">
                  Ambur Industrial Cluster
                </span>
                <div className="font-serif text-2xl font-bold text-[#2C1A11]">
                  South India&rsquo;s Leather Capital
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-white rounded-xl border border-[#EADDD3]">
                  <div className="font-serif text-2xl font-bold text-[#7A3E1D]">700+</div>
                  <div className="text-[10px] uppercase font-mono text-[#6B5B52] mt-0.5">Units</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#EADDD3]">
                  <div className="font-serif text-2xl font-bold text-[#7A3E1D]">100K+</div>
                  <div className="text-[10px] uppercase font-mono text-[#6B5B52] mt-0.5">Artisans</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#EADDD3]">
                  <div className="font-serif text-2xl font-bold text-[#7A3E1D]">200+</div>
                  <div className="text-[10px] uppercase font-mono text-[#6B5B52] mt-0.5">Years</div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#EADDD3] text-xs text-[#6B5B52] leading-relaxed">
                <strong className="text-[#2C1A11] block mb-1">The Dino Leathers Commitment:</strong>
                We never compromise on our leather&rsquo;s provenance. By supporting Dino Leathers, you directly support generational artisan families in Ambur.
              </div>

              <a
                href="#collection"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#7A3E1D] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#633216] transition-colors"
              >
                <span>Shop Ambur Craft</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
