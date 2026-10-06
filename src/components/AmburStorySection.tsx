"use client";

import React from "react";
import { Check, Award, Compass, ShieldCheck, Flame, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedMetrics } from "@/components/motion/AnimatedMetrics";

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
    desc: "A bold new direct-to-consumer era. We cut out luxury licensing markups, bringing Ambur's market-tested full-grain bovine leather directly to your hands at workshop-floor pricing.",
  },
];

export function AmburStorySection() {
  return (
    <section id="our-ambur-story" className="py-24 bg-[#FBF9F5] text-[#2C1A11] relative overflow-hidden border-b border-[#EADDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE5] text-[#7A3E1D] text-xs font-semibold uppercase tracking-widest border border-[#EADDD3]"
          >
            <Compass className="w-3.5 h-3.5 text-[#7A3E1D]" />
            <span>Palar River Basin • MC Road, Ambur (PIN 635802)</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#2C1A11]"
          >
            New Brand. Centuries of Uncompromised Mastery.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#6B5B52] leading-relaxed"
          >
            While Dino Leathers is fresh to the retail market, our collections come directly from Ambur—South India&rsquo;s 
            leather capital with over two centuries of tanning expertise along the Palar River basin. Every piece 
            is cut from the exact same export-grade bovine hides crafted for international luxury markets.
          </motion.p>
        </div>

        {/* Scroll-Triggered Animated Metric Counters */}
        <div className="mb-20">
          <AnimatedMetrics />
        </div>

        {/* 4 Historical Timeline Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {HISTORICAL_TIMELINE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
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
            </motion.div>
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

            {/* Right Workshop Heritage Callout */}
            <div className="lg:col-span-5 bg-[#FBF9F5] p-8 rounded-2xl border border-[#EADDD3] space-y-6">
              <div className="border-b border-[#EADDD3] pb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#7A3E1D] font-bold block mb-1">
                  Ambur Industrial Cluster
                </span>
                <div className="font-serif text-2xl font-bold text-[#2C1A11]">
                  Direct From Master Artisans
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#EADDD3] text-xs text-[#6B5B52] leading-relaxed space-y-2">
                <strong className="text-[#2C1A11] block">The Dino Leathers Proven Advantage:</strong>
                <p>
                  While our DTC brand is fresh, the artisans who craft our goods have spent decades curating hides for the world&rsquo;s most discerning luxury markets.
                </p>
                <p className="text-[#7A3E1D] font-medium">
                  We bring you export-grade luxury minus middleman margins.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="#collection"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#7A3E1D] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#633216] transition-colors text-center"
                >
                  <span>Explore Collections</span>
                </a>
                <a
                  href="/heritage"
                  className="inline-flex items-center justify-center gap-1.5 py-3.5 px-5 rounded-full bg-white border border-[#EADDD3] text-[#2C1A11] hover:border-[#7A3E1D] hover:text-[#7A3E1D] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Full Heritage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
