import React from "react";

interface LeatherGrainPlaceholderProps {
  title?: string;
  subtitle?: string;
  className?: string;
  aspectRatio?: "1:1" | "4:5" | "16:9";
}

/**
 * Lightweight (<2 KB) neutral full-grain leather placeholder.
 * Replaces unconfirmed or branded photography with a clean atelier aesthetic.
 */
export function LeatherGrainPlaceholder({
  title = "Full-Grain Ambur Bovine",
  subtitle = "Atelier Photography Pending",
  className = "",
  aspectRatio = "1:1",
}: LeatherGrainPlaceholderProps) {
  const aspectClass =
    aspectRatio === "4:5"
      ? "aspect-[4/5]"
      : aspectRatio === "16:9"
      ? "aspect-video"
      : "aspect-square";

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden bg-[#241A14] flex flex-col items-center justify-center text-center p-6 select-none ${className}`}
      aria-label={`${title} - ${subtitle}`}
    >
      {/* SVG Leather Texture Grain (<1 KB) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 mix-blend-overlay pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <filter id="leather-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0.33 0 0 0 0  0 0.33 0 0 0  0 0 0.33 0 0  0 0 0 0.45 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#leather-noise)" />
      </svg>

      {/* Perimeter Stitching Line */}
      <div className="absolute inset-3 rounded-xl border border-dashed border-[#8A6A2F]/30 pointer-events-none" />

      {/* Center Debossed Leather Motif */}
      <div className="relative z-10 flex flex-col items-center gap-2 max-w-[85%]">
        <div className="w-12 h-12 rounded-full border border-[#8A6A2F]/40 bg-[#1A120D] flex items-center justify-center shadow-inner">
          <svg
            className="w-6 h-6 text-[#C29B38]/70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" strokeLinecap="round" />
            <circle cx="12" cy="12" r="8" strokeDasharray="2 3" />
          </svg>
        </div>

        <span className="font-serif text-sm sm:text-base font-bold tracking-wide text-[#EFE6D8]/90">
          {title}
        </span>
        <span className="text-[11px] font-sans uppercase tracking-widest text-[#A8998A]/80">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
