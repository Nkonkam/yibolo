import { Btn } from "../ui/Btn";
import { BtnIcon } from "./BtnIcon";
import Logo from "./Logo";

export const Header = () => {
  return (
    <header className="px-6 py-3  flex items-center justify-between border shadow-md ">
      <div className="flex md:hidden items-center">
        <BtnIcon type="default"></BtnIcon>
      </div>
      <div className="flex-grow  md:grow-0 text-center">
        <Logo></Logo>
      </div>
      <div className="flex items-center gap-5">
        <div className="hidden md:block">
          <Btn type="secondary"> Se connecter </Btn>
        </div>
        <div className="hidden md:block">
          <Btn type="default"> S'inscrire </Btn>
        </div>
        <div className="hidden md:block">
          <BtnIcon type="outLine"></BtnIcon>
        </div>
      </div>
    </header>
  );
};
