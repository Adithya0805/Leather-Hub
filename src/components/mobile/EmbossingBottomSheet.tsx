'use client';

import React, { useState, useEffect } from "react";
import { Sparkles, X, Check, Flame } from "lucide-react";

interface EmbossingBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  currentInitials: string;
  currentStyle?: "gold" | "blind";
  productName?: string;
  onConfirm: (initials: string, style: "gold" | "blind") => void;
}

export function EmbossingBottomSheet({
  isOpen,
  onClose,
  currentInitials,
  currentStyle = "gold",
  productName = "Ambur Bovine Leather",
  onConfirm,
}: EmbossingBottomSheetProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [initials, setInitials] = useState(currentInitials);
  const [style, setStyle] = useState<"gold" | "blind">(currentStyle);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setInitials(currentInitials);
    setStyle(currentStyle);
  }, [currentInitials, currentStyle, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isMounted || !isOpen) return null;

  const handleApply = () => {
    onConfirm(initials.trim().toUpperCase(), style);
    onClose();
  };

  const handleClear = () => {
    setInitials("");
    onConfirm("", style);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Dimmed Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#2C1A11]/40 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Native Bottom Sheet Container */}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-[32px] border-t-2 border-[#EADDD3] shadow-2xl p-5 sm:p-6 pb-safe gpu-layer max-w-lg mx-auto animate-slideUp">
        {/* Native Pull Handle */}
        <div className="w-12 h-1.5 bg-[#EADDD3] rounded-full mx-auto mb-4 cursor-pointer" onClick={onClose} />

        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#EADDD3]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#F3ECE5] text-[#7A3E1D] flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#2C1A11]">
                Custom Name &amp; Initials
              </h3>
              <p className="text-[11px] text-[#6B5B52]">
                Free Handcrafted Stamping • {productName}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center text-[#6B5B52] hover:text-[#2C1A11] hover:bg-[#FBF9F5]"
            aria-label="Close sheet"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Mobile Leather Visualizer */}
        <div className="my-4 relative rounded-2xl bg-gradient-to-br from-[#7A3E1D] via-[#633216] to-[#3D2418] p-6 text-center border-2 border-[#EADDD3] shadow-inner overflow-hidden">
          <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.25em] text-[#C29B38] mb-3">
            <span>LIVE STAMP PREVIEW</span>
            <span>AMBUR WORKSHOP</span>
          </div>

          <div
            className={`font-serif text-3xl sm:text-4xl font-extrabold tracking-[0.3em] uppercase py-3 transition-all duration-300 ${
              style === "gold"
                ? "text-[#F0DEC4] drop-shadow-[0_2px_8px_rgba(194,155,56,0.45)]"
                : "text-[#1A0F0A] drop-shadow-[0_-1px_1px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_1px_rgba(255,255,255,0.2)]"
            }`}
          >
            {initials || "YOUR INITIALS"}
          </div>

          <div className="mt-2 text-[10px] tracking-wider uppercase text-[#EADDD3] flex items-center justify-center gap-1.5">
            <Flame className="w-3 h-3 text-[#C29B38]" />
            <span>{style === "gold" ? "24K Gold Foil Heat Stamped" : "Thermal Blind Deboss"}</span>
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6B5B52] mb-1">
              Enter Up to 8 Characters
            </label>
            <input
              type="text"
              maxLength={8}
              value={initials}
              onChange={(e) => setInitials(e.target.value.toUpperCase())}
              placeholder="E.G. AKM OR ADITYA"
              className="w-full h-12 px-4 rounded-xl border border-[#EADDD3] bg-[#FBF9F5] font-mono text-center tracking-widest text-lg uppercase text-[#2C1A11] focus:outline-none focus:border-[#7A3E1D] focus:ring-1 focus:ring-[#7A3E1D]"
            />
          </div>

          {/* Foil Finish Switcher */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6B5B52] mb-1.5">
              Finish Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setStyle("gold")}
                className={`min-h-[48px] rounded-xl font-semibold text-xs transition-all border flex items-center justify-center gap-1.5 active:scale-95 ${
                  style === "gold"
                    ? "bg-[#F3ECE5] text-[#7A3E1D] border-[#7A3E1D] shadow-micro font-bold"
                    : "bg-white text-[#6B5B52] border-[#EADDD3]"
                }`}
              >
                <span>✨ Heritage Gold Foil</span>
              </button>
              <button
                type="button"
                onClick={() => setStyle("blind")}
                className={`min-h-[48px] rounded-xl font-semibold text-xs transition-all border flex items-center justify-center gap-1.5 active:scale-95 ${
                  style === "blind"
                    ? "bg-[#2C1A11] text-white border-[#2C1A11] shadow-micro font-bold"
                    : "bg-white text-[#6B5B52] border-[#EADDD3]"
                }`}
              >
                <span>🔨 Blind Heat Deboss</span>
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex gap-2 pt-2 border-t border-[#EADDD3]">
          {currentInitials && (
            <button
              type="button"
              onClick={handleClear}
              className="min-h-[48px] px-4 rounded-full border border-[#EADDD3] text-xs font-semibold text-[#6B5B52] hover:text-rose-600 active:scale-95 transition-all"
            >
              Clear
            </button>
          )}

          <button
            type="button"
            onClick={handleApply}
            className="flex-1 min-h-[48px] rounded-full bg-[#7A3E1D] text-white hover:bg-[#633216] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-warm active:scale-95 transition-all"
          >
            <Check className="w-4 h-4" />
            <span>Apply to {productName}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
