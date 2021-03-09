import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactPage.css";
import { Helmet } from "react-helmet";

export default function ContactPage() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0qac5ls",
        "template_utn6oww",
        e.target,
        "user_xMgIM2NgR2hImiFsk9Vqq"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED!" + error);
        }
      );

    e.target.reset();
  }

  return (
    <div className="layout-contact">
      <Helmet>
        <title>Contact Chris</title>
        <style>{"body { background-color: #202833; }"}</style>
      </Helmet>
      <h1 className="contact-title layout-align titles">Get in Touch</h1>
      <h2 className="contact-text layout-align">
        Morse code and smoke signals are options, but there is a simpler way to
        get in touch with me:
      </h2>
      <form onSubmit={sendEmail} className="the-form">
        <input
          className="name spacing"
          typ="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="email-address spacing"
          type="email"
          placeholder="Email Address"
          name="email"
          required
        />
        <input
          className="purpose spacing"
          typ="text"
          placeholder="Subject"
          name="subject"
          required
        />
        <textarea
          className="message "
          placeholder="Your Message"
          name="message"
          required
        />
        <button className="buttons the-submit">Send Message</button>
      </form>
    </div>
  );
}
