"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Clock, ShieldCheck } from "lucide-react";

interface PatinaStage {
  id: number;
  stageNumber: string;
  name: string;
  timeframe: string;
  badge: string;
  colorName: string;
  colorHex: string;
  sensoryFeel: string;
  description: string;
  craftsmanTip: string;
  agingPercentage: number;
  image: string;
}

const PATINA_STAGES: PatinaStage[] = [
  {
    id: 1,
    stageNumber: "01",
    name: "Initial Natural Finish",
    timeframe: "Day 1",
    badge: "Firm Temper & Natural Grain",
    colorName: "Raw Honey Biscuit",
    colorHex: "#C89D66",
    sensoryFeel: "Crisp hand-feel, structured firmness, visible natural dermal pores, and a rich vegetable drum-tanning aroma.",
    description:
      "Crafted in Ambur. The unbuffed dermal layer retains its tight collagen structure. As you use your item, the leather begins molding to your everyday carry.",
    craftsmanTip:
      "Allow items to seat naturally. The bovine fibers will adjust gradually over the first few weeks.",
    agingPercentage: 15,
    image: "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-hero-4x5-960.webp",
  },
  {
    id: 2,
    stageNumber: "02",
    name: "Supple Hand-Wear Sheen",
    timeframe: "6 Months",
    badge: "The Natural Form",
    colorName: "Deep Caramel Amber",
    colorHex: "#944E27",
    sensoryFeel: "Noticeably softer to the touch, absorbing natural oils and everyday friction to form a warm sheen.",
    description:
      "Daily handling activates the natural oils within the hide. Light surface marks blend into the leather's developing luster over time.",
    craftsmanTip:
      "Buff the surface occasionally with a dry clean cotton cloth or a neutral leather balm to maintain the leather.",
    agingPercentage: 65,
    image: "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-angle-lifestyle-4x5-960.webp",
  },
  {
    id: 3,
    stageNumber: "03",
    name: "Rich Matured Patina",
    timeframe: "2+ Years",
    badge: "The Matured Surface",
    colorName: "Vintage Marbled Mahogany",
    colorHex: "#3E1E0E",
    sensoryFeel: "Supple and durable, showing the unique marks and character of long-term use.",
    description:
      "A rich surface reflecting daily use. Natural bovine leather develops individual character and depth through consistent handling.",
    craftsmanTip:
      "Maintain periodically with conditioning to keep the leather flexible and moisturized.",
    agingPercentage: 100,
    image: "/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-worn-lifestyle-4x5-960.webp",
  },
];

export function PatinaJourneySection() {
  const [activeStageId, setActiveStageId] = useState<number>(2);
  const current = PATINA_STAGES.find((s) => s.id === activeStageId) || PATINA_STAGES[1];

  return (
    <section id="patina" className="py-24 bg-white text-[#2C1A11] border-b border-[#EADDD3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE5] border border-[#EADDD3] text-xs font-semibold uppercase tracking-widest text-[#7A3E1D]"
          >
            <Clock className="w-4 h-4 text-[#7A3E1D]" />
            <span>Living Organic Heirloom</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2C1A11]"
          >
            The Evolution of Ambur Bovine Leather
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#6B5B52] leading-relaxed"
          >
            Bovine leather develops character, flexibility, and a richer tone with daily handling and exposure over time.
          </motion.p>
        </div>

        {/* ── TIMELINE SLIDER CONTROLLER ── */}
        <div className="max-w-2xl mx-auto mb-12 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-[#6B5B52] px-2">
            <span>Day 1 (Fresh)</span>
            <span>6 Months (Supple)</span>
            <span>2+ Years (Heirloom)</span>
          </div>

          <div className="relative flex items-center">
            {/* Background Track with Color Gradient */}
            <div className="w-full h-3 rounded-full bg-gradient-to-r from-[#C89D66] via-[#944E27] to-[#3E1E0E] opacity-75 shadow-inner" />
            
            {/* Step Marker Buttons */}
            <div className="absolute inset-x-0 flex items-center justify-between px-1">
              {PATINA_STAGES.map((stage) => {
                const isActive = stage.id === activeStageId;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStageId(stage.id)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all transform flex items-center justify-center font-mono text-[11px] font-bold shadow-md cursor-pointer ${
                      isActive
                        ? "bg-[#2C1A11] text-white border-white scale-125 ring-4 ring-[#7A3E1D]/20"
                        : "bg-white text-[#2C1A11] border-[#7A3E1D] hover:scale-110"
                    }`}
                    title={stage.name}
                  >
                    {stage.id}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── DETAILED STAGE SHOWCASE CARD WITH CROSS-FADE MOTION ── */}
        <div className="bg-[#FBF9F5] rounded-3xl border border-[#EADDD3] p-8 sm:p-12 lg:p-14 shadow-warm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative with AnimatePresence */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#7A3E1D] text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm">
                      {current.stageNumber}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase font-bold tracking-widest text-[#7A3E1D]">
                          {current.badge}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#EADDD3] text-[#2C1A11]">
                          {current.timeframe}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1A11]">
                        {current.name}
                      </h3>
                    </div>
                  </div>

                  {/* Color Swatch & Tactile Sensory */}
                  <div className="bg-white p-5 rounded-2xl border border-[#EADDD3] flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl border border-black/10 shrink-0 shadow-sm"
                      style={{ backgroundColor: current.colorHex }}
                    />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#9A8C84] block">
                        Patina Hue: <strong className="text-[#2C1A11]">{current.colorName}</strong>
                      </span>
                      <p className="text-xs sm:text-sm text-[#2C1A11] font-medium leading-snug mt-0.5">
                        {current.sensoryFeel}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6B5B52] leading-relaxed">
                    {current.description}
                  </p>

                  {/* Pro Tip */}
                  <div className="p-4 rounded-xl bg-[#F3ECE5] border-l-4 border-[#7A3E1D] text-xs text-[#6B5B52] leading-relaxed">
                    <strong className="text-[#2C1A11] font-semibold block mb-0.5">
                      Leather Care Guidance:
                    </strong>
                    {current.craftsmanTip}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Cross-Fading Product Visual & Gauge */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#EADDD3] shadow-sm text-center space-y-6">
              
              {/* Product Visual Area with Smooth Crossfade */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#EADDD3] bg-[#2E1E14]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.image}
                      alt={current.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 450px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 inset-x-3 text-white text-xs font-mono font-bold flex items-center justify-between">
                      <span>{current.name}</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#7A3E1D]/90 text-[10px]">
                        {current.timeframe}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Maturation Circular Gauge */}
              <div className="flex items-center justify-center gap-6 pt-2">
                <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#EADDD3" strokeWidth="8" fill="transparent" />
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
                  <span className="absolute font-serif text-base font-bold text-[#2C1A11]">
                    {current.agingPercentage}%
                  </span>
                </div>

                <div className="text-left space-y-1">
                  <div className="font-serif text-sm font-bold text-[#2C1A11]">
                    Natural Fiber Structure
                  </div>
                  <p className="text-[11px] text-[#6B5B52] leading-tight max-w-[200px]">
                    Naturally structured collagen fibers that maintain integrity under friction.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-center gap-4 text-xs font-mono text-[#7A3E1D]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Natural Aging
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-[#C29B38]" /> Bovine Leather
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
