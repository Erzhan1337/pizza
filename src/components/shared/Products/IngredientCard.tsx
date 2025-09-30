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
      className={`relative flex flex-col justify-center w-[120px] h-[200px] bg-white rounded-xl px-2 cursor-pointer ${isSelected ? "border-2 border-primary" : ""}`}
      onClick={handleAddIngredient}
    >
      {isSelected && (
        <div className="p-1 border border-primary absolute rounded-full top-3 right-2">
          <Check size={14} className="text-primary" />
        </div>
      )}
      <div className="w-[120px] h-[120px]">
        <Image
          src={ingredient.image}
          alt={ingredient.name}
          width={110}
          height={110}
        />
      </div>
      <span className="font-thin text-sm line-clamp-2 h-[40px]">
        {ingredient.name}
      </span>
      <span className="font-semibold">{ingredient.price} ₸</span>
    </button>
  );
}

export default IngredientCard;
