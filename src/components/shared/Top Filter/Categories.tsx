"use client";
import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  CSSProperties,
} from "react";
import { Category, IndicatorStyle } from "@/types";
import { useCategories } from "@/store/useCategories";

const CATEGORIES: Category[] = [
  { id: 1, name: "Все" },
  { id: 2, name: "Мясные" },
  { id: 3, name: "Острые" },
  { id: 4, name: "Сладкие" },
  { id: 5, name: "Вегетарианские" },
  { id: 6, name: "С курицей" },
];

function Categories() {
  const [activeCategory, setActiveCategory] = useState<number>(1);
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({});
  const category = useCategories(state => state.setCategory);

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<number, HTMLButtonElement>>(new Map());

  const setButtonRef = useCallback(
    (id: number, el: HTMLButtonElement | null) => {
      if (el) {
        buttonRefs.current.set(id, el);
      } else {
        buttonRefs.current.delete(id);
      }
    },
    [],
  );

  const updateIndicatorPosition = useCallback(() => {
    const activeButton = buttonRefs.current.get(activeCategory);
    const container = containerRef.current;

    if (activeButton && container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      setIndicatorStyle({
        left: `${buttonRect.left - containerRect.left}px`,
        width: `${buttonRect.width}px`,
      });
    }
  }, [activeCategory]);

  useEffect(() => {
    category(activeCategory);
  }, [activeCategory, category]);

  useEffect(() => {
    updateIndicatorPosition();

    const handleResize = () => updateIndicatorPosition();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [updateIndicatorPosition]);

  const indicatorStyles = useMemo<CSSProperties>(
    () => ({
      ...indicatorStyle,
      opacity: indicatorStyle.width ? 1 : 0,
    }),
    [indicatorStyle],
  );

  const buttonElements = useMemo(
    () =>
      CATEGORIES.map((category) => (
        <button
          ref={(el) => setButtonRef(category.id, el)}
          onClick={() => setActiveCategory(category.id)}
          key={category.id}
          className={`cursor-pointer px-3 py-2 rounded-2xl transition-colors duration-300 relative z-10 whitespace-nowrap ${
            activeCategory === category.id && "text-primary font-medium"
          }`}
          role="tab"
          aria-selected={activeCategory === category.id}
          aria-controls={`tabpanel-${category.id}`}
          id={`tab-${category.id}`}
        >
          {category.name}
        </button>
      )),
    [activeCategory, setButtonRef],
  );

  return (
    <div
      ref={containerRef}
      className="bg-gray-50 rounded-2xl p-1 flex items-center relative overflow-x-auto w-full justify-between lg:w-[700px]"
      role="tablist"
    >
      <div
        className="absolute bg-white rounded-2xl shadow-sm transition-all duration-300 ease-out h-[calc(100%-8px)] top-1 pointer-events-none"
        style={indicatorStyles}
        aria-hidden="true"
      />
      {buttonElements}
    </div>
  );
}

export default Categories;
