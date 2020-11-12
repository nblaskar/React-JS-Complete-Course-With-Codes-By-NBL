import React, { Component } from "react";
import User from "./User";
import { Provider } from "./Context";
export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Provider value={"NBLASKAR"}> */}
        <User />
        {/* </Provider> */}
      </div>
    );
  }
}
