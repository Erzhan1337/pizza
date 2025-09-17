import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { ArrowRight, Search, ShoppingCart, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="pt-5">
      <Container className="flex items-center justify-between">
        {/*Logo*/}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <div>
            <h1 className="uppercase text-2xl font-black">Dodo Пицца</h1>
            <p className="text-sm font-bold">Сеть №1 в Казахстане</p>
          </div>
        </Link>
        {/*Search Bar*/}
        <div className="w-[45vw] flex items-center gap-3 bg-gray-100 px-3 rounded-xl py-3">
          <Search size={16} />
          <input
            type="text"
            placeholder="Поиск пиццы..."
            className="outline-0 w-full"
          />
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
    </header>
  );
}

export default Header;
