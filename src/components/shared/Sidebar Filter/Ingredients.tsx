"use client";
import { PizzaIngredient } from "@/types";
import { CheckboxGroup } from "@/components/shared/Sidebar Filter/Checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const pizzaIngredients: PizzaIngredient[] = [
  {
    id: "1",
    name: "Моцарелла",
    category: "cheese",
    price: 395,
    image: "",
  },
  {
    id: "2",
    name: "Чеддер",
    category: "cheese",
    price: 395,
    image: "",
  },
  {
    id: "3",
    name: "Пармезан",
    category: "cheese",
    price: 395,
    image: "",
  },
  {
    id: "4",
    name: "Пепперони",
    category: "meat",
    price: 495,
    image: "",
  },
  {
    id: "5",
    name: "Ветчина",
    category: "meat",
    price: 445,
    image: "",
  },
  {
    id: "6",
    name: "Бекон",
    category: "meat",
    price: 495,
    image: "",
  },
  {
    id: "7",
    name: "Курица",
    category: "meat",
    price: 445,
    image: "",
  },
  {
    id: "8",
    name: "Салями",
    category: "meat",
    price: 495,
    image: "",
  },
  {
    id: "9",
    name: "Шампиньоны",
    category: "vegetables",
    price: 295,
    image: "",
  },
  {
    id: "10",
    name: "Помидоры",
    category: "vegetables",
    price: 245,
    image: "",
  },
  {
    id: "11",
    name: "Сладкий перец",
    category: "vegetables",
    price: 245,
    image: "",
  },
  {
    id: "12",
    name: "Красный лук",
    category: "vegetables",
    price: 195,
    image: "",
  },
  {
    id: "13",
    name: "Маслины",
    category: "vegetables",
    price: 295,
    image: "",
  },
  {
    id: "14",
    name: "Халапеньо",
    category: "vegetables",
    price: 295,
    image: "",
  },
  {
    id: "15",
    name: "Ананас",
    category: "vegetables",
    price: 345,
    image: "",
  },
  {
    id: "16",
    name: "Кукуруза",
    category: "vegetables",
    price: 245,
    image: "",
  },
  {
    id: "17",
    name: "Брокколи",
    category: "vegetables",
    price: 295,
    image: "",
  },
  {
    id: "18",
    name: "Чеснок",
    category: "vegetables",
    price: 195,
    image: "",
  },
  {
    id: "19",
    name: "Креветки",
    category: "seafood",
    price: 745,
    image: "",
  },
  {
    id: "20",
    name: "Лосось",
    category: "seafood",
    price: 845,
    image: "",
  },
];

function Ingredients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const filteredIngredients = !searchTerm
    ? pizzaIngredients
    : pizzaIngredients.filter((ing) =>
        ing.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

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
            options={filteredIngredients.map((ingredient) => ({
              id: ingredient.id,
              label: ingredient.name,
            }))}
            limit={isOpen ? pizzaIngredients.length : 6}
          />
        </div>
        <button
          onClick={handleClick}
          className={`cursor-pointer text-primary mt-5`}
        >
          {isOpen ? "- Скрыть" : "+ Показать все"}
        </button>
      </div>
      <Button className="w-full rounded-xl mt-10 cursor-pointer" size="lg">
        Применить
      </Button>
    </div>
  );
}

export default Ingredients;
