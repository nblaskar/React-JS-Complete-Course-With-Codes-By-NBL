import React from "react";
//Simple String
// const el = <h1>Hello NBL</h1>;

//Math Expression
// const el = <h1>{10 + 20}</h1>;

//Variable
// const name = "NBL";
// const el = <h1>Hello {name}</h1>;

//Function
// function show(name) {
//   return name;
// }
// const el = <h1>Hello {show("NBL")}</h1>;

//Object Property
let user = {
  firstname: "NBL",
};
const el = <h1>Hello {user.firstname}</h1>;

export default el;
