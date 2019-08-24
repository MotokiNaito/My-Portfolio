import React from "react";

const Header = () => (
  <header className="header">
    <nav className="main-nav">
      <ul>
        <li className="main-nav__list link link--reverse" data-nav="about">
          About
        </li>
        <li className="main-nav__list link link--reverse" data-nav="projects">
          Projects
        </li>
        <li className="main-nav__list link link--reverse" data-nav="contact">
          Contact
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
