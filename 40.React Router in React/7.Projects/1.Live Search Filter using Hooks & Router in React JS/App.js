import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import User from "./User";
import Search from "./Search";
//Name Conponent
const Name = () => {
  return <h1>I Am Name Page</h1>;
};
//Error Component
const Error = () => {
  return <h1> opps! Page Not Found</h1>;
};

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
        <Route path="/search" component={Search} />
        <Route path="/contact/Name" component={Name} />
        {/* <Route path="/user/:fname" component={User} /> */}
        <Route path="/user/:fname/:lname" component={User} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
};
export default App;
