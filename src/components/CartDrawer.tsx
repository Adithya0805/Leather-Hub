"use client";

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
import { useCartStore } from "@/store/useCartStore";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    openCheckout,
    updateQuantity,
    removeItem,
    getSubtotal,
    getTotalCount,
  } = useCartStore();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted || !isOpen) return null;

  const subtotal = getSubtotal();
  const totalCount = getTotalCount();
  const freeShippingThreshold = 799;
  const isFreeShipping = subtotal >= freeShippingThreshold || totalCount > 0;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FDFBF7] text-[#1A1412] shadow-2xl flex flex-col border-l border-[#E4DCD7]">
          {/* Header */}
          <div className="p-5 bg-[#1A1412] text-[#FDFBF7] flex items-center justify-between border-b border-[#3D322E]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#C89D66]" />
              <h2 className="font-serif text-xl font-semibold tracking-wide">
                Your Leather Bag
              </h2>
              <span className="text-xs bg-[#2D2421] text-[#C89D66] px-2 py-0.5 rounded-full font-sans border border-[#3D322E]">
                {totalCount} {totalCount === 1 ? "item" : "items"}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-full text-[#C4B6AF] hover:text-[#FDFBF7] hover:bg-[#2D2421] transition-colors focus:outline-none"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping / Provenance Banner */}
          <div className="bg-[#FAF7F5] px-5 py-3 border-b border-[#E4DCD7] flex items-center gap-3 text-xs text-[#5A4B45]">
            <Truck className="w-4 h-4 text-[#C89D66] shrink-0" />
            <div className="flex-1">
              <span className="font-semibold text-[#1A1412]">
                Free Express Delivery
              </span>{" "}
              across Tamil Nadu & Pan-India. Dispatched from Ambur.
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="w-16 h-16 rounded-full bg-[#F4EFEA] flex items-center justify-center mb-4 text-[#C89D66]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#1A1412] mb-1">
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#7A6860] max-w-xs mb-6">
                  Handcrafted bovine leather wallets, belts, and gift sets await your touch.
                </p>
                <button
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1412] text-[#FDFBF7] text-xs font-semibold uppercase tracking-wider hover:bg-[#C89D66] hover:text-[#1A1412] transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-3.5 rounded-xl border border-[#E4DCD7] shadow-micro flex gap-3.5 relative group hover:border-[#C89D66] transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-[#FAF7F5] shrink-0 border border-[#E4DCD7]">
                    <Image
                      src={item.product.imageAngles[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-serif font-semibold text-sm text-[#1A1412] truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[#9C8980] hover:text-rose-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#7A6860] mt-0.5 flex items-center gap-1.5">
                      <span className="font-medium text-[#1A1412]">Color:</span>
                      <span>{item.selectedColor}</span>
                    </p>

                    {item.embossingText ? (
                      <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FAF7F5] border border-[#C89D66]/40 text-[10px] text-[#7C582B]">
                        <Sparkles className="w-2.5 h-2.5 text-[#C89D66]" />
                        <span>Embossed: <strong>{item.embossingText}</strong></span>
                      </div>
                    ) : (
                      <div className="mt-1 text-[10px] text-[#9C8980]">
                        Standard (No personalization)
                      </div>
                    )}

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-[#E4DCD7] rounded-full bg-[#FAF7F5]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-[#C89D66] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-[#C89D66] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-semibold text-sm text-[#1A1412]">
                          ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                        {item.product.originalPrice && (
                          <span className="ml-1 text-[11px] text-[#9C8980] line-through">
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
            <div className="p-5 bg-white border-t border-[#E4DCD7] space-y-4">
              <div className="space-y-2 text-xs text-[#5A4B45]">
                <div className="flex justify-between">
                  <span>Bag Subtotal</span>
                  <span className="font-semibold text-[#1A1412]">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between items-center text-emerald-700">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5" />
                    Express Shipping (Pan-India)
                  </span>
                  <span className="font-semibold uppercase tracking-wider text-[11px]">
                    FREE
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#7C582B]">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#C89D66]" />
                    Custom Name Embossing
                  </span>
                  <span className="font-semibold uppercase tracking-wider text-[11px]">
                    INCLUDED (₹0)
                  </span>
                </div>
                <div className="pt-2 border-t border-[#E4DCD7] flex justify-between text-base font-bold text-[#1A1412]">
                  <span>Total Amount</span>
                  <span className="font-serif text-xl text-[#1A1412]">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => openCheckout()}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-subtle group active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Review &amp; Order via WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#7A6860]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C89D66]" />
                <span>Zero-Risk Factory Provenance • 100% Ambur Bovine Leather</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
