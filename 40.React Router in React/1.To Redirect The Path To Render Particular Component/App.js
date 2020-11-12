import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Name from "./Name";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/Name" component={Name} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
};
export default App;
