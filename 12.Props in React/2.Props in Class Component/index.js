import React from "react";
import ReactDOM from "react-dom";
import Student from "./Student";

//Process-1
// ReactDOM.render(
//   <Student name="NBL" roll="101" />,
//   document.getElementById("root")
// );

//Process-2
// ReactDOM.render(
//   <Student name="NBL" roll={100 + 2} />,
//   document.getElementById("root")
// );

//Process-3
ReactDOM.render(
  <Student name={"NBL"} roll="101" />,
  document.getElementById("root")
);
