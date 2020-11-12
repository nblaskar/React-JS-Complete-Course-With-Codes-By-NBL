import React, { Component } from "react";
export default class Student extends Component {
  constructor(props) {
    super(props);
    console.log("Student - Constructor Called");
    console.log(props);
  }
  render() {
    return <h1>Hello NBL</h1>;
  }
}
