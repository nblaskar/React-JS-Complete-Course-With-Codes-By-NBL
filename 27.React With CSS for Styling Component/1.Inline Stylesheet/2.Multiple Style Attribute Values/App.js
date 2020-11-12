import React, { Component } from "react";
//Single Style attribute value
export default class App extends Component {
  render() {
    const txtc = {
      color: "blue",
    };
    const txts = {
      fontSize: "80px",
    };
    // return <h1 style={{ ...txtc, ...txts }}>Hello App</h1>;
    return <h1 style={{ ...txtc, ...{ fontSize: "100px" } }}>Hello App</h1>;
  }
}
