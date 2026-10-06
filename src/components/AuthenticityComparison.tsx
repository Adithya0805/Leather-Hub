"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ShieldCheck, AlertTriangle, Sparkles, Layers, Sliders, Eye } from "lucide-react";

interface ComparisonRow {
  metric: string;
  dino: {
    title: string;
    description: string;
  };
  commercial: {
    title: string;
    description: string;
  };
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    metric: "Raw Material Grade",
    dino: {
      title: "100% Full-Grain Bovine Hide",
      description:
        "Solid, single-ply uncorrected bovine leather retaining the natural skin dermal pores. Never sanded, buffed, or split.",
    },
    commercial: {
      title: "Bonded / PU Synthetic Scrap",
      description:
        "Reconstituted scrap leather dust and fibers glued with plastic/polyurethane resins over cheap fabric backings.",
    },
  },
  {
    metric: "Internal Fillers & Core",
    dino: {
      title: "Zero Cardboard or Paper",
      description:
        "Exactly 0.0% cardboard or paperboard fillers. Every pocket divider, spine, and liner is solid leather and high-tensile thread.",
    },
    commercial: {
      title: "Cardboard & Foam Core",
      description:
        "Compressed cardboard and paperboard layers sandwiched inside to fake structural thickness and firmness at low cost.",
    },
  },
  {
    metric: "Pores & Breathability",
    dino: {
      title: "Natural Dermal Pores",
      description:
        "Authentic animal pores remain completely open and breathable. Adjusts to pocket moisture without sweating or deteriorating.",
    },
    commercial: {
      title: "Sealed Plastic Sheet",
      description:
        "Uniform synthetic plastic layer stamped with a hot embossing wheel to fake natural texture. Completely non-breathable.",
    },
  },
  {
    metric: "Scuff & Scratch Response",
    dino: {
      title: "Self-Healing Surface",
      description:
        "Surface scuffs and fingernail marks blend and heal with simple thumb friction and natural hand oils.",
    },
    commercial: {
      title: "Permanent Tearing & Peeling",
      description:
        "Punctures or friction strip the paper-thin vinyl veneer, permanently exposing white fibrous cloth underneath.",
    },
  },
  {
    metric: "Aging Behavior (Patina)",
    dino: {
      title: "Develops Rich Caramel Patina",
      description:
        "Ages like vintage mahogany. Absorbs ambient light and daily handling to deepen in luster and supple flexibility over years.",
    },
    commercial: {
      title: "Bubbles, Chips & Peels in 6 Mo",
      description:
        "Delaminates, cracks along fold lines, bubbles, and flakes away within 6 to 9 months of everyday pocket carry.",
    },
  },
  {
    metric: "Perimeter Stitching",
    dino: {
      title: "High-Tensile Bonded Nylon",
      description:
        "Continuous-filament bonded nylon thread with reinforced stress points that will not rot, stretch, or snap under pocket pressure.",
    },
    commercial: {
      title: "Low-Denier Polyester Thread",
      description:
        "Frayed, brittle cotton or polyester blend stitching prone to unraveling when exposed to pocket moisture.",
    },
  },
  {
    metric: "Aroma Profile",
    dino: {
      title: "Woody Botanical Tannage",
      description:
        "Rich, natural vegetable tanning aroma derived from native barks and drum-dyed natural oils that lasts for years.",
    },
    commercial: {
      title: "Solvents & Chemical Petroleum",
      description:
        "Pungent plastic, formaldehyde, and solvent fumes masked with synthetic deodorizers that fade to a plastic scent.",
    },
  },
  {
    metric: "Pricing Architecture",
    dino: {
      title: "Direct Workshop Floor (PIN 635802)",
      description:
        "Priced honestly for master artisan bench time and export-grade bovine hide—zero shopping mall rents or middleman markups.",
    },
    commercial: {
      title: "400% - 800% Retail Markups",
      description:
        "Inflated retail pricing engineered to fund shopping mall leases, distributor commissions, and celebrity licensing.",
    },
  },
];

