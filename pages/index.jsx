import React from "react";

const IndexPage = () => {
  return (
    <>
      <header className="header">
        <nav className="main-nav">
          <ul>
            <li className="main-nav__list">About</li>
            <li className="main-nav__list">Projects</li>
            <li className="main-nav__list">Contact</li>
          </ul>
        </nav>
      </header>
      <main className="home">
        <div className="home-inner">
          <section className="about panel">
            <h1 className="about__fname">Motoki</h1>
            <h1 className="about__lname">Naito</h1>
            <h3 className="about__title">
              Front End Developer
              <br />
              Based in Vancouver
            </h3>
            <div className="about__img">
              <div className="bg-image" style={{ backgroundImage: `url(${"https://via.placeholder.com/1000"})` }} />
            </div>
          </section>
          <div className="line-container">
            <div className="line line--first"></div>
            <div className="line line--second"></div>
            <div className="line line--third"></div>
            <div className="line line--fourth"></div>
            <div className="line line--fifth"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
