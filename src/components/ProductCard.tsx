"use client";

import React, { useState } from "react";
import {
  Star,
  Sparkles,
  ShoppingBag,
  Check,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/useCartStore";
import { MobileGallery } from "@/components/mobile/MobileGallery";
import { EmbossingBottomSheet } from "@/components/mobile/EmbossingBottomSheet";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");
  const [embossingSheetOpen, setEmbossingSheetOpen] = useState(false);
  const [embossingText, setEmbossingText] = useState("");
  const [embossingStyle, setEmbossingStyle] = useState<"blind" | "gold">("gold");
  const [added, setAdded] = useState(false);

  const { addItem, openCheckout } = useCartStore();

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

  return (
    <div className="group relative bg-[#FDFBF7] rounded-3xl border border-[#E4DCD7] overflow-hidden shadow-micro hover:shadow-leather transition-all duration-500 flex flex-col justify-between">
      {/* Touch-Optimized Swipeable Mobile Gallery with Zoom */}
      <MobileGallery
        images={product.imageAngles}
        productName={product.name}
        tag={product.tag}
      />

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-[#7A6860] mb-1.5">
            <span className="uppercase tracking-wider font-bold text-[10px] text-[#B38F4D]">
              {product.categoryLabel}
            </span>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-[#1A1412]">
              <Star className="w-3.5 h-3.5 fill-[#C89D66] text-[#C89D66]" />
              <span>{product.rating}</span>
              <span className="text-[#9C8980]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1412] leading-tight group-hover:text-[#9E7238] transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-[#5A4B45] mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Color Swatches */}
        <div className="pt-2 border-t border-[#E4DCD7]/60 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-[#7A6860]">Color:</span>
            <span className="text-[11px] font-semibold text-[#1A1412]">
              {selectedColor}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {product.colors.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() => setSelectedColor(color.name)}
                title={color.name}
                className={`min-w-[28px] min-h-[28px] rounded-full border-2 transition-all active:scale-90 ${
                  selectedColor === color.name
                    ? "border-[#1A1412] scale-110 shadow-sm"
                    : "border-transparent opacity-80 hover:opacity-100"
                }`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select color ${color.name}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Sheet Personalization Trigger */}
        <div className="bg-[#FAF7F5] rounded-2xl p-3 border border-[#E4DCD7] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#5A4B45] min-w-0">
            <Sparkles className="w-4 h-4 text-[#C89D66] shrink-0" />
            <span className="text-[11px] truncate">
              {embossingText ? (
                <span>
                  Initials: <strong className="text-[#1A1412]">{embossingText}</strong> ({embossingStyle === "gold" ? "Gold Foil" : "Blind Deboss"})
                </span>
              ) : (
                <span>Free Initial Stamping (₹0)</span>
              )}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setEmbossingSheetOpen(true)}
            className="min-h-[36px] px-2.5 rounded-lg text-[11px] font-bold uppercase tracking-wider text-[#9E7238] hover:text-[#1A1412] shrink-0 active:scale-95 transition-all"
          >
            {embossingText ? "Edit" : "+ Add Name"}
          </button>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="pt-3 border-t border-[#E4DCD7] flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-bold text-[#1A1412]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#9C8980] line-through font-normal">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <span className="text-[10px] text-[#7A6860] uppercase tracking-wider block">
              Factory Direct • Ambur
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Direct WhatsApp Order Button */}
            <button
              type="button"
              onClick={handleDirectWhatsAppOrder}
              className="min-w-[48px] min-h-[48px] rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-all shadow-micro active:scale-90"
              title="Order directly on WhatsApp"
              aria-label="Order directly on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </button>

            {/* Add to Bag Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={`min-h-[48px] inline-flex items-center justify-center gap-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-micro active:scale-95 ${
                added
                  ? "bg-emerald-700 text-white"
                  : "bg-[#1A1412] text-[#FDFBF7] hover:bg-[#C89D66] hover:text-[#1A1412]"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
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
    </div>
  );
}
