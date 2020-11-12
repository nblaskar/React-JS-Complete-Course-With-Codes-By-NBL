import React, { Component } from "react";

export default class App extends Component {
  //Without map() Method
  render() {
    const arr = [10, 20, 30, 40];
    return (
      <ul>
        <li>{arr[0] * 2}</li>
        <li>{arr[1] * 2}</li>
        <li>{arr[2] * 2}</li>
        <li>{arr[3] * 2}</li>
      </ul>
    );
  }
}
