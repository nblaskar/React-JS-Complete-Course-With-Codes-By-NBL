import React, { Component } from "react";
class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "NBL",
      roll: this.props.roll,
    };
  }
  handleClick = () => {
    this.setState(function (state, props) {
      console.log(state, props);
      console.log(state.name);
      console.log(props.roll);
      return (state = {
        name: "Nur",
        roll: "109",
      });
    });
  };
  render() {
    return (
      <div>
        <h1>
          Hello, {this.state.name} Your Roll: {this.state.roll}
        </h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
export default Student;
