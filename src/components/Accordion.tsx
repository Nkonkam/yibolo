import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type AccordionT = {
  title: string;
  options: { label: string; value: string }[];
};

export const Accordion: React.FC<AccordionT> = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="border-t border-b  border-gray-300 ">
      {/* Title section */}
      <div
        className="flex justify-between  items-center p-4  cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="font-bold text-lg">{title}</h2>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>

      {/* Content section (filters) */}
      {isOpen && (
        <div className="p-4">
          {options.map((option, index) => (
            <label key={index} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
