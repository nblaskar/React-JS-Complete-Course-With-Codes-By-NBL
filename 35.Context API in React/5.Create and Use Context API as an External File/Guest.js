import React, { Component } from "react";
import { Consumer } from "./Context";
export default class Guest extends Component {
  render() {
    return (
      <div>
        <h2>Guest Component</h2>
        <Consumer>
          {({ data, handleClick }) => (
            <div>
              <h3>Name: {data.name}</h3>
              <h3>Value: {data.value}</h3>
              <button onClick={handleClick}>Change Value</button>
            </div>
          )}
        </Consumer>
      </div>
    );
  }
}
