import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import PortfolioRepos from "./PortfolioRepos";

function PortfolioPage() {
  let [repos, setRepos] = useState([]);

  const username = "chrisHebs23";

  useEffect(() => {
    const fetchData = async () => {
      const responseRepos = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );

      setRepos(responseRepos.data);
    };
    fetchData();
  }, []);

  return (
    <div className="layout">
      <Helmet>
        <title>Chris's Portfolio</title>
        <style>{"body { background-color: #202833; }"}</style>
      </Helmet>
      <h1 className="portfolio-title layout-align">Portfolio</h1>
      <PortfolioRepos repos={repos} />
    </div>
  );
}

export default PortfolioPage;
