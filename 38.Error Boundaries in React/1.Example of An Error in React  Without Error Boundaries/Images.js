import React, { Component } from "react";

export default class Images extends Component {
  render() {
    if (this.props.photo === "NoImages") {
      throw new Error("Opps! Image Not Found");
    }
    return <img src={this.props.photo} alt="My Pic" width="300px" />;
  }
}
