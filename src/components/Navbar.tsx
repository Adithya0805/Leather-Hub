"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Menu,
  X,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Search,
} from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { openCart, getTotalCount } = useCartStore();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalCount = mounted ? getTotalCount() : 0;

  const navLinks = [
    { label: "Wallets", href: "#wallets", badge: "Bestseller" },
    { label: "Belts", href: "#belts" },
    { label: "Gift Sets", href: "#gift-sets", badge: "Personalized" },
    { label: "Our Ambur Story", href: "#our-ambur-story" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#EADDD3] shadow-warm"
            : "bg-[#FBF9F5] border-b border-[#EADDD3]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Mobile Menu Toggle & Desktop Quick Nav */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-[#2C1A11] hover:text-[#7A3E1D] hover:bg-[#F3ECE5] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group relative text-sm font-medium tracking-wide text-[#6B5B52] hover:text-[#7A3E1D] transition-colors py-2"
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="ml-1.5 inline-block text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-[#F3ECE5] text-[#7A3E1D] border border-[#EADDD3]">
                        {link.badge}
                      </span>
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7A3E1D] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Center: Brand Logo Lockup */}
            <div className="flex-1 md:flex-initial text-center md:text-center">
              <Link href="/" className="inline-block group focus:outline-none">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-sans tracking-[0.35em] uppercase text-[#C29B38] font-bold mb-0.5 group-hover:text-[#7A3E1D] transition-colors">
                    EST. 1974 • AMBUR
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#2C1A11] group-hover:text-[#7A3E1D] transition-colors">
                    AMBUR CRAFT
                  </span>
                  <span className="text-[9px] font-sans tracking-[0.25em] uppercase text-[#6B5B52] hidden sm:block">
                    GENUINE BOVINE LEATHER
                  </span>
                </div>
              </Link>
            </div>

            {/* Right: Currency Selector & Cart Action */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* Currency Selector (Fixed INR as pan-India focus) */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3ECE5] border border-[#EADDD3] text-xs font-semibold text-[#7A3E1D]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>INR (₹)</span>
                <ChevronDown className="w-3 h-3 text-[#7A3E1D]" />
              </div>

              {/* Free Embossing Pill (Desktop) */}
              <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#7A3E1D] bg-[#F3ECE5] px-3 py-1.5 rounded-full border border-[#EADDD3]">
                <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
                <span className="font-semibold">Free Embossing</span>
              </div>

              {/* Cart Button */}
              <button
                type="button"
                onClick={openCart}
                className="relative inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#7A3E1D] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#633216] active:scale-95 transition-all shadow-warm"
                aria-label="View shopping bag"
              >
                <ShoppingBag className="w-4 h-4 text-white" />
                <span className="hidden sm:inline">Bag</span>
                {totalCount > 0 && (
                  <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-white text-[#7A3E1D] text-[11px] font-extrabold shadow-micro">
                    {totalCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#EADDD3] px-4 pt-3 pb-6 animate-fadeIn shadow-elevated">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold text-[#2C1A11] hover:bg-[#FBF9F5] hover:text-[#7A3E1D] transition-colors"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F3ECE5] text-[#7A3E1D] border border-[#EADDD3]">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}

              <div className="pt-4 border-t border-[#EADDD3] flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-[#6B5B52] px-3.5 py-1">
                  <span>Currency</span>
                  <span className="font-semibold text-[#2C1A11]">INR (₹) • India</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#7A3E1D] bg-[#F3ECE5] p-3 rounded-xl border border-[#EADDD3]">
                  <Sparkles className="w-4 h-4 shrink-0 text-[#C29B38]" />
                  <span className="font-medium">Free Initial / Name Embossing included on all handcrafted orders!</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
