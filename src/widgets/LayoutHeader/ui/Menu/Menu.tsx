import { FC } from "react";
import { Menu } from "../../model/types";
import { Link } from "react-router-dom";

const Menu: FC<Menu> = ({ links }: Menu) => {
  return (
    <>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm z-50 mt-3 w-52 bg-base-100 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
