import React from "react";
import Me from "../../../public/pictures/me.jpg";
import "./About.css";
import { Helmet } from "react-helmet";

export default function AboutPage() {
  return (
    <div className="layout">
      <Helmet>
        <title>About Chris</title>
        <style>{"body { background-color: #202833; }"}</style>
        <style>{".github-logo,.github { grid-column: 2/3; }"}</style>
        <style>
          {`@media (max-width: 30rem) {
            .github-logo,.github { grid-column: 7/8 }} `}
        </style>
      </Helmet>
      <h1 className="about-title layout-align titles ">About Me</h1>
      <img className="me-picture layout-align" src={Me} />
      <p className="about-text layout-align">
        I am a Global citizen, born in South Africa grew up on a tropical island
        in The Indian Ocean. If I wasn't in the water or at school, you could
        often find me at the rugby field, where I earned national age group
        colours and played in a number of international tournaments, or behind
        my computer, where I discovered an ability and love for technology. I
        was fortunate enough to attend college in the USA on a Rugby scholarship
        with my focus on the sports field and not on my career. That was until I
        took a simple programming class in my sophomore year and found what I
        enjoy, what I eat breathe and sleep.
        <br />
        <br />I have started my coding journey and am looking to go much
        further. I graduated from Notre Dame College cum laude and am completing
        a Full Stack Web Developer course. I am enjoying every moment of this
        development process. Time stands still when I am coding, but that just
        shows that time does fly when you are having fun and challenging your
        capabilities.
        <br />
        <br />I am looking to starting the next chapter of my life by being
        invited to join a company to help them achieve their goals while I reach
        towards my own.
      </p>
    </div>
  );
}
