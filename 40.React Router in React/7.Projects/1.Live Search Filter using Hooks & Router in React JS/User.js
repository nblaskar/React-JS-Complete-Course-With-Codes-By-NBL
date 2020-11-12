import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(history);
  return (
    <>
      <h1>
        The url {fname} {lname} is wrong
      </h1>
      <p>My current location is {location.pathname}</p>
      {location.pathname === "/user/nb/laskar" ? (
        <button
          onClick={() => {
            // history.push("/");
            // history.goForward();
            history.goBack();
          }}
        >
          Click Me
        </button>
      ) : null}
    </>
  );
};
export default User;
