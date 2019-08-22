import React, { useEffect } from "react";
import SmoothScroll from "../lib/smoothScroll";
import LandingAnimation from "../lib/landingAnimation";

const IndexPage = () => {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new SmoothScroll();
    // eslint-disable-next-line no-new
    new LandingAnimation();
  }, []);

  return (
    <>
      <div className="landing-animation">
        <div className="landing-animation__name-container">
          <h1 className="landing-animation__name landing-animation__name--fname">
            <span>Motoki</span>
          </h1>
          <h1 className="landing-animation__name landing-animation__name--lname">
            <span>Naito</span>
          </h1>
        </div>
        <div className="landing-animation__tiles">
          <div className="landing-animation__tile" />
          <div className="landing-animation__tile" />
          <div className="landing-animation__tile" />
          <div className="landing-animation__tile" />
          <div className="landing-animation__tile" />
          <div className="landing-animation__tile" />
        </div>
      </div>
      <header className="header">
        <nav className="main-nav">
          <ul>
            <li className="main-nav__list" data-nav="about">
              About
            </li>
            <li className="main-nav__list" data-nav="projects">
              Projects
            </li>
            <li className="main-nav__list" data-nav="contact">
              Contact
            </li>
          </ul>
        </nav>
      </header>
      <main className="home scroll-container" data-section="about">
        <div className="home-inner">
          <div className="line-container">
            <div className="line line--first" />
            <div className="line line--second" />
            <div className="line line--third" />
            <div className="line line--fourth" />
            <div className="line line--fifth" />
          </div>

          <section className="about panel">
            <h1 className="about__name about__name--first">
              <span>Motoki</span>
            </h1>
            <h1 className="about__name about__name--last">
              <span>Naito</span>
            </h1>
            <h3 className="about__title">
              <div>
                <span>Front End Developer</span>
              </div>
              <div>
                <span>and Designer</span>
              </div>
            </h3>
          </section>
          <section className="about-img panel">
            <div className="about-img__bottom">
              <div
                className="bg-image"
                style={{
                  backgroundImage: `url(${"https://i.ibb.co/GCCdy8t/womens.png"})`
                }}
              />
            </div>
            <div className="about-img__top">
              <div
                className="bg-image"
                style={{
                  backgroundImage: `url(${"https://i.ibb.co/R70vBrQ/men.png"})`
                }}
              />
            </div>
          </section>
          <section className="about-detail panel">
            <div className="about-detail__inner" data-reveal="container">
              <h2 className="about-detail__intro" data-reveal="fade-in">
                I Can Help To Bridge <br />
                The Gap Between Designers And&nbsp;Developers.
              </h2>
              <p className="about-detail__skills" data-reveal="fade-in">
                Skills <br />
                HTML, CSS, SCSS, React.js, Redux, Next.js, Typescript,
                Express.js, Node.js, PHP, Wordpress, Sketch, Figma, Photoshop,
                Illustorator
              </p>
            </div>
          </section>
          <div className="project-title panel" data-section="projects">
            <h3>Projects</h3>
          </div>
          <div className="project panel">
            <h1 className="project__title">E Commerce</h1>
            <div className="project__inner">
              <div className="project__txt">
                <h3>E Commerce App</h3>
                <p>
                  I am modern and of-the-moment. I find inspiration in the here
                  and now to keep you
                </p>
                <p className="project__txt__skills">
                  React.js, Redux, React Hooks, Firebase
                </p>
                <a href="" target="_blank">
                  Visit Site
                </a>
              </div>
              <div className="project__img">
                <div
                  className="bg-image"
                  style={{
                    backgroundImage: `url(${"https://i.ibb.co/cvpntL1/hats.png"})`
                  }}
                />
              </div>
            </div>
          </div>
          <div className="project panel project--even">
            <h1 className="project__title">Social Media APP</h1>
            <div className="project__inner">
              <div className="project__txt">
                <h3>Social Media APP</h3>
                <p>
                  I am modern and of-the-moment. I find inspiration in the here
                  and now to keep you
                </p>
                <p className="project__txt__skills">
                  React.js, Next.js, Express.js
                </p>
                <a href="" target="_blank">
                  Visit Site
                </a>
              </div>
              <div className="project__img">
                <div
                  className="bg-image"
                  style={{
                    backgroundImage: `url(${"https://i.ibb.co/px2tCc3/jackets.png"})`
                  }}
                />
              </div>
            </div>
          </div>
          <div className="project panel">
            <h1 className="project__title">Tomo Yoga</h1>
            <div className="project__inner">
              <div className="project__txt">
                <h3>Tomo Yoga</h3>
                <p>
                  I am modern and of-the-moment. I find inspiration in the here
                  and now to keep you
                </p>
                <p className="project__txt__skills">
                  PHP, Wordpress, Scss, Javascript, GSAP, Page Transition
                </p>
                <a href="" target="_blank">
                  Visit Site
                </a>
              </div>
              <div className="project__img">
                <div
                  className="bg-image"
                  style={{
                    backgroundImage: `url(${"https://i.ibb.co/0jqHpnp/sneakers.png"})`
                  }}
                />
              </div>
            </div>
          </div>
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
                <li>
                  <a
                    href="https://github.com/MotokiNaito"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact__img">
              <div
                className="bg-image"
                style={{
                  backgroundImage: `url(${"https://i.ibb.co/cvpntL1/hats.png"})`
                }}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
