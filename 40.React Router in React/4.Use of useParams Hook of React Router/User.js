import React from "react";
import { useParams } from "react-router-dom";
// const User = ({ match }) => {
//   return <h1>User {match.params.fname} page</h1>;
// };
// const User = () => {
//   const { fname } = useParams();
//   return <h1>The url {fname} is wrong</h1>;
// };
const User = () => {
  const { fname, lname } = useParams();
  return (
    <h1>
      The url {fname} {lname} is wrong
    </h1>
  );
};
export default User;
