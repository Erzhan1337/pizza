import Image from "next/image";
import { Pizza } from "@/types";
import Link from "next/link";

function SearchCart({ pizza }: { pizza: Pizza }) {
  return (
    <Link
      href={`/pizza/${pizza.id}`}
      className="w-full flex items-center gap-5 mb-3 hover:bg-primary/20 rounded-xl p-3"
    >
      <div>
        <Image src={pizza.image} alt={pizza.name} width={30} height={30} />
      </div>
      <div>
        <h3>{pizza.name}</h3>
      </div>
      <div>
        <span className="text-gray-400">{pizza.sizes[0].price} ₸</span>
      </div>
    </Link>
  );
}

export default SearchCart;
