import React, { useEffect } from "react";

import SmoothScroll from "../lib/smoothScroll";
import LandingAnimation from "../lib/landingAnimation";

import SEO from "../components/Seo";
import Header from "../components/Header";
import LoadingAnimation from "../components/LoadingAnimation";
import BackgroundLines from "../components/BackgroundLines";

const IndexPage = () => {
  useEffect(() => {
    // eslint-disable-next-line no-new
    new SmoothScroll();
    // eslint-disable-next-line no-new
    new LandingAnimation();
  }, []);

  return (
    <>
      <SEO
        title="Motoki Naito | Front End Developer &amp; Designer"
        description="I am Motoki Naito. Front end developer and Designer based in Vancouver"
      />
      <LoadingAnimation />
      <BackgroundLines />
      <Header />
      <main className="home scroll-container" data-section="about">
        <div className="home-inner">
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
                  backgroundImage: `url(${"/static/images/about-bottom.jpg"})`
                }}
              />
            </div>
            <div className="about-img__top">
              <div
                className="bg-image"
                style={{
                  backgroundImage: `url(${"/static/images/about.jpg"})`
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
              <h4 className="about-detail__skills" data-reveal="fade-in">
                Skills <br />
                HTML, CSS, SCSS, React.js, Redux, Next.js, Typescript,
                Express.js, Node.js, PHP, Wordpress <br />
                Sketch, Figma, Photoshop, Illustorator
              </h4>
            </div>
          </section>
          <div className="project-title panel" data-section="projects">
            <h3>Projects</h3>
          </div>
          <div className="project panel">
            <h1 className="project__title">E Commerce</h1>
            <div className="project__inner">
              <div className="project__txt">
                <h3>E-Commerce Site</h3>
                <p>
                  Designed and built E-Commerce site with React to grasp React
                  concepts.
                </p>
                <p className="project__txt__skills">
                  React.js, Redux, React Hooks, Firebase
                </p>
                <a
                  href="https://rgb-clothing.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
                <a
                  href="https://github.com/MotokiNaito/RGB-Clothing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
              <div className="project__img">
                <div
                  className="bg-image"
                  style={{
                    backgroundImage: `url(${"/static/images/e-commerce.png"})`
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
                  Designed and built Social Media App like Facebook using
                  Next.js.
                </p>
                <p className="project__txt__skills">
                  React.js, Next.js, Express.js
                </p>
                <a
                  href="https://next-connect-app.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
                <a
                  href="https://github.com/MotokiNaito/Social-Media-App-with-Express-and-Next"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
              <div className="project__img">
                <div
                  className="bg-image"
                  style={{
                    backgroundImage: `url(${"/static/images/social-media-app.jpg"})`
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
                  Worked on from Branding to Website development to spread his
                  Yoga identity.
                </p>
                <p className="project__txt__skills">
                  PHP, Wordpress, Scss, Javascript, GSAP, Page Transition
                </p>
                <a
                  href="https://tomoyoga.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </div>
              <div className="project__img">
                <div
                  className="bg-image"
                  style={{
                    backgroundImage: `url(${"/static/images/tomoyoga.jpg"})`
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
                  backgroundImage: `url(${"/static/images/contact.jpg"})`
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
