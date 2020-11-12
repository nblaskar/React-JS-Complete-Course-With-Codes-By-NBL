import React, { Component } from "react";

export default class Guest extends Component {
  render() {
    return (
      <div>
        <h2>on Guest: {this.props.number * 20}</h2>
      </div>
    );
  }
}
