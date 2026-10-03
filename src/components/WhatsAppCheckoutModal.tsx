"use client";

import React, { useState, useEffect, useId } from "react";
import Image from "next/image";
import {
  X,
  Sparkles,
  ShieldCheck,
  Truck,
  Copy,
  Check,
  MessageCircle,
  ExternalLink,
  MapPin,
  Phone,
  User,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { useCartStore, CartItem } from "@/store/useCartStore";

// Official Ambur Tannery Direct WhatsApp Desk Hotline
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919443263580";

export function WhatsAppCheckoutModal() {
  const {
    isCheckoutOpen,
    closeCheckout,
    checkoutDirectItem,
    items,
    getSubtotal,
    getTotalCount,
  } = useCartStore();

  const [orderId, setOrderId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [city, setCity] = useState("");
  const [stateRegion, setStateRegion] = useState("Tamil Nadu");
  const [pinCode, setPinCode] = useState("");
  const [selectedBeltSize, setSelectedBeltSize] = useState('34" (Medium)');
  const [copied, setCopied] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  // Generate unique Order ID once per modal session
  useEffect(() => {
    if (isCheckoutOpen) {
      // 6-digit numeric suffix e.g. AMB-849201
      const randomSuffix = Math.floor(100000 + Math.random() * 900000);
      setOrderId(`AMB-${randomSuffix}`);
      setShowErrors(false);
      setCopied(false);
    }
  }, [isCheckoutOpen]);

  // Lock body scroll on open
  useEffect(() => {
    if (isCheckoutOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCheckoutOpen]);

  if (!isCheckoutOpen) return null;

  // Items to checkout: either direct buy item or the bag items
  const activeItems: CartItem[] = checkoutDirectItem
    ? [checkoutDirectItem]
    : items;

  if (activeItems.length === 0) {
    return null;
  }

  // Calculate pricing
  const totalAmount = checkoutDirectItem
    ? checkoutDirectItem.product.price * checkoutDirectItem.quantity
    : getSubtotal();

  const totalQuantity = checkoutDirectItem
    ? checkoutDirectItem.quantity
    : getTotalCount();

  // Check if any product is a belt or includes a belt (gift set)
  const hasBeltItem = activeItems.some(
    (item) =>
      item.product.category === "belts" ||
      item.product.category === "gift-sets" ||
      item.product.name.toLowerCase().includes("belt")
  );

  const beltSizeOptions = [
    '30" (Slim)',
    '32" (Small)',
    '34" (Medium)',
    '36" (Large)',
    '38" (XL)',
    '40" (2XL)',
    '42" (3XL)',
    'Standard Trimmable (Fits 30"-44")',
  ];

  // Validation
  const isNameValid = customerName.trim().length >= 2;
  const isMobileValid = /^[6-9]\d{9}$/.test(mobileNumber.replace(/\D/g, ""));
  const isAddressValid = addressLine.trim().length >= 5;
  const isPinValid = /^\d{6}$/.test(pinCode.trim());
  const isFormValid = isNameValid && isMobileValid && isAddressValid && isPinValid;

  // Build formatted product description for WhatsApp
  const primaryItem = activeItems[0];
  const isSingleItem = activeItems.length === 1;

  const productTitle = isSingleItem
    ? primaryItem.product.name
    : activeItems.map((it) => `${it.product.name} (x${it.quantity})`).join(", ");

  const colorVariant = isSingleItem
    ? primaryItem.selectedColor
    : activeItems.map((it) => `${it.product.name}: ${it.selectedColor}`).join("; ");

  const beltSizeText = hasBeltItem ? selectedBeltSize : "N/A";

  const embossingText = isSingleItem
    ? primaryItem.embossingText
      ? `${primaryItem.embossingText} (${
          primaryItem.embossingStyle === "gold" ? "Heritage Gold Foil" : "Blind Deboss"
        })`
      : "None requested"
    : activeItems
        .filter((it) => it.embossingText)
        .map(
          (it) =>
            `${it.product.name}: ${it.embossingText} (${
              it.embossingStyle === "gold" ? "Gold Foil" : "Blind Deboss"
            })`
        )
        .join("; ") || "None requested";

  const fullAddress = `${addressLine.trim()}, ${city.trim() ? `${city.trim()}, ` : ""}${stateRegion} - PIN: ${pinCode.trim()}`;

  // EXACT FORMAT SPECIFIED IN PROMPT:
  // "🌟 NEW ORDER: #AMB-XXXX 🌟
  // Product: [Product Name]
  // Color/Variant: [Selected Color]
  // Belt Size: [Waist Size, if applicable]
  // Custom Embossing: [Initials/Name, Gold Foil / Blind Deboss]
  // Quantity: [Count]
  // Order Total: ₹[Total Amount] (Free Shipping)
  // Customer Details:
  // Name: [Customer Name]
  // Address: [Full Address, City, PIN Code]
  // Phone: [Customer Mobile]
  // Please confirm my order and share UPI payment details!"
  const whatsAppMessage = `🌟 NEW ORDER: #${orderId} 🌟
Product: ${productTitle}
Color/Variant: ${colorVariant}
Belt Size: ${beltSizeText}
Custom Embossing: ${embossingText}
Quantity: ${totalQuantity}
Order Total: ₹${totalAmount.toLocaleString("en-IN")} (Free Shipping)

Customer Details:
Name: ${customerName.trim() || "[Customer Name]"}
Address: ${fullAddress || "[Delivery Address]"}
Phone: ${mobileNumber.trim() || "[Customer Mobile]"}

Please confirm my order and share UPI payment details!`;

  const handleCopyClipboard = async () => {
    try {
      await navigator.clipboard.writeText(whatsAppMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback manual textarea copy
      const textArea = document.createElement("textarea");
      textArea.value = whatsAppMessage;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleTriggerWhatsApp = () => {
    if (!isFormValid) {
      setShowErrors(true);
      return;
    }

    const encoded = encodeURIComponent(whatsAppMessage);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans flex items-center justify-center p-3 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div
        onClick={closeCheckout}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] text-[#1A1412] rounded-3xl border border-[#C89D66]/40 shadow-2xl overflow-hidden z-10 my-auto animate-fadeIn max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#1A1412] text-[#FDFBF7] px-6 py-4.5 border-b border-[#3D322E] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#2D2421] border border-[#C89D66]/40 flex items-center justify-center text-[#C89D66]">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg sm:text-xl font-semibold tracking-wide">
                  Review &amp; Place WhatsApp Order
                </h3>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#C89D66] text-[#1A1412]">
                  #{orderId}
                </span>
              </div>
              <p className="text-[11px] text-[#C4B6AF]">
                Zero advance fee • Instant UPI QR via Ambur Tannery Hotline
              </p>
            </div>
          </div>

          <button
            onClick={closeCheckout}
            className="p-1.5 rounded-full text-[#9C8980] hover:text-[#FDFBF7] hover:bg-[#2D2421] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Order Snapshot Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E4DCD7] shadow-micro space-y-3">
            <div className="flex items-center justify-between text-xs text-[#7A6860] border-b border-[#E4DCD7] pb-2.5">
              <span className="font-semibold uppercase tracking-wider text-[10px] text-[#B38F4D]">
                Order Items ({totalQuantity})
              </span>
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" /> Free Express Delivery
              </span>
            </div>

            <div className="space-y-3 divide-y divide-[#E4DCD7]/60">
              {activeItems.map((item) => (
                <div key={item.id} className="pt-2 first:pt-0 flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-lg bg-[#FAF7F5] border border-[#E4DCD7] overflow-hidden shrink-0">
                    <Image
                      src={item.product.imageAngles[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>

                  <div className="flex-1 min-w-0 text-xs">
                    <div className="font-serif font-bold text-sm text-[#1A1412] truncate">
                      {item.product.name}
                    </div>
                    <div className="text-[11px] text-[#5A4B45] flex items-center gap-2 mt-0.5">
                      <span>Color: <strong>{item.selectedColor}</strong></span>
                      <span>•</span>
                      <span>Qty: <strong>{item.quantity}</strong></span>
                    </div>

                    {item.embossingText ? (
                      <div className="mt-1 inline-flex items-center gap-1 text-[10px] text-[#7C582B] bg-[#FAF7F5] px-2 py-0.5 rounded border border-[#C89D66]/30">
                        <Sparkles className="w-2.5 h-2.5 text-[#C89D66]" />
                        <span>
                          Custom Embossing: <strong>{item.embossingText}</strong> ({item.embossingStyle === "gold" ? "Gold Foil" : "Blind Deboss"})
                        </span>
                      </div>
                    ) : (
                      <div className="text-[10px] text-[#9C8980]">
                        Standard (No custom initials)
                      </div>
                    )}
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-serif font-bold text-sm text-[#1A1412]">
                      ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </div>
                    <div className="text-[10px] text-emerald-700 font-semibold uppercase">
                      Free Shipping
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Belt Size Selection (if applicable) */}
            {hasBeltItem && (
              <div className="pt-3 border-t border-[#E4DCD7] bg-[#FAF7F5] -mx-4 -mb-4 p-4 rounded-b-2xl">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A6860] mb-1.5">
                  Select Belt Waist Size (For Belts &amp; Gift Sets)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {beltSizeOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedBeltSize(opt)}
                      className={`px-2 py-1.5 rounded-lg text-[11px] font-semibold transition-all border text-center truncate ${
                        selectedBeltSize === opt
                          ? "bg-[#1A1412] text-[#C89D66] border-[#1A1412] shadow-micro"
                          : "bg-white text-[#5A4B45] border-[#E4DCD7] hover:border-[#C89D66]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Customer Details Form */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E4DCD7] shadow-micro space-y-4">
            <div className="flex items-center justify-between border-b border-[#E4DCD7] pb-2">
              <h4 className="font-serif font-bold text-sm text-[#1A1412] flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#C89D66]" />
                <span>Customer &amp; Pan-India Dispatch Details</span>
              </h4>
              <span className="text-[11px] text-[#9C8980]">Direct Courier Delivery</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Name */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A6860] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Senthil Nathan"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className={`w-full px-3 py-2 rounded-xl border text-xs bg-[#FAF7F5] focus:outline-none focus:ring-1 ${
                    showErrors && !isNameValid
                      ? "border-rose-400 focus:ring-rose-400"
                      : "border-[#E4DCD7] focus:border-[#C89D66] focus:ring-[#C89D66]"
                  }`}
                />
                {showErrors && !isNameValid && (
                  <span className="text-[10px] text-rose-600 mt-0.5 block">
                    Please provide your name
                  </span>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A6860] mb-1">
                  WhatsApp Mobile (+91) *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-xs font-semibold text-[#7A6860]">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="98401 23456"
                    value={mobileNumber}
                    onChange={(e) =>
                      setMobileNumber(e.target.value.replace(/\D/g, ""))
                    }
                    className={`w-full pl-11 pr-3 py-2 rounded-xl border text-xs bg-[#FAF7F5] focus:outline-none focus:ring-1 font-mono ${
                      showErrors && !isMobileValid
                        ? "border-rose-400 focus:ring-rose-400"
                        : "border-[#E4DCD7] focus:border-[#C89D66] focus:ring-[#C89D66]"
                    }`}
                  />
                </div>
                {showErrors && !isMobileValid && (
                  <span className="text-[10px] text-rose-600 mt-0.5 block">
                    Valid 10-digit mobile required
                  </span>
                )}
              </div>

              {/* Full Address */}
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A6860] mb-1">
                  Full Delivery Address (Flat / House No., Street, Landmark) *
                </label>
                <input
                  type="text"
                  placeholder="e.g. No. 42, Palar Avenue, Near Gandhi Statue"
                  value={addressLine}
                  onChange={(e) => setAddressLine(e.target.value)}
                  className={`w-full px-3 py-2 rounded-xl border text-xs bg-[#FAF7F5] focus:outline-none focus:ring-1 ${
                    showErrors && !isAddressValid
                      ? "border-rose-400 focus:ring-rose-400"
                      : "border-[#E4DCD7] focus:border-[#C89D66] focus:ring-[#C89D66]"
                  }`}
                />
                {showErrors && !isAddressValid && (
                  <span className="text-[10px] text-rose-600 mt-0.5 block">
                    Please provide complete street address
                  </span>
                )}
              </div>

              {/* City */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A6860] mb-1">
                  City / District
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chennai, Bangalore, Ambur"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#E4DCD7] text-xs bg-[#FAF7F5] focus:outline-none focus:border-[#C89D66] focus:ring-1 focus:ring-[#C89D66]"
                />
              </div>

              {/* PIN Code */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A6860] mb-1">
                  PIN Code (6 Digits) *
                </label>
                <input
                  type="text"
                  maxLength={6}
                  placeholder="e.g. 600032"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value.replace(/\D/g, ""))}
                  className={`w-full px-3 py-2 rounded-xl border text-xs bg-[#FAF7F5] focus:outline-none focus:ring-1 font-mono ${
                    showErrors && !isPinValid
                      ? "border-rose-400 focus:ring-rose-400"
                      : "border-[#E4DCD7] focus:border-[#C89D66] focus:ring-[#C89D66]"
                  }`}
                />
                {showErrors && !isPinValid && (
                  <span className="text-[10px] text-rose-600 mt-0.5 block">
                    Valid 6-digit PIN code required
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Live Formatted WhatsApp Message Preview */}
          <div className="bg-[#1A1412] text-[#FDFBF7] p-4 rounded-2xl border border-[#3D322E] space-y-2">
            <div className="flex items-center justify-between text-xs text-[#C4B6AF]">
              <span className="font-semibold text-[#C89D66] flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5" />
                Live Generated WhatsApp Message
              </span>
              <button
                type="button"
                onClick={handleCopyClipboard}
                className="text-[11px] text-[#C4B6AF] hover:text-[#C89D66] flex items-center gap-1 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>

            <pre className="font-mono text-[11px] text-[#E4DCD7] bg-[#120D0B] p-3 rounded-xl border border-[#2D2421] whitespace-pre-wrap leading-relaxed overflow-x-auto select-all">
              {whatsAppMessage}
            </pre>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E4DCD7] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-left w-full sm:w-auto">
            <div className="text-xs text-[#7A6860]">Total Payable on Confirmation</div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl font-bold text-[#1A1412]">
                ₹{totalAmount.toLocaleString("en-IN")}
              </span>
              <span className="text-xs text-emerald-700 font-semibold">
                (Free Pan-India Shipping)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {/* Fallback Copy Button */}
            <button
              type="button"
              onClick={handleCopyClipboard}
              className="py-3 px-4 rounded-full border border-[#E4DCD7] bg-[#FAF7F5] hover:bg-[#E4DCD7] text-[#1A1412] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              title="Copy message to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#5A4B45]" />
                  <span>Copy</span>
                </>
              )}
            </button>

            {/* Primary WhatsApp Action Button */}
            <button
              type="button"
              onClick={handleTriggerWhatsApp}
              className="flex-1 sm:flex-initial py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-subtle hover:shadow-lg active:scale-95 transition-all group"
            >
              <MessageCircle className="w-4 h-4 fill-white shrink-0 group-hover:scale-110 transition-transform" />
              <span>Send Order on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
