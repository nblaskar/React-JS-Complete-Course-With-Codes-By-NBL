import React from "react";
import ReactDOM from "react-dom";
import Student from "./Student";

//Rendering Component
ReactDOM.render(
  <Student>I Am NBL, {10 + 2},</Student>,
  document.getElementById("root")
);
