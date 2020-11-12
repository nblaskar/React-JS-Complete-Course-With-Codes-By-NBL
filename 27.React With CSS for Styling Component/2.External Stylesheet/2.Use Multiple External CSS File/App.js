import React, { Component } from "react";
import "./App.css";
import User from "./User"; //it is imported lastly thats why User.css will apply
//Use Multiple External Css File
//Remember the Selector Name Should not be Same.

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="txt">Hello App</h1>
        <User />
      </React.Fragment>
    );
  }
}
