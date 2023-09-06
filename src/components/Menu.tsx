import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

type MenuProps = {
  themeToggler: () => void;
  theme: string;
};

export default function Menu({ themeToggler, theme }: MenuProps) {
  function handleChange() {
    themeToggler();
  }
  return (
    <nav className="w-full">
      <ul className="flex justify-evenly items-center ">
        <li className="font-saira">
          <NavLink className="px-2 py-1" to="/">
            Home
          </NavLink>
        </li>
        <li className="font-saira">
          <NavLink className="px-2 py-1" to="/projects">
            Projects
          </NavLink>
        </li>
        <li className="font-saira">
          <NavLink className="px-2 py-1" to="docs">
            Docs
          </NavLink>
        </li>

        <li>
          {/* hreate a toggle btton dark mode light mode*/}
          <button onClick={handleChange}>
            {theme === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
          </button>
        </li>
        <li className="font-saira">
          <a
            href="https://github.com/murtazajoo/openSourcer"
            className="px-2 py-1"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </li>

        <li className="font-saira text-white">
          {/* Button to navigate to the add project page */}
          <NavLink to="add-project" className="bg-purple-500 px-2 py-1 rounded-lg">
            Add project
          </NavLink>
        </li>

      </ul>
    </nav>
  );
}
