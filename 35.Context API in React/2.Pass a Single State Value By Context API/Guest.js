import React, { Component } from "react";
import { MyContext } from "./App";
export default class Guest extends Component {
  render() {
    return (
      <div>
        <h2>Guest Component</h2>
        <MyContext.Consumer>{(data) => <h3>{data}</h3>}</MyContext.Consumer>
      </div>
    );
  }
}
