import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function Menu() {
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
      </ul>
    </nav>
  );
}
