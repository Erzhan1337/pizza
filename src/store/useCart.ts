import { create } from "zustand";
import { Cart } from "@/types";

export const useCart = create<Cart>()((set, get) => ({
  items: [],

  increaseQuantity: (id:string) => {
    set((state) => {
      const updatedItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
      return { items: updatedItems };
    });
  },

  decreaseQuantity: (id:string) => {
    set((state) => {
      const updatedItems = state.items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
      return { items: updatedItems };
    });
  },

  addItem: (item) =>
    set((state) => {
      const existingItemIndex = state.items.findIndex((i) => i.id === item.id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity,
        };
        return { items: updatedItems };
      }

      return { items: [...state.items, item] };
    }),

  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),

  clearCart: () => set({ items: [] }),

  getTotalPrice: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
  getTotalItems: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.quantity, 0);
  },
}));

export default useCart;
