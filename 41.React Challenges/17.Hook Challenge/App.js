import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const clicked = () => {
    setNum(num + 1);
  };
  useEffect(() => {
    document.title = `You Clicked ${num} times`;
  });
  return (
    <>
      <button onClick={clicked}>Click Me {num}</button>
    </>
  );
};
export default App;
