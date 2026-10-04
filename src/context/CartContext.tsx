'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { Product } from "@/data/products";
import { useCartStore, CartItem } from "@/store/useCartStore";

export interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  isCheckoutOpen: boolean;
  checkoutDirectItem: CartItem | null;
  isMounted: boolean;
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

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "ambur_leather_cart_v2";

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Sync with zustand store
  const store = useCartStore();

  useEffect(() => {
    setIsMounted(true);

    // Safe guarded localStorage rehydration to prevent React Error #418 / #423
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const stored = window.localStorage.getItem(LOCAL_STORAGE_KEY);
        if (stored) {
          useCartStore.persist.rehydrate();
        }
      }
    } catch (err) {
      console.warn("Storage guard: Unable to access localStorage during rehydration", err);
    }
  }, []);

  const openCart = useCallback(() => {
    store.openCart();
  }, [store]);

  const closeCart = useCallback(() => {
    store.closeCart();
  }, [store]);

  const toggleCart = useCallback(() => {
    store.toggleCart();
  }, [store]);

  const openCheckout = useCallback(
    (directItem: CartItem | null = null) => {
      store.openCheckout(directItem);
    },
    [store]
  );

  const closeCheckout = useCallback(() => {
    store.closeCheckout();
  }, [store]);

  const addItem = useCallback(
    (
      product: Product,
      selectedColor?: string,
      embossingText?: string,
      embossingStyle?: "blind" | "gold",
      beltSize?: string
    ) => {
      store.addItem(product, selectedColor, embossingText, embossingStyle, beltSize);
    },
    [store]
  );

  const removeItem = useCallback(
    (itemId: string) => {
      store.removeItem(itemId);
    },
    [store]
  );

  const updateQuantity = useCallback(
    (itemId: string, quantity: number) => {
      store.updateQuantity(itemId, quantity);
    },
    [store]
  );

  const clearCart = useCallback(() => {
    store.clearCart();
  }, [store]);

  const getTotalCount = useCallback(() => {
    if (!isMounted) return 0;
    return store.getTotalCount();
  }, [isMounted, store]);

  const getSubtotal = useCallback(() => {
    if (!isMounted) return 0;
    return store.getSubtotal();
  }, [isMounted, store]);

  // Guarantee server-rendered HTML matches initial client hydration exactly
  const safeItems = isMounted ? store.items : [];

  const contextValue: CartContextType = {
    items: safeItems,
    isOpen: store.isOpen,
    isCheckoutOpen: store.isCheckoutOpen,
    checkoutDirectItem: store.checkoutDirectItem,
    isMounted,
    openCart,
    closeCart,
    toggleCart,
    openCheckout,
    closeCheckout,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalCount,
    getSubtotal,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    // Graceful fallback to zustand store if used outside provider
    const store = useCartStore();
    return {
      items: store.items,
      isOpen: store.isOpen,
      isCheckoutOpen: store.isCheckoutOpen,
      checkoutDirectItem: store.checkoutDirectItem,
      isMounted: true,
      openCart: store.openCart,
      closeCart: store.closeCart,
      toggleCart: store.toggleCart,
      openCheckout: store.openCheckout,
      closeCheckout: store.closeCheckout,
      addItem: store.addItem,
      removeItem: store.removeItem,
      updateQuantity: store.updateQuantity,
      clearCart: store.clearCart,
      getTotalCount: store.getTotalCount,
      getSubtotal: store.getSubtotal,
    };
  }
  return context;
}

export const useCartContext = useCart;

// Re-export CartItem and useCartStore for seamless imports
export type { CartItem };
export { useCartStore };
