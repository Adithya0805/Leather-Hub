'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, ShoppingBag, Sparkles, ChevronUp, Check } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { useCartStore } from "@/store/useCartStore";

export function StickyBuyBar() {
  const [isMounted, setIsMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product>(PRODUCTS[0]);
  const [added, setAdded] = useState(false);

  const { openCheckout, addItem } = useCartStore();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      // Show when scrolled past hero fold (> 450px)
      const shouldShow = window.scrollY > 450;
      setVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted || !visible) return null;

  const handleWhatsAppOrder = () => {
    openCheckout({
      id: `${activeProduct.id}-${activeProduct.colors?.[0]?.name || "Ambur Tan"}`,
      product: activeProduct,
      selectedColor: activeProduct.colors?.[0]?.name || "Ambur Tan",
      quantity: 1,
      addedAt: Date.now(),
    });
  };

  const handleAddToCart = () => {
    addItem(activeProduct);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      aria-label="Quick Mobile Checkout Bar"
      className="md:hidden fixed bottom-[calc(3.5rem+env(safe-area-inset-bottom,0px))] inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#EADDD3] px-3.5 py-2.5 shadow-warm gpu-layer animate-fadeIn"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Product Thumbnail & Price */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative w-11 h-11 rounded-lg bg-[#FBF9F5] border border-[#EADDD3] overflow-hidden shrink-0">
            <Image
              src={activeProduct?.imageAngles?.[0] || "/icon.svg"}
              alt={activeProduct?.name || "Ambur Leather"}
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
          <div className="min-w-0">
            <div className="font-serif font-bold text-xs text-[#2C1A11] truncate">
              {activeProduct.name}
            </div>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="font-serif font-extrabold text-sm text-[#7A3E1D]">
                ₹{activeProduct.price}
              </span>
              <span className="text-[10px] text-emerald-700 font-semibold">
                Free Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Quick Bag Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="min-w-[44px] min-h-[44px] rounded-full bg-[#FBF9F5] border border-[#EADDD3] hover:border-[#7A3E1D] text-[#7A3E1D] flex items-center justify-center active:scale-90 transition-transform shadow-micro"
            aria-label="Add to Bag"
          >
            {added ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <ShoppingBag className="w-4 h-4" />
            )}
          </button>

          {/* Primary WhatsApp Order CTA */}
          <button
            type="button"
            onClick={handleWhatsAppOrder}
            className="min-h-[44px] px-4 rounded-full bg-[#7A3E1D] hover:bg-[#633216] text-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-warm active:scale-95 transition-all"
            aria-label="Order via WhatsApp"
          >
            <span className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
              <MessageCircle className="w-2.5 h-2.5 fill-white text-white" />
            </span>
            <span>Order on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
