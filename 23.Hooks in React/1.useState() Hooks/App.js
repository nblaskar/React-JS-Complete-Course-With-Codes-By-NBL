import React, { useState } from "react";
//------Example-1
//Simple use of useState()
// function App() {
//   const nameStateVariable = useState("NBL");
//   const handleClick = () => {
//     nameStateVariable[1]("Nur Bahar");
//   };
//   return (
//     <React.Fragment>
//       <h1>{nameStateVariable[0]}</h1>
//       <button type="button" onClick={handleClick}>
//         Change
//       </button>
//     </React.Fragment>
//   );
// }

//------Examp le-2
//---Use of useState by Destructuring
// function App() {
//   // const nameStateVariable = useState("NBL");
//   // const name = nameStateVariable[0];
//   // const setName = nameStateVariable[1];
//   const [name, setName] = useState("NBL");
//   const handleClick = () => {
//     setName("Nur Bahar");
//   };
//   return (
//     <React.Fragment>
//       <h1>{name}</h1>
//       <button type="button" onClick={handleClick}>
//         Change
//       </button>
//     </React.Fragment>
//   );
// }
//------Examp le-3
//To use Multiple useState
function App() {
  const [name, setName] = useState("NBL");
  const [roll, setRoll] = useState(101);
  const handleClick = () => {
    setName("Nur Bahar");
    setRoll(105);
  };
  return (
    <React.Fragment>
      <h1>Name: {name}</h1>
      <h2>Roll: {roll}</h2>
      <button type="button" onClick={handleClick}>
        Change
      </button>
    </React.Fragment>
  );
}
export default App;
