import React, { Component } from "react";
import { MyContext } from "./Context";
export default class Guest extends Component {
  static contextType = MyContext;
  render() {
    // const { name, value } = this.context.data; //By destructuring
    return (
      <div>
        <h2>Guest Component</h2>
        <h2>{/* Name: {name},Value: {value} */}</h2>
        <h3>Name: {this.context.data.name}</h3>
        <h3>Value: {this.context.data.value}</h3>
        <button onClick={this.context.handleClick}>Change Value</button>
      </div>
    );
  }
}
