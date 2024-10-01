import { MdLocationCity } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { Btn } from "./ui/Btn";

import ecole from "../assets/ecole.jpg";

export const CardEcole = () => {
  return (
    <div className="border mb-10  hover:underline  border-slate-100 inline-block  ">
      {/* Image Section */}
      <div className=" aspect-w-3 aspect-h-2">
        <img src={ecole} alt="Image de l'école" />
      </div>

      {/* Details Section */}
      <div className=" p-4">
        {/* Title of the school */}
        <h2 className=" mb-3 line-clamp-2  text-zinc-800 font-bold text-base">
          <a href="/abputt">
            Institut Universitaire Siantou Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Veniam, voluptatibus libero! Maxime,
            aspernatur voluptate, provident nisi optio tempore doloremque
            repellendus veniam animi unde facilis asperiores quod accusamus
            consequuntur laboriosam itaque?
          </a>
        </h2>

        {/* Location */}
        <div className="flex items-center gap-2 mb-3">
          <MdLocationCity />
          <span className="text-zinc-500 text-base">
            Situé à l'entrée Simbock
          </span>
        </div>

        {/* Experience */}
        <div className=" flex items-center gap-2 mb-3">
          <MdEventAvailable />
          <span className="text-zinc-500 text-base">Depuis: 2013</span>
          <MdVerified />
        </div>
        {/* Button Section */}
        <div className=" pt-4">
          <Btn type="secondary"> En savoir plus</Btn>
        </div>
      </div>
    </div>
  );
};
