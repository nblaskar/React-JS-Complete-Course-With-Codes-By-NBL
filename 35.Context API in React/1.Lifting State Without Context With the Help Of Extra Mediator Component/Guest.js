import React, { Component } from "react";

export default class Guest extends Component {
  render() {
    return (
      <div>
        <h2>Guest Component</h2>
        <h2>{this.props.nm}</h2>
      </div>
    );
  }
}
