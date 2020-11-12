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
    const { name, value } = e.target;

    setFullName((preValue) => {
      console.log(preValue);
      console.log([name]);
      return {
        ...preValue,
        [name]: value,
      };
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
            name="fname"
            placeholder="Enter Your First Name"
            onChange={inputEvent}
            value={fullName.fname}
          />
          <br />
          <br />
          <input
            type="text"
            name="lname"
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
