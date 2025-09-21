import { create } from "zustand/react";
import { CategoriesState } from "@/types";



export const useCategories = create<CategoriesState>()((set) => ({
  sort: "rating",
  setSort: (s) => set(() => ({ sort: s })),
  category: 1,
  setCategory: (c) => set(() => ({ category: c }))
}))