import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import "./Card.css";
ReactDOM.render(
  <React.Fragment>
    <h1 className="heading_style">List of Top 5 Netflix Series</h1>
    <Card
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sName={Sdata[0].sName}
      link={Sdata[0].link}
    />
    <Card
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sName={Sdata[1].sName}
      link={Sdata[1].link}
    />
    <Card
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      sName={Sdata[2].sName}
      link={Sdata[2].link}
    />
    <Card
      imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      sName={Sdata[3].sName}
      link={Sdata[3].link}
    />
    <Card
      imgsrc={Sdata[4].imgsrc}
      title={Sdata[4].title}
      sName={Sdata[4].sName}
      link={Sdata[4].link}
    />
  </React.Fragment>,
  document.getElementById("root")
);
