"use client";
import { FC, useState } from "react";
import { CheckboxGroupProps } from "@/types";
import { Check } from "lucide-react";

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  options,
  value: controlledValue,
  defaultValue = [],
  onChange,
  limit = 6,
  className = "",
}) => {
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue);

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;
  const limitedOptions = options.slice(0, limit);

  const handleToggle = (id: string) => {
    let newValue: string[];

    if (currentValue.includes(id)) {
      newValue = currentValue.filter((item) => item !== id);
    } else {
      newValue = [...currentValue, id];
    }

    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(newValue);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {limitedOptions.map((option) => (
        <div
          key={option.id}
          className="flex items-center gap-3  bg-white rounded-xl
                     transition-all duration-200 cursor-pointer"
          onClick={() => handleToggle(option.id)}
        >
          <div className="relative">
            <div
              className={`
                w-6 h-6 rounded-md border-2 transition-all duration-200
                ${
                  currentValue.includes(option.id)
                    ? "bg-orange-500 border-orange-500"
                    : "bg-white border-gray-300"
                }
              `}
            >
              {currentValue.includes(option.id) && (
                <Check
                  className="absolute inset-0 m-auto text-white"
                  size={16}
                  strokeWidth={3}
                />
              )}
            </div>
          </div>
          <span className="text-gray-800 text-base select-none">
            {option.label}
          </span>
        </div>
      ))}
    </div>
  );
};
