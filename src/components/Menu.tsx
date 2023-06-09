import { NavLink } from "react-router-dom";

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
          <NavLink className="px-2 py-1" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
