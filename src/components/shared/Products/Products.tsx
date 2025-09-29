"use client";
import { pizzas } from "@/data";
import ProductCard from "@/components/shared/Products/ProductCard";
import { ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useCategories } from "@/store/useCategories";

function Products() {
  const [currentPage, setCurrentPage] = useState(0);
  const filterBySorting = useCategories((state) => state.sort);
  const filterByCategory = useCategories((state) => state.category);
  const filteredByPriceRange = useCategories((state) => state.priceRange);
  const filteredByIngredients = useCategories((state) => state.ingredients);
  const submitted = useCategories((state) => state.submitted);
  const filteredAndSortedPizzas = useMemo(() => {
    let filtered =
      filterByCategory === 1
        ? [...pizzas]
        : pizzas.filter((pizza) => pizza.category === filterByCategory);

    if (submitted) {
      filtered = filtered.filter((pizza) => {
        const priceRangeMatch =
          pizza.sizes[0].price >= filteredByPriceRange[0] &&
          pizza.sizes[0].price <= filteredByPriceRange[1];

        const ingredientsMatch = filteredByIngredients.every((ing) =>
          pizza.ingredients.includes(ing),
        );

        return priceRangeMatch && ingredientsMatch;
      });
    }

    switch (filterBySorting) {
      case "price":
        filtered.sort((a, b) => a.sizes[0].price - b.sizes[0].price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [
    filterByCategory,
    filterBySorting,
    filteredByPriceRange,
    filteredByIngredients,
    submitted,
  ]);
  const itemsPerPage = 6;
  const pagesPerGroup = 5;
  const countOfPage = Math.ceil(filteredAndSortedPizzas.length / itemsPerPage);
  useEffect(() => {
    setCurrentPage(0);
  }, [filterByCategory, filterBySorting]);
  useEffect(() => {
    if (currentPage >= countOfPage && countOfPage > 0) {
      setCurrentPage(countOfPage - 1);
    }
  }, [currentPage, countOfPage]);
  const slicedPizzas = filteredAndSortedPizzas.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  const currentGroup = Math.floor(currentPage / pagesPerGroup);

  const startPage = currentGroup * pagesPerGroup;
  const endPage = Math.min(startPage + pagesPerGroup, countOfPage);

  const decreaseCountPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const increaseCountPage = () => {
    if (currentPage < countOfPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="flex flex-col justify-center w-full">
      {slicedPizzas.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-20">
          {slicedPizzas.map((pizza) => (
            <ProductCard pizza={pizza} key={pizza.id} />
          ))}
        </div>
      ) : (
        <div className="text-2xl font-bold flex justify-center pt-20">
          Пиццы не найдены
        </div>
      )}

      {filteredAndSortedPizzas.length > 0 && (
        <div className="mt-15 flex items-center gap-3">
          <button
            onClick={decreaseCountPage}
            disabled={currentPage === 0}
            className={`p-2 border-2 border-gray-300 rotate-180 rounded-2xl transition-all ${
              currentPage === 0
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:bg-gray-100"
            }`}
          >
            <ChevronRight size={20} />
          </button>

          {Array.from({ length: endPage - startPage }).map((_, index) => {
            const pageNumber = startPage + index;
            return (
              <button
                onClick={() => setCurrentPage(pageNumber)}
                key={pageNumber}
                className={`py-2 px-4 border-2 border-gray-300 rounded-2xl cursor-pointer text-lg transition-all ${
                  currentPage === pageNumber
                    ? "bg-primary border-transparent text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {pageNumber + 1}
              </button>
            );
          })}

          <button
            onClick={increaseCountPage}
            disabled={currentPage === countOfPage - 1}
            className={`p-2 border-2 border-gray-300 rounded-2xl transition-all ${
              currentPage === countOfPage - 1
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:bg-gray-100"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Products;
