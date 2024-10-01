import { IoMenuSharp } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";

export const BtnIcon = ({ type }: { type: "default" | "outLine" }) => {
  const classe = type == "default" ? "" : "border border-black ";

  const icon =
    type == "default" ? (
      <IoMenuSharp className={` text-base text-zinc-800 `} />
    ) : (
      <GrLanguage className={` text-base text-zinc-800`} />
    );
  return <button className={` p-3  ${classe}`}>{icon}</button>;
};
