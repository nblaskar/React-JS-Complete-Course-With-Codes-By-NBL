import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    //Creating ref
    this.textInput = React.createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.textInput.current.value);
    this.setState({ value: this.textInput.current.value });
  };

  render() {
    return (
      <React.Fragment>
        <h2>You Typed: {this.state.value}</h2>
        <form onSubmit={this.handleSubmit}>
          Input:
          <input type="text" ref={this.textInput} />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}
