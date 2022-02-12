import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Services from "./Components/Pages/Services";
import Service_Details from "./Components/Pages/Service_Details";
import Our_Projects from "./Components/Pages/Our_Projects";

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/service">
          <Services />
        </Route>
        <Route exact path="/service-details">
          <Service_Details />
        </Route>
        <Route exact path="/our-project">
          <Our_Projects />
        </Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
