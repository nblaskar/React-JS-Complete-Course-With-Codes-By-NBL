import React from "react";
import { FirstName, LastName } from "./App";
const ComC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fData) => {
          return (
            <LastName.Consumer>
              {(lData) => {
                return (
                  <div>
                    <h1>Fname= {fData}</h1>
                    <h1>Lname= {lData}</h1>
                  </div>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};
export default ComC;
