"use client";

import React, { useState } from "react";
import {
  Building2,
  Package,
  ShieldCheck,
  MessageCircle,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  Truck,
} from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919443263580";

interface WholesaleFormState {
  businessName: string;
  contactName: string;
  phone: string;
  city: string;
  productInterest: string;
  quantity: string;
  gstin: string;
  notes: string;
}

export default function WholesalePage() {
  const [form, setForm] = useState<WholesaleFormState>({
    businessName: "",
    contactName: "",
    phone: "",
    city: "",
    productInterest: "Both Wallets & Belts",
    quantity: "50",
    gstin: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [inquiryId, setInquiryId] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.businessName.trim()) errs.businessName = "Business name is required";
    if (!form.contactName.trim()) errs.contactName = "Contact person name is required";
    const cleanPhone = form.phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) errs.phone = "Valid 10-digit phone number is required";
    if (!form.city.trim()) errs.city = "City and state are required";
    const qty = parseInt(form.quantity, 10);
    if (isNaN(qty) || qty < 50) errs.quantity = "Minimum wholesale quantity is 50 pieces";
    return errs;
  };

  const buildWhatsAppMessage = (inqId: string) => {
    return `🦕 DINO LEATHERS — WHOLESALE INQUIRY 🦕
Inquiry Reference: #${inqId}
----------------------------------------
Business Name: ${form.businessName.trim()}
Contact Person: ${form.contactName.trim()}
Phone: ${form.phone.trim()}
City / State: ${form.city.trim()}
Product Interest: ${form.productInterest}
Estimated Quantity: ${form.quantity} pcs (MOQ 50)
GSTIN: ${form.gstin.trim() || "Not provided"}
Requirements: ${form.notes.trim() || "Standard catalog and sample inquiry"}
----------------------------------------
Sourced from trusted Ambur workshops. Quality-checked before dispatch.
Delivery time and shipping charge confirmed on WhatsApp.
Please share the B2B catalog, tier price sheet, and sample availability!`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const generatedId = `INQ-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquiryId(generatedId);
    setSubmitted(true);

    const message = buildWhatsAppMessage(generatedId);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // Securely register inquiry in Supabase via server route
    fetch("/api/wholesale-inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        business_name: form.businessName,
        contact_name: form.contactName,
        phone: form.phone,
        city: form.city,
        product_interest: form.productInterest,
        quantity: form.quantity,
        gstin: form.gstin,
        notes: form.notes,
      }),
    }).catch((err) => {
      console.warn("Server inquiry registration:", err);
    });
  };

  const handleCopy = async () => {
    const message = buildWhatsAppMessage(inquiryId || "INQ-PENDING");
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#2C1A11] font-sans pb-24">
      {/* ── 1. HERO BANNER ── */}
      <section className="relative bg-[#1E140E] text-[#F3ECE5] pt-16 pb-20 border-b border-[#3E2B1E] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7A3E1D]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E2017] border border-[#4D382A] text-xs font-mono uppercase tracking-widest text-[#D4A359]">
              <Building2 className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>B2B &amp; Wholesale Supply</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF3EA] leading-tight">
              Wholesale Bovine Leather Goods. <br />
              <span className="text-[#D4A359] italic font-normal">
                Direct From Ambur.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#D4C3B3] leading-relaxed max-w-2xl">
              Sourced from trusted Ambur workshops. Quality-checked before dispatch.
              We partner with retailers, corporate clients, and regional distributors
              seeking bovine leather goods with honest volume pricing.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. WHOLESALE TERMS & MOQ EXPLANATION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#EADDD3] shadow-warm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#F3ECE5] text-[#7A3E1D] flex items-center justify-center font-bold">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2C1A11]">
              Minimum Order Quantity
            </h3>
            <p className="text-xs text-[#6B5B52] leading-relaxed">
              MOQ of <strong>50 pieces</strong> per design or category. Enables Ambur workshops
              to optimize leather batch cutting and hardware procurement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#EADDD3] shadow-warm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#F3ECE5] text-[#7A3E1D] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2C1A11]">
              Quality-Checked Dispatch
            </h3>
            <p className="text-xs text-[#6B5B52] leading-relaxed">
              Every production lot undergoes individual piece-by-piece inspection for stitching consistency,
              edge burnishing, and hardware function prior to dispatch.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#EADDD3] shadow-warm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#F3ECE5] text-[#7A3E1D] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2C1A11]">
              Custom Brand Debossing
            </h3>
            <p className="text-xs text-[#6B5B52] leading-relaxed">
              Available for wholesale lots. We support blind thermal debossing or gold foil stamping
              with your company monogram or client brand mark.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. TIER PRICING TABLE ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1A11]">
            Volume Pricing Tiers (Draft Estimates)
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5B52]">
            Draft pricing brackets for standard bovine leather articles. Exact quotes provided upon specification review.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#EADDD3] shadow-warm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#F8F5F1] text-[#2C1A11] border-b border-[#EADDD3] font-mono uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Order Quantity</th>
                  <th className="p-4 sm:p-5">Wallets (Draft Tier)</th>
                  <th className="p-4 sm:p-5">Belts (Draft Tier)</th>
                  <th className="p-4 sm:p-5">Customization &amp; Terms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EADDD3] text-[#6B5B52]">
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#2C1A11]">
                    50 – 99 pieces
                    <span className="block text-[10px] text-[#7A3E1D] font-mono">MOQ Tier</span>
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-[#2C1A11]">
                    ₹449 – ₹549 / unit
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-[#2C1A11]">
                    ₹599 – ₹649 / unit
                  </td>
                  <td className="p-4 sm:p-5">
                    Standard packaging; quality inspection; initial debossing available upon request
                  </td>
                </tr>
                <tr className="hover:bg-[#FBF9F5] transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#2C1A11]">
                    100 – 249 pieces
                    <span className="block text-[10px] text-[#7A3E1D] font-mono">Volume Tier</span>
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-[#2C1A11]">
                    ₹399 – ₹499 / unit
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-[#2C1A11]">
                    ₹549 – ₹599 / unit
                  </td>
                  <td className="p-4 sm:p-5">
                    Includes custom company brass die debossing; prioritized batch schedule
                  </td>
                </tr>
                <tr className="hover:bg-[#FBF9F5] transition-colors bg-[#F8F5F1]/40">
                  <td className="p-4 sm:p-5 font-bold text-[#2C1A11]">
                    250+ pieces
                    <span className="block text-[10px] text-[#7A3E1D] font-mono">Enterprise Tier</span>
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-[#7A3E1D]">
                    Custom workshop quotation
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-[#7A3E1D]">
                    Custom workshop quotation
                  </td>
                  <td className="p-4 sm:p-5">
                    Dedicated hide procurement, color-matching, custom presentation packaging support
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#F8F5F1] border-t border-[#EADDD3] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B5B52] gap-2">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#7A3E1D]" />
              Delivery time and shipping charge confirmed on WhatsApp.
            </span>
            <span className="font-mono text-[11px] text-[#7A3E1D]">
              GST extra as applicable • All prices subject to confirmation
            </span>
          </div>
        </div>
      </section>

      {/* ── 4. WHOLESALE INQUIRY FORM ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-white rounded-3xl border border-[#EADDD3] shadow-2xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-[#EADDD3] pb-6 space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#7A3E1D] font-bold">
              Direct B2B Desk
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1A11]">
              Submit Wholesale Inquiry
            </h2>
            <p className="text-xs text-[#6B5B52]">
              Fill in your business details. Submitting opens a structured WhatsApp discussion directly with our sourcing team.
            </p>
          </div>

          {submitted && (
            <div className="bg-[#F3ECE5] border border-[#EADDD3] p-4 rounded-2xl space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-[#7A3E1D]">
                <span>Inquiry Prepared (#{inquiryId})</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-[11px] text-[#7A3E1D] hover:underline"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? "Copied" : "Copy Message"}</span>
                </button>
              </div>
              <p className="text-xs text-[#6B5B52]">
                Your wholesale inquiry was formatted. If WhatsApp did not open automatically, copy the message text and send it to +91-94432-63580.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1.5">
                  Business / Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.businessName}
                  onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                  placeholder="e.g. Kaveri Retailers Ltd."
                  className="w-full bg-[#FBF9F5] border border-[#EADDD3] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#2C1A11] focus:outline-none focus:border-[#7A3E1D]"
                />
                {errors.businessName && (
                  <span className="text-[11px] text-rose-600 mt-1 block">{errors.businessName}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1.5">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  value={form.contactName}
                  onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full bg-[#FBF9F5] border border-[#EADDD3] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#2C1A11] focus:outline-none focus:border-[#7A3E1D]"
                />
                {errors.contactName && (
                  <span className="text-[11px] text-rose-600 mt-1 block">{errors.contactName}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1.5">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="e.g. 9876543210"
                  className="w-full bg-[#FBF9F5] border border-[#EADDD3] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#2C1A11] focus:outline-none focus:border-[#7A3E1D]"
                />
                {errors.phone && (
                  <span className="text-[11px] text-rose-600 mt-1 block">{errors.phone}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1.5">
                  City &amp; State *
                </label>
                <input
                  type="text"
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="e.g. Bengaluru, Karnataka"
                  className="w-full bg-[#FBF9F5] border border-[#EADDD3] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#2C1A11] focus:outline-none focus:border-[#7A3E1D]"
                />
                {errors.city && (
                  <span className="text-[11px] text-rose-600 mt-1 block">{errors.city}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1.5">
                  Product Category Interest *
                </label>
                <select
                  value={form.productInterest}
                  onChange={(e) => setForm({ ...form, productInterest: e.target.value })}
                  className="w-full bg-[#FBF9F5] border border-[#EADDD3] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#2C1A11] focus:outline-none focus:border-[#7A3E1D]"
                >
                  <option value="Wallets Only">Wallets (Bifold / Trifold / Card)</option>
                  <option value="Belts Only">Belts (Ratchet / Pin Buckle)</option>
                  <option value="Both Wallets & Belts">Both Wallets &amp; Belts</option>
                  <option value="Custom Corporate Orders">Custom Corporate Bulk Orders</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1.5">
                  Estimated Quantity (Min 50) *
                </label>
                <input
                  type="number"
                  min={50}
                  step={10}
                  required
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                  className="w-full bg-[#FBF9F5] border border-[#EADDD3] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#2C1A11] focus:outline-none focus:border-[#7A3E1D]"
                />
                {errors.quantity && (
                  <span className="text-[11px] text-rose-600 mt-1 block">{errors.quantity}</span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1.5">
                GSTIN (Optional)
              </label>
              <input
                type="text"
                maxLength={15}
                value={form.gstin}
                onChange={(e) => setForm({ ...form, gstin: e.target.value.toUpperCase() })}
                placeholder="e.g. 33AAAAA0000A1Z5"
                className="w-full bg-[#FBF9F5] border border-[#EADDD3] rounded-xl px-4 py-2.5 text-xs sm:text-sm font-mono uppercase text-[#2C1A11] focus:outline-none focus:border-[#7A3E1D]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5B52] mb-1.5">
                Specific Requirements / Monogramming Notes
              </label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Mention any target price, packaging preferences, or required timeline..."
                className="w-full bg-[#FBF9F5] border border-[#EADDD3] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#2C1A11] focus:outline-none focus:border-[#7A3E1D]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#7A3E1D] hover:bg-[#633216] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-warm flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Submit Inquiry on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
