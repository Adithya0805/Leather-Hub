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
    <section className="py-20 bg-[#1A1412] text-[#FDFBF7] relative overflow-hidden">
      {/* Decorative Leather Grain Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C89D66]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C89D66]/20 border border-[#C89D66]/40 text-[#C89D66] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complimentary Personalization</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#FDFBF7]">
              Crafted in Ambur. <br />
              <span className="text-[#C89D66] italic">Branded in Your Name.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#C4B6AF] leading-relaxed">
              Every wallet, belt, and gift box leaves our Ambur workshop bearing
              the indelible mark of its owner. We never charge for personalization.
              Type your initials or family moniker below to preview live.
            </p>

            {/* Input Controls */}
            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9C8980] font-semibold mb-2">
                  Enter Initials or Monogram (Up to 8 characters)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    maxLength={8}
                    value={initials}
                    onChange={(e) => setInitials(e.target.value.toUpperCase())}
                    placeholder="E.G. AKM"
                    className="flex-1 bg-[#2D2421] border border-[#3D322E] rounded-xl px-4 py-3 text-lg font-mono tracking-widest uppercase text-[#FDFBF7] focus:outline-none focus:border-[#C89D66] focus:ring-1 focus:ring-[#C89D66]"
                  />
                  <div className="flex bg-[#2D2421] p-1 rounded-xl border border-[#3D322E]">
                    <button
                      type="button"
                      onClick={() => setStyle("gold")}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                        style === "gold"
                          ? "bg-[#C89D66] text-[#1A1412] shadow-sm"
                          : "text-[#C4B6AF] hover:text-[#FDFBF7]"
                      }`}
                    >
                      Gold Foil
                    </button>
                    <button
                      type="button"
                      onClick={() => setStyle("blind")}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                        style === "blind"
                          ? "bg-[#3D322E] text-[#FDFBF7] shadow-sm"
                          : "text-[#C4B6AF] hover:text-[#FDFBF7]"
                      }`}
                    >
                      Blind Deboss
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Target Select */}
              <div className="pt-2">
                <label className="block text-xs uppercase tracking-wider text-[#9C8980] font-semibold mb-2">
                  Choose Article for Embossing
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {PRODUCTS.map((prod) => (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => setSelectedProduct(prod)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                        selectedProduct.id === prod.id
                          ? "border-[#C89D66] bg-[#C89D66]/10 text-[#FDFBF7]"
                          : "border-[#3D322E] bg-[#221B18] text-[#9C8980] hover:text-[#FDFBF7]"
                      }`}
                    >
                      <div className="font-semibold truncate">{prod.name}</div>
                      <div className="text-[11px] text-[#C89D66]">₹{prod.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleDirectWhatsAppOrder}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-subtle active:scale-95 group"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Order on WhatsApp with &ldquo;{initials || "INITIALS"}&rdquo;</span>
                </button>

                <button
                  type="button"
                  onClick={handleApplyToCart}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2D2421] border border-[#3D322E] hover:border-[#C89D66] text-[#FDFBF7] font-semibold text-xs uppercase tracking-widest hover:bg-[#3D322E] transition-all active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4 text-[#C89D66]" />
                  <span>{feedback ? "Added to Bag!" : "+ Add to Bag"}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#3D322E] text-xs text-[#C4B6AF]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C89D66]" />
                <span>Zero extra charge forever</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#C89D66]" />
                <span>Heated brass die stamping</span>
              </div>
            </div>
          </div>

          {/* Right Live Visual Leather Swatch */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#7C582B] via-[#5A3F1F] to-[#2D2421] p-8 sm:p-12 shadow-2xl border-4 border-[#3D322E] flex flex-col justify-between overflow-hidden">
              {/* Decorative Corner Brass Rivets */}
              <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-[#B38F4D] border border-[#7E6332] shadow-inner" />
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#B38F4D] border border-[#7E6332] shadow-inner" />
              <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-[#B38F4D] border border-[#7E6332] shadow-inner" />
              <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-[#B38F4D] border border-[#7E6332] shadow-inner" />

              {/* Top Provenance Watermark */}
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.25em] text-[#C89D66]/70 font-semibold">
                <span>AMBUR WORKSHOP</span>
                <span>OIL PULL-UP GRAIN</span>
              </div>

              {/* Center Embossed Monogram */}
              <div className="my-auto text-center py-8">
                <div
                  className={`font-serif text-4xl sm:text-6xl font-bold tracking-[0.3em] uppercase transition-all duration-300 ${
                    style === "gold"
                      ? "text-[#E0C07F] drop-shadow-[0_2px_10px_rgba(200,157,102,0.4)]"
                      : "text-[#2A1D17] drop-shadow-[0_-1px_1px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_2px_rgba(255,255,255,0.15)]"
                  }`}
                >
                  {initials || "YOUR INITIALS"}
                </div>
                <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-[#C4B6AF]/80">
                  {style === "gold" ? "24K Foil Heat-Fused" : "Deep Thermal Blind Deboss"}
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="pt-4 border-t border-[#C89D66]/20 flex items-center justify-between text-[11px] text-[#C4B6AF]">
                <span>Selected: {selectedProduct.name}</span>
                <span className="text-[#C89D66] font-bold">₹{selectedProduct.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
