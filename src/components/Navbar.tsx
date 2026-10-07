"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Menu,
  X,
  Compass,
  ArrowRight,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCart, items, isMounted } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalCount = isMounted
    ? items.reduce((total, item) => total + item.quantity, 0)
    : 0;

  const navLinks = [
    { label: "Collections", href: "/#collection" },
    { label: "Wholesale & Bulk", href: "/wholesale" },
    { label: "Free Monogramming", href: "/#customizer-section" },
    { label: "Ambur Heritage", href: "/ambur-heritage" },
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
          <div className="flex items-center justify-between h-[64px]">
            {/* Left: Mobile Menu Toggle & Brand Logo Lockup */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-xl text-[#2C1A11] hover:text-[#7A3E1D] hover:bg-[#F3ECE5] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>

              <Link href="/" className="inline-flex items-center gap-2.5 sm:gap-3 group focus:outline-none py-1">
                <Image
                  src="/images/logo.png"
                  alt="Dino Leathers"
                  width={38}
                  height={38}
                  className="rounded-full shadow-sm w-9 h-9 sm:w-10 sm:h-10 object-cover shrink-0 border border-[#EADDD3]"
                  priority
                />
                <div className="flex flex-col items-start text-left">
                  <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#2C1A11] group-hover:text-[#7A3E1D] transition-colors leading-none">
                    DINO LEATHERS
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-sans tracking-[0.25em] uppercase text-[#7A3E1D] font-bold mt-0.5">
                    EST. AMBUR • TN
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative text-xs font-semibold tracking-wider uppercase text-[#6B5B52] hover:text-[#7A3E1D] transition-colors py-1"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7A3E1D] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right: Primary Action Button (Discover Ambur) & Cart */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              {/* PRIMARY ACTION BUTTON: Discover Ambur */}
              <Link
                href="/ambur-heritage"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-[#7A3E1D] text-[#7A3E1D] hover:bg-[#7A3E1D] hover:text-white transition-all text-xs font-bold uppercase tracking-wider shadow-xs hover:shadow-warm active:scale-95"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Discover Ambur</span>
              </Link>

              {/* Cart Button */}
              <button
                type="button"
                onClick={openCart}
                className="relative inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#7A3E1D] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#633216] active:scale-95 transition-all shadow-warm cursor-pointer"
                aria-label="View shopping bag"
              >
                <ShoppingBag className="w-4 h-4 text-white" />
                <span className="hidden md:inline">Bag</span>
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
          <div className="lg:hidden bg-white border-b border-[#EADDD3] px-4 pt-3 pb-6 animate-fadeIn shadow-elevated">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold text-[#2C1A11] hover:bg-[#FBF9F5] hover:text-[#7A3E1D] transition-colors"
                >
                  <span>{link.label}</span>
                </Link>
              ))}

              <div className="pt-3 border-t border-[#EADDD3] flex flex-col gap-2.5">
                <Link
                  href="/ambur-heritage"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#7A3E1D] text-white text-xs font-bold uppercase tracking-wider shadow-warm"
                >
                  <Compass className="w-4 h-4" />
                  <span>Discover Ambur Heritage</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
