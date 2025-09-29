"use client"
import { Container } from "@/components/shared/Container";
import Categories from "@/components/shared/Top Filter/Categories";
import PopUp from "@/components/shared/Top Filter/PopUp";
import { useState, useEffect } from "react";
import { useCategories } from "@/store/useCategories";

function TopbarFilter() {
  const [isSticky, setIsSticky] = useState(false);
  const sort = useCategories(state => state.setSort);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`
        w-full sticky top-0 z-10
        transition-all duration-300
        ${isSticky
        ? 'bg-white/50 backdrop-blur-lg shadow-md'
        : 'bg-white'
      }
      `}
    >
      <Container className="flex items-center justify-between py-4">
        <Categories />
        <PopUp onChange={(id) => sort(id)}/>
      </Container>
    </div>
  );
}

export default TopbarFilter;