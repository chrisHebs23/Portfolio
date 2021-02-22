import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Navbar from "../common/Navbar";
import ContactPage from "../ContactPage/ContactPage";
import AboutPage from "../AboutPage/About";
import PortfolioPage from "../PortfolioPage/PortfolioPage";

export default function App(props) {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
