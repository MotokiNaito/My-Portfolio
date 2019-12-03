import React, { useEffect } from "react";

import SmoothScroll from "../lib/smoothScroll";
import LandingAnimation from "../lib/landingAnimation";

import SEO from "../components/Seo";
import Header from "../components/Header";
import LoadingAnimation from "../components/LoadingAnimation";
import BackgroundLines from "../components/BackgroundLines";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

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
        title="Motoki Naito | Front End Developer based in Vancouver"
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
                <span>based in Vancouver</span>
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
                I bridge the gap between <br />
                design and development.
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
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default IndexPage;
