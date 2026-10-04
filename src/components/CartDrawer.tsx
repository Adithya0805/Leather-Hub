'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  MessageCircle,
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    openCheckout,
    updateQuantity,
    removeItem,
    clearCart,
    getSubtotal,
    isMounted,
  } = useCart();

  useEffect(() => {
    // Escape key listener to close drawer
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeCart]);

  if (!isMounted || !isOpen) return null;

  const subtotal = getSubtotal();
  const totalCount = items.reduce((total, item) => total + item.quantity, 0);
  const freeShippingThreshold = 799;
  const isFreeShipping = subtotal >= freeShippingThreshold || totalCount > 0;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-[#2C1A11]/40 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBF9F5] text-[#2C1A11] shadow-2xl flex flex-col border-l border-[#EADDD3]">
          {/* Header */}
          <div className="p-5 bg-white text-[#2C1A11] flex items-center justify-between border-b border-[#EADDD3]">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="Dino Leathers"
                width={32}
                height={32}
                className="rounded-full shadow-sm object-cover shrink-0"
              />
              <h2 className="font-serif text-xl font-bold tracking-wide text-[#2C1A11]">
                Your Leather Bag
              </h2>
              <span className="text-xs bg-[#F3ECE5] text-[#7A3E1D] px-2.5 py-0.5 rounded-full font-sans font-semibold border border-[#EADDD3]">
                {totalCount} {totalCount === 1 ? "item" : "items"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[11px] text-[#9A8C84] hover:text-rose-600 transition-colors px-2 py-1 font-medium focus:outline-none"
                  aria-label="Clear all items in bag"
                >
                  Clear Bag
                </button>
              )}
              <button
                onClick={closeCart}
                className="p-1.5 rounded-full text-[#6B5B52] hover:text-[#2C1A11] hover:bg-[#F3ECE5] transition-colors focus:outline-none"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Free Shipping / Provenance Banner */}
          <div className="bg-[#F3ECE5] px-5 py-3 border-b border-[#EADDD3] flex items-center gap-3 text-xs text-[#6B5B52]">
            <Truck className="w-4 h-4 text-[#7A3E1D] shrink-0" />
            <div className="flex-1">
              <span className="font-semibold text-[#2C1A11]">
                Free Express Delivery
              </span>{" "}
              across Tamil Nadu &amp; Pan-India. Dispatched from Ambur.
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="relative mb-4 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Dino Leathers Emblem"
                    width={72}
                    height={72}
                    className="rounded-full opacity-35 shadow-sm object-cover"
                  />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2C1A11] mb-1">
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#6B5B52] max-w-xs mb-6">
                  Handcrafted bovine leather wallets, belts, and gift sets await your touch.
                </p>
                <button
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7A3E1D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#633216] transition-colors shadow-warm"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-3.5 rounded-2xl border border-[#EADDD3] shadow-warm flex gap-3.5 relative group hover:border-[#7A3E1D] transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#FBF9F5] shrink-0 border border-[#EADDD3]">
                    <Image
                      src={item.product?.imageAngles?.[0] || "/icon.svg"}
                      alt={item.product?.name || "Ambur Leather"}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-serif font-bold text-sm text-[#2C1A11] truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[#9A8C84] hover:text-rose-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#6B5B52] mt-0.5 flex items-center gap-1.5">
                      <span className="font-medium text-[#2C1A11]">Color:</span>
                      <span>{item.selectedColor}</span>
                    </p>

                    {item.embossingText ? (
                      <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F3ECE5] border border-[#EADDD3] text-[10px] text-[#7A3E1D] font-semibold">
                        <Sparkles className="w-2.5 h-2.5 text-[#C29B38]" />
                        <span>Embossed: <strong>{item.embossingText}</strong></span>
                      </div>
                    ) : (
                      <div className="mt-1 text-[10px] text-[#9A8C84]">
                        Standard (No personalization)
                      </div>
                    )}

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-[#EADDD3] rounded-full bg-[#FBF9F5] text-[#2C1A11]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-[#7A3E1D] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-[#7A3E1D] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-bold text-sm text-[#2C1A11]">
                          ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                        {item.product.originalPrice && (
                          <span className="ml-1 text-[11px] text-[#9A8C84] line-through">
                            ₹{(item.product.originalPrice * item.quantity).toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-5 bg-white border-t border-[#EADDD3] space-y-4">
              <div className="space-y-2 text-xs text-[#6B5B52]">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="font-semibold text-[#2C1A11]">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between items-center text-emerald-700 font-medium">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5" />
                    Express Shipping (Pan-India)
                  </span>
                  <span className="font-bold uppercase tracking-wider text-[11px]">
                    FREE
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#7A3E1D] font-medium">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
                    Custom Name Embossing
                  </span>
                  <span className="font-bold uppercase tracking-wider text-[11px]">
                    INCLUDED (₹0)
                  </span>
                </div>
                <div className="pt-2 border-t border-[#EADDD3] flex justify-between items-center text-base font-bold text-[#2C1A11]">
                  <span>Total Amount</span>
                  <span className="font-serif text-2xl font-bold text-[#7A3E1D]">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => openCheckout()}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#7A3E1D] hover:bg-[#633216] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-warm group active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Review &amp; Order via WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B5B52]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7A3E1D]" />
                <span>Zero-Risk Factory Provenance • 100% Ambur Bovine Leather</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
