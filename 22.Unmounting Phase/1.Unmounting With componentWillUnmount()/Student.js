import React, { Component } from "react";

export default class Student extends Component {
  componentDidMount() {
    console.log("Student- Mounted");
  }
  render() {
    console.log("Student - Rendered Called");
    return <h1>Hello Sudent Component</h1>;
  }
}
