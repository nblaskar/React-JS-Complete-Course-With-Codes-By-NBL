import React, { Component } from "react";

export default class App extends Component {
  state = {
    value: "Hi This is Text Aria Field",
  };
  clickChange = (e) => {
    this.setState({ value: e.target.value.substr(0, 30) });
  };
  render() {
    return (
      <div>
        <form>
          <h2>Controlled By React</h2>
          <textarea
            type="text"
            value={this.state.value}
            onChange={this.clickChange}
          />
        </form>
      </div>
    );
  }
}
