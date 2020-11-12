import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.backRef = null;
    this.setBackRef = (element) => {
      this.backRef = element;
    };
  }
  componentDidMount() {
    if (this.backRef) {
      this.backRef.focus();
    }
  }
  render() {
    return (
      <form>
        Name:
        <input type="text" />
        <br />
        <br />
        Password:
        <input type="text" ref={this.setBackRef} />
        <br />
        <br />
        Address:
        <input type="text" />
      </form>
    );
  }
}
