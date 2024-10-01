import { createContext, useContext, useState } from "react";

type AccordionContextType = {
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
};

const defaultValue: AccordionContextType = {
  selected: 0,
  setSelected: () => {}, // Place-holder function
};

// Initialisation du contexte
const AccordionContext = createContext<AccordionContextType>(defaultValue);

// Installation du contexte
export const AccordionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selected, setSelected] = useState<number | null>(null);

  const valueAccordionContext = {
    selected,
    setSelected,
  };

  return (
    <AccordionContext.Provider value={valueAccordionContext}>
      {children}
    </AccordionContext.Provider>
  );
};

// Consommation du contexte
export const useAccordionContext = () => useContext(AccordionContext);
