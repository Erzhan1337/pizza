"use client";
import Image from "next/image";
import Toggle from "@/components/ui/toggle";
import { Pizza } from "@/types";
import { useEffect, useState } from "react";
import { pizzaIngredients } from "@/data";
import IngredientCard from "@/components/shared/Products/IngredientCard";
import { X } from "lucide-react";

interface Props {
  pizza: Pizza;
  onClose: () => void;
}

const sizes = [
  {
    name: "Маленькая",
    size: "25 см",
    weight: "380 г",
  },
  {
    name: "Средняя",
    size: "30 см",
    weight: "470 г",
  },
  {
    name: "Большая",
    size: "35 см",
    weight: "550 г",
  },
];
const doughTypes = [{ name: "Традиционное" }, { name: "Тонкое" }];

function Modal({ pizza, onClose }: Props) {
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedDough, setSelectedDough] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(pizza.sizes[0].price);

  useEffect(() => {
    const extraIngredientsPrice = selectedIngredients.reduce((acc, id) => {
      const ingredient = pizzaIngredients.find((ing) => ing.id === id);
      return ingredient ? acc + ingredient.price : acc;
    }, 0);
    setTotalPrice(pizza.sizes[selectedSize].price + extraIngredientsPrice);
  }, [selectedSize, pizza.sizes, selectedIngredients]);

  const toggleIngredient = (id: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      {/*Modal*/}
      <div className="fixed rounded-3xl flex z-60 w-[90%] lg:w-[75%] xl:w-[60%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="relative w-[50%] bg-white rounded-tl-3xl rounded-bl-3xl">
          <Image
            src={pizza.image}
            alt={pizza.name}
            fill
            sizes="(max-width: 1280px) 100vw,(max-width:1024px) 50vw,33vw"
            className="object-contain"
          />
        </div>

        <div className="relative w-[70%] lg:w-[50%] bg-[#F4F1EE] h-full rounded-tr-3xl rounded-br-3xl py-2 md:py-4 xl:py-7 px-4 md:px-6 lg:px-8 xl:px-10">
          <button
            className="absolute right-3 top-3 cursor-pointer hover:scale-90 transition-all duration-300"
            onClick={() => onClose()}
          >
            <X />
          </button>
          <h4 className="text-base lg:text-xl xl:text-2xl font-bold mb-1 md:md-2">
            {pizza.name}
          </h4>
          <p className="text-xs md:text-sm xl:text-base text-gray-400 mb-2">
            {sizes[selectedSize].size}, {doughTypes[selectedDough].name} тесто,{" "}
            {sizes[selectedSize].weight}
          </p>
          {/*Types*/}
          <div>
            <Toggle
              selected={selectedSize}
              options={sizes}
              onChange={setSelectedSize}
            />
            <Toggle
              selected={selectedDough}
              options={doughTypes}
              onChange={setSelectedDough}
            />
          </div>
          {/*Ingredients*/}
          <div>
            <p className="text-xl font-semibold mb-2">Добавить по вкусу</p>
            <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {pizzaIngredients.map((ingredient) => (
                <IngredientCard
                  ingredient={ingredient}
                  key={ingredient.name}
                  isSelected={selectedIngredients.includes(ingredient.id)}
                  onToggle={toggleIngredient}
                />
              ))}
            </div>
          </div>
          <button className="text-xs md:text-base mt-2 md:mt-3 lg:mt-5 rounded-xl py-2 lg:py-3 w-full text-white bg-primary cursor-pointer">
            Добавить в корзину за {totalPrice} ₸
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
