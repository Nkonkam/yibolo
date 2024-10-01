import { Header } from "../components/headers/Header";
import { HeaderSection } from "../components/ui/HeaderSection";
import { SelectTri } from "../components/SelectTri";
import { FilterSectionEcole } from "../components/FilterSectionEcole";
import { FilterBtn } from "../components/FilterBtn";
import { CardEcole } from "../components/CardEcole";

export const Ecole = () => {
  return (
    <>
      <Header></Header>

      <div className="p-5 lg:px-28">
        <HeaderSection></HeaderSection>

        {/* FILTER */}
        <div className="flex items-center justify-between mb-4 ">
          <div className="flex items-center gap-4 ">
            <div>
              <FilterBtn></FilterBtn>
            </div>
            <div>
              <SelectTri></SelectTri>
            </div>
          </div>

          <div className="text-neutral-500 font-bold text-base hidden sm:block ">
            <p> 3286 resultats </p>
          </div>
        </div>
        <div className="flex  gap-2">
          {/* FILter bloc */}
          <div className=" hidden md:block w-2/6">
            <FilterSectionEcole></FilterSectionEcole>
          </div>

          {/* RESULTATS */}
          <div className="sm:w-full  flex gap-4  w-4/6">
            <CardEcole></CardEcole>
            <CardEcole></CardEcole>
            <CardEcole></CardEcole>
            <CardEcole></CardEcole>
            <CardEcole></CardEcole>
          </div>
        </div>
      </div>
    </>
  );
};
