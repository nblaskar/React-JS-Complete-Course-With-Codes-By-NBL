import React, { Component } from "react";
import Marks from "./Marks";

export default class Student extends Component {
  render() {
    console.log("Student- Renderd called [child of App]");
    return (
      <div>
        <h1>Hello, {this.props.roll}</h1>
        <Marks />
      </div>
    );
  }
}
