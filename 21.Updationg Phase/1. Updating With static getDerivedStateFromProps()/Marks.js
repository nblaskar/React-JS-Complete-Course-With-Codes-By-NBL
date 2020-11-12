import React, { Component } from "react";
export default class Marks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mroll: this.props.roll,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Marks - getDerivedStateFromProps Called");
    console.log(props, state);
    console.log("Props.roll", props.roll);
    console.log("State.mrool", state.mroll);
    if (props.roll !== state.mroll) {
      return {
        mroll: props.roll,
      };
    }
    return null;
  }
  render() {
    console.log("Marks-Rendered Called");
    return (
      <div>
        <h1>Hello,{this.state.mroll}</h1>
      </div>
    );
  }
}
