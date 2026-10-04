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
    <div className="group relative bg-white rounded-2xl border border-[#EADDD3] overflow-hidden shadow-warm hover:shadow-elevated transition-all duration-500 flex flex-col justify-between">
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
          <div className="flex items-center justify-between text-xs text-[#6B5B52] mb-1.5">
            <span className="uppercase tracking-wider font-bold text-[10px] text-[#7A3E1D]">
              {product.categoryLabel}
            </span>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-[#2C1A11]">
              <Star className="w-3.5 h-3.5 fill-[#C29B38] text-[#C29B38]" />
              <span>{product.rating}</span>
              <span className="text-[#9A8C84]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C1A11] leading-tight group-hover:text-[#7A3E1D] transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-[#6B5B52] mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Color Swatches */}
        <div className="pt-2 border-t border-[#EADDD3] flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-[#6B5B52]">Color:</span>
            <span className="text-[11px] font-semibold text-[#2C1A11]">
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
                    ? "border-[#7A3E1D] scale-110 shadow-sm"
                    : "border-transparent opacity-80 hover:opacity-100"
                }`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select color ${color.name}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Sheet Personalization Trigger */}
        <div className="bg-[#F3ECE5] rounded-xl p-3 border border-[#EADDD3] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#7A3E1D] min-w-0">
            <Sparkles className="w-4 h-4 text-[#C29B38] shrink-0" />
            <span className="text-[11px] truncate font-medium">
              {embossingText ? (
                <span>
                  Initials: <strong className="text-[#2C1A11]">{embossingText}</strong> ({embossingStyle === "gold" ? "Gold Foil" : "Blind Deboss"})
                </span>
              ) : (
                <span>Free Name Embossing (₹0)</span>
              )}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setEmbossingSheetOpen(true)}
            className="min-h-[36px] px-2.5 rounded-lg text-[11px] font-bold uppercase tracking-wider text-[#7A3E1D] hover:text-[#633216] shrink-0 active:scale-95 transition-all"
          >
            {embossingText ? "Edit" : "+ Add Name"}
          </button>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="pt-3 border-t border-[#EADDD3] flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-bold text-[#2C1A11]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#9A8C84] line-through font-normal">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <span className="text-[10px] text-[#6B5B52] uppercase tracking-wider block">
              Factory Direct • Ambur
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Direct WhatsApp Order Button */}
            <button
              type="button"
              onClick={handleDirectWhatsAppOrder}
              className="min-w-[48px] min-h-[48px] rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-all shadow-micro active:scale-90"
              title="Order directly on WhatsApp"
              aria-label="Order directly on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </button>

            {/* Add to Bag Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={`min-h-[48px] inline-flex items-center justify-center gap-1.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-warm active:scale-95 ${
                added
                  ? "bg-emerald-700 text-white"
                  : "bg-[#7A3E1D] text-white hover:bg-[#633216]"
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
