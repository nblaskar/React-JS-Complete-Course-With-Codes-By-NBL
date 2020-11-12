import React, { Component } from "react";
import { Consumer } from "./Context";
export default class Guest extends Component {
  render() {
    return (
      <div>
        <h2>Guest Component</h2>
        <Consumer>
          {(value) => (
            <h3>
              Value:
              {value}
            </h3>
          )}
        </Consumer>
      </div>
    );
  }
}
