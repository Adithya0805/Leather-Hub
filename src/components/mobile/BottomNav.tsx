'use client';

import React, { useState, useEffect } from "react";
import { Home, Wallet, ShieldCheck, Gift, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

export function BottomNav() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [mounted, setMounted] = useState(false);

  const { openCart, getTotalCount } = useCartStore();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const walletsEl = document.getElementById("wallets");
      const beltsEl = document.getElementById("belts");
      const giftsEl = document.getElementById("gift-sets");

      if (giftsEl && scrollPos >= giftsEl.offsetTop) {
        setActiveTab("gifts");
      } else if (beltsEl && scrollPos >= beltsEl.offsetTop) {
        setActiveTab("belts");
      } else if (walletsEl && scrollPos >= walletsEl.offsetTop) {
        setActiveTab("wallets");
      } else {
        setActiveTab("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalCount = mounted ? getTotalCount() : 0;

  const scrollToSection = (id: string, tabKey: string) => {
    setActiveTab(tabKey);
    if (tabKey === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: Home,
      action: () => scrollToSection("top", "home"),
    },
    {
      id: "wallets",
      label: "Wallets",
      icon: Wallet,
      action: () => scrollToSection("wallets", "wallets"),
    },
    {
      id: "belts",
      label: "Belts",
      icon: ShieldCheck,
      action: () => scrollToSection("belts", "belts"),
    },
    {
      id: "gifts",
      label: "Gift Sets",
      icon: Gift,
      action: () => scrollToSection("gift-sets", "gifts"),
    },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-t border-[#EADDD3] pb-safe gpu-layer transition-transform duration-300 shadow-warm"
    >
      <div className="flex items-center justify-around px-2 py-1 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={item.action}
              className={`min-w-[48px] min-h-[48px] flex-1 flex flex-col items-center justify-center relative py-1 px-2 rounded-xl transition-all duration-200 active:scale-90 ${
                isActive ? "text-[#7A3E1D]" : "text-[#8C7E76] hover:text-[#2C1A11]"
              }`}
              aria-label={item.label}
            >
              {isActive && (
                <span className="absolute top-1 w-5 h-1 rounded-full bg-[#7A3E1D]" />
              )}
              <Icon
                className={`w-5 h-5 transition-transform ${
                  isActive ? "scale-110 stroke-[2.2]" : "stroke-[1.8]"
                }`}
              />
              <span
                className={`text-[10px] font-sans mt-0.5 tracking-tight ${
                  isActive ? "font-bold text-[#7A3E1D]" : "font-medium text-[#8C7E76]"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Dedicated Cart Tab */}
        <button
          type="button"
          onClick={openCart}
          className="min-w-[48px] min-h-[48px] flex-1 flex flex-col items-center justify-center relative py-1 px-2 rounded-xl text-[#8C7E76] hover:text-[#2C1A11] active:scale-90 transition-all"
          aria-label="Open Cart Bag"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-[17px] h-[17px] px-1 rounded-full bg-[#7A3E1D] text-white text-[10px] font-extrabold flex items-center justify-center shadow-micro animate-pulse">
                {totalCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-sans font-medium mt-0.5 tracking-tight text-[#8C7E76]">
            Bag
          </span>
        </button>
      </div>
    </nav>
  );
}
