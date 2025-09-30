import Image from "next/image";
import { PizzaIngredient } from "@/types";
import { Check } from "lucide-react";

function IngredientCard({
  ingredient,
  onToggle,
  isSelected,
}: {
  ingredient: PizzaIngredient;
  onToggle: (id: string) => void;
  isSelected: boolean;
}) {
  const handleAddIngredient = () => {
    onToggle(ingredient.id);
  };
  return (
    <button
      key={ingredient.name}
      className={`relative flex flex-col justify-center w-[80px] h-[120px] lg:w-[120px] lg:h-[160px] bg-white rounded-xl pb-1 px-2 cursor-pointer ${isSelected ? "border-2 border-primary" : ""}`}
      onClick={handleAddIngredient}
    >
      {isSelected && (
        <div className="p-1 border border-primary absolute rounded-full top-1 right-1 lg:top-2 lg:right-2">
          <Check size={10} className="text-primary" />
        </div>
      )}
      <div className="w-[80px] h-[80px]">
        <Image
          src={ingredient.image}
          alt={ingredient.name}
          width={70}
          height={70}
        />
      </div>
      <span className="font-thin text-[10px] md:text-sm line-clamp-2 h-[26px]">
        {ingredient.name}
      </span>
      <span className="text-[10px] md:text-sm xl:text-base font-semibold">
        {ingredient.price} ₸
      </span>
    </button>
  );
}

export default IngredientCard;
