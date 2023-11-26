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
      <>
          <NavLink className="px-2 py-1" to="/">
            Home
          </NavLink>
          <NavLink className="px-2 py-1" to="/projects">
            Projects
          </NavLink>
          <NavLink className="px-2 py-1" to="docs">
            Docs
          </NavLink>
          {/* hreate a toggle btton dark mode light mode*/}
          <button onClick={handleChange}>
            {theme === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
          </button>
          <a
            href="https://github.com/murtazajoo/openSourcer"
            className="px-2 py-1"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
      </>
  );
}
