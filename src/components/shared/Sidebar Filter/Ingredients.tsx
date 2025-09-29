"use client";
import { CheckboxGroup } from "@/components/shared/Sidebar Filter/Checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCategories } from "@/store/useCategories";
import { pizzaIngredients } from "@/data";

function Ingredients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const setSubmitted = useCategories((state) => state.setSubmitted);
  const setIngredients = useCategories((state) => state.setIngredients);
  const selectedIngredients = useCategories((state) => state.ingredients);
  const filteredIngredients = !searchTerm
    ? pizzaIngredients
    : pizzaIngredients.filter((ing) =>
        ing.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

  const sortedIngredients = [...filteredIngredients].sort((a, b) => {
    const aSelected = selectedIngredients.includes(a.id);
    const bSelected = selectedIngredients.includes(b.id);
    if (aSelected && !bSelected) return -1;
    if (!aSelected && bSelected) return 1;
    return 0;
  });

  const handleClick = () => {
    if (isOpen) setSearchTerm("");
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="mt-5">
      <p className="font-bold">Ингредиенты:</p>
      <div className="mt-3">
        <input
          value={searchTerm}
          placeholder="Поиск..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`${isOpen ? "block" : "hidden"} pl-4 mb-4 rounded-lg border border-gray-200 outline-0 py-1`}
        />
        <div className="h-[210px] overflow-auto">
          <CheckboxGroup
            options={sortedIngredients.map((ingredient) => ({
              id: ingredient.id,
              label: ingredient.name,
            }))}
            limit={isOpen ? pizzaIngredients.length : 6}
            onChange={(value) => setIngredients(value)}
          />
        </div>
        <button
          onClick={handleClick}
          className={`cursor-pointer text-primary mt-5`}
        >
          {isOpen ? "- Скрыть" : "+ Показать все"}
        </button>
      </div>
      <Button
        onClick={() => setSubmitted(true)}
        className="w-full rounded-xl mt-10 cursor-pointer"
        size="lg"
      >
        Применить
      </Button>
    </div>
  );
}

export default Ingredients;
