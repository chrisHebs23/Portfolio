import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Navigator from "../common/Navigator";
import ContactPage from "../ContactPage/ContactPage";
import AboutPage from "../AboutPage/About";
import PortfolioPage from "../PortfolioPage/PortfolioPage";
import Footer from "../common/Footer";

export default function App() {
  return (
    <div id="App">
      <div className="container">
        <Router>
          <Navigator />
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
        <Footer />
      </div>
    </div>
  );
}
