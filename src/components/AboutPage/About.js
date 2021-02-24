import React from "react";
import Me from "../../../public/me.jpg";
import "./About.css";

export default function AboutPage() {
  return (
    <div className="layout">
      <h1 className="about-title layout-align title">About Me</h1>
      <img className="me-picture layout-align" src={Me} />
      <p className="about-text layout-align">
        I am a South African, who did most of my growing up on a tropical island
        in The Indian Ocean. If I wasn't in the water or at school you could
        often find me at the rugby field or behind my computer. I came to
        America on a Rugby scholarship and like most of my friends had no clue
        what I wanted to be. That was until I took a simple programming class in
        my sophomore, and found what I enjoyed. This started me on my coding
        journey. <br /> <br /> I am now out of College and teaching myself how
        to become a Full Stack Web Developer. I am enjoying the process. I often
        find myself getting lost in time when I a coding but that just goes to
        show time does fly when you are having fun. <br />
        <br />I am looking to begin my next chapter of my life and join a
        company so that I can help them reach their goals as well as my own.
      </p>
    </div>
  );
}
