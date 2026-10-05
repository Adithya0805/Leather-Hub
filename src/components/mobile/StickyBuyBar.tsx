'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function StickyBuyBar() {
  const {
    items,
    checkoutDirectItem,
    openCheckout,
    openCart,
    isMounted,
  } = useCart();

  const [isCustomizerInView, setIsCustomizerInView] = useState(false);

  // Monitor whether customizer section ("Crafted in Ambur / Monogram") is visible in viewport
  useEffect(() => {
    const handleScroll = () => {
      const customizerEl =
        document.getElementById("customizer-section") ||
        document.getElementById("embossing-studio");

      if (customizerEl) {
        const rect = customizerEl.getBoundingClientRect();
        // Section is considered in view when it intersects the viewport
        const inView = rect.top < window.innerHeight - 70 && rect.bottom > 70;
        setIsCustomizerInView(inView);
      } else {
        setIsCustomizerInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 1. Never render before client hydration
  if (!isMounted) return null;

  // 2. EXPLICIT VISIBILITY CONDITION:
  // If the cart is empty (items.length === 0) AND no active product is staged for instant purchase,
  // RETURN NULL immediately (do not render any floating DOM nodes or ghost wrappers).
  if (items.length === 0 && !checkoutDirectItem) {
    return null;
  }

  // 3. Suppress sticky bar when user is inside the customizer section to avoid duplicate WhatsApp buttons
  if (isCustomizerInView) {
    return null;
  }

  // Active staged item or first item from bag
  const activeItem = checkoutDirectItem || items[0];
  if (!activeItem || !activeItem.product) {
    return null;
  }

  const totalCount = checkoutDirectItem
    ? checkoutDirectItem.quantity
    : items.reduce((total, item) => total + item.quantity, 0);

  const subtotal = checkoutDirectItem
    ? checkoutDirectItem.product.price * checkoutDirectItem.quantity
    : items.reduce(
        (total, item) => total + (item.product?.price || 0) * item.quantity,
        0
      );

  const handleWhatsAppOrder = () => {
    if (checkoutDirectItem) {
      openCheckout(checkoutDirectItem);
    } else {
      openCheckout();
    }
  };

  return (
    <aside
      aria-label="Quick Mobile Checkout Bar"
      className="md:hidden fixed bottom-16 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#EADDD3] px-3.5 py-2.5 shadow-warm gpu-layer animate-fadeIn"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Product Thumbnail & Price / Cart Summary */}
        <div
          onClick={openCart}
          className="flex items-center gap-2.5 min-w-0 cursor-pointer group"
        >
          <div className="relative w-11 h-11 rounded-lg bg-[#FBF9F5] border border-[#EADDD3] overflow-hidden shrink-0">
            <Image
              src={activeItem.product.imageAngles?.[0] || "/images/logo.png"}
              alt={activeItem.product.name}
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
          <div className="min-w-0">
            <div className="font-serif font-bold text-xs text-[#2C1A11] truncate group-hover:text-[#7A3E1D] transition-colors">
              {items.length > 1
                ? `${totalCount} items in Bag`
                : activeItem.product.name}
            </div>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="font-serif font-extrabold text-sm text-[#7A3E1D]">
                ₹{subtotal.toLocaleString("en-IN")}
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
            onClick={openCart}
            className="min-w-[44px] min-h-[44px] rounded-full bg-[#FBF9F5] border border-[#EADDD3] hover:border-[#7A3E1D] text-[#7A3E1D] flex items-center justify-center active:scale-90 transition-transform shadow-micro relative"
            aria-label="Open Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4" />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[17px] h-[17px] px-1 rounded-full bg-[#7A3E1D] text-white text-[10px] font-extrabold flex items-center justify-center shadow-micro">
                {totalCount}
              </span>
            )}
          </button>

          {/* Primary WhatsApp Order CTA */}
          <button
            type="button"
            onClick={handleWhatsAppOrder}
            className="min-h-[44px] px-4 rounded-full bg-[#7A3E1D] hover:bg-[#633216] text-white font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-warm active:scale-95 transition-all"
            aria-label="Order on WhatsApp"
          >
            <span className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
              <MessageCircle className="w-2.5 h-2.5 fill-white text-white" />
            </span>
            <span>Order on WhatsApp</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
