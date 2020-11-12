import React, { Component } from "react";
//Accessing Lists As Props by map() Method
export default class App extends Component {
  render() {
    const arr = this.props.numbers;
    return (
      <ul>
        {arr.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
    );
  }
}
