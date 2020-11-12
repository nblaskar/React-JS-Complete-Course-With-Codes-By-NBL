import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <nav className="mainMenu">
        <NavLink
          exact
          to="/"
          activeClassName="menu_link"
          className="menu_style"
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/about"
          activeClassName="menu_link"
          className="menu_style"
        >
          About US
        </NavLink>
        <NavLink
          exact
          to="/contact"
          activeClassName="menu_link"
          className="menu_style"
        >
          Contact US
        </NavLink>
      </nav>
    </>
  );
};
export default Menu;
