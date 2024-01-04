import { IoIosMoon } from "react-icons/io";
import { IoCartOutline, IoSunnySharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "../UI/NavLinks";
import { useEffect, useState } from "react";

const themes = {
  winter: "winter",
  sunset: "sunset",
};

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme || themes.winter;
};

const Nav = () => {
  const [theme, setTheme] = useState(getTheme());

  const handleTheme = () => {
    const { winter, sunset } = themes;

    const newTheme = theme === winter ? sunset : winter;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        {/* LEFT */}
        <div className="navbar-start">
          <NavLink
            to={"/"}
            className="items-center hidden text-3xl font-semibold lg:flex btn btn-secondary"
          >
            C
          </NavLink>

          <div className="navbar-center dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <FaBarsStaggered className="w-6 h-6" />
            </label>

            <ul
              tabIndex={0}
              className="shadow dropdown-content z-[1] menu menu-sm bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        {/* CENTER */}
        <div className="navbar-center">
          <ul
            tabIndex={0}
            className="dropdown-content hidden lg:flex z-[1] menu-horizontal menu-md rounded-box"
          >
            <NavLinks />
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex navbar-end gap-x-2">
          <div className="btn btn-ghost btn-circle btn-md">
            <label className="swap swap-rotate">
              <input type="checkbox" onClick={handleTheme} />

              <IoIosMoon className="w-6 h-6 swap-on" />
              <IoSunnySharp className="w-6 h-6 swap-off" />
            </label>
          </div>
          <NavLink to={"/cart"} className={"btn btn-ghost btn-circle btn-md"}>
            <div className="indicator">
              <IoCartOutline className="w-6 h-6" />
              <div className="badge badge-secondary badge-sm indicator-item">
                8
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
