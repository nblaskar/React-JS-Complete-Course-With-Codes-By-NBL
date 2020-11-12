import React, { useState, useEffect } from "react";
//------Example-1
//Use of useEffect() With single Paramenter
// function App() {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => {
//     setCount(count + 1);
//   };
//   useEffect(() => {
//     console.log("Use Effect Called");
//     console.log("Lifecycle Bottom Layered Methods' position");
//   });
//   return (
//     <React.Fragment>
//       <h1>Count Up: {count}</h1>
//       <button type="button" onClick={handleIncrement}>
//         Increment
//       </button>
//     </React.Fragment>
//   );
// }
//--------Example-2
//Use of useEffect() With Two Parameter
function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(50);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount1(count1 - 1);
  };

  useEffect(() => {
    console.log("Use Effect Called");
    console.log("Lifecycle Bottom Layered Methods' position");
  }, [count]); //useEffect runs when count changes// use can also use [count,count1]
  return (
    <React.Fragment>
      <h1>Count Up: {count}</h1>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <h1>Count Down: {count1}</h1>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </React.Fragment>
  );
}
export default App;
