'use client';

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/data/products";

export interface CartItem {
  id: string; // Unique cart item ID (product.id + color + personalization + beltSize)
  product: Product;
  selectedColor: string;
  beltSize?: string;
  embossingText?: string;
  embossingStyle?: "blind" | "gold";
  quantity: number;
  addedAt: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  isCheckoutOpen: boolean;
  checkoutDirectItem: CartItem | null;

  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  openCheckout: (directItem?: CartItem | null) => void;
  closeCheckout: () => void;

  addItem: (
    product: Product,
    selectedColor?: string,
    embossingText?: string,
    embossingStyle?: "blind" | "gold",
    beltSize?: string
  ) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalCount: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      isCheckoutOpen: false,
      checkoutDirectItem: null,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      openCheckout: (directItem = null) => {
        set({ isCheckoutOpen: true, checkoutDirectItem: directItem, isOpen: false });
      },
      closeCheckout: () => {
        set({ isCheckoutOpen: false, checkoutDirectItem: null });
      },

      addItem: (
        product,
        selectedColor,
        embossingText = "",
        embossingStyle = "blind",
        beltSize = ""
      ) => {
        const colorName = selectedColor || product?.colors?.[0]?.name || "Standard";
        const cleanEmbossing = embossingText.trim().toUpperCase();
        const cleanBeltSize = beltSize.trim();
        const cartItemId = `${product.id}-${colorName}-${cleanEmbossing}-${embossingStyle}-${cleanBeltSize}`;

        set((state) => {
          const existingIndex = state.items.findIndex((item) => item.id === cartItemId);
          if (existingIndex > -1) {
            const updated = [...state.items];
            updated[existingIndex].quantity += 1;
            return { items: updated, isOpen: true };
          }

          const newItem: CartItem = {
            id: cartItemId,
            product,
            selectedColor: colorName,
            beltSize: cleanBeltSize || undefined,
            embossingText: cleanEmbossing,
            embossingStyle,
            quantity: 1,
            addedAt: Date.now(),
          };

          return { items: [newItem, ...state.items], isOpen: true };
        });
      },

      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotalCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getSubtotal: () => {
        return get().items.reduce(
          (total, item) => total + (item.product?.price || 0) * item.quantity,
          0
        );
      },
    }),
    {
      name: "ambur_leather_cart_v2",
      skipHydration: true,
    }
  )
);
