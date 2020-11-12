import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();
  return (
    <>
      <div className="setStyle3">
        <h1> 404 Error Page</h1>
        <p> Opps! Page Not Found</p>
        <div className="goback_btn">
          <button onClick={history.goBack}>Go Back</button> <br />
          <NavLink to="/">Go To Home</NavLink>
        </div>
      </div>
    </>
  );
};
export default Error;
