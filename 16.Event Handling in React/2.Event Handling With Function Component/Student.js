import React from "react";

//Functional Component

function Student(props) {
  //With Normal Function
  // function handleClick() {
  //   console.log("Button Clicked");
  // }

  //With Arrow Function
  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <button onClick={handleClick}> Click</button>
    </div>
  );
}
export default Student;
