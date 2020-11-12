import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import pic1 from "./Images/pic5.jpg";
import pic2 from "./Images/pic6.jpg";
import pic3 from "./Images/pic7.jpg";
import pic4 from "./Images/pic8.jpg";
import pic5 from "./Images/pic9.jpg";
ReactDOM.render(
  <React.Fragment>
    <Card
      imgsrc={pic1}
      title="A Netflix Original Series"
      sName="Dark"
      link="https://nblaskar.live"
    />
    <Card
      imgsrc={pic2}
      title="A Netflix Original Series"
      sName="Extra Curricular"
      link="https://nblaskar.live"
    />
    <Card
      imgsrc={pic3}
      title="A Netflix Original Series"
      sName="Stranger Things"
      link="https://nblaskar.live"
    />
    <Card
      imgsrc={pic4}
      title="A Netflix Original Series"
      sName="Spider"
      link="https://nblaskar.live"
    />
    <Card
      imgsrc={pic5}
      title="A Netflix Original Series"
      sName="Avenger"
      link="https://nblaskar.live"
    />
  </React.Fragment>,
  document.getElementById("root")
);
