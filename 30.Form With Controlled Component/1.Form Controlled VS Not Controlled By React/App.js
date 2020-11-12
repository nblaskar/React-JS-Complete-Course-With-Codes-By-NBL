import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <form>
          <h2>Controlled By React</h2>
          With value:
          <input type="text" value="NBLASKAR" />
          <br />
          With defaultValue:
          <input type="text" defaultValue="NBLASKAR" />
        </form>
      </div>
    );
  }
}
