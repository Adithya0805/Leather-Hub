"use client";

import React, { useState } from "react";
import { Sparkles, Clock, ShieldCheck, Flame, Compass } from "lucide-react";

interface PatinaStage {
  id: number;
  stageNumber: string;
  name: string;
  timeframe: string;
  badge: string;
  sensoryFeel: string;
  description: string;
  craftsmanTip: string;
  agingPercentage: number;
}

const PATINA_STAGES: PatinaStage[] = [
  {
    id: 1,
    stageNumber: "01",
    name: "Workshop Finish",
    timeframe: "Day 1 to Day 30",
    badge: "Firm Temper & Natural Grain",
    sensoryFeel: "Crisp hand-feel, firm structural temper, visible natural dermal pores, and a rich vegetable drum-tanning aroma.",
    description:
      "Direct from our MC Road cutting bench. The unbuffed dermal layer retains its tightest collagen structure. As you introduce your cards and cash, the leather begins its bespoke molding process without losing its crisp silhouette.",
    craftsmanTip:
      "Allow cards to seat naturally without forcing. The high-density bovine fibers will stretch micro-millimeters over the first two weeks to memorize your specific everyday carry.",
    agingPercentage: 25,
  },
  {
    id: 2,
    stageNumber: "02",
    name: "Supple & Lustrous",
    timeframe: "Month 1 to Year 1",
    badge: "The Organic Mold",
    sensoryFeel: "Softens to everyday handling, absorbing natural skin oils and denim friction to form an organic caramel sheen.",
    description:
      "Daily pocket warmth activates the natural waxes and drum-dyed oils deep within the hide. Light surface scuffs from keys or coins effortlessly self-heal with slight thumb friction, melding into the leather's emerging amber luster.",
    craftsmanTip:
      "Once every 6 months, buff the surface lightly with a dry clean cotton cloth or a touch of organic beeswax conditioner to accelerate the warm caramel glow.",
    agingPercentage: 65,
  },
  {
    id: 3,
    stageNumber: "03",
    name: "Heirloom Character",
    timeframe: "Year 2 & Beyond",
    badge: "The Indelible Signature",
    sensoryFeel: "Glove-soft yet tear-resistant; develops a rich marbled depth and glossy patina that never cracks or peels.",
    description:
      "A living, glossy surface unique to your individual story. While bonded mall leathers flake and disintegrate into toxic landfills, full-grain bovine hide becomes stronger, more supple, and infinitely more beautiful with every decade.",
    craftsmanTip:
      "This piece is now a permanent heirloom. The perimeter high-tensile bonded nylon stitching remains anchored. Pass it down to the next generation with pride.",
    agingPercentage: 100,
  },
];

export function PatinaJourneySection() {
  const [activeStage, setActiveStage] = useState<number>(2);
  const current = PATINA_STAGES.find((s) => s.id === activeStage) || PATINA_STAGES[1];

  return (
    <section id="patina" className="py-24 bg-white text-[#2C1A11] border-b border-[#EADDD3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE5] border border-[#EADDD3] text-xs font-semibold uppercase tracking-widest text-[#7A3E1D]">
            <Clock className="w-4 h-4 text-[#7A3E1D]" />
            <span>Living Organic Heirloom</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2C1A11]">
            The 3-Stage Evolution of Real Ambur Leather
          </h2>

          <p className="text-sm sm:text-base text-[#6B5B52] leading-relaxed">
            Commercial synthetic leather begins deteriorating the minute you buy it. Authentic full-grain 
            bovine leather does the opposite: it comes alive with daily use, developing a rich caramel patina over decades.
          </p>
        </div>

        {/* Stage Selector Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-12">
          {PATINA_STAGES.map((stage) => {
            const isSelected = stage.id === activeStage;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(stage.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#7A3E1D] text-white border-[#7A3E1D] shadow-warm scale-[1.02]"
                    : "bg-[#FBF9F5] text-[#6B5B52] border-[#EADDD3] hover:border-[#7A3E1D] hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`font-mono text-xs font-bold uppercase tracking-wider ${
                      isSelected ? "text-[#EADDD3]" : "text-[#7A3E1D]"
                    }`}
                  >
                    Stage {stage.stageNumber}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-[#EADDD3]/60 text-[#2C1A11]"
                    }`}
                  >
                    {stage.timeframe}
                  </span>
                </div>
                <div
                  className={`font-serif text-lg font-bold leading-snug ${
                    isSelected ? "text-white" : "text-[#2C1A11]"
                  }`}
                >
                  {stage.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Showcase Card */}
        <div className="bg-[#FBF9F5] rounded-3xl border border-[#EADDD3] p-8 sm:p-12 lg:p-14 shadow-warm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#7A3E1D] text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm">
                  {current.stageNumber}
                </span>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#7A3E1D] block">
                    {current.badge}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1A11]">
                    {current.name} • <span className="font-sans text-lg font-normal text-[#6B5B52]">{current.timeframe}</span>
                  </h3>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#EADDD3] space-y-1.5">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#7A3E1D] block">
                  Tactile Sensory Profile
                </span>
                <p className="text-xs sm:text-sm text-[#2C1A11] font-medium leading-relaxed">
                  {current.sensoryFeel}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#6B5B52] leading-relaxed">
                {current.description}
              </p>

              {/* Pro Tip */}
              <div className="p-4 rounded-xl bg-[#F3ECE5] border-l-4 border-[#7A3E1D] text-xs text-[#6B5B52] leading-relaxed">
                <strong className="text-[#2C1A11] font-semibold block mb-0.5">
                  Artisan Workshop Guidance:
                </strong>
                {current.craftsmanTip}
              </div>
            </div>

            {/* Right Visual Patina Gauge */}
            <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-[#EADDD3] shadow-sm text-center space-y-6">
              <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#EADDD3"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#7A3E1D"
                    strokeWidth="8"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 - (251.2 * current.agingPercentage) / 100}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-700 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-serif text-3xl font-bold text-[#2C1A11]">
                    {current.agingPercentage}%
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#6B5B52]">
                    Patina Matured
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-serif text-lg font-bold text-[#2C1A11]">
                  Zero Peeling Guarantee
                </div>
                <p className="text-xs text-[#6B5B52] leading-relaxed max-w-xs mx-auto">
                  Every grain layer is naturally bonded by nature&rsquo;s collagen fibers. Dino Leathers will never bubble, crack, or delaminate.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-center gap-4 text-xs font-mono text-[#7A3E1D]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> 5-Year Guarantee
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-[#C29B38]" /> 100% Bovine
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
