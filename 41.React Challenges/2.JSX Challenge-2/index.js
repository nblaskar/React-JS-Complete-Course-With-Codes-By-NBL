import React from "react";
import ReactDOM from "react-dom";
const name = "NBL";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <div>
    <h1>Hi! My Name is {name}</h1>
    <p>Todays Date is {currDate}</p>
    <p>Todays Date is {currTime}</p>
  </div>,
  document.getElementById("root")
);
