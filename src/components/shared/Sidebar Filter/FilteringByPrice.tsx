"use client";
import Input from "@/components/shared/Sidebar Filter/input";
import { useEffect, useState } from "react";
import { useCategories } from "@/store/useCategories";

function FilteringByPrice() {
  const [minValue, setMinValue] = useState<number | null>(null);
  const [maxValue, setMaxValue] = useState<number | null>(null);
  const [isValid, setIsValid] = useState(true);

  const setRange = useCategories((state) => state.setPriceRange);
  useEffect(() => {
    const validatePriceRange = () => {
      const min = minValue ?? 0;
      const max = maxValue ?? 20000;
      if (min < 0 || max < 0) {
        setIsValid(false);
        return;
      }
      if (min >= max) {
        setIsValid(false);
        return;
      }
      setIsValid(true);
      setRange([min, max]);
    };
    validatePriceRange();
  }, [minValue, maxValue, setRange]);

  const handleMinChange = (value: number) => {
    setMinValue(value);
  };

  const handleMaxChange = (value: number) => {
    setMaxValue(value);
  };

  return (
    <div className="pt-5 pb-7 border-y border-gray-200">
      <p className="font-bold mb-4">Цена от и до:</p>
      <div className="flex items-center gap-8">
        <Input placeholder="0" onChange={handleMinChange} valid={isValid} />
        <Input placeholder="2000" onChange={handleMaxChange} valid={isValid} />
      </div>
    </div>
  );
}

export default FilteringByPrice;
