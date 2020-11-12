import React, { Component } from "react";
import PT from "prop-types";

class Student extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>Your Roll:{this.props.roll}</h2>
      </div>
    );
  }
}

Student.propTypes = {
  name: PT.string.isRequired,
};
export default Student;
