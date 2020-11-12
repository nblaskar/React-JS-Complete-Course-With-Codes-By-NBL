import React, { Component } from "react";
//Apply Style Attribute Based on State Change
export default class App extends Component {
  state = {
    change: false,
  };
  clickHandle = () => {
    this.setState({ change: true });
  };
  render() {
    const btnStyle = {
      color: "blue",
      backgroundColor: "orange",
    };
    if (this.state.change) {
      btnStyle.backgroundColor = "White";
    }
    return (
      <button onClick={this.clickHandle} style={btnStyle}>
        Button
      </button>
    );
  }
}
