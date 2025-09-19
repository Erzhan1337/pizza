import { CheckboxGroup } from "@/components/shared/Sidebar Filter/Checkbox";
import FilteringByPrice from "@/components/shared/Sidebar Filter/FilteringByPrice";
import Ingredients from "@/components/shared/Sidebar Filter/Ingredients";

const checkboxOptions = [
  { id: "1", label: "Можно собирать" },
  { id: "2", label: "Новинки" },
];

function Filter() {
  return (
    <div className="mt-5 w-[240px] h-[1500px]">
      <p className="text-[22px] font-bold">Фильтрация</p>
      <CheckboxGroup options={checkboxOptions} className="my-7"/>
      <FilteringByPrice />
      <Ingredients />
    </div>
  );
}

export default Filter;
