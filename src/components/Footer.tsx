"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  ShieldCheck,
  Sparkles,
  Phone,
  Mail,
  Heart,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F3ECE5] text-[#2C1A11] border-t border-[#EADDD3] font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#EADDD3]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="Dino Leathers Medallion"
                width={72}
                height={72}
                className="rounded-full shadow-md object-cover shrink-0"
              />
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-sans tracking-[0.35em] uppercase text-[#7A3E1D] font-bold mb-1">
                  EST. AMBUR • TN
                </span>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#2C1A11]">
                  DINO LEATHERS
                </span>
                <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#6B5B52] font-semibold">
                  AUTHENTIC BOVINE LEATHER
                </span>
              </div>
            </div>

            <p className="text-xs text-[#6B5B52] max-w-sm leading-relaxed font-medium">
              Dino Leathers — Handcrafted in Ambur, Tamil Nadu. Built for a Lifetime of Character.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#7A3E1D] font-medium">
              <MapPin className="w-4 h-4 shrink-0 text-[#7A3E1D]" />
              <span>Workshop: MC Road, Ambur, Tirupattur Dist, TN 635802</span>
            </div>
          </div>

          {/* Quick Collection Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#2C1A11] mb-4">
              Curated Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#6B5B52]">
              <li>
                <Link href="#wallets" className="hover:text-[#7A3E1D] transition-colors">
                  Full-Grain Bi-Fold Wallets
                </Link>
              </li>
              <li>
                <Link href="#belts" className="hover:text-[#7A3E1D] transition-colors">
                  Executive Ratchet Belts
                </Link>
              </li>
              <li>
                <span className="text-[#7A3E1D] font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#C29B38]" /> Free Initials Embossing
                </span>
              </li>
            </ul>
          </div>

          {/* Provenance & Craft */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#2C1A11] mb-4">
              Ambur Craftsmanship
            </h4>
            <ul className="space-y-2.5 text-xs text-[#6B5B52]">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7A3E1D]" />
                <span>100% Ambur Bovine Leather</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7A3E1D]" />
                <span>Zero Cardboard Fillers</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7A3E1D]" />
                <span>Workshop Direct Pricing</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7A3E1D]" />
                <span>Pan-India Safe Transit</span>
              </li>
            </ul>
          </div>

          {/* Direct Factory Updates */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#2C1A11] mb-4">
              Direct Workshop Updates
            </h4>
            <p className="text-xs text-[#6B5B52] mb-3 leading-relaxed">
              Receive notifications for new leather finishes, tannery updates, and workshop announcements.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full bg-white border border-[#EADDD3] rounded-lg px-3 py-2 text-xs text-[#2C1A11] placeholder:text-[#9A8C84] focus:outline-none focus:border-[#7A3E1D] shadow-sm"
              />
              <button
                type="button"
                className="w-full py-2.5 px-3 rounded-lg bg-[#7A3E1D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#633216] transition-colors shadow-warm"
              >
                Join Private Guild
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B5B52]">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Dino Leathers. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#8C7E76]">
            <span>100% Genuine Bovine</span>
            <span>•</span>
            <span>Handcrafted in Ambur</span>
            <span>•</span>
            <span>Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
