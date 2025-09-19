import { pizzas } from "@/data";
import ProductCard from "@/components/shared/Products/ProductCard";

function Products() {
  return (
    <div>
      <div className="flex justify-between flex-wrap gap-y-10">
        {pizzas.map((pizza) => (
          <ProductCard pizza={pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
