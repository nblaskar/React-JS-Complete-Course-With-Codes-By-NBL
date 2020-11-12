import React, { Component } from "react";
import User from "./User";
import Styles from "./App.module.css";
import Styles1 from "./User.module.css";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className={Styles.txt}>Hello App</h1>;
        <h1 className={Styles1.txt}>Hello App-1</h1>;
        <h1 className="txt">Hello App-2</h1>;
        <User />
      </React.Fragment>
    );
  }
}
