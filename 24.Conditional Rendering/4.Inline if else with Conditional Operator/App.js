import React, { Component } from "react";
import User from "./User";
import Guest from "./Guest";

export default class App extends Component {
  state = {
    isLoggedIn: false,
  };
  clickLogin = () => {
    console.log("Login Clicked");
    this.setState({ isLoggedIn: true });
  };
  clickLogout = () => {
    console.log("Logout Clicked");
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        {isLoggedIn ? (
          <User name="NBL" clickData={this.clickLogout} />
        ) : (
          <Guest clickData={this.clickLogin} />
        )}
      </div>
    );
  }
}
