"use client";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { ArrowRight, Search, ShoppingCart, UserRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    setIsOpen(true);
  };

  const handleCloseSearch = () => {
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleOverlayClick = () => {
    handleCloseSearch();
  };

  return (
    <>
      {/* Затемняющий overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/70 bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={handleOverlayClick}
        />
      )}

      <header className={`pt-5 relative ${isOpen ? 'z-50' : ''}`}>
        <Container className="flex items-center justify-between">
          {/*Logo*/}
          <Link href="/" className={`flex items-center gap-2 transition-opacity duration-300 ${isOpen ? 'opacity-30' : 'opacity-100'}`}>
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <div className="hidden xl:block">
              <h1 className="text-2xl uppercase font-black">Dodo Пицца</h1>
              <p className="text-sm font-bold">Сеть №1 в Казахстане</p>
            </div>
          </Link>

          {/*Search Bar*/}
          <div className={`hidden w-[50%] md:flex items-center gap-3 px-3 rounded-xl py-3 transition-all duration-300 ${
            isOpen
              ? 'bg-white shadow-lg border-2 border-primary opacity-100'
              : 'bg-gray-100 opacity-100'
          }`}>
            <Search size={16} className={isOpen ? 'text-primary' : ''} />
            {isOpen ? (
              <div className="flex items-center w-full gap-2">
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type="text"
                  placeholder="Поиск пиццы..."
                  className="outline-0 w-full"
                  autoFocus
                />
                <button
                  onClick={handleCloseSearch}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={16} className="text-gray-500" />
                </button>
              </div>
            ) : (
              <input
                onClick={handleSearchClick}
                type="text"
                placeholder="Поиск пиццы..."
                className="outline-0 w-full cursor-pointer"
                readOnly
              />
            )}
          </div>

          {/*Login & Cart*/}
          <div className={`flex items-center gap-5 transition-opacity duration-300 ${isOpen ? 'opacity-30' : 'opacity-100'}`}>
            <Button className="flex items-center gap-[2px] cursor-pointer rounded-xl w-[80px] h-[48px] text-sm">
              <UserRound size={16} />
              Войти
            </Button>

            <Link
              href="/cart"
              className="group bg-primary flex items-center h-[48px] px-5 py-2 text-white rounded-xl"
            >
              <span>2000 ₸</span>
              <div className="w-[0.5px] h-full bg-white mx-3" />
              <div className="relative">
                <div className="flex items-center gap-1 group-hover:opacity-0 transition-all duration-300 ease-linear">
                  <ShoppingCart size={18} />
                  <span>0</span>
                </div>
                <ArrowRight
                  size={22}
                  className="absolute opacity-0 top-0 -translate-x-2 group-hover:translate-x-3 group-hover:opacity-100 transition-all duration-300 ease-linear"
                />
              </div>
            </Link>
          </div>
        </Container>

        {/* Результаты поиска (опционально) */}
        {isOpen && searchTerm && (
          <div className="absolute top-full left-0 right-0 mt-2 z-50">
            <Container>
              <div className="bg-white rounded-xl shadow-lg p-4 max-h-96 overflow-y-auto">
                <p className="text-gray-500 text-sm">
                  Результаты поиска для: "{searchTerm}"
                </p>
                {/* Здесь можно добавить результаты поиска */}
                <div className="mt-3 text-center text-gray-400">
                  Результаты поиска будут здесь...
                </div>
              </div>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;