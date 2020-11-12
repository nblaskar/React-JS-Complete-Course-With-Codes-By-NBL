import React, { Component } from "react";
import pic1 from "./pic1.png";
import pic2 from "./pic2.jpg";
import Images from "./Images";
import Error from "./Error";
export default class App extends Component {
  render() {
    return (
      <div>
        <Error>
          <Images photo={pic1} />
          <br />
          <Images photo={pic2} />
          <br />
          <Images photo="NoImages" />
          <br />
        </Error>
      </div>
    );
  }
}
