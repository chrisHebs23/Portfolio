import React from "react";
import Carousel from "nuka-carousel";

const PortfolioRepos = (props) => {
  let repos = props.repos;

  return (
    <div className="carousel-layout ">
      <Carousel className="carousel-style">
        {repos.map((repo) => (
          <div key={repo.id} className="cardStyle">
            <h2 className="card-title card-align">{repo.name}</h2>
            <p className="card-description card-align">{repo.description}</p>
            <p className="card-language card-align">{repo.language}</p>
            <button className="buttons card-button card-align">
              <a className="card-link" href={repo.homepage} target="_blank">
                Visit
              </a>
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

// Send the request to the server

export default PortfolioRepos;
