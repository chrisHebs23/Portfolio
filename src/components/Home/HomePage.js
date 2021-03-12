import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";
import { Helmet } from "react-helmet";

export default class HomePage extends Component {
  render() {
    return (
      <div className="layout">
        <Helmet>
          <title>Chris Heberden</title>
          <style>{"body { background-color: #0b0c10; }"}</style>
        </Helmet>
        <h1 className="title layout-align">Chris Heberden</h1>
        <TextLoop
          springConfig={{ stiffness: 180, damping: 8 }}
          interval={3000}
          className="text-loop layout-align"
        >
          <span className="layout-align">Web Developer</span>
          <span className="layout-align">Sportsman and Sports Lover</span>
          <span className="layout-align">Eco Enthusiast</span>
        </TextLoop>

        <Link to="/contact" className=" page-button layout-align">
          <button className=" buttons layout-align ">Get In Touch </button>
        </Link>
      </div>
    );
  }
}
