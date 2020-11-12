import React, { Component } from "react";

export default class App extends Component {
  state = {
    nam: "NBLASKAR",
    pswd: "nbl",
  };

  handleChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value });
    const value =
      e.target.name === "pswd"
        ? e.target.value.toUpperCase().substr(0, 15)
        : e.target.value;
    this.setState({ [e.target.name]: value });
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              name="nam"
              type="text"
              onChange={this.handleChange}
              value={this.state.nam}
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              type="text"
              name="pswd"
              onChange={this.handleChange}
              value={this.state.pswd}
            />
          </label>
        </form>
      </div>
    );
  }
}
