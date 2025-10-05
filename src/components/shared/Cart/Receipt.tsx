"use client";
import { Package, Percent, TruckElectric } from "lucide-react";
import { Button } from "@/components/ui/button";
import useCart from "@/store/useCart";

function Receipt() {
  const total = useCart((state) => state.getTotalPrice());
  const itemsCount = useCart((state) => state.getTotalItems());

  const delivery = itemsCount > 0 ? (total >= 5000 ? 0 : 1500) : 0;
  const taxes = total * 0.2;

  return (
    <div className="rounded-xl bg-white w-full px-10 pb-5">
      <div className="border-b border-gray-200 py-8">
        <p className="text-base">Итого:</p>
        <span className="text-4xl font-bold">{total + taxes + delivery} ₸</span>
      </div>
      <div className="flex flex-col gap-y-3 py-10 border-b border-gray-200">
        <div className="flex items-center gap-1 justify-between">
          <div className="flex items-center gap-1">
            <Package size={18} />
            <p>Стоимость товаров:</p>
          </div>
          <span className="font-bold">{total} ₸</span>
        </div>

        <div className="flex items-center gap-1 justify-between">
          <div className="flex items-center gap-1">
            <Percent size={18} />
            <p>Налоги:</p>
          </div>
          <span className="font-bold">{taxes} ₸</span>
        </div>

        <div className="flex items-center gap-1 justify-between">
          <div className="flex items-center gap-1">
            <TruckElectric size={18} />
            <p>Доставка:</p>
          </div>
          <span className="font-bold">{delivery} ₸</span>
        </div>
      </div>
      <Button
        variant="default"
        size="lg"
        className="cursor-pointer w-full mt-10"
      >
        Перейти к оплате
      </Button>
    </div>
  );
}

export default Receipt;
