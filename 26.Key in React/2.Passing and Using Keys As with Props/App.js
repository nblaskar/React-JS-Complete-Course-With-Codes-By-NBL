//Passing and Using Keys As With Props for Accessing State lists With map() Method
import React, { Component } from "react";
import User from "./User";

export default class App extends Component {
  render() {
    const arr = this.props.numbers;
    const newArr = arr.map((num) => {
      return <User key={num} value={num} />;
    });
    return (
      <div>
        <ul>{newArr}</ul>
      </div>
    );
  }
}
