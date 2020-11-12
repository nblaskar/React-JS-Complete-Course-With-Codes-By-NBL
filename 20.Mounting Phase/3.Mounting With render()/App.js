import React, { Component } from "react";
import Student from "./Student";
export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor Called");
    console.log(props);
    this.state = {
      roll: "101",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("App - getDerivedStateFromProps Called ");
    console.log(state, props);
    return null;
  }
  render() {
    console.log("App- Renderd called [Main Component]");
    return (
      <div>
        <Student roll={this.state.roll} />
      </div>
    );
  }
}
