import React, { Component } from "react";

export default class App extends Component {
  //Using map() Method in React
  render() {
    const arr = [10, 20, 30, 40];
    const newArr = arr.map((num) => {
      console.log("Num = ", num);
      return <li>{num * 2}</li>;
    });
    console.log("arr = ", arr);
    console.log("newArr = ", newArr);
    return <ul>{newArr}</ul>;
  }
}
