'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  useSyncExternalStore,
  ReactNode,
} from "react";
import { Product } from "@/data/products";
import { useCartStore, CartItem } from "@/store/useCartStore";

const emptySubscribe = () => () => {};

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
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  // Subscribe directly to Zustand state slices so this provider and its consumers re-render immediately on changes
  const items = useCartStore((state) => state.items);
  const isOpen = useCartStore((state) => state.isOpen);
  const isCheckoutOpen = useCartStore((state) => state.isCheckoutOpen);
  const checkoutDirectItem = useCartStore((state) => state.checkoutDirectItem);
  const store = useCartStore();

  useEffect(() => {

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

  // Ensure server-rendered HTML matches initial client hydration exactly
  const safeItems = useMemo(() => (isMounted ? items : []), [isMounted, items]);

  const getTotalCount = useCallback(() => {
    return safeItems.reduce((total, item) => total + item.quantity, 0);
  }, [safeItems]);

  const getSubtotal = useCallback(() => {
    return safeItems.reduce(
      (total, item) => total + (item.product?.price || 0) * item.quantity,
      0
    );
  }, [safeItems]);

  const contextValue: CartContextType = {
    items: safeItems,
    isOpen,
    isCheckoutOpen,
    checkoutDirectItem,
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
  const items = useCartStore((state) => state.items);
  const isOpen = useCartStore((state) => state.isOpen);
  const isCheckoutOpen = useCartStore((state) => state.isCheckoutOpen);
  const checkoutDirectItem = useCartStore((state) => state.checkoutDirectItem);
  const store = useCartStore();

  if (!context) {
    // Graceful fallback to zustand store if used outside provider
    return {
      items,
      isOpen,
      isCheckoutOpen,
      checkoutDirectItem,
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
      getTotalCount: () => items.reduce((total, item) => total + item.quantity, 0),
      getSubtotal: () => items.reduce((total, item) => total + (item.product?.price || 0) * item.quantity, 0),
    };
  }
  return context;
}

export const useCartContext = useCart;

// Re-export CartItem and useCartStore for seamless imports
export type { CartItem };
export { useCartStore };
