import React from "react";
import Common from "./Common";
import pic from "../src/images/kiwi.svg";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={pic}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default About;
