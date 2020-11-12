import React, { Component } from "react";
class Student extends Component {
  handleClick = () => {
    console.log("Button Clicked");
  };
  render() {
    return (
      <div>
        <h1>Hello NBL</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
export default Student;
