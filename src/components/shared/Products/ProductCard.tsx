import Image from "next/image";
import { Pizza } from "@/types";
import Link from "next/link";
import { Grid2x2Plus, Settings2 } from "lucide-react";

function ProductCard({ pizza }: { pizza: Pizza }) {
  return (
    <div className="mt-5">
      <Link
        href={`/pizza/${pizza.id}`}
        className="relative w-full h-[260px] bg-[#FFF7EE] flex items-center justify-center rounded-2xl"
      >
        <button
          className={`absolute right-2 top-2 cursor-pointer p-3 ${pizza.canMake ? "inline-block" : "hidden"}`}
        >
          <Settings2 size={20} className="text-primary" />
        </button>
        <Image
          src={pizza.image}
          alt={pizza.name}
          width={212}
          height={212}
          className="hover:scale-105 transition-all duration-300 ease-linear"
        />
      </Link>
      <div>
        <h2 className="font-bold text-xl mt-4">{pizza.name}</h2>
        <p className="mt-2 h-[65px] w-full text-sm text-gray-300 overflow-auto">
          {pizza.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl">от {pizza.sizes[0].price} ₸</span>
          <button className="flex items-center py-2 px-3 rounded-lg bg-[#FFFAF4] text-primary font-bold cursor-pointer hover:scale-95 transition-all duration-300 ease-linear">
            {pizza.canMake && (
              <Grid2x2Plus size={20} className="text-primary mr-2" />
            )}
            {pizza.canMake ? "Собрать" : "+ Добавить"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
