import React from "react";

//----Simple Functional Component
// function Student() {
//   return <h1>Hello NBL</h1>;
// }

//----Arrow Functional Component
// const Student = () => {
//   return <h1>Hello NBL</h1>;
// };

//----Functional Component With Props Argument
const Student = (props) => {
  return <h1>Hello {props.name}</h1>;
};

export default Student;
