import { Container } from "@/components/shared/Container";
import TopbarFilter from "@/components/shared/TopbarFilter";

export default function Home() {
  return (
    <main>
      <Container className="pt-8 lg:pt-15">
        <h4 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Все пиццы
        </h4>
      </Container>
      <TopbarFilter />
      <div className="h-[2000px] bg-gray-300"></div>
    </main>
  );
}
