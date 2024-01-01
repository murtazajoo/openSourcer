import { useState } from "react";
import Menu from "./Menu";
import BurgerIcon from "../assets/burger-icon.png";

type NavProps = {
  themeToggler: () => void;
  theme: string;
};

export default function NavBar({ themeToggler, theme }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const iconClass = theme==='dark'?'invert':''

  return (
    <div className=" m-auto py-3 mb-10 z-10 backdrop-blur-lg w-full sticky top-0 left-0 right-0">
      <div className="max-w-[900px] flex justify-between items-center flex-wrap w-full m-auto">
        <nav className="flex justify-end mx-2 w-full">
          <h1 className="font-logo text-6xl w-full">OS.</h1>
          <div className="hidden w-full justify-between items-center md:flex">
            <Menu themeToggler={themeToggler} theme={theme} />
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <p>x</p> : <img src={BurgerIcon} className={iconClass} alt="Menu button"/>}
          </button>
        </nav>
        <div
          className={`flex flex-col gap-5 items-center basis-full mobile-menu ${
            isOpen ? "open" : ""
          }`}
        >
          <Menu themeToggler={themeToggler} theme={theme} />
        </div>
      </div>
    </div>
  );
}
