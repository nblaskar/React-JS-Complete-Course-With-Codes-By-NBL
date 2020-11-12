import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
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
            <Tooltip title="Add">
              <Button onClick={incmNumber}>
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Delete">
              <Button onClick={decmNumber}>
                <DeleteIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default App;
