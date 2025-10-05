"use client";
import { Trash } from "lucide-react";
import useCart from "@/store/useCart";
import CartItem from "@/components/shared/Cart/CartItem";

function Cart() {
  const items = useCart((state) => state.items);
  const clearCart = useCart((state) => state.clearCart);
  return (
    <div className="w-full h-[400px] mb-10 bg-white rounded-xl p-5 flex flex-col">
      <div className="flex items-center justify-between border-b border-gray-200 pb-5">
        <p className="font-bold text-xl">1. Корзина</p>
        <button onClick={clearCart} className="text-gray-500 text-sm flex items-center gap-1 cursor-pointer">
          <Trash size={16} className="text-gray-500" />
          Очистить корзину
        </button>
      </div>
      <div className="py-3 overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none">
        {items.length > 0 ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p className="text-primary font-medium text-xl text-center mt-10">
            Вы пока еще ничего не добавили:(
          </p>
        )}
      </div>
    </div>
  );
}

export default Cart;