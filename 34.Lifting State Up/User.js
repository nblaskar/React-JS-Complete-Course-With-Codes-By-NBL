import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <div>
        <h1>on User: {this.props.num + 20}</h1>
      </div>
    );
  }
}
