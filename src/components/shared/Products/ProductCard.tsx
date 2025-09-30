"use client";
import Image from "next/image";
import { Pizza } from "@/types";
import { Grid2x2Plus, Settings2, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function ProductCard({
  pizza,
  onClick,
  modal,
}: {
  pizza: Pizza;
  onClick: (id: number) => void;
  modal: (open: boolean) => void;
}) {
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(1);

  const handleClick = () => {
    if (!pizza.canMake) {
      setClicked(true);
    }
  };

  const handleOpenModal = () => {
    onClick(pizza.id);
    modal(true);
  };
  return (
    <div className="mt-5 relative">
      <button
        className={`absolute right-2 top-2 cursor-pointer p-3 ${pizza.canMake ? "inline-block" : "hidden"}`}
      >
        <Settings2 size={20} className="text-primary" />
      </button>
      <button
        className="w-full h-[260px] bg-[#FFF7EE] flex items-center justify-center rounded-2xl cursor-pointer"
        onClick={handleOpenModal}
      >
        <Image
          src={pizza.image}
          alt={pizza.name}
          width={212}
          height={212}
          className="hover:scale-105 transition-all duration-300 ease-linear"
        />
      </button>
      <div>
        <div className="flex items-center justify-between mt-4">
          <h2 className="font-bold text-xl">{pizza.name}</h2>
          <div className="flex font-bold">
            {pizza.rating}
            <Star size={20} className="ml-1 text-yellow-500" />
          </div>
        </div>
        <p className="mt-2 h-[65px] w-full text-sm text-gray-300 overflow-auto">
          {pizza.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl">от {pizza.sizes[0].price} ₸</span>
          {clicked ? (
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}
                variant="outline"
                size="sm"
                className="text-primary"
              >
                -
              </Button>
              <span className="font-bold text-xl">{count}</span>
              <Button
                onClick={() => setCount((prev) => prev + 1)}
                variant="outline"
                size="sm"
                className="text-primary"
              >
                +
              </Button>
            </div>
          ) : (
            <button
              onClick={handleClick}
              className="flex items-center py-2 px-3 rounded-lg bg-[#FFFAF4] text-primary font-bold cursor-pointer hover:scale-95 transition-all duration-300 ease-linear"
            >
              {pizza.canMake && (
                <Grid2x2Plus size={20} className="text-primary mr-2" />
              )}
              {pizza.canMake ? "Собрать" : "+ Добавить"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
