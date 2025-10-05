"use client";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { ArrowRight, Search, ShoppingCart, UserRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { pizzas } from "@/data";
import SearchCart from "@/components/shared/SearchCart";
import { Pizza } from "@/types";
import Modal from "@/components/shared/Products/Modal";
import useCart from "@/store/useCart";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const totalItems = useCart((state) => state.getTotalItems());
  const totalPrice = useCart((state) => state.getTotalPrice());

  const handleClickSearch = () => {
    setIsOpenSearch(true);
  };

  const handleCloseSearch = () => {
    setIsOpenSearch(false);
    setSearchTerm("");
    if (searchRef.current) {
      searchRef.current.blur();
    }
  };

  const handleClickPizza = (pizza: Pizza) => {
    setSelectedPizza(pizza);
    handleCloseSearch();
  };

  const handleCloseModal = () => {
    setSelectedPizza(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpenSearch) {
        setIsOpenSearch(false);
        setSearchTerm("");
      }
      if (searchRef.current) {
        searchRef.current.blur();
      }
    };

    const handleEscapePress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpenSearch) {
        handleCloseSearch();
      }
    };

    document.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleEscapePress);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleEscapePress);
    };
  }, [isOpenSearch]);

  return (
    <>
      {/* Overlay */}
      {isOpenSearch && (
        <div
          className="fixed inset-0 bg-white/60 z-20"
          onClick={handleCloseSearch}
        />
      )}

      <header className="pt-5 relative z-30">
        <Container className="flex items-center justify-between">
          {/*Logo*/}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <div className="hidden xl:block">
              <h1 className="text-2xl uppercase font-black">Dodo Пицца</h1>
              <p className="text-sm font-bold">Сеть №1 в Казахстане</p>
            </div>
          </Link>

          {/*Search Bar*/}
          <div className="hidden w-[50%] md:flex items-center gap-3 px-4 rounded-xl py-3 bg-gray-50">
            <Search size={20} className="text-gray-400" />
            <input
              ref={searchRef}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={handleClickSearch}
              type="text"
              placeholder="Поиск пиццы..."
              className="outline-0 w-full bg-transparent"
            />
            {isOpenSearch && (
              <button onClick={handleCloseSearch} className="p-1">
                <X size={18} className="text-gray-500" />
              </button>
            )}
          </div>

          {/*Login & Cart*/}
          <div className="flex items-center gap-5">
            <Button className="flex items-center gap-[2px] cursor-pointer rounded-xl w-[80px] h-[48px] text-sm">
              <UserRound size={16} />
              Войти
            </Button>

            <Link
              href="/cart"
              className="group bg-primary flex items-center h-[48px] px-5 py-2 text-white rounded-xl"
            >
              <span>{totalPrice} ₸</span>
              <div className="w-[0.5px] h-full bg-white mx-3" />
              <div className="relative">
                <div className="flex items-center gap-1 group-hover:opacity-0 transition-all duration-300">
                  <ShoppingCart size={18} />
                  <span>{totalItems}</span>
                </div>
                <ArrowRight
                  size={22}
                  className="absolute opacity-0 top-0 -translate-x-2 group-hover:translate-x-3 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </Link>
          </div>
        </Container>

        {/* Search Results */}
        {isOpenSearch && searchTerm && (
          <div className="absolute top-full left-0 right-5 mt-2 z-50 h-[500px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <Container>
              <div className="bg-white rounded-xl shadow-lg max-w-[50%] mx-auto">
                {pizzas
                  .filter((p) =>
                    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
                  )
                  .map((pizza, index) => (
                    <SearchCart
                      pizza={pizza}
                      key={index}
                      handleCloseSearch={handleCloseSearch}
                      onPizzaClick={handleClickPizza}
                    />
                  ))}
              </div>
            </Container>
          </div>
        )}
      </header>
      {selectedPizza && (
        <Modal pizza={selectedPizza} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default Header;
