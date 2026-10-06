"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShoppingBag,
  Check,
  MessageCircle,
  Eye,
  Layers,
} from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { MobileGallery } from "@/components/mobile/MobileGallery";
import { EmbossingBottomSheet } from "@/components/mobile/EmbossingBottomSheet";
import { LeatherGrainPlaceholder } from "@/components/LeatherGrainPlaceholder";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");
  const [embossingSheetOpen, setEmbossingSheetOpen] = useState(false);
  const [embossingText, setEmbossingText] = useState("");
  const [embossingStyle, setEmbossingStyle] = useState<"blind" | "gold">("gold");
  const [added, setAdded] = useState(false);

  // 3D Card Tilt State
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const { addItem, openCheckout } = useCart();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Subtle tilt: max ~5 degrees
    const rX = ((y - centerY) / centerY) * -5;
    const rY = ((x - centerX) / centerX) * 5;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleAddToCart = () => {
    addItem(product, selectedColor, embossingText, embossingStyle);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleDirectWhatsAppOrder = () => {
    openCheckout({
      id: `${product.id}-${selectedColor}-${embossingText}-${embossingStyle}`,
      product,
      selectedColor,
      embossingText: embossingText.trim().toUpperCase(),
      embossingStyle,
      quantity: 1,
      addedAt: Date.now(),
    });
  };

  const hasImages = product.images && product.images.length > 0 && !product.isPlaceholderImage;
  const primaryImage = product.cardImage || product.images[0];
  const secondaryImage = product.images[2] || product.images[1] || primaryImage;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        y: isHovered ? -4 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 24,
        mass: 0.5,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group relative bg-white rounded-2xl border border-[#EADDD3] overflow-hidden shadow-warm hover:border-[#7A3E1D] hover:shadow-elevated transition-shadow duration-300 flex flex-col justify-between w-full"
    >
      {/* ── Product Visual Area ── */}
      <div className="relative overflow-hidden">
        {/* Mobile View: Swipeable Carousel */}
        <div className="md:hidden">
          {hasImages ? (
            <MobileGallery
              productId={product.id}
              images={product.images}
              productName={product.name}
              tag={product.tag}
            />
          ) : (
            <div className="relative">
              {product.tag && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14100D]/80 text-[#EFE6D8] backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider border border-[#8A6A2F]/40 shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#C29B38]" />
                    {product.tag}
                  </span>
                </div>
              )}
              <LeatherGrainPlaceholder
                title={product.name}
                subtitle="Genuine Full-Grain Ambur Bovine"
                aspectRatio="4:5"
              />
            </div>
          )}
        </div>

        {/* Desktop View: Smooth Image Swap on Hover with 3D Depth */}
        <div className="hidden md:block relative aspect-[4/5] bg-[#FBF9F5] overflow-hidden">
          {/* Tag Badge */}
          {product.tag && (
            <div className="absolute top-3 left-3 z-20">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14100D]/85 text-[#EFE6D8] backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider border border-[#8A6A2F]/40 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#C29B38]" />
                {product.tag}
              </span>
            </div>
          )}

          {/* Provenance Stamp */}
          <div className="absolute top-3 right-3 z-20">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-[#7A3E1D] backdrop-blur-sm text-[10px] font-mono uppercase tracking-wider border border-[#EADDD3] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7A3E1D] animate-pulse" />
              <span>PIN 635802</span>
            </span>
          </div>

          {hasImages ? (
            <>
              {/* Primary Image */}
              <Image
                src={primaryImage}
                alt={`${product.name} primary craft view`}
                fill
                sizes="(max-width: 1024px) 50vw, 450px"
                className={`object-cover object-center transition-all duration-700 ease-out ${
                  isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
                }`}
              />

              {/* Secondary Image Swapped on Hover (Buckle / Hardware / Interior) */}
              <Image
                src={secondaryImage}
                alt={`${product.name} hardware mechanism and craft detail`}
                fill
                sizes="(max-width: 1024px) 50vw, 450px"
                className={`object-cover object-center transition-all duration-700 ease-out ${
                  isHovered ? "opacity-100 scale-105" : "opacity-0 scale-95"
                }`}
              />

              {/* Hover View Indicator Pill */}
              <div
                className={`absolute bottom-3 left-3 z-20 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-[#6B5B52] font-mono border border-[#EADDD3] shadow-xs transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="text-[#7A3E1D] font-bold">Inspect:</span> Hardware &amp; Mechanism
              </div>
            </>
          ) : (
            <div className="relative w-full h-full">
              {/* Wallet Placeholder with Interactive Interior Switch on Hover */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                <LeatherGrainPlaceholder
                  title={product.name}
                  subtitle="Full-Grain Ambur Bovine"
                  aspectRatio="4:5"
                />
              </div>

              {/* Simulated Interior Anatomy View on Hover */}
              <div
                className={`absolute inset-0 bg-[#241710] text-[#EFE6D8] p-6 flex flex-col justify-center items-center text-center transition-opacity duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <Layers className="w-8 h-8 text-[#D4A359] mb-3" />
                <h4 className="font-serif text-lg font-bold text-[#FAF3EA] mb-1">
                  Solid Hide Architecture
                </h4>
                <p className="text-xs text-[#C8B8A6] max-w-[220px] leading-relaxed mb-3">
                  6 Card Slots • Dual Currency Partitions • Brass Snap Coin Pocket
                </p>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4A359] border-t border-[#443224] pt-2">
                  Zero Cardboard Fillers
                </span>
              </div>
            </div>
          )}

          {/* Floating Personalize Button with Warm Brass Hover Glow */}
          {product.embossingAvailable && (
            <motion.button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setEmbossingSheetOpen(true);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-3 right-3 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E140E]/90 text-[#F5E8D2] text-[11px] font-mono tracking-wider border border-[#C29B38]/80 shadow-[0_0_15px_rgba(194,155,56,0.4)] hover:shadow-[0_0_22px_rgba(212,163,89,0.7)] backdrop-blur-md transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4A359] animate-pulse" />
              <span>{embossingText ? `[${embossingText}]` : "Personalize"}</span>
            </motion.button>
          )}
        </div>
      </div>

      {/* ── Content Body ── */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category Tag */}
          <div className="text-xs text-[#6B5B52] mb-1.5">
            <span className="uppercase tracking-widest font-bold text-[10px] text-[#7A3E1D]">
              {product.categoryLabel}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C1A11] leading-tight group-hover:text-[#7A3E1D] transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-[#6B5B52] mt-2 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Color Selection & Monogram Tag */}
        <div className="space-y-3 pt-3 border-t border-[#EADDD3]">
          <div className="flex items-center justify-between text-xs gap-2">
            <div className="flex items-center gap-1.5 truncate">
              <span className="text-[11px] text-[#6B5B52]">Color:</span>
              <span className="text-[11px] font-semibold text-[#2C1A11] truncate">
                {selectedColor}
              </span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color.name)}
                  title={color.name}
                  aria-label={`Select color ${color.name}`}
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 transition-all active:scale-90 ${
                    selectedColor === color.name
                      ? "border-[#7A3E1D] scale-110 shadow-sm"
                      : "border-transparent opacity-80 hover:opacity-100"
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          {/* Monogram Foil Studio Trigger */}
          {product.embossingAvailable && (
            <div className="flex items-center justify-between bg-[#F8F5F1] p-2 sm:p-2.5 rounded-xl border border-[#EADDD3] text-xs">
              <div className="flex items-center gap-1.5 truncate">
                <Sparkles className="w-3.5 h-3.5 text-[#C29B38] shrink-0" />
                <span className="text-[11px] text-[#6B5B52] truncate">
                  {embossingText ? (
                    <span>
                      Monogram:{" "}
                      <strong className="text-[#7A3E1D] tracking-widest font-mono">
                        {embossingText}
                      </strong>
                    </span>
                  ) : (
                    "Complimentary Monogram"
                  )}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setEmbossingSheetOpen(true)}
                className="shrink-0 text-[11px] font-bold text-[#7A3E1D] hover:underline px-1 py-0.5"
              >
                {embossingText ? "Edit" : "+ Add"}
              </button>
            </div>
          )}
        </div>

        {/* Price & Action Area - Mobile-Optimized for 360px+ Screens */}
        <div className="pt-3 border-t border-[#EADDD3] flex flex-col gap-2.5">
          <div className="flex items-baseline justify-between">
            <span className="font-serif text-2xl font-bold text-[#2C1A11]">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <span className="text-[10px] text-[#6B5B52] uppercase tracking-wider">
              Ambur Workshop Direct
            </span>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-2 items-center w-full">
            {/* Direct WhatsApp Order Button */}
            <button
              type="button"
              onClick={handleDirectWhatsAppOrder}
              className="min-w-[48px] h-12 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-all shadow-micro active:scale-95 px-3.5 cursor-pointer"
              title="Order on WhatsApp"
              aria-label="Order directly on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </button>

            {/* Add to Bag Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={`h-12 w-full inline-flex items-center justify-center gap-2 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-warm active:scale-95 cursor-pointer ${
                added
                  ? "bg-emerald-700 text-white"
                  : "bg-[#7A3E1D] text-white hover:bg-[#633216]"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 shrink-0" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile-Native Embossing Bottom Sheet */}
      <EmbossingBottomSheet
        isOpen={embossingSheetOpen}
        onClose={() => setEmbossingSheetOpen(false)}
        currentInitials={embossingText}
        currentStyle={embossingStyle}
        productName={product.name}
        onConfirm={(text, style) => {
          setEmbossingText(text);
          setEmbossingStyle(style);
        }}
      />
    </motion.div>
  );
}
