import { Container } from "@/components/shared/Container";
import TopbarFilter from "@/components/shared/Top Filter/TopbarFilter";
import Filter from "@/components/shared/Sidebar Filter/Filter";
import Products from "@/components/shared/Products/Products";

export default function Home() {
  return (
    <main>
      <Container className="pt-8 lg:pt-15">
        <h4 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Все пиццы
        </h4>
      </Container>
      <TopbarFilter />
      <Container className="flex gap-[80px] pb-10">
        <Filter />
        <Products />
      </Container>
    </main>
  );
}
