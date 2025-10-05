"use client";
import Image from "next/image";
import Toggle from "@/components/ui/toggle";
import { Pizza, PizzaSize } from "@/types";
import { useEffect, useState } from "react";
import { pizzaIngredients } from "@/data";
import IngredientCard from "@/components/shared/Products/IngredientCard";
import { X } from "lucide-react";
import useCart from "@/store/useCart";

interface Props {
  pizza: Pizza;
  onClose: () => void;
}

function Modal({ pizza, onClose }: Props) {
  const addItem = useCart((state) => state.addItem);

  const [selectedSize, setSelectedSize] = useState("Маленькая");
  const [selectedDough, setSelectedDough] = useState("Традиционное");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const sizeMap: { [key: string]: string } = {
    "Маленькая": "25",
    "Средняя": "30",
    "Большая": "35",
  };

  const availableDoughs = pizza.sizes
    .filter((s) => s.size === sizeMap[selectedSize])
    .map((s) => s.dough);

  const availableSizes = pizza.sizes
    .filter((s) => s.dough === selectedDough)
    .map((s) => {
      const sizeKey = Object.keys(sizeMap).find(
        (key) => sizeMap[key] === s.size,
      );
      return sizeKey || "";
    })
    .filter(Boolean);

  const selectedVariant: PizzaSize | undefined = pizza.sizes.find(
    (s) => s.size === sizeMap[selectedSize] && s.dough === selectedDough,
  );

  const [totalPrice, setTotalPrice] = useState(selectedVariant?.price || 0);

  useEffect(() => {
    const extraIngredientsPrice = selectedIngredients.reduce((acc, id) => {
      const ingredient = pizzaIngredients.find((ing) => ing.id === id);
      return ingredient ? acc + ingredient.price : acc;
    }, 0);

    if (selectedVariant) {
      setTotalPrice(selectedVariant.price + extraIngredientsPrice);
    }
  }, [selectedSize, selectedDough, selectedIngredients, selectedVariant]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const toggleIngredient = (id: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    addItem({
      id: String(pizza.id),
      name: pizza.name,
      price: totalPrice,
      quantity: 1,
      size: selectedVariant.text,
      dough: selectedVariant.dough,
      ingredients: selectedIngredients,
      image: pizza.image,
    });
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed rounded-3xl flex z-60 w-[90%] lg:w-[75%] xl:w-[60%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <div className="relative w-[50%] aspect-[1/1] bg-white rounded-tl-3xl rounded-bl-3xl">
          <Image
            src={selectedVariant?.image || pizza.image}
            alt={pizza.name}
            fill
            sizes="(max-width:1536px) 90vw,(max-width: 1280px) 70vw,(max-width:1024px) 50vw,33vw"
            className="object-contain"
          />
        </div>

        <div className="relative w-[70%] lg:w-[50%] bg-[#F4F1EE] h-full rounded-tr-3xl rounded-br-3xl py-2 md:py-4 xl:py-7 px-4 md:px-6 lg:px-8">
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
            {selectedVariant?.size || ""}, {selectedVariant?.dough || ""} тесто,{" "}
            {selectedVariant?.weight || ""}
          </p>
          <div>
            <Toggle
              selected={selectedSize}
              options={["Маленькая", "Средняя", "Большая"]}
              availableOptions={availableSizes}
              onChange={setSelectedSize}
            />
            <Toggle
              selected={selectedDough}
              options={["Традиционное", "Тонкое"]}
              availableOptions={availableDoughs}
              onChange={setSelectedDough}
            />
          </div>
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
          <button
            onClick={handleAddToCart}
            disabled={!selectedVariant}
            className="text-xs md:text-base mt-2 md:mt-3 lg:mt-5 rounded-xl py-2 lg:py-3 w-full text-white bg-primary cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Добавить в корзину за {totalPrice} ₸
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
