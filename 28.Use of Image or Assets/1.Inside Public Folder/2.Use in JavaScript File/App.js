import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/pic1.jpg"}
          alt="MyPic"
          width="300px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/pic2.jpg"}
          alt="MyPic"
          width="300px"
        />
      </div>
    );
  }
}
