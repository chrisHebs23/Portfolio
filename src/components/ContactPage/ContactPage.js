import React from "react";
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
        },
        (error) => {
          console.log(error.text);
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
      <h1 className="page-title layout-align title">Get in Touch</h1>
      <h2 className="contact-text layout-align">
        Morse code is an option but there are simpler ways to get in touch with
        me.
      </h2>
      <form onSubmit={sendEmail} className="the-form">
        <input className="name" typ="text" placeholder="Name" name="name" />
        <input
          className="email-address"
          type="email"
          placeholder="Email Address"
          name="email"
        />
        <input
          className="purpose"
          typ="text"
          placeholder="Subject"
          name="subject"
        />
        <textarea
          className="message"
          placeholder="Your Message"
          name="message"
        />
        <button className="the-submit">Send Message</button>
      </form>
    </div>
  );
}
