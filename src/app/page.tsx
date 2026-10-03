"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronDown,
  Layers,
  Heart,
  CheckCircle,
  Truck,
  RotateCw,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { EmbossingStudioTeaser } from "@/components/EmbossingStudioTeaser";
import { AmburStorySection } from "@/components/AmburStorySection";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Curations" },
    { id: "wallets", label: "Wallets" },
    { id: "cardholders", label: "RFID Cardholders" },
    { id: "belts", label: "Reversible Belts" },
    { id: "gift-sets", label: "2-in-1 Gift Boxes" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-[#1A1412] text-[#FDFBF7] pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden border-b border-[#2D2421]">
        {/* Subtle Warm Ambur Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C89D66]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B38F4D]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Heritage Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D2421] border border-[#3D322E] text-xs font-semibold uppercase tracking-widest text-[#C89D66]">
                <span className="w-2 h-2 rounded-full bg-[#C89D66] animate-pulse" />
                <span>Origin: Ambur, Tamil Nadu • Est. 1974</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight text-[#FDFBF7]">
                Mastery Forged in{" "}
                <span className="text-[#C89D66] italic font-normal">
                  Grain &amp; Time.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#C4B6AF] max-w-2xl mx-auto lg:mx-0 font-sans font-light leading-relaxed">
                Handcrafted from 100% genuine Ambur bovine leather in India&rsquo;s
                premier tanning hub. Cut without synthetic fillers, stamped with
                your initials for free, and delivered directly from our workshop floor
                at honest factory prices.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#collection"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#C89D66] text-[#1A1412] font-bold text-xs uppercase tracking-widest hover:bg-[#d6b284] active:scale-95 transition-all shadow-subtle group"
                >
                  <span>Explore 4 Core SKUs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#our-ambur-story"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-transparent border border-[#3D322E] text-[#E4DCD7] hover:border-[#C89D66] hover:text-[#C89D66] text-xs font-semibold uppercase tracking-widest transition-all"
                >
                  <span>The Ambur Heritage</span>
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-8 border-t border-[#2D2421] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div className="space-y-1">
                  <div className="text-lg font-serif font-bold text-[#C89D66]">
                    100% Full-Grain
                  </div>
                  <div className="text-[11px] text-[#9C8980]">
                    Ambur Bovine Hides
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-lg font-serif font-bold text-[#C89D66]">
                    Free Monogram
                  </div>
                  <div className="text-[11px] text-[#9C8980]">
                    Custom Initial Foil
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-lg font-serif font-bold text-[#C89D66]">
                    ₹499 - ₹1,699
                  </div>
                  <div className="text-[11px] text-[#9C8980]">
                    Zero-Markup Factory
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-lg font-serif font-bold text-[#C89D66]">
                    5-Year Patina
                  </div>
                  <div className="text-[11px] text-[#9C8980]">
                    Heirloom Guarantee
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Card */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#3D322E] shadow-leather bg-[#221B18]">
                  <Image
                    src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=85"
                    alt="Handcrafted Ambur Bovine Leather Wallet with Brass Detailing"
                    fill
                    priority
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1412] via-transparent to-transparent opacity-80" />

                  {/* Floating Authenticity Badge */}
                  <div className="absolute top-4 left-4 bg-[#1A1412]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C89D66]/40 flex items-center gap-2 text-xs text-[#FDFBF7]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Ambur Workshop Stock • Batch #74</span>
                  </div>

                  {/* Bottom Highlight Overlay */}
                  <div className="absolute bottom-6 inset-x-6 bg-[#1A1412]/95 backdrop-blur-md p-4 rounded-2xl border border-[#3D322E] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#C89D66] font-semibold uppercase tracking-wider text-[10px]">
                        Flagship SKU
                      </span>
                      <span className="text-[#9C8980] line-through text-[11px]">
                        MSRP ₹1,499
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-semibold text-[#FDFBF7]">
                        Classic Bi-Fold Coin Wallet
                      </span>
                      <span className="font-serif text-xl font-bold text-[#C89D66]">
                        ₹899
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#C4B6AF] pt-1 border-t border-[#2D2421]">
                      <Sparkles className="w-3.5 h-3.5 text-[#C89D66]" />
                      <span>Complimentary Gold-Foil Name Embossing</span>
                    </div>
                  </div>
                </div>

                {/* Secondary Accent Floating Card */}
                <div className="hidden sm:flex absolute -bottom-6 -left-8 bg-[#2D2421]/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#C89D66]/40 shadow-xl items-center gap-3 max-w-[240px]">
                  <div className="w-10 h-10 rounded-xl bg-[#C89D66] text-[#1A1412] flex items-center justify-center font-bold shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-[#FDFBF7]">100% Bovine</div>
                    <div className="text-[10px] text-[#C4B6AF]">Unbonded Full Grain</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PRODUCT CATALOG SECTION */}
      <section id="collection" className="py-20 bg-[#FDFBF7] text-[#1A1412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B38F4D]">
              <Sparkles className="w-3.5 h-3.5 text-[#C89D66]" />
              <span>Phase 1 Initial Foundation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1A1412]">
              The Ambur Core Essentials.
            </h2>
            <p className="text-sm sm:text-base text-[#5A4B45] leading-relaxed">
              Strictly genuine Ambur bovine leather. Four initial SKUs engineered
              with heirloom durability and zero-cost custom monogramming.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#1A1412] text-[#C89D66] shadow-micro"
                    : "bg-white text-[#5A4B45] border border-[#E4DCD7] hover:border-[#C89D66]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 4 Core SKUs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} id={product.category}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE EMBOSSING STUDIO TEASER */}
      <EmbossingStudioTeaser />

      {/* PATINA TIME ACCORDION SHOWCASE */}
      <section className="py-20 bg-[#FAF7F5] border-y border-[#E4DCD7] text-[#1A1412]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B38F4D]">
              Heirloom Longevity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1A1412]">
              The Living Ambur Patina.
            </h2>
            <p className="text-xs sm:text-sm text-[#5A4B45] leading-relaxed">
              Unlike chemical polyurethane that peels, Ambur bovine full-grain absorbs
              the oils of your hands, friction, and daily weather&mdash;transforming
              into a lustrous, battle-tested golden-amber shade over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E4DCD7] shadow-micro">
              <div className="text-xs font-bold uppercase tracking-wider text-[#9C8980] mb-2">
                Stage 01 • Day 1
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1A1412] mb-2">
                Factory Fresh &amp; Matte
              </h3>
              <p className="text-xs text-[#5A4B45] leading-relaxed mb-4">
                Crisp oil pull-up finish with natural grain pores visible. Firm hand-feel with rich earthy tannin aroma.
              </p>
              <div className="h-2 rounded-full bg-[#E4DCD7] overflow-hidden">
                <div className="h-full bg-[#C89D66] w-1/4" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#C89D66] shadow-subtle relative">
              <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-[#C89D66] text-[#1A1412] px-2 py-0.5 rounded-full">
                Golden Ratio
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#C89D66] mb-2">
                Stage 02 • 12 Months
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1A1412] mb-2">
                Supple &amp; Lustrous
              </h3>
              <p className="text-xs text-[#5A4B45] leading-relaxed mb-4">
                Leather softens to fit your pocket contour. Light scuffs dissolve into a silky, glowing caramel tone.
              </p>
              <div className="h-2 rounded-full bg-[#E4DCD7] overflow-hidden">
                <div className="h-full bg-[#C89D66] w-2/3" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E4DCD7] shadow-micro">
              <div className="text-xs font-bold uppercase tracking-wider text-[#9C8980] mb-2">
                Stage 03 • 5 Years+
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1A1412] mb-2">
                Heirloom Masterpiece
              </h3>
              <p className="text-xs text-[#5A4B45] leading-relaxed mb-4">
                Deep espresso and saddle marbling. Indestructible bonded stitching remains intact for the next generation.
              </p>
              <div className="h-2 rounded-full bg-[#E4DCD7] overflow-hidden">
                <div className="h-full bg-[#1A1412] w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMBUR HERITAGE & PROVENANCE STORY */}
      <AmburStorySection />
    </div>
  );
}
