"use client";
import Input from "@/components/shared/Sidebar Filter/input";
import { useEffect, useState } from "react";

function FilteringByPrice() {
  const [minValue, setMinValue] = useState<number | null>(null);
  const [maxValue, setMaxValue] = useState<number | null>(null);
  const [isValid, setIsValid] = useState(true);
  useEffect(() => {
    const validatePriceRange = () => {
      const min = minValue;
      const max = maxValue;
      if (min !== null && max !== null) {
        if (min > max) {
          setIsValid(false);
        } else setIsValid(true);
      }
    };

    validatePriceRange();
  }, [minValue, maxValue]);

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
