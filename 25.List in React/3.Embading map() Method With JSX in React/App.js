import React, { Component } from "react";

export default class App extends Component {
  //Embading map() Method With JSX
  render() {
    const arr = [10, 20, 30, 40];
    return (
      // <ul>
      //   {arr.map((num) => {
      //     return <li>{num}</li>;
      //   })}
      // </ul>
      <ul>
        {arr.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
    );
  }
}
