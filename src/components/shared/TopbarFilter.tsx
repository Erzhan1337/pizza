"use client"
import { Container } from "@/components/shared/Container";
import Categories from "@/components/shared/Categories";
import PopUp from "@/components/shared/PopUp";
import { useState, useEffect } from "react";

function TopbarFilter() {
  const [isSticky, setIsSticky] = useState(false);

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
        w-full sticky top-0 z-50
        transition-all duration-300
        ${isSticky
        ? 'bg-white/50 backdrop-blur-lg shadow-md'
        : 'bg-white'
      }
      `}
    >
      <Container className="flex items-center justify-between py-4">
        <Categories />
        <PopUp />
      </Container>
    </div>
  );
}

export default TopbarFilter;