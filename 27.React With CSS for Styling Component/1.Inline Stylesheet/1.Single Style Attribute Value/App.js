import React, { Component } from "react";
//Single Style attribute value
export default class App extends Component {
  render() {
    const btnStyle = {
      color: "blue",
      backgroundColor: "orange",
    };
    return (
      <div>
        <button style={btnStyle}>Button</button>
      </div>
    );
  }
}
