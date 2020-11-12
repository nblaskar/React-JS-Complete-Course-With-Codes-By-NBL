import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Menu from "./Menu";
import Error from "./Error";
import { Switch, Route, Redirect } from "react-router-dom";
const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        {/* <Route component={Error} /> */}
        {/* OR */}
        {/* <Redirect to="/" /> */}
      </Switch>
    </>
  );
};
export default App;
