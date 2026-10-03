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
            ? "bg-[#1A1412]/95 backdrop-blur-md border-b border-[#3D322E] shadow-subtle"
            : "bg-[#1A1412] border-b border-[#2D2421]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Mobile Menu Toggle & Desktop Quick Nav */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#FDFBF7] hover:text-[#C89D66] hover:bg-[#2D2421] transition-colors focus:outline-none"
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
                    className="group relative text-sm font-medium tracking-wide text-[#E4DCD7] hover:text-[#C89D66] transition-colors py-2"
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="ml-1.5 inline-block text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-[#C89D66]/20 text-[#C89D66] border border-[#C89D66]/30">
                        {link.badge}
                      </span>
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89D66] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Center: Brand Logo Lockup */}
            <div className="flex-1 md:flex-initial text-center md:text-center">
              <Link href="/" className="inline-block group focus:outline-none">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-sans tracking-[0.35em] uppercase text-[#B38F4D] font-semibold mb-0.5 group-hover:text-[#C89D66] transition-colors">
                    EST. 1974 • AMBUR
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#FDFBF7] group-hover:text-[#C89D66] transition-colors">
                    AMBUR CRAFT
                  </span>
                  <span className="text-[9px] font-sans tracking-[0.25em] uppercase text-[#9C8980] hidden sm:block">
                    GENUINE BOVINE LEATHER
                  </span>
                </div>
              </Link>
            </div>

            {/* Right: Currency Selector & Cart Action */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* Currency Selector (Fixed INR as pan-India focus) */}
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#2D2421]/80 border border-[#3D322E] text-xs font-medium text-[#E4DCD7]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>INR (₹)</span>
                <ChevronDown className="w-3 h-3 text-[#9C8980]" />
              </div>

              {/* Free Embossing Pill (Desktop) */}
              <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#C89D66] bg-[#C89D66]/10 px-3 py-1.5 rounded-full border border-[#C89D66]/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-medium">Free Embossing</span>
              </div>

              {/* Cart Button */}
              <button
                type="button"
                onClick={openCart}
                className="relative inline-flex items-center gap-2 p-2.5 sm:px-4 sm:py-2 rounded-full bg-[#C89D66] text-[#1A1412] font-semibold text-xs tracking-wider uppercase hover:bg-[#d6b284] active:scale-95 transition-all shadow-micro"
                aria-label="View shopping bag"
              >
                <ShoppingBag className="w-4 h-4 text-[#1A1412]" />
                <span className="hidden sm:inline">Bag</span>
                {totalCount > 0 && (
                  <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-[#1A1412] text-[#FDFBF7] text-[11px] font-bold">
                    {totalCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A1412] border-b border-[#3D322E] px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-[#FDFBF7] hover:bg-[#2D2421] hover:text-[#C89D66] transition-colors"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#C89D66]/20 text-[#C89D66] border border-[#C89D66]/30">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}

              <div className="pt-4 border-t border-[#2D2421] flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-[#C4B6AF] px-3 py-1">
                  <span>Currency</span>
                  <span className="font-semibold text-[#FDFBF7]">INR (₹) • India</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#C89D66] bg-[#C89D66]/10 p-3 rounded-lg border border-[#C89D66]/20">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Free Initial / Name Embossing available on all items!</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
