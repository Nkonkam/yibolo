import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const SelectTri = () => {
  const [value, setValue] = useState<string>("Les plus populaires");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const options = ["Les plus populaires "];

  const handleSelect = (option: string) => {
    setValue(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-flex flex-col gap-2">
      <div
        className="flex gap-4 items-center px-4 border border-black pb-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-900">Trier par</p>
          <p className="font-bold ">{value}</p>
        </div>
        <IoIosArrowDown
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-md w-full z-10">
          {options.map((option, index) => (
            <p
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
