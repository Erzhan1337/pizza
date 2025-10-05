"use client";
import { pizzas } from "@/data";
import { useEffect, useMemo, useState } from "react";
import { useCategories } from "@/store/useCategories";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import Modal from "@/components/shared/Products/Modal";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPizzaId, setSelectedPizzaId] = useState<string | null>(null);

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

  const selectedPizza = pizzas.find((p) => p.id === selectedPizzaId);

  const handleProductClick = (id: string) => {
    setSelectedPizzaId(id);
    setOpenModal(true);
  };

  return (
    <div className="relative flex flex-col justify-center w-full">
      <ProductList
        pizzas={slicedPizzas}
        onProductClick={handleProductClick}
        onModalOpen={setOpenModal}
      />

      {filteredAndSortedPizzas.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={countOfPage}
          onPageChange={setCurrentPage}
        />
      )}

      {openModal && selectedPizza && (
        <Modal
          pizza={selectedPizza}
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
}