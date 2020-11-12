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
    console.log("Button Clicked", this);
    // this.setState({ name: "Nur" });
    this.setState({ name: "Nur", roll: "10" });
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
