import React from "react";

//Functional Component

function Student(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log("Button Clicked");
  }

  return (
    <div>
      <h1>Hello {props.name}</h1>
      <a href="https://nblaskar.live" onClick={handleClick}>
        Click Me
      </a>
    </div>
  );
}
export default Student;
