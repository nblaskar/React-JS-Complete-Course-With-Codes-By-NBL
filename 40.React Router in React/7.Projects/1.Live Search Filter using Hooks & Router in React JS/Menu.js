import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <React.Fragment>
      <div className="menu_style">
        <NavLink exact activeClassName="active_color" to="/">
          About US
        </NavLink>
        <NavLink exact activeClassName="active_color" to="/contact">
          Contact
        </NavLink>
        <NavLink exact activeClassName="active_color" to="/search">
          Search
        </NavLink>
        <NavLink exact activeClassName="active_color" to="/user">
          User
        </NavLink>
      </div>
    </React.Fragment>
  );
};
export default Menu;
