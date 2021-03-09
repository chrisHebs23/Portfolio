import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import { Helmet } from "react-helmet";
import { css } from "@emotion/core";
import axios from "axios";
import PortfolioRepos from "./PortfolioRepos";
import CircleLoader from "react-spinners/CircleLoader";
import { CssBaseline } from "@material-ui/core";

function PortfolioPage() {
  let [repos, setRepos] = useState([]);
  const [isLoading, setIsLoaded] = useState(true);

  const username = "chrisHebs23";

  useEffect(() => {
    const fetchData = async () => {
      const responseRepos = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );

      setTimeout(() => {
        setIsLoaded(false);
        setRepos(responseRepos.data);
      }, 200);
    };
    fetchData();
  }, []);

  const loader = {
    gridColumn: "1/ 10",
    gridRow: "3 / 12",
    display: "flex",
    justifySelf: "center",
    alignSelf: "center",
  };

  return (
    <div className="layout">
      <Helmet>
        <title>Chris's Portfolio</title>
        <style>{"body { background-color: #202833; }"}</style>
      </Helmet>
      <h1 className="portfolio-title layout-align">Portfolio</h1>
      {isLoading ? (
        <CircleLoader
          css={loader}
          color={"#66fcf1"}
          loading={isLoading}
          size={150}
        />
      ) : (
        <PortfolioRepos repos={repos} />
      )}
    </div>
  );
}

export default PortfolioPage;
