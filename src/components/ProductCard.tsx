"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ShoppingBag,
  Check,
  MessageCircle,
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

  const { addItem, openCheckout } = useCart();

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

  return (
    <div className="group relative bg-white rounded-2xl border border-[#EADDD3] overflow-hidden shadow-warm hover:shadow-elevated transition-all duration-300 flex flex-col justify-between w-full">
      {/* Product Visual Area */}
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

      {/* Content Body */}
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
              className="min-w-[48px] h-12 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition-all shadow-micro active:scale-95 px-3.5"
              title="Order on WhatsApp"
              aria-label="Order directly on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </button>

            {/* Add to Bag Button - Sized for 360px without clipping */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={`h-12 w-full inline-flex items-center justify-center gap-2 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-warm active:scale-95 ${
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
    </div>
  );
}
