import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigator from "../common/Navigator";
import Footer from "../common/Footer";
import NotFoundPage from "../common/PageNotFound";
import "./App.css";

const AboutPage = lazy(() => import("../About/About"));
const ContactPage = lazy(() => import("../Contact/ContactPage"));
const HomePage = lazy(() => import("../Home/HomePage"));
const PortfolioPage = lazy(() => import("../Portfolio/PortfolioPage"));

export default function App() {
  return (
    <div id="App">
      <div className="container">
        <Router>
          <Navigator />

          <Switch>
            <Suspense
              fallback={
                <span style={{ backgroundColor: "#0B0C10", color: "white" }}>
                  Loading...
                </span>
              }
            >
              <Route exact path="/" component={HomePage} />

              <Route exact path="/contact" component={ContactPage} />

              <Route exact path="/about" component={AboutPage} />

              <Route exact path="/portfolio" component={PortfolioPage} />
            </Suspense>
            <Route exact path="*" component={NotFoundPage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}
