import React, { Component } from "react";

//Function Based Component
// const Student = (props) => {
//   return <h1>Hello, {props.children}</h1>;
// };

//Class Based Component
class Student extends Component {
  render() {
    return <h1>Hello, {this.props.children}</h1>;
  }
}

export default Student;
