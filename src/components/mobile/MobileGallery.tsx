'use client';

import React, { useState, useRef, useEffect, TouchEvent } from "react";
import Image from "next/image";
import { Sparkles, ZoomIn, ZoomOut, Check, Layers, Compass } from "lucide-react";

interface MobileGalleryProps {
  images: string[];
  productName: string;
  tag?: string;
}

export function MobileGallery({ images = [], productName, tag }: MobileGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomCoords, setZoomCoords] = useState({ x: 50, y: 50 });
  const [lastTap, setLastTap] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const angleLabels = ["Front View", "3D Angled", "Interior Pockets", "Macro Grain & Stitch"];

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, clientWidth } = containerRef.current;
    if (clientWidth > 0) {
      const index = Math.round(scrollLeft / clientWidth);
      if (index !== activeIndex && index >= 0 && index < images.length) {
        setActiveIndex(index);
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: index * containerRef.current.clientWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  // Double-tap zoom handler for touch screens
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;
    if (now - lastTap < DOUBLE_TAP_DELAY) {
      // Double tap triggered
      const touch = e.changedTouches[0];
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((touch.clientX - rect.left) / rect.width) * 100;
      const y = ((touch.clientY - rect.top) / rect.height) * 100;
      setZoomCoords({ x, y });
      setIsZoomed((prev) => !prev);
    }
    setLastTap(now);
  };

  return (
    <div className="relative w-full bg-[#FBF9F5] rounded-2xl overflow-hidden border border-[#EADDD3] shadow-warm group select-none">
      {/* Permanent Quality & Provenance Badges Overlay */}
      <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#7A3E1D] text-[10px] font-bold uppercase tracking-wider border border-[#EADDD3] shadow-micro pointer-events-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7A3E1D] animate-pulse" />
          <span>Ambur Full-Grain Leather</span>
        </span>

        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F3ECE5]/95 backdrop-blur-md text-[#7A3E1D] text-[10px] font-bold uppercase tracking-wider border border-[#EADDD3] shadow-micro pointer-events-auto">
          <Sparkles className="w-3 h-3 text-[#C29B38]" />
          <span>Free Name Stamping</span>
        </span>
      </div>

      {/* Swipeable Carousel Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-none touch-momentum gpu-layer"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            onTouchEnd={handleTouchEnd}
            onDoubleClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              setZoomCoords({ x, y });
              setIsZoomed(!isZoomed);
            }}
            className="w-full shrink-0 snap-center relative aspect-[4/3] sm:aspect-square bg-[#FBF9F5] overflow-hidden cursor-zoom-in"
          >
            <Image
              src={src || "/icon.svg"}
              alt={`${productName} - ${angleLabels[idx] || `Angle ${idx + 1}`}`}
              fill
              priority={idx === 0}
              className={`object-cover object-center transition-transform duration-300 ${
                isZoomed && activeIndex === idx ? "scale-[2.4]" : "scale-100"
              }`}
              style={
                isZoomed && activeIndex === idx
                  ? { transformOrigin: `${zoomCoords.x}% ${zoomCoords.y}%` }
                  : undefined
              }
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>
        ))}
      </div>

      {/* Zoom Inspector Banner (When Zoom Active) */}
      {isZoomed && (
        <div className="absolute inset-x-3 bottom-14 z-20 bg-white/95 backdrop-blur-md p-2 rounded-xl text-center border border-[#EADDD3] shadow-elevated animate-fadeIn">
          <p className="text-[11px] text-[#2C1A11] font-medium flex items-center justify-center gap-1.5">
            <ZoomOut className="w-3.5 h-3.5 text-[#7A3E1D]" />
            <span>2.5x Inspection Mode • Double tap or click to reset</span>
          </p>
        </div>
      )}

      {/* Floating Bottom Controls: Dots & Perspective Chip */}
      <div className="absolute bottom-3 inset-x-3 z-20 flex items-center justify-between pointer-events-none">
        {/* Angle Label Chip */}
        <div className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-[#6B5B52] font-medium border border-[#EADDD3] shadow-micro pointer-events-auto">
          <span className="text-[#7A3E1D] font-bold">{activeIndex + 1}/{images.length}</span>: {angleLabels[activeIndex] || "Gallery View"}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-full pointer-events-auto border border-[#EADDD3] shadow-micro">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === i
                  ? "w-5 h-1.5 bg-[#7A3E1D]"
                  : "w-1.5 h-1.5 bg-[#EADDD3] hover:bg-[#8C7E76]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Tap to Zoom Toggle Button */}
        <button
          type="button"
          onClick={() => setIsZoomed(!isZoomed)}
          className="min-w-[36px] min-h-[36px] flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-[#7A3E1D] hover:bg-[#F3ECE5] border border-[#EADDD3] pointer-events-auto active:scale-90 transition-transform shadow-micro"
          title="Zoom into leather pores"
          aria-label="Toggle close-up zoom"
        >
          {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
