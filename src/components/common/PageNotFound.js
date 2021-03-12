import Max from "../../../public/pictures/max.jpg";

import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <Helmet>
        <title>404 Error;</title>
        <style>{"body { background-color: #0b0c10; }"}</style>
      </Helmet>
      <h1>404 Error! Page Not Found</h1>
      <h4>To make your day BETTER here is a picture of my dog</h4>
      <img src={Max} alt="Max the dog" />

      <p style={{ textAlign: "center" }}>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
}
