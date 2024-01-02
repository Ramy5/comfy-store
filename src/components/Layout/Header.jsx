import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-2 bg-neutral text-neutral-content">
      <div className="flex justify-center align-element md:justify-end">
        <div className="flex items-center gap-4 gap-x-4">
          <NavLink
            className={"link link-hover text-xs lg:text-sm"}
            to={"/login"}
          >
            Sign in / Guest
          </NavLink>
          <NavLink
            className={"link link-hover text-xs lg:text-sm"}
            to={"/register"}
          >
            Create Account
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
