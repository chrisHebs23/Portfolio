import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Navbar from "../common/Navbar";

export default function App() {
  return (
    <Router>
      <div className="navbar">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
