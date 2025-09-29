import { create } from "zustand/react";
import { CategoriesState } from "@/types";

export const useCategories = create<CategoriesState>()((set) => ({
  sort: "rating",
  setSort: (s) => set(() => ({ sort: s })),
  category: 1,
  setCategory: (c) => set(() => ({ category: c })),
  priceRange: [0, 20000],
  setPriceRange: (range) =>
    set(() => ({ priceRange: range, submitted: false })),
  ingredients: [],
  setIngredients: (ing) => set(() => ({ ingredients: ing, submitted: false })),
  submitted: false,
  setSubmitted: (s) => set(() => ({ submitted: s })),
}));
