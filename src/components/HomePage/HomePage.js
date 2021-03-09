import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";
import { Helmet } from "react-helmet";
import Footer from "../common/Footer";

export default class HomePage extends Component {
  render() {
    return (
      <div className="layout">
        <Helmet>
          <title>Chris Heberden</title>
          <style>{"body { background-color: #0b0c10; }"}</style>
        </Helmet>
        <h1 className="title layout-align">Chris Heberden</h1>
        <h2 className="text layout-align">
          <TextLoop
            springConfig={{ stiffness: 180, damping: 8 }}
            interval={2000}
          >
            <span>Web Developer</span>
            <span>Sportsman and Sports Lover</span>
            <span>Eco Enthusiast</span>
          </TextLoop>
        </h2>

        <Link to="/contact" className=" page-button layout-align">
          <button className=" buttons layout-align ">Get In Touch </button>
        </Link>
      </div>
    );
  }
}
