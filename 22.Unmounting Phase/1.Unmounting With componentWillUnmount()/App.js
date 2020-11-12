import React, { Component } from "react";

export default class App extends Component {
  componentDidMount() {
    console.log("App- Mounted");
  }
  componentWillUnmount() {
    console.log("App-Unmounted");
  }
  render() {
    console.log("App - Rendered Called");
    return <h1>Hello App Component</h1>;
  }
}
