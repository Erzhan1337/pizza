"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { SortDropdownProps } from "@/types";

const SortDropdown: React.FC<SortDropdownProps> = ({
  label = "Сортировка по",
  options = [
    { id: "rating", label: "рейтингу" },
    { id: "price", label: "цене" },
    { id: "date", label: "дате" },
  ],
  defaultOption = "rating",
  onChange,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = options.find((opt) => opt.id === selectedOption);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setIsOpen(false);
    onChange?.(optionId);
  };

  return (
    <div className={`hidden relative md:inline-block ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-3 bg-gray-50 rounded-2xl hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <span>{label}:</span>
        <span className="text-orange-500 font-medium">
          {currentOption?.label}
        </span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen && "rotate-180"}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="p-2">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors ${
                  selectedOption === option.id && "bg-orange-50 text-orange-600"
                }`}
              >
                {option.icon && <span>{option.icon}</span>}
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
