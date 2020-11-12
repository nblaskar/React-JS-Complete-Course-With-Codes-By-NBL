import React from "react";
import { useParams, useLocation } from "react-router-dom";
// const User = ({ match }) => {
//   return <h1>User {match.params.fname} page</h1>;
// };
// const User = () => {
//   const { fname } = useParams();
//   return <h1>The url {fname} is wrong</h1>;
// };
const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>
        The url {fname} {lname} is wrong
      </h1>
      <p>My current location is {location.pathname}</p>
      {location.pathname === "/user/nb/laskar" ? (
        <button
          onClick={() => {
            alert("Yes! I Am ");
          }}
        >
          Click Me
        </button>
      ) : null}
    </>
  );
};
export default User;
