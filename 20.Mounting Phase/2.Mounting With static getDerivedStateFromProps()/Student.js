import React, { Component } from "react";

export default class Student extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.roll}</h1>
      </div>
    );
  }
}
