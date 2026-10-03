"use client";

import React from "react";
import Link from "next/link";
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
    <footer className="bg-[#120D0B] text-[#FDFBF7] border-t border-[#2D2421] font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#2D2421]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-sans tracking-[0.35em] uppercase text-[#B38F4D] font-semibold mb-1">
                EST. 1974 • AMBUR
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FDFBF7]">
                AMBUR CRAFT
              </span>
              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#9C8980]">
                AUTHENTIC BOVINE LEATHER
              </span>
            </div>

            <p className="text-xs text-[#9C8980] max-w-sm leading-relaxed">
              Dispatched directly from the historic tannery belt of Ambur, Tamil
              Nadu. We handcraft indestructible wallets, cardholders, and belts
              from genuine bovine full-grain leather, delivered with free custom
              initials embossing across India.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#C89D66]">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Workshop: MC Road, Ambur, Tirupattur Dist, TN 635802</span>
            </div>
          </div>

          {/* Quick Collection Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#FDFBF7] mb-4">
              Curated Offerings
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C4B6AF]">
              <li>
                <Link href="#wallets" className="hover:text-[#C89D66] transition-colors">
                  Full-Grain Bi-Fold Wallets
                </Link>
              </li>
              <li>
                <Link href="#cardholders" className="hover:text-[#C89D66] transition-colors">
                  Slim RFID Cardholders
                </Link>
              </li>
              <li>
                <Link href="#belts" className="hover:text-[#C89D66] transition-colors">
                  Reversible Solid Brass Belts
                </Link>
              </li>
              <li>
                <Link href="#gift-sets" className="hover:text-[#C89D66] transition-colors">
                  2-in-1 Executive Gift Sets
                </Link>
              </li>
              <li>
                <span className="text-[#C89D66] font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Free Initials Embossing
                </span>
              </li>
            </ul>
          </div>

          {/* Provenance & Guarantees */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#FDFBF7] mb-4">
              Ambur Assurance
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C4B6AF]">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C89D66]" />
                <span>100% Ambur Bovine Hides</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C89D66]" />
                <span>5-Year Patina Warranty</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C89D66]" />
                <span>Zero-Risk Factory Pricing</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C89D66]" />
                <span>Pan-India Safe Transit</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Direct Factory Dispatch */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#FDFBF7] mb-4">
              Direct Factory Updates
            </h4>
            <p className="text-xs text-[#9C8980] mb-3">
              Receive notifications for fresh small-batch hides, rare Crazy Horse finishes, and festive gift boxes.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full bg-[#1A1412] border border-[#2D2421] rounded-lg px-3 py-2 text-xs text-[#FDFBF7] focus:outline-none focus:border-[#C89D66]"
              />
              <button
                type="button"
                className="w-full py-2 px-3 rounded-lg bg-[#C89D66] text-[#1A1412] text-xs font-bold uppercase tracking-wider hover:bg-[#d6b284] transition-colors"
              >
                Join Private Guild
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6860]">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Ambur Craft Leather Co. Handcrafted with pride in Ambur, Tamil Nadu.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#9C8980]">
            <span>100% Genuine Bovine</span>
            <span>•</span>
            <span>Factory Direct</span>
            <span>•</span>
            <span>Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
