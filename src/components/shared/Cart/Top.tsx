import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";

function Top() {
  return (
    <div className="flex justify-between items-center py-5 mb-10 border-b border-gray-200">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={35} height={35} />
        <div className="hidden xl:block">
          <h1 className="text-2xl uppercase font-black">Dodo Пицца</h1>
          <p className="text-sm font-bold">Сеть №1 в Казахстане</p>
        </div>
      </Link>
      <Button className="flex items-center gap-[2px] cursor-pointer rounded-xl w-[80px] h-[48px] text-sm">
        <UserRound size={16} />
        Войти
      </Button>
    </div>
  );
}

export default Top;
