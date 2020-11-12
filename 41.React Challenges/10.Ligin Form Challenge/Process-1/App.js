import React, { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFullName((preValue) => {
      console.log(preValue);
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone: preValue.phone,
        };
      } else if (name === "phone") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: value,
        };
      }
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <React.Fragment>
      <div>
        <form onSubmit={onSubmit}>
          <h1>
            Hello{fullName.fname}
            {fullName.lname}
          </h1>
          <p>{fullName.email}</p>
          <p>{fullName.phone}</p>
          <input
            type="text"
            name="fName"
            placeholder="Enter Your First Name"
            onChange={inputEvent}
            value={fullName.fname}
          />
          <br />
          <br />
          <input
            type="text"
            name="lName"
            placeholder="Enter Your Last Name"
            onChange={inputEvent}
            value={fullName.lname}
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={inputEvent}
            value={fullName.email}
          />
          <br />
          <br />
          <input
            type="number"
            name="phone"
            placeholder="Enter Your Phone Number"
            onChange={inputEvent}
            value={fullName.phone}
          />
          <br />
          <button type="submit">Submit 👍</button>
        </form>
      </div>
    </React.Fragment>
  );
}
export default App;
