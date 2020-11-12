import React, { Component } from "react";
import { MyContext } from "./App";
export default class Guest extends Component {
  render() {
    return (
      <div>
        <h2>Guest Component</h2>
        <MyContext.Consumer>
          {(data) => (
            <div>
              <h3>Name: {data.name}</h3>
              <h3>Value: {data.value}</h3>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}
