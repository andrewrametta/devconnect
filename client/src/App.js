import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
