import { ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pagesPerGroup?: number;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  pagesPerGroup = 5,
}: PaginationProps) {
  const currentGroup = Math.floor(currentPage / pagesPerGroup);
  const startPage = currentGroup * pagesPerGroup;
  const endPage = Math.min(startPage + pagesPerGroup, totalPages);

  const handlePrevious = () => {
    if (currentPage > 0) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) onPageChange(currentPage + 1);
  };

  return (
    <div className="mt-15 flex items-center gap-3">
      <button
        onClick={handlePrevious}
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
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
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
        onClick={handleNext}
        disabled={currentPage === totalPages - 1}
        className={`p-2 border-2 border-gray-300 rounded-2xl transition-all ${
          currentPage === totalPages - 1
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer hover:bg-gray-100"
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
