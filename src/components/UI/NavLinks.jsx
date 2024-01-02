import { NavLink } from "react-router-dom";

const links = Object.freeze([
  { id: 1, url: "/", text: "home" },
  { id: 1, url: "/about", text: "about" },
  { id: 1, url: "/products", text: "products" },
  { id: 1, url: "/cart", text: "cart" },
  { id: 1, url: "/checkout", text: "checkout" },
  { id: 1, url: "/orders", text: "orders" },
]);

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <NavLink className={"capitalize btn btn-ghost"} key={id} to={url}>
            {text}
          </NavLink>
        );
      })}
    </>
  );
};

export default NavLinks;
