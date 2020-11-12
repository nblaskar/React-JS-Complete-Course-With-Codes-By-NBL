import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
const App = () => {
  const [num, setNum] = useState(0);
  const incmNumber = () => {
    setNum(num + 1);
  };
  const decmNumber = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("Sorry! Zero Limit Reached");
      setNum(0);
    }
  };
  return (
    <React.Fragment>
      <div className="main_div">
        <div className="center_div">
          <h1>{num}</h1>
          <div className="btn_div">
            <button onClick={incmNumber}>
              <AddIcon />
            </button>
            <button onClick={decmNumber}>
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default App;
