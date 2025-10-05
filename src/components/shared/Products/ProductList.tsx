import ProductCard from "./ProductCard";
import { Pizza } from "@/types";

interface ProductListProps {
  pizzas: Pizza[];
  onProductClick: (id: string) => void;
  onModalOpen: (open: boolean) => void;
}

export default function ProductList({
  pizzas,
  onProductClick,
  onModalOpen,
}: ProductListProps) {
  if (pizzas.length === 0) {
    return (
      <div className="text-2xl font-bold flex justify-center pt-20">
        Пиццы не найдены
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-20">
      {pizzas.map((pizza) => (
        <ProductCard
          key={pizza.id}
          pizza={pizza}
          onClick={onProductClick}
          modal={onModalOpen}
        />
      ))}
    </div>
  );
}
