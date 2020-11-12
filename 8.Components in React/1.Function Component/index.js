import React from "react";
import ReactDOM from "react-dom";
import Student from "./Student";

//----Render Functional Component Without Attribute
// ReactDOM.render(<Student />, document.getElementById("root"));
//----Render Functional Component With Attribute
ReactDOM.render(<Student name="NBL" />, document.getElementById("root"));
