import React, { useContext } from "react";
import { FirstName, LastName } from "./App";
const ComC = () => {
  const fdata = useContext(FirstName);
  const ldata = useContext(LastName);
  return (
    <>
      <div>
        <h1>Fname= {fdata}</h1>
        <h1>Lname= {ldata}</h1>
      </div>
    </>
  );
};
export default ComC;
