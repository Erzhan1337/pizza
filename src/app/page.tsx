import { Container } from "@/components/shared/Container";
import Categories from "@/components/shared/Categories";

export default function Home() {
  return <main>
    <Container>
      <h4 className="font-bold text-4xl">Все пиццы</h4>
      <Categories />
    </Container>
  </main>;
}
