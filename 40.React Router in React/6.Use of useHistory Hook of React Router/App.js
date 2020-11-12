import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Name from "./Name";
import Menu from "./Menu";
import User from "./User";

const App = () => {
  return (
    <React.Fragment>
      <Menu />
      <Switch>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route
          exact
          path="/contact"
          render={() => <Contact name="Contact US.." />}
        />
        <Route path="/contact/Name" component={Name} />
        {/* <Route path="/user/:fname" component={User} /> */}
        <Route path="/user/:fname/:lname" component={User} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
};
export default App;
