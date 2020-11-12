import React, { Component } from "react";

export default class App extends Component {
  state = {
    nam: "",
    pswd: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    console.log(e.target[0]);
    console.log(e.target[0].name);
    console.log(e.target[0].value);
    console.log(e.target[1]);
    console.log(e.target[2]);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
