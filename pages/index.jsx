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
          <div className="line-container">
            <div className="line line--first" />
            <div className="line line--second" />
            <div className="line line--third" />
            <div className="line line--fourth" />
            <div className="line line--fifth" />
          </div>
          <section className="about panel">
            <h1 className="about__fname">Motoki</h1>
            <h1 className="about__lname">Naito</h1>
            <h3 className="about__title">
              Front End Developer
              <br />
              Based in Vancouver
            </h3>
          </section>
          <section className="about-img panel">
            <div className="about-img__bottom">
              <div
                className="bg-image"
                style={{
                  backgroundImage: `url(${"https://via.placeholder.com/1000"})`
                }}
              />
            </div>
            <div className="about-img__top">
              <div
                className="bg-image"
                style={{
                  backgroundImage: `url(${"https://via.placeholder.com/1000"})`
                }}
              />
            </div>
          </section>
          <section className="about-detail panel">
            <div className="about-detail__inner">
              <h2 className="about-detail__intro">
                Hi, Im Japanese front end developer. I create cool digital
                projects.
              </h2>
              <p className="about-detail__skills">
                Skills <br />
                HTML, CSS, SCSS, React,js, Redux, Next.js, Express.js, Node.js
              </p>
            </div>
          </section>
          <div className="panel">
            <h3>Projects</h3>
          </div>
          <div className="project panel">
            <h1 className="project__title">Bidwell</h1>
            <div className="project__inner">
              <p className="project__txt">
                I am modern and of-the-moment. I find inspiration in the here
                and now to keep you on the
              </p>
              <a href="" target="_blank">
                Visit Site
              </a>
              <div className="project__img">
                <div
                  className="bg-image"
                  style={{
                    backgroundImage: `url(${"https://via.placeholder.com/1000"})`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
