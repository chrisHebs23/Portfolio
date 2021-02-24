import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="layout-contact">
      <h1 className="page-title layout-align title">Get in Touch</h1>
      <h2 className="contact-text layout-align">
        While I am good at Morse code there is are much simpler ways to get in
        touch with me.
      </h2>
      <form className="the-form">
        <input
          className="email-address"
          type="text"
          placeholder="Email Address"
        />
        <input className="purpose" typ="text" placeholder="Purpose" />
        <textarea className="message" placeholder="Message" />
        <button className="the-submit">Send Message</button>
      </form>
    </div>
  );
}
