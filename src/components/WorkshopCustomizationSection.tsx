"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Sparkles, Check, ArrowRight, ShieldCheck, MapPin, RefreshCw } from "lucide-react";

export function WorkshopCustomizationSection() {
  const [initials, setInitials] = useState<string>("DNO");
  const [foilStyle, setFoilStyle] = useState<"blind" | "gold">("gold");
  const [isStamping, setIsStamping] = useState<boolean>(false);
  const [stampKey, setStampKey] = useState<number>(0);

  const triggerStampAnimation = () => {
    setIsStamping(true);
    setStampKey((prev) => prev + 1);
    setTimeout(() => {
      setIsStamping(false);
    }, 900);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.slice(0, 4);
    setInitials(val);
    triggerStampAnimation();
  };

  const handleStyleChange = (style: "blind" | "gold") => {
    setFoilStyle(style);
    triggerStampAnimation();
  };

  return (
    <section id="customization" className="py-24 bg-[#1E140E] text-[#F3ECE5] relative overflow-hidden border-b border-[#3A2A1E]">
      <div id="monogram-studio" className="absolute -top-20" />
      {/* Background atelier ambient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C29B38]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#7A3E1D]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E2017] border border-[#4D382A] text-xs font-mono uppercase tracking-widest text-[#D4A359]"
            >
              <Flame className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Direct From MC Road, Ambur (PIN 635802)</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF3EA] leading-tight"
            >
              Direct From MC Road, Ambur — Hand-Branded For You.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-[#D4C3B3] leading-relaxed"
            >
              When you strip away multi-tiered distributor markups, shopping mall leases, and excessive brand licensing, 
              what remains is the true cost of mastery: export-grade bovine hide and dedicated bench craftsmanship.
            </motion.p>

            <div className="space-y-4 pt-2 text-xs sm:text-sm text-[#B8A695]">
              <p>
                Every Dino Leathers piece includes our <strong className="text-[#FAF3EA]">complimentary heated brass die monogramming service</strong>. 
                Our artisans set individual vintage brass typefaces, calibrate our shop arbor press to exactly 115°C, 
                and manually deboss your name or initials deep into the full-grain hide.
              </p>
              <p>
                Unlike superficial surface inks or laser burns that peel away with friction, heated brass die debossing permanently compresses the bovine collagen fibers, creating a tactile impression that deepens in character alongside your leather&rsquo;s natural patina.
              </p>
            </div>

            {/* 3 Workshop Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#291D15] p-4 rounded-xl border border-[#3E2B1E]">
                <span className="font-mono text-xs uppercase font-bold text-[#D4A359] block mb-1">
                  115°C Thermal Press
                </span>
                <p className="text-xs text-[#B8A695]">
                  Engineered heat softens dermal collagen without singeing the grain.
                </p>
              </div>

              <div className="bg-[#291D15] p-4 rounded-xl border border-[#3E2B1E]">
                <span className="font-mono text-xs uppercase font-bold text-[#D4A359] block mb-1">
                  Solid Brass Dies
                </span>
                <p className="text-xs text-[#B8A695]">
                  Individual foundry-cut brass typefaces for clean typographic debossing.
                </p>
              </div>

              <div className="bg-[#291D15] p-4 rounded-xl border border-[#3E2B1E]">
                <span className="font-mono text-xs uppercase font-bold text-[#D4A359] block mb-1">
                  100% Free Service
                </span>
                <p className="text-xs text-[#B8A695]">
                  Zero surcharge. Included with every single wallet and belt.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#collection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#7A3E1D] hover:bg-[#944D25] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-warm"
              >
                <span>Shop With Free Monogram</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <span className="text-xs text-[#A89484] font-mono flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4A359]" />
                Shipped direct from PIN 635802
              </span>
            </div>
          </div>

          {/* Right Interactive Animated Brass Die Monogram Studio */}
          <div className="lg:col-span-5 bg-[#291E16] rounded-3xl p-8 border border-[#443224] shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#3E2C20] pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4A359] font-bold block">
                  Simulated Workshop Press
                </span>
                <h3 className="font-serif text-xl font-bold text-[#FAF3EA]">
                  Live Brass Die Stamping
                </h3>
              </div>
              <button
                type="button"
                onClick={triggerStampAnimation}
                className="p-2 rounded-lg bg-[#3D2C20] text-[#D4A359] hover:bg-[#4D382A] transition-colors"
                title="Re-press brass die"
              >
                <RefreshCw className={`w-4 h-4 ${isStamping ? "animate-spin" : ""}`} />
              </button>
            </div>

            {/* Leather Texture Canvas & Descending Heated Brass Die */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#574030] bg-[#3B2214] shadow-inner flex items-center justify-center p-6 text-center">
              {/* Simulated Leather Grain Texture */}
              <div 
                className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.3) 1px, transparent 1px)`,
                  backgroundSize: '12px 12px',
                  backgroundPosition: '0 0, 6px 6px',
                }}
              />

              {/* Thermal Heat Aura Pulse when Stamping */}
              <AnimatePresence>
                {isStamping && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    exit={{ opacity: 0, scale: 1.5 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-radial from-[#FFB347]/30 via-transparent to-transparent pointer-events-none"
                  />
                )}
              </AnimatePresence>

              {/* Descending Heated Brass Die Machine Simulation */}
              <AnimatePresence>
                {isStamping && (
                  <motion.div
                    key={`die-${stampKey}`}
                    initial={{ y: -70, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="absolute z-20 px-6 py-2.5 rounded-lg bg-gradient-to-b from-[#E5B869] to-[#8C6226] border-2 border-[#FFE8A3] shadow-[0_0_25px_rgba(255,179,71,0.8)] text-[#1E140E] font-serif font-black text-2xl tracking-widest pointer-events-none"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#1E140E] uppercase mb-0.5 justify-center">
                      <Flame className="w-3.5 h-3.5 text-red-600 animate-pulse" />
                      <span>115°C Brass Press</span>
                    </div>
                    <span>{initials.toUpperCase() || "AMB"}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Debossed Impression on the Leather */}
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#A89382] block">
                  Full-Grain Bovine Impression
                </span>

                {/* Stamped Initials Display */}
                <motion.div
                  key={`text-${stampKey}`}
                  initial={{ scale: 0.95, filter: "brightness(1.5)" }}
                  animate={{ scale: 1, filter: "brightness(1)" }}
                  transition={{ duration: 0.4 }}
                  className={`font-serif text-4xl sm:text-5xl font-black tracking-widest transition-all duration-300 ${
                    foilStyle === "gold"
                      ? "text-[#F1C40F] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                      : "text-[#24130A] drop-shadow-[0_1px_1px_rgba(255,255,255,0.15)] shadow-inner"
                  }`}
                  style={{
                    textShadow:
                      foilStyle === "blind"
                        ? "0px 2px 3px rgba(0,0,0,0.95), 0px -1px 1px rgba(255,255,255,0.18)"
                        : "0px 1px 2px rgba(241,196,15,0.4), 0px 3px 6px rgba(0,0,0,0.9)",
                  }}
                >
                  {initials.toUpperCase() || "AMB"}
                </motion.div>

                <div className="text-[11px] font-mono text-[#D4C3B3]/70 pt-1">
                  100% Solid Full-Grain Ambur Hide
                </div>
              </div>
            </div>

            {/* Live Controls */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#D4C3B3] mb-2">
                  Enter Your Initials (1-4 Characters):
                </label>
                <input
                  type="text"
                  maxLength={4}
                  value={initials}
                  onChange={handleTextChange}
                  placeholder="e.g. DNO"
                  className="w-full px-4 py-3 rounded-xl bg-[#1A130D] border border-[#443224] text-white font-mono text-center tracking-widest uppercase focus:outline-none focus:border-[#D4A359] text-base"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#D4C3B3] mb-2">
                  Select Finish:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleStyleChange("blind")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                      foilStyle === "blind"
                        ? "bg-[#7A3E1D] text-white border border-[#944D25] shadow-sm"
                        : "bg-[#1A130D] text-[#A89382] border border-[#3E2C20] hover:text-white"
                    }`}
                  >
                    Blind Deboss (Deep Matte)
                  </button>

                  <button
                    type="button"
                    onClick={() => handleStyleChange("gold")}
                    className={`py-2.5 px-3 rounded-xl text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
                      foilStyle === "gold"
                        ? "bg-[#C29B38] text-[#1E140E] border border-[#D4A359] shadow-sm font-black"
                        : "bg-[#1A130D] text-[#A89382] border border-[#3E2C20] hover:text-white"
                    }`}
                  >
                    Vintage Gold Foil
                  </button>
                </div>
              </div>

              <div className="p-3 bg-[#1A130D] rounded-xl border border-[#3E2C20] flex items-center gap-2 text-xs text-[#B8A695]">
                <Check className="w-4 h-4 text-[#D4A359] shrink-0" />
                <span>Complimentary on every order. Confirmed live on WhatsApp before bench stamping.</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
