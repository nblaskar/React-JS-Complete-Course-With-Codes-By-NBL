import React, { Component } from "react";
import add, { sub, mult, div } from "./Calc";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Simple Calculator</h1>
        <ul>
          <li>Sum of Two Number is={add(40, 4)}</li>
          <li>Sub of Two Number is={sub(40, 4)}</li>
          <li>mult of Two Number is={mult(40, 4)}</li>
          <li>div of Two Number is={div(40, 3)}</li>
        </ul>
      </React.Fragment>
    );
  }
}
