import React from "react";
import "./Footer.css";
import emailjs from "emailjs-com";
import Button from "react-bootstrap/Button";
export default function Footer() {

  function sendEmail(e) {
    
    e.preventDefault();
 
    emailjs
      .sendForm(
        "service_6cn0ffb",
        "template_s039w28",
        e.target,
        "user_P2g7GGB2qN1mtruWRzpz8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      alert("Message sent successfully");
    e.target.reset();

  }
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Currently open for hire : Software & Web Developmenet roles!
        </p>
        <p className="footer-subscription-text">
          Contact me if you are interested with my work!
        </p>
        <div className="input-areas">
          <form className ="form"onSubmit={sendEmail}>
            <input
              className="form-control"
              name="name"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="form-control"
              name="subject"
              type="text"
              placeholder="Subject:"
              required
            />
            <input
              className="form-control"
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="form-control"
              name="message"
              type="message"
              col="1"
              row="20"
              placeholder="Enter Message"
              required
            />
            <Button
              id="button"
              variant="outline-success"
              type="submit"
              value="sendmessage"
            >
              Send
            </Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper"></div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <a href="/" className="social-logo">
              Dagmawi Negesse
            </a>
          </div>
          <small class="website-rights">Dagmawi Negesse © 2022</small>
          <div class="social-icons">
            <a
              href="https://github.com/dagmawinegesse"
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i class="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/dagmawi-negesse-820972159/"
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
