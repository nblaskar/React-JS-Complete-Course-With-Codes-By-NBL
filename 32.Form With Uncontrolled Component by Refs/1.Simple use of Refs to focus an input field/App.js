import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    //Creating ref
    this.textInput = React.createRef();
  }
  componentDidMount = () => {
    console.log(this.textInput);
    console.log(this.textInput.current);
    this.textInput.current.focus();
  };
  render() {
    return (
      <form>
        Name:
        <input type="text" /> <br /> <br />
        {/* Attaching created ref to react element */}
        Password: <input type="text" ref={this.textInput} /> <br /> <br />
        Address: <input type="text" />
      </form>
    );
  }
}
