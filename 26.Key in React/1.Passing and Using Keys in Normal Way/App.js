import React, { Component } from "react";
//Passing and Using Keys in Normal Way for Accessing State lists With map() Method
export default class App extends Component {
  state = {
    users: [
      { id: 101, name: "NBL" },
      { id: 102, name: "NUR" },
      { id: 103, name: "BAHAR" },
    ],
  };
  //Process-1
  // render() {
  //   const newUsers = this.state.users.map((user) => {
  //     console.log(user);
  //     return (
  //       <h1 key={user.id}>
  //         ID: {user.id},Name: {user.name}
  //       </h1>
  //     );
  //   });
  //   return <div>{newUsers}</div>;
  // }
  //Process-2
  render() {
    const newUsers = this.state.users.map((user, i) => {
      console.log(user);
      return (
        <h1 key={i}>
          ID: {user.id},Name: {user.name}
        </h1>
      );
    });
    return <div>{newUsers}</div>;
  }
}
