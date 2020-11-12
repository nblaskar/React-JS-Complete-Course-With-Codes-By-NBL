import React, { Component } from "react";

export default class App extends Component {
  state = {
    // value: "",
    value: "NBLASKAR",
  };
  clickChange = (e) => {
    // console.log(e.target.value);
    // this.setState({ value: e.target.value });
    // this.setState({ value: e.target.value.toUpperCase() });
    this.setState({ value: e.target.value.toUpperCase().substr(0, 10) });
  };
  render() {
    return (
      <div>
        <form>
          <h2>Controlled By React</h2>
          <text
            type="text"
            value={this.state.value}
            onChange={this.clickChange}
          />
        </form>
      </div>
    );
  }
}
