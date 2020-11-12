import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import "./Card.css";
// function nCards(val) {
//   return (
//     <Card
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sName={val.sName}
//       link={val.link}
//     />
//   );
// }
ReactDOM.render(
  <React.Fragment>
    <h1 className="heading_style">List of Top 5 Netflix Series</h1>
    {Sdata.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sName={val.sName}
          link={val.link}
        />
      );
    })}
  </React.Fragment>,
  document.getElementById("root")
);
