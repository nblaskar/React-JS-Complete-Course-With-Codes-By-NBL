import React, { Component } from "react";
class Student extends Component {
  //State Without Constructor or
  // State Property
  state = {
    id: 5,
    name: "NBL",
  };
  // ---Process-1
  //Event Handler Arrow Function
  // handleClick = (id) => {
  //   console.log("Data Deleted By Id=", id);
  // };
  // handleClickArg = (e) => {
  //   this.handleClick(this.state.id);
  // };
  //---------OR----
  //Event Handler Arrow Function
  // handleClick = (id, j, e) => {
  //   console.log("Data Deleted By Id=", id);
  //   console.log(j);
  //   console.log(e);
  // };
  // handleClickArg = (e) => {
  //   this.handleClick(this.state.id, "101", e);
  //   // console.log(e);
  // };
  // render() {
  //   return (
  //     <div>
  //       <h1>Hello, {this.state.name}</h1>
  //       <button onClick={this.handleClickArg}>Delete</button>
  //     </div>
  //   );
  // }
  //---Process-2
  //Event Handler Arrow Function
  handleClick = (id, j, e) => {
    console.log("Data Deleted By Id=", id);
    console.log(j);
    console.log(e);
  };
  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <button
          onClick={(e) => {
            this.handleClick(this.state.id, "101", e);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}
export default Student;
