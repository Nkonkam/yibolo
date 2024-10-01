import { useRef, useState } from "react";
import { CardEcole } from "./CardEcole";
import { FilterCategorieEcole } from "./FilterCategorieEcole";
import { HeaderSection } from "./ui/HeaderSection";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const EcoleSection = () => {
  // STATES
  const [isDiplayBtnLeft, setIsDiplayBtnLeft] = useState<boolean>(true);
  const [isDiplayBtnRight, setIsDiplayBtnRight] = useState<boolean>(true);
  // const draggableRef = useRef<HTMLDivElement>(null);

  //REF
  const refscrollBox = useRef<HTMLDivElement>(null);

  // COMPORTEMENT
  const handlerScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const { scrollLeft, scrollWidth, clientWidth } = event.currentTarget;

    setIsDiplayBtnLeft(scrollLeft > 0);
    setIsDiplayBtnRight(scrollLeft < scrollWidth - clientWidth);
  };

  const handlerClickbtnLeft = () => {
    if (refscrollBox.current) {
      const scrollAmount = refscrollBox.current.clientWidth * 1 + 16; // 30% de la largeur du conteneur
      refscrollBox.current.scrollBy({
        left: -scrollAmount, // Défilement vers la gauche
        behavior: "smooth",
      });
    }
  };

  const handlerClickbtnRight = () => {
    if (refscrollBox.current) {
      const scrollAmount = refscrollBox.current.clientWidth * 1 + 16; // 30% de la largeur du conteneur
      refscrollBox.current.scrollBy({
        left: scrollAmount, // Défilement vers la droite
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="p-5 lg:px-28">
      <div className="mb-4">
        <HeaderSection></HeaderSection>
      </div>
      <div>
        <FilterCategorieEcole></FilterCategorieEcole>
      </div>

      <div className="p-8 border border-gray-300">
        <div>
          <HeaderSection></HeaderSection>
        </div>

        <div className=" relative no-scrollbar scroll-smooth flex gap-4">
          <button
            className={` ${
              isDiplayBtnLeft ? "block" : "hidden"
            } absolute top-32   p-4 text-lg font-black bg-slate-900 text-white border border-slate-400 rounded-full flex items-center   -left-5 z-10  bg-gradient-to-l `}
            onClick={handlerClickbtnLeft}
          >
            <IoIosArrowBack></IoIosArrowBack>
          </button>

          <div
            ref={refscrollBox}
            className="  no-scrollbar flex gap-4 overflow-auto"
            onScroll={handlerScroll}
          >
            <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4  xl:w-1/5 flex-none ">
              <CardEcole></CardEcole>
            </div>
            <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4  xl:w-1/5 flex-none ">
              <CardEcole></CardEcole>
            </div>
            <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4  xl:w-1/5 flex-none ">
              <CardEcole></CardEcole>
            </div>
            <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4  xl:w-1/5 flex-none ">
              <CardEcole></CardEcole>
            </div>
            <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4  xl:w-1/5 flex-none ">
              <CardEcole></CardEcole>
            </div>
            <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4  xl:w-1/5 flex-none ">
              <CardEcole></CardEcole>
            </div>
            <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4  xl:w-1/5 flex-none ">
              <CardEcole></CardEcole>
            </div>
            <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4  xl:w-1/5 flex-none ">
              <CardEcole></CardEcole>
            </div>
            <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4  xl:w-1/5 flex-none ">
              <CardEcole></CardEcole>
            </div>
            <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4  xl:w-1/5 flex-none ">
              <CardEcole></CardEcole>
            </div>
            <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4  xl:w-1/5 flex-none ">
              <CardEcole></CardEcole>
            </div>
            <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4  xl:w-1/5 flex-none ">
              <CardEcole></CardEcole>
            </div>
            <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4  xl:w-1/5 flex-none ">
              <CardEcole></CardEcole>
            </div>
          </div>

          <button
            className={` ${
              isDiplayBtnRight ? "block" : "hidden"
            } absolute top-32   p-4 text-lg font-bold bg-slate-900 text-white border border-slate-400 rounded-full flex items-center   -right-5 z-10  bg-gradient-to-l `}
            onClick={handlerClickbtnRight}
          >
            <IoIosArrowForward></IoIosArrowForward>
          </button>
        </div>
      </div>
    </div>
  );
};
