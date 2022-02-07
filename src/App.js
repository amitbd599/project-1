import React, { Component } from "react";
import Header from "./Components/Child_Page_componests/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
