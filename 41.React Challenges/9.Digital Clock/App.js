import React, { useState } from "react";
import "./App.css";

function App() {
  let newTime = new Date().toLocaleTimeString();
  const [cTime, setcTime] = useState(newTime);

  const UpdateTime = () => {
    let newCTime = new Date().toLocaleTimeString();
    setcTime(newCTime);
  };
  setInterval(UpdateTime, 1000);
  return (
    <React.Fragment>
      <div>
        <h1>{cTime}</h1>
      </div>
    </React.Fragment>
  );
}
export default App;
