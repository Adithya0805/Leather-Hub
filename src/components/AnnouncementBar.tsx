"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, MapPin, ShieldCheck, ChevronRight } from "lucide-react";

export function AnnouncementBar() {
  const announcements = [
    {
      icon: MapPin,
      text: "Sourced from trusted Ambur workshops. Quality-checked before dispatch.",
    },
    {
      icon: Sparkles,
      text: "Complimentary Custom Initial Debossing Upon Request",
    },
    {
      icon: ShieldCheck,
      text: "Bovine Leather Construction • Zero Cardboard Fillers",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const CurrentIcon = announcements[currentIndex].icon;

  return (
    <div className="bg-[#F3ECE5] text-[#7A3E1D] border-b border-[#EADDD3] text-xs font-sans relative overflow-hidden transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        {/* Left Provenance Stamp */}
        <div className="hidden md:flex items-center gap-2 text-[#7A3E1D] font-medium tracking-wider uppercase text-[11px]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#7A3E1D] animate-pulse"></span>
          <span>Ambur Tannery Cluster, TN 635802</span>
        </div>

        {/* Center Rotating Message */}
        <div className="flex-1 flex items-center justify-center text-center">
          <div className="flex items-center justify-center gap-2 transition-all duration-500 transform">
            <CurrentIcon className="w-3.5 h-3.5 text-[#7A3E1D] shrink-0" />
            <p className="font-semibold tracking-wide text-xs sm:text-[13px] text-[#7A3E1D]">
              {announcements[currentIndex].text}
            </p>
          </div>
        </div>

        {/* Right Dispatch Notice */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] text-[#6B5B52]">
          <span className="font-medium text-[#7A3E1D] flex items-center gap-1">
            Ambur, Tamil Nadu <ChevronRight className="w-3 h-3 text-[#7A3E1D]" />
          </span>
        </div>
      </div>
    </div>
  );
}
