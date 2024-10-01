import { IoFilter } from "react-icons/io5";

export const FilterBtn = () => {
  return (
    <button className="  inline-flex  items-center justify-center gap-1 whitespace-nowrap  border border-black px-5 py-5  text-base font-bold  text-gray-900 ">
      <div>
        <IoFilter />
      </div>
      Filter
    </button>
  );
};
