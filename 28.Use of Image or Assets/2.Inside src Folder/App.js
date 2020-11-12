import React, { Component } from "react";
import pic1 from "./pic1.jpg";
import pic2 from "./images/pic2.jpg";

export default class App extends Component {
  render() {
    return (
      <div>
        <img src={pic1} alt="MyPic" width="300px" />
        <img src={pic2} alt="MyPic" width="300px" />
      </div>
    );
  }
}
