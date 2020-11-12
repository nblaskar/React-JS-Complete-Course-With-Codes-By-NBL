import React, { Component } from "react";

//Use of this Keyword in in Function With Event Handler
//----Process-1
// class Student extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "NBL",
//       roll: this.props.roll,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     console.log("Button Clicked", this);
//   }

//----Process-2
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
  };

  render() {
    return (
      <div>
        <h1>
          Hello, {this.state.name}
          Your Roll: {this.state.roll}
        </h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
export default Student;
