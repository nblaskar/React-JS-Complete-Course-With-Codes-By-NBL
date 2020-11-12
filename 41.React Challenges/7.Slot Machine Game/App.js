import React from "react";
import "./App.css";

const SlotMachine = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;
  if (x === y && y === z) {
    return (
      <React.Fragment>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is Matching</h1>
          <hr />
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is Not Matching</h1>
          <hr />
        </div>
      </React.Fragment>
    );
  }
};

const App = () => {
  return (
    <React.Fragment>
      <h1 className="heading_style">
        🎰 Welcome to
        <span style={{ fontWeight: "bold" }}>Slot Machine Game</span>{" "}
      </h1>
      <div className="slotmachine">
        <SlotMachine x="😃" y="😃" z="😃" />
        <SlotMachine x="😈" y="🐌" z="😃" />
        <SlotMachine x="😃" y="😝" z="🍂" />
      </div>
    </React.Fragment>
  );
};
export default App;
