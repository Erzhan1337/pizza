"use client";
import { pizzas } from "@/data";
import ProductCard from "@/components/shared/Products/ProductCard";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

function Products() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const pagesPerGroup = 5;
  const countOfPage = Math.ceil(pizzas.length / itemsPerPage);
  const filteredPizzas = pizzas.slice(
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
    <div>
      <div className="grid grid-cols-3 gap-x-14 gap-y-20">
        {filteredPizzas.map((pizza) => (
          <ProductCard pizza={pizza} key={pizza.id} />
        ))}
      </div>

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

      <div className="h-[1500px]"></div>
    </div>
  );
}

export default Products;
