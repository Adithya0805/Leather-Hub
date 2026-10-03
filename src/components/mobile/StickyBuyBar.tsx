"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, ShoppingBag, Sparkles, ChevronUp, Check } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { useCartStore } from "@/store/useCartStore";

export function StickyBuyBar() {
  const [visible, setVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product>(PRODUCTS[0]);
  const [added, setAdded] = useState(false);

  const { openCheckout, addItem } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero fold (> 450px)
      const shouldShow = window.scrollY > 450;
      setVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const handleWhatsAppOrder = () => {
    openCheckout({
      id: `${activeProduct.id}-${activeProduct.colors[0]?.name}`,
      product: activeProduct,
      selectedColor: activeProduct.colors[0]?.name || "Ambur Tan",
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
      className="md:hidden fixed bottom-14 inset-x-0 z-30 bg-[#1A1412]/95 backdrop-blur-md border-t border-[#3D322E] px-3.5 py-2.5 shadow-2xl gpu-layer animate-fadeIn"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Product Thumbnail & Price */}
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative w-11 h-11 rounded-lg bg-[#2D2421] border border-[#3D322E] overflow-hidden shrink-0">
            <Image
              src={activeProduct.imageAngles[0]}
              alt={activeProduct.name}
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
          <div className="min-w-0">
            <div className="font-serif font-bold text-xs text-[#FDFBF7] truncate">
              {activeProduct.name}
            </div>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="font-serif font-extrabold text-sm text-[#C89D66]">
                ₹{activeProduct.price}
              </span>
              <span className="text-[10px] text-emerald-400 font-medium">
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
            className="min-w-[44px] min-h-[44px] rounded-full bg-[#2D2421] border border-[#3D322E] hover:border-[#C89D66] text-[#C89D66] flex items-center justify-center active:scale-90 transition-transform shadow-micro"
            aria-label="Add to Bag"
          >
            {added ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <ShoppingBag className="w-4 h-4" />
            )}
          </button>

          {/* Primary WhatsApp Order CTA */}
          <button
            type="button"
            onClick={handleWhatsAppOrder}
            className="min-h-[44px] px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-subtle active:scale-95 transition-all"
            aria-label="Order via WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span>Order on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
