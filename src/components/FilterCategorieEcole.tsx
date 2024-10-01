// import { useRef, useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const FilterCategorieEcole = () => {
  // STATES
  //   const [isDiplayBtnLeft, setIsDiplayBtnLeft] = useState<boolean>(true);
  //   const [isDiplayBtnRight, setIsDiplayBtnRight] = useState<boolean>(true);
  //   const draggableRef = useRef<HTMLDivElement>(null);

  //   //REF
  //   const refscrollBox = useRef<HTMLUListElement>(null);

  // COMPORTEMENT
  //   const handlerScroll = (event: React.UIEvent<HTMLUListElement, UIEvent>) => {
  //     const { scrollLeft, scrollWidth, clientWidth } = event.currentTarget;

  //     scrollLeft < 0.8888888955116272 || scrollLeft == scrollWidth - clientWidth
  //       ? setIsDiplayBtnLeft(false)
  //       : setIsDiplayBtnLeft(true);

  //     console.log({
  //       scrollWidth,
  //       clientWidth,
  //       scrollLeft,
  //     });

  //     // scrollWith = clientWidth +  scrollLeft
  //     scrollLeft == scrollWidth - clientWidth
  //       ? setIsDiplayBtnRight(false)
  //       : setIsDiplayBtnRight(true);
  //   };

  //   const handlerClickbtnLeft = () => {
  //     // console.log(refscrollBox.current?.scrollLeft);

  //     if (refscrollBox.current) refscrollBox.current.scrollLeft += 150;
  //   };

  //   const handlerClickbtnRigth = () => {
  //     // console.log(refscrollBox.current?.scrollLeft);

  //     if (refscrollBox.current) refscrollBox.current.scrollLeft -= 100;
  //   };

  // RENDU
  return (
    // FIlter
    <div>
      <div
        //   ref={draggableRef}
        className=" pb-4 border-stone-300 relative overflow-hidden "
      >
        {/* <div
        className={` ${
          isDiplayBtnLeft ? "block" : "hidden"
        } absolute  flex  w-5 items-center left-0 top-0 bottom-0 bg-gradient-to-l from-white   z-10 `}
      >
        <button onClick={handlerClickbtnLeft}>
          <IoIosArrowBack></IoIosArrowBack>
        </button>
      </div> */}
        <ul
          // ref={refscrollBox}
          // onScroll={(event) => handlerScroll(event)}
          className="flex gap-5 h-full scroll-smooth  items-center  overflow-x-auto no-scrollbar  bg-gradient-to-l from-white"
        >
          <li className=" cursor-pointer   py-2 px-5 font-semibold text-[14px] border-zinc-900 border rounded-3xl  leading-5 text-center whitespace-nowrap bg-zinc-100/10 text-zinc-900 ">
            IPES (2000)
          </li>

          <li className=" cursor-pointer transition-all  hover:text-zinc-900 hover:border-zinc-900 py-2 px-5 font-semibold text-[14px] border rounded-3xl  leading-5 text-center whitespace-nowrap bg-zinc-100/10 text-gray-500 ">
            Centre de formation (5000)
          </li>
          <li className=" cursor-pointer transition-all  hover:text-zinc-900 hover:border-zinc-900 py-2 px-5 font-semibold text-[14px] border rounded-3xl  leading-5 text-center whitespace-nowrap bg-zinc-100/10 text-gray-500 ">
            Auto ecole (300)
          </li>
          <li className=" cursor-pointer transition-all  hover:text-zinc-900 hover:border-zinc-900 py-2 px-5 font-semibold text-[14px] border rounded-3xl  leading-5 text-center whitespace-nowrap bg-zinc-100/10 text-gray-500 ">
            Centre linguistique (400)
          </li>
          <li className=" cursor-pointer transition-all  hover:text-zinc-900 hover:border-zinc-900 py-2 px-5 font-semibold text-[14px] border rounded-3xl  leading-5 text-center whitespace-nowrap bg-zinc-100/10 text-gray-500 ">
            Universite (50)
          </li>
        </ul>
        {/* <div
        className={` ${
          isDiplayBtnRight ? "block" : "hidden"
        }  absolute   flex justify-center  items-center right-0 top-0 bottom-0 bg-gradient-to-l from-white   `}
      >
        <button onClick={handlerClickbtnRigth}>
          <IoIosArrowForward></IoIosArrowForward>
        </button>
      </div> */}
      </div>

      <div></div>
    </div>
  );
};
