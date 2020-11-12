import React from "react";
const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <img src={require("./logo.png")} width="70" height="50" alt="logo" />
        <h1> NBL Keep</h1>
      </div>
    </React.Fragment>
  );
};
export default Header;
