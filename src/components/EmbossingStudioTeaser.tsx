"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, Shield, Flame, MessageCircle, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { PRODUCTS } from "@/data/products";

export function EmbossingStudioTeaser() {
  const [initials, setInitials] = useState("V.S.R");
  const [style, setStyle] = useState<"gold" | "blind">("gold");
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [feedback, setFeedback] = useState(false);

  const { addItem, openCheckout } = useCartStore();

  const handleApplyToCart = () => {
    addItem(selectedProduct, selectedProduct.colors[0]?.name, initials, style);
    setFeedback(true);
    setTimeout(() => setFeedback(false), 2500);
  };

  const handleDirectWhatsAppOrder = () => {
    openCheckout({
      id: `${selectedProduct.id}-${selectedProduct.colors[0]?.name}-${initials}-${style}`,
      product: selectedProduct,
      selectedColor: selectedProduct.colors[0]?.name,
      embossingText: initials.trim().toUpperCase(),
      embossingStyle: style,
      quantity: 1,
      addedAt: Date.now(),
    });
  };

  return (
    <section className="py-20 bg-[#FBF9F5] text-[#2C1A11] relative overflow-hidden border-b border-[#EADDD3]">
      {/* Decorative Leather Grain Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7A3E1D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3ECE5] border border-[#EADDD3] text-[#7A3E1D] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>Complimentary Personalization</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#2C1A11]">
              Crafted in Ambur. <br />
              <span className="text-[#7A3E1D] italic">Branded in Your Name.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6B5B52] leading-relaxed">
              Every wallet, belt, and gift box leaves our Ambur workshop bearing
              the indelible mark of its owner. We never charge for personalization.
              Type your initials or family moniker below to preview live.
            </p>

            {/* Input Controls */}
            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#6B5B52] font-semibold mb-2">
                  Enter Initials or Monogram (Up to 8 characters)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    maxLength={8}
                    value={initials}
                    onChange={(e) => setInitials(e.target.value.toUpperCase())}
                    placeholder="E.G. AKM"
                    className="flex-1 bg-white border border-[#EADDD3] rounded-xl px-4 py-3 text-lg font-mono tracking-widest uppercase text-[#2C1A11] placeholder:text-[#9A8C84] focus:outline-none focus:border-[#7A3E1D] focus:ring-1 focus:ring-[#7A3E1D] shadow-sm"
                  />
                  <div className="flex bg-[#F3ECE5] p-1 rounded-xl border border-[#EADDD3]">
                    <button
                      type="button"
                      onClick={() => setStyle("gold")}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                        style === "gold"
                          ? "bg-white text-[#7A3E1D] shadow-sm font-bold"
                          : "text-[#6B5B52] hover:text-[#2C1A11]"
                      }`}
                    >
                      Gold Foil
                    </button>
                    <button
                      type="button"
                      onClick={() => setStyle("blind")}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                        style === "blind"
                          ? "bg-[#2C1A11] text-white shadow-sm font-bold"
                          : "text-[#6B5B52] hover:text-[#2C1A11]"
                      }`}
                    >
                      Blind Deboss
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Target Select */}
              <div className="pt-2">
                <label className="block text-xs uppercase tracking-wider text-[#6B5B52] font-semibold mb-2">
                  Choose Article for Embossing
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {PRODUCTS.map((prod) => (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => setSelectedProduct(prod)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all shadow-sm ${
                        selectedProduct.id === prod.id
                          ? "border-[#7A3E1D] bg-[#F3ECE5] text-[#2C1A11] font-semibold"
                          : "border-[#EADDD3] bg-white text-[#6B5B52] hover:border-[#7A3E1D] hover:text-[#2C1A11]"
                      }`}
                    >
                      <div className="font-semibold truncate">{prod.name}</div>
                      <div className="text-[11px] text-[#7A3E1D] font-bold">₹{prod.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleDirectWhatsAppOrder}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#7A3E1D] hover:bg-[#633216] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-warm active:scale-95 group"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Order on WhatsApp with &ldquo;{initials || "INITIALS"}&rdquo;</span>
                </button>

                <button
                  type="button"
                  onClick={handleApplyToCart}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#EADDD3] hover:border-[#7A3E1D] text-[#2C1A11] font-semibold text-xs uppercase tracking-widest hover:bg-[#F3ECE5] transition-all active:scale-95 shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4 text-[#7A3E1D]" />
                  <span>{feedback ? "Added to Bag!" : "+ Add to Bag"}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#EADDD3] text-xs text-[#6B5B52]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7A3E1D]" />
                <span>Zero extra charge forever</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#7A3E1D]" />
                <span>Heated brass die stamping</span>
              </div>
            </div>
          </div>

          {/* Right Live Visual Leather Swatch */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#8C532B] via-[#633818] to-[#3B1F0E] p-8 sm:p-12 shadow-2xl border-4 border-[#EADDD3] flex flex-col justify-between overflow-hidden">
              {/* Decorative Corner Brass Rivets */}
              <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-[#C29B38] border border-[#917024] shadow-inner" />
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#C29B38] border border-[#917024] shadow-inner" />
              <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-[#C29B38] border border-[#917024] shadow-inner" />
              <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-[#C29B38] border border-[#917024] shadow-inner" />

              {/* Top Provenance Watermark */}
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.25em] text-[#E0C07F]/80 font-semibold">
                <span>AMBUR WORKSHOP</span>
                <span>OIL PULL-UP GRAIN</span>
              </div>

              {/* Center Embossed Monogram */}
              <div className="my-auto text-center py-8">
                <div
                  className={`font-serif text-4xl sm:text-6xl font-bold tracking-[0.3em] uppercase transition-all duration-300 ${
                    style === "gold"
                      ? "text-[#F3DFAC] drop-shadow-[0_2px_10px_rgba(194,155,56,0.5)]"
                      : "text-[#24130A] drop-shadow-[0_-1px_1px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_2px_rgba(255,255,255,0.2)]"
                  }`}
                >
                  {initials || "YOUR INITIALS"}
                </div>
                <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-[#F3DFAC]/70 font-semibold">
                  {style === "gold" ? "24K Foil Heat-Fused" : "Deep Thermal Blind Deboss"}
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="pt-4 border-t border-[#EADDD3]/30 flex items-center justify-between text-[11px] text-[#F3DFAC]/90">
                <span>Selected: {selectedProduct.name}</span>
                <span className="text-[#F3DFAC] font-bold">₹{selectedProduct.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
