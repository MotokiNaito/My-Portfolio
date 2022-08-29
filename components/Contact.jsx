import React from "react";

const Contact = () => (
  <section
    className="contact panel"
    data-section="contact"
    data-reveal="container"
  >
    <div className="contact__info">
      <h2 className="contact__info__title" data-reveal="fade-in">
        <span>Feel free to</span>
        <span>contact me</span>
      </h2>
      <ul className="contact__info__list" data-reveal="fade-in">
        <li>
          <a href="mailto:motoki.developer@gmail.com">
            motoki.developer@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/motoki-naito/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LikedIn
          </a>
        </li>
        {/* <li>
          <a
            href="https://github.com/MotokiNaito"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li> */}
      </ul>
    </div>
    <div className="contact__img">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${"/static/images/contact.jpg"})`
        }}
      />
    </div>
  </section>
);

export default Contact;
