import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const currDate = new Date(2020, 11, 6, 2);
const currHours = currDate.getHours();
let message = "";
let cssStyle = {};
if (currHours >= 1 && currHours < 12) {
  message = "Good Morning!";
  cssStyle.color = "red";
} else if (currHours >= 12 && currHours < 19) {
  message = "Good Afternoon!";
  cssStyle.color = "orange";
} else {
  message = "Good Night";
  cssStyle.color = "pink";
}

ReactDOM.render(
  <React.Fragment>
    <div>
      <h1>
        Hello Sir, <span style={cssStyle}>{message}</span>
      </h1>
    </div>
  </React.Fragment>,
  document.getElementById("root")
);
