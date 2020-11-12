import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./App.css";

const Menu = () => {
  return (
    <React.Fragment>
      <NavLink exact activeClassName="active_color" to="/">
        About US
      </NavLink>
      <NavLink exact activeClassName="active_color" to="/contact">
        Contact
      </NavLink>
      <NavLink exact activeClassName="active_color" to="/user">
        User
      </NavLink>
      <br />
      <Link to="/">About US</Link>
      <Link to="/contact">Contact</Link>
    </React.Fragment>
  );
};
export default Menu;
