import React from "react";

export type Category = {
  id: number;
  name: string;
}

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