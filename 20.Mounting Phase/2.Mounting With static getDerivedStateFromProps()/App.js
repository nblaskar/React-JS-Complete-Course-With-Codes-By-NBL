import React, { Component } from "react";
import Student from "./Student";
export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("App - Constructor Called");
    console.log(props);
    this.state = {
      roll: "105",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("App - getDerivedStateFromProps Called ");
    console.log(state, props);
    // return null; or
    return (state = {
      roll: "10",
    });
  }
  render() {
    return (
      <div>
        <Student roll={this.state.roll} />
      </div>
    );
  }
}
