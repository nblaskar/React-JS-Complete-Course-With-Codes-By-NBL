import React, { Component } from "react";
//-----Class Component Without Props Argument
// class Student extends Component {
//   render() {
//     return <h1>Hello NBL</h1>;
//   }
// }
//-----Class Component With Props Argument
class Student extends Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

export default Student;
