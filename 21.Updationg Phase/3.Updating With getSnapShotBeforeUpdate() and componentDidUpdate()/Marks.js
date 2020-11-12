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
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.mroll < 107) {
      console.log("Marks - shouldComponentUpdate called");
      console.log(nextProps, nextState);
      return true;
    }
    console.log(nextProps, nextState);
    return false; //Component Will not Update after mroll=107
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Marks- getSnameshotBeforeUpdate Called-it runs before update");
    console.log(prevProps, prevState);
    return 45;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Marks- componentDidUpdate called- it Runs after update");
    console.log(prevProps, prevState, snapshot);
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
