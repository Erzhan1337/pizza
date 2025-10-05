import Image from "next/image";
import { Item } from "@/types";
import { Minus, Plus, X } from "lucide-react";
import useCart from "@/store/useCart";
import { pizzaIngredients } from "@/data";

function CartItem({ item }: { item: Item }) {
  const removeItem = useCart((state) => state.removeItem);
  const increaseQuantity = useCart((state) => state.increaseQuantity);
  const decreaseQuantity = useCart((state) => state.decreaseQuantity);
  const ingredients = item.ingredients
    ? pizzaIngredients.filter((ing) => item.ingredients?.includes(ing.id))
    : [];

  const sizes: Record<string, string> = {
    Маленькая: "25см",
    Средняя: "30см",
    Большая: "35см",
  };

  const handleIncrease = () => {
    increaseQuantity(item.id);
  };

  const handleDecrease = () => {
    if (item.quantity === 1) removeItem(item.id);
    else decreaseQuantity(item.id);
  };
  return (
    <div className="flex items-center justify-between py-5 px-3">
      <div className="flex gap-3 items-center">
        <Image src={item.image} alt={item.name} width={60} height={60} />
        <div>
          <p className="text-xl font-bold">{item.name}</p>
          <p className="text-sm text-gray-400">{`${item.size} ${sizes[item.size]}, ${item.dough} тесто`}</p>
          {item.ingredients && (
            <div className="flex flex-wrap w-[300px] h-[40px] gap-1 overflow-x-auto">
              {ingredients.map((ing, index) => (
                <p className="text-sm text-gray-400" key={index}>
                  +{ing.name}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div>
        <span className="text-xl font-bold">
          {item.price * item.quantity} ₸
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleDecrease}
          className="py-2 px-2 rounded-full border cursor-pointer"
        >
          <Minus size={16} />
        </button>
        <span className="font-bold">{item.quantity}</span>
        <button
          onClick={handleIncrease}
          className="py-2 px-2 rounded-full border mr-2 cursor-pointer"
        >
          <Plus size={16} />
        </button>
        <button
          onClick={() => removeItem(item.id)}
          className="text-gray-400 hover:text-gray-500 cursor-pointer"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