export function AuthenticityComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeViewMode, setActiveViewMode] = useState<"slider" | "macro">("slider");
  const [isHoveredMacro, setIsHoveredMacro] = useState<"dino" | "synthetic" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(clamped);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section id="authenticity" className="py-24 bg-[#FBF9F5] text-[#2C1A11] border-b border-[#EADDD3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE5] border border-[#EADDD3] text-xs font-semibold uppercase tracking-widest text-[#7A3E1D]"
          >
            <ShieldCheck className="w-4 h-4 text-[#7A3E1D]" />
            <span>Interactive Material Truth</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2C1A11]"
          >
            Full-Grain Integrity vs. Mall Synthetic Substitutes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#6B5B52] leading-relaxed"
          >
            Commercial mall brands use terms like &ldquo;Genuine Leather&rdquo; to disguise plastic-coated 
            cardboard sandwiches. Slide below to inspect the microscopic difference between export-grade 
            Ambur bovine hide and commercial synthetic peel.
          </motion.p>

          {/* Mode Switcher */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveViewMode("slider")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeViewMode === "slider"
                  ? "bg-[#7A3E1D] text-white shadow-warm"
                  : "bg-white text-[#6B5B52] border border-[#EADDD3] hover:text-[#2C1A11]"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                Interactive Split-Slider
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveViewMode("macro")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeViewMode === "macro"
                  ? "bg-[#7A3E1D] text-white shadow-warm"
                  : "bg-white text-[#6B5B52] border border-[#EADDD3] hover:text-[#2C1A11]"
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                Macro Dermal Pore Zoom
              </span>
            </button>
          </div>
        </div>

        {/* ── INTERACTIVE VISUAL DISPLAY ── */}
        <div className="max-w-4xl mx-auto mb-16">
          {activeViewMode === "slider" ? (
            /* SPLIT SCREEN DRAG SLIDER */
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border-2 border-[#EADDD3] shadow-elevated select-none cursor-ew-resize bg-[#2A1E17]"
            >
              {/* Synthetic Right Side Background */}
              <div className="absolute inset-0 bg-[#2B231D] flex items-center justify-end p-8 text-right">
                <div className="relative w-full h-full">
                  {/* Faux Plastic Pattern Simulation */}
                  <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.5) 0, rgba(0,0,0,0.5) 2px, transparent 2px, transparent 6px)`,
                    }}
                  />
                  <div className="absolute top-4 right-4 z-10 bg-red-950/80 border border-red-500/40 text-red-200 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider">
                    Commercial Bonded PU Leather
                  </div>

                  <div className="absolute bottom-6 right-6 z-10 max-w-xs space-y-1 text-right text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400 block">
                      Synthetic Flaking &amp; Peeling
                    </span>
                    <p className="text-xs text-[#D8C7B5] leading-snug">
                      Glued scrap dust over cardboard core. Rigid, cracks under pocket heat in 6 months.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full-Grain Left Side Layer (Clipped by slider position) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden bg-[#422211]"
                style={{ width: `${sliderPosition}%` }}
              >
                <div
                  className="absolute inset-y-0 left-0 w-full h-full"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%",
                  }}
                >
                  {/* Authentic Ambur Bovine Grain Macro Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-macro-grain-4x5-960.webp"
                      alt="Dino Leathers 100% full-grain bovine hide micro dermal pores"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 900px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 z-10 bg-[#1E140E]/85 border border-[#C29B38]/50 text-[#F1C40F] px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#C29B38]" />
                      <span>Dino Leathers • 100% Full-Grain Bovine</span>
                    </div>

                    <div className="absolute bottom-6 left-6 z-10 max-w-xs space-y-1 text-left text-white">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C29B38] block">
                        Open Dermal Pores • Self-Healing
                      </span>
                      <p className="text-xs text-[#F5EDE4] leading-snug">
                        Uncut bovine grain. Absorbs natural skin oils to form rich caramel patina over decades.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Divider Bar */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#7A3E1D] border-2 border-white text-white flex items-center justify-center shadow-lg">
                  <Sliders className="w-4 h-4" />
                </div>
              </div>
            </div>
          ) : (
            /* MACRO TEXTURE CLOSE-UP ZOOM */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Dino Leathers Full-Grain Card */}
              <div
                onMouseEnter={() => setIsHoveredMacro("dino")}
                onMouseLeave={() => setIsHoveredMacro(null)}
                className="bg-white rounded-3xl border-2 border-[#7A3E1D] p-6 shadow-elevated space-y-4 group overflow-hidden relative"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#7A3E1D]" />
                    <span className="font-serif text-lg font-bold text-[#2C1A11]">
                      Dino Leathers
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F3ECE5] text-[#7A3E1D] font-mono text-[10px] font-bold uppercase">
                    Uncut Bovine Hide
                  </span>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#EADDD3] bg-[#3B2214]">
                  <Image
                    src="/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-macro-grain-4x5-960.webp"
                    alt="Authentic Full Grain Ambur Bovine Leather Pores"
                    fill
                    className={`object-cover transition-transform duration-700 ease-out ${
                      isHoveredMacro === "dino" ? "scale-125" : "scale-100"
                    }`}
                  />
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-mono">
                    Macro 4x Zoom: Natural Dermal Pores
                  </div>
                </div>

                <p className="text-xs text-[#6B5B52] leading-relaxed">
                  Hover to inspect: The natural dermal pores and epidermal collagen bundles remain unbroken. 
                  Light surface scuffs heal with friction and natural body oils.
                </p>
              </div>

              {/* Commercial Synthetic Card */}
              <div
                onMouseEnter={() => setIsHoveredMacro("synthetic")}
                onMouseLeave={() => setIsHoveredMacro(null)}
                className="bg-white rounded-3xl border border-[#EADDD3] p-6 shadow-warm space-y-4 group overflow-hidden relative"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    <span className="font-serif text-lg font-bold text-[#2C1A11]">
                      Commercial Mall Brand
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 font-mono text-[10px] font-bold uppercase">
                    Bonded PU Plastic
                  </span>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#EADDD3] bg-[#2E2824] flex items-center justify-center p-6 text-center">
                  {/* Synthetic Flaking Simulation Texture */}
                  <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay"
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.6) 10px, rgba(0,0,0,0.6) 11px)`,
                    }}
                  />
                  <div className="relative z-10 space-y-2">
                    <span className="text-red-400 font-mono text-xs uppercase font-bold block">
                      Artificial Roller Stamping
                    </span>
                    <p className="text-xs text-[#D8C7B5] max-w-xs mx-auto">
                      Machine-stamped plastic veneer over cardboard core. Punctures reveal white synthetic gauze; cannot absorb oils or form patina.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#7A6A5E] leading-relaxed">
                  Polyurethane film painted over reconstituted leather scrap and cardboard. 
                  Subject to bubbling, cracking, and peeling within months of everyday carry.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ── 8-POINT COMPARISON TABLE ── */}
        <div className="overflow-hidden rounded-3xl border border-[#EADDD3] bg-white shadow-warm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#EADDD3] bg-[#F7F2EC]">
                  <th className="py-5 px-6 font-mono uppercase tracking-wider text-[#6B5B52] w-1/4">
                    Quality Standard
                  </th>
                  <th className="py-5 px-6 font-serif font-bold text-base sm:text-lg text-[#7A3E1D] bg-[#F3ECE5] border-x border-[#EADDD3] w-3/8">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-[#7A3E1D]" />
                      <span>Dino Leathers (100% Full-Grain Bovine)</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 font-serif font-bold text-base sm:text-lg text-[#6B5B52] w-3/8">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                      <span>Commercial Mall Brands (&ldquo;Genuine&rdquo; / Bonded PU)</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EADDD3]">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FCFAF8] transition-colors">
                    {/* Metric */}
                    <td className="py-5 px-6 font-bold text-[#2C1A11] bg-[#FAF6F0] align-top">
                      {row.metric}
                    </td>

                    {/* Dino Leathers Column */}
                    <td className="py-5 px-6 bg-[#FAF7F2] border-x border-[#EADDD3] align-top">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#E8DFD5] text-[#7A3E1D] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <div className="space-y-1">
                          <strong className="block text-[#2C1A11] font-semibold">
                            {row.dino.title}
                          </strong>
                          <p className="text-xs text-[#6B5B52] leading-relaxed">
                            {row.dino.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Commercial Mall Brand Column */}
                    <td className="py-5 px-6 align-top">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-red-50 text-red-500 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <div className="space-y-1">
                          <strong className="block text-[#2C1A11] font-semibold">
                            {row.commercial.title}
                          </strong>
                          <p className="text-xs text-[#7A6A5E] leading-relaxed">
                            {row.commercial.description}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Assurance Strip */}
          <div className="p-6 bg-[#F7F2EC] border-t border-[#EADDD3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B5B52]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7A3E1D]" />
              <span className="font-semibold text-[#2C1A11]">
                Zero Bonded Scrap Guarantee:
              </span>
              <span>
                If you ever find cardboard, paper, or synthetic foam inside a Dino Leathers wallet or belt, we will refund 100% of your order immediately.
              </span>
            </div>
            <a
              href="#collection"
              className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#7A3E1D] hover:text-[#633216] transition-colors shrink-0"
            >
              <span>Explore Proven Collections &rarr;</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
