import React from "react";

export type Category = {
  id: number;
  name: string;
};

export interface IndicatorStyle {
  left?: string;
  width?: string;
}

export interface SortOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface SortDropdownProps {
  label?: string;
  options?: SortOption[];
  defaultOption?: string;
  onChange?: (option: string) => void;
  className?: string;
}

export interface CheckboxOption {
  id: string;
  label: string;
}

export interface CheckboxGroupProps {
  options: CheckboxOption[];
  value?: string[];
  defaultValue?: string[];
  limit?: number;
  onChange?: (value: string[]) => void;
  className?: string;
}

export interface PizzaIngredient {
  id: string;
  name: string;
  category?: string;
  price: number;
  image: string;
}

export interface PizzaSize {
  text:string;
  image:string;
  size: string;
  dough:string;
  price: number;
  weight: number;
}

export interface Pizza {
  id: string;
  name: string;
  description: string;
  image: string;
  category: number;
  rating: number;
  ingredients: string[];
  sizes: PizzaSize[];
  canMake?: boolean;
}

export interface CategoriesState {
  sort: string;
  setSort: (s: string) => void;
  category: number;
  setCategory: (c: number) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  ingredients: string[];
  setIngredients: (ing: string[]) => void;
  submitted: boolean;
  setSubmitted: (s: boolean) => void;
}

export interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  dough: string;
  ingredients?: string[];
  image: string;
}

export interface Cart {
  items: Item[];
  decreaseQuantity: (id: string) => void;
  increaseQuantity: (id: string) => void;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}