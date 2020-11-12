import React, { Component, Fragment } from "react";

class App extends Component {
  render() {
    return (
      //----Use of Fragment Without Importing
      // <React.Fragment>
      //   <h1>Hello</h1>
      //   <h2>I Am NBL</h2>
      // </React.Fragment>

      // ----Use of Fragment By Importing
      // <Fragment>
      //   <h1>Hello</h1>
      //   <h2>I Am NBL</h2>
      // </Fragment>

      // ----Use of Fragment in Short Format
      <>
        <h1>Hello</h1>
        <h2>I Am NBL</h2>
      </>
    );
  }
}

export default App;
