import React, { Component } from "react";
class Student extends Component {
  //State Without Constructor or
  // State Property
  state = {
    id: 5,
    name: "NBL",
  };
  handleClick = (id, j, e) => {
    console.log("Data Deleted By Id=", id);
    console.log(j);
    console.log(e);
  };
  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <button onClick={this.handleClick.bind(this, "12", this.state.id)}>
          Delete
        </button>
      </div>
    );
  }
}
export default Student;
