"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Layers,
  Flame,
  Award,
  Compass,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { AmburStorySection } from "@/components/AmburStorySection";
import { AuthenticityComparison } from "@/components/AuthenticityComparison";
import { PatinaJourneySection } from "@/components/PatinaJourneySection";
import { WorkshopCustomizationSection } from "@/components/WorkshopCustomizationSection";
import { BehindTheLeatherJournal } from "@/components/BehindTheLeatherJournal";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Curations" },
    { id: "wallet", label: "Wallets" },
    { id: "belt", label: "Belts" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  // Parallax scroll hook for hero visuals
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const parallaxBgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const parallaxVisualY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  // Staggered motion variants for initial load reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen pb-32 md:pb-12 bg-[#FBF9F5] text-[#2C1A11]">
      
      {/* ── SECTION 1: HOMEPAGE HERO & VALUE PROPOSITION ── */}
      <section
        ref={heroRef}
        className="relative bg-[#FBF9F5] text-[#2C1A11] pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-[#EADDD3]"
      >
        {/* Parallax Background Texture & Workshop Ambient Glow */}
        <motion.div
          style={{ y: parallaxBgY }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          {/* Subtle leather grain SVG matrix */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `radial-gradient(#2C1A11 1.2px, transparent 1.2px)`,
              backgroundSize: "20px 20px",
            }}
          />
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#7A3E1D]/8 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#C29B38]/8 rounded-full blur-[110px]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Narrative Column with Staggered Motion Reveal */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Origin Pill */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3ECE5] border border-[#EADDD3] text-xs font-semibold uppercase tracking-widest text-[#7A3E1D]"
              >
                <Compass className="w-3.5 h-3.5 text-[#7A3E1D]" />
                <span>MC Road, Ambur, Tamil Nadu • PIN 635802</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-tight text-[#2C1A11]"
              >
                Proven Craftsmanship. <br />
                <span className="text-[#7A3E1D] italic font-normal">
                  A Bold New Direct Era.
                </span>
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-[#6B5B52] max-w-2xl mx-auto lg:mx-0 font-sans font-light leading-relaxed"
              >
                Dino Leathers brings market-tested, export-grade full-grain bovine wallets and belts 
                directly from Ambur&rsquo;s master workshops to your hands&mdash;without middleman markups.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href="#collection"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#7A3E1D] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#633216] active:scale-95 transition-all shadow-warm group"
                >
                  <span>Explore Proven Collections</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#customization"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border border-[#EADDD3] text-[#2C1A11] hover:border-[#7A3E1D] hover:text-[#7A3E1D] text-xs font-semibold uppercase tracking-widest transition-all shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
                  <span>Custom Monogram Preview</span>
                </a>
              </motion.div>

              {/* 4 Key Trust Badges / Highlights */}
              <motion.div
                variants={itemVariants}
                className="pt-8 border-t border-[#EADDD3] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
              >
                <div className="bg-white p-4 rounded-xl border border-[#EADDD3] shadow-xs space-y-1 hover:border-[#7A3E1D] transition-colors">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#7A3E1D] uppercase font-mono">
                    <ShieldCheck className="w-4 h-4 text-[#7A3E1D]" />
                    <span>100% Ambur Hide</span>
                  </div>
                  <p className="text-[11px] text-[#6B5B52] leading-snug">
                    Genuine bovine leather. Zero bonded leather or PU plastic.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#EADDD3] shadow-xs space-y-1 hover:border-[#7A3E1D] transition-colors">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#7A3E1D] uppercase font-mono">
                    <Layers className="w-4 h-4 text-[#7A3E1D]" />
                    <span>Zero Cardboard</span>
                  </div>
                  <p className="text-[11px] text-[#6B5B52] leading-snug">
                    No paper fillers. Solid single-ply bovine hide edge-to-edge.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#EADDD3] shadow-xs space-y-1 hover:border-[#7A3E1D] transition-colors">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#7A3E1D] uppercase font-mono">
                    <Flame className="w-4 h-4 text-[#C29B38]" />
                    <span>Free Monogram</span>
                  </div>
                  <p className="text-[11px] text-[#6B5B52] leading-snug">
                    Complimentary 115°C hand-stamped brass die debossing.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#EADDD3] shadow-xs space-y-1 hover:border-[#7A3E1D] transition-colors">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#7A3E1D] uppercase font-mono">
                    <Award className="w-4 h-4 text-[#7A3E1D]" />
                    <span>PIN 635802 Direct</span>
                  </div>
                  <p className="text-[11px] text-[#6B5B52] leading-snug">
                    Factory-direct pricing without mall lease or middleman markups.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Hero Visual Showcase with Parallax Translation */}
            <motion.div
              style={{ y: parallaxVisualY }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Card with Real Belt Photography */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#EADDD3] shadow-warm bg-[#FBF9F5]">
                  <Image
                    src="/images/products/reversible-formal-casual-belt/reversible-formal-casual-belt-hero-4x5-960.webp"
                    alt="Dino Leathers Executive Automatic Ratchet Belt handcrafted from solid Ambur bovine leather"
                    fill
                    priority
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A11]/60 via-transparent to-transparent opacity-70" />

                  {/* Bottom Highlight Overlay */}
                  <div className="absolute bottom-6 inset-x-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#EADDD3] shadow-warm space-y-1 text-[#2C1A11]">
                    <span className="text-[#7A3E1D] font-bold uppercase tracking-wider text-[10px] block font-mono">
                      Ambur Master Craftsmanship • PIN 635802
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-bold text-[#2C1A11]">
                        Executive Ratchet Belt
                      </span>
                      <span className="font-serif text-xl font-bold text-[#7A3E1D]">
                        ₹1,199
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#6B5B52] pt-1 border-t border-[#EADDD3]">
                      <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
                      <span>Complimentary Brass Die Monogram Included</span>
                    </div>
                  </div>
                </div>

                {/* Secondary Accent Floating Card */}
                <div className="hidden sm:flex absolute -bottom-6 -left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#EADDD3] shadow-warm items-center gap-3 max-w-[260px]">
                  <Image
                    src="/images/logo.png"
                    alt="Dino Leathers Workshop Atelier"
                    width={42}
                    height={42}
                    className="rounded-full shadow-sm shrink-0 object-cover border border-[#EADDD3]"
                  />
                  <div className="text-xs">
                    <div className="font-bold text-[#2C1A11]">Dino Leathers</div>
                    <div className="text-[10px] text-[#7A3E1D] font-mono">100% Full-Grain Bovine</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CORE PRODUCT CATALOG SECTION (Wallets and Belts Only) ── */}
      <section id="collection" className="py-24 bg-[#FBF9F5] text-[#2C1A11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2C1A11]">
              The Ambur Curations.
            </h2>
            <p className="text-sm sm:text-base text-[#6B5B52] leading-relaxed">
              Market-tested Ambur bovine leather articles engineered for daily longevity
              and personalized with your name at zero extra cost.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#7A3E1D] text-white shadow-warm"
                    : "bg-white text-[#6B5B52] border border-[#EADDD3] hover:border-[#7A3E1D] hover:text-[#7A3E1D] shadow-sm"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Wallets & Belts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {filteredProducts.map((product) => (
              <div key={product.id} id={product.category === "wallet" ? "wallets" : "belts"}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE AMBUR HERITAGE (New Brand. Centuries of Mastery & Animated Metrics) ── */}
      <AmburStorySection />

      {/* ── SECTION 3: THE AUTHENTICITY COMPARISON (Full-Grain vs Mall Brands) ── */}
      <AuthenticityComparison />

      {/* ── SECTION 4: THE LIVING PATINA JOURNEY (3-Stage Evolution) ── */}
      <PatinaJourneySection />

      {/* ── SECTION 5: WORKSHOP VALUE & CUSTOMIZATION (Heated Brass Monogramming) ── */}
      <WorkshopCustomizationSection />

      {/* ── SECTION 6: BEHIND THE LEATHER JOURNAL (4 SEO Knowledge Articles) ── */}
      <BehindTheLeatherJournal />

    </div>
  );
}
