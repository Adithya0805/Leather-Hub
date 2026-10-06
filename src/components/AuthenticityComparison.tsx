"use client";

import React from "react";
import { Check, X, ShieldCheck, AlertTriangle } from "lucide-react";

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
  return (
    <section id="authenticity" className="py-24 bg-[#FBF9F5] text-[#2C1A11] border-b border-[#EADDD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE5] border border-[#EADDD3] text-xs font-semibold uppercase tracking-widest text-[#7A3E1D]">
            <ShieldCheck className="w-4 h-4 text-[#7A3E1D]" />
            <span>Radical Material Transparency</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2C1A11]">
            Full-Grain Integrity vs. Mall Synthetic Substitutes
          </h2>

          <p className="text-sm sm:text-base text-[#6B5B52] leading-relaxed">
            The commercial retail industry hides behind confusing terms like &ldquo;Genuine Leather&rdquo; 
            to charge luxury prices for plastic-coated scrap. Here is the unvarnished anatomical truth.
          </p>
        </div>

        {/* Comparison Table */}
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
                      <span>Dino Leathers (100% Full-Grain Ambur Bovine)</span>
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

          {/* Bottom Summary Bar */}
          <div className="p-6 bg-[#F7F2EC] border-t border-[#EADDD3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B5B52]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7A3E1D]" />
              <span className="font-semibold text-[#2C1A11]">
                Zero Bonded Scrap Guarantee:
              </span>
              <span>
                If you ever find cardboard, paper, or synthetic foam inside a Dino Leathers wallet, we will refund 100% of your order.
              </span>
            </div>
            <a
              href="#collection"
              className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#7A3E1D] hover:text-[#633216] transition-colors shrink-0"
            >
              <span>Explore Full-Grain Collection &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
