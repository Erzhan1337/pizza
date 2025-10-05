import Top from "@/components/shared/Cart/Top";
import { Container } from "@/components/shared/Container";
import Cart from "@/components/shared/Cart/Cart";
import Form from "@/components/shared/Cart/Form";
import Address from "@/components/shared/Cart/Address";
import Receipt from "@/components/shared/Cart/Receipt";

function Page() {
  return (
    <div className="w-full bg-[#F4F1EE]">
      <Container>
        <Top />
        <p className="font-bold text-2xl mb-10">Оформление заказов</p>
        <div className="flex gap-20 w-full">
          <div className="w-[70%]">
            <Cart />
            <Form />
            <Address />
          </div>

          <div className="w-[30%]">
            <Receipt />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Page;
