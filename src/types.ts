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
  category: string;
  price: number;
  image: string;
}

export interface PizzaSize {
  size: number;
  price: number;
}

export interface Pizza {
  id: number;
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
  sort:string,
  setSort: (s: string) => void,
  category:number,
  setCategory: (c: number) => void
}