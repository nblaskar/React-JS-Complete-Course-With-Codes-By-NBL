import React, { Component } from "react";
import Nblaskar from "./Nblaskar";
import Firdaus from "./Firdaus";
export default class App extends Component {
  render() {
    return (
      <div>
        <Nblaskar campN="120" />
        <Firdaus campF="130" />
      </div>
    );
  }
}
