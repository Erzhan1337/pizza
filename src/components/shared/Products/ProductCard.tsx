"use client";
import Image from "next/image";
import { Pizza } from "@/types";
import { Settings2, Star } from "lucide-react";
import AddButton from "@/components/shared/Products/AddButton";
import { useRouter } from "next/navigation";
import useCart from "@/store/useCart";
import { useMemo } from "react";

function ProductCard({
  pizza,
  onClick,
  modal,
}: {
  pizza: Pizza;
  onClick: (id: string) => void;
  modal: (open: boolean) => void;
}) {
  const router = useRouter();
  const items = useCart((state) => state.items);
  const isInCart = useMemo(
    () => items.some((item) => item.id === pizza.id),
    [items, pizza.id],
  );
  const handleAddClick = () => {
    if (!isInCart) {
      handleOpenModal();
    } else router.push("/cart");
  };
  const handleMakeClick = () => {};

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
          <div>
            <AddButton
              text="Собрать"
              handleClick={handleMakeClick}
              className={`${pizza.canMake ? "" : "hidden"}`}
              canMake={pizza.canMake}
            />
            <AddButton
              text={`${isInCart ? "✔ В Корзине" : "+ Добавить"}`}
              handleClick={handleAddClick}
              canMake={pizza.canMake}
              className={`${pizza.canMake ? "hidden" : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
