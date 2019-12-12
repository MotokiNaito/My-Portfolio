import React from "react";

const Projects = () => (
  <>
    <div className="project-title panel" data-section="projects">
      <h3>Projects</h3>
    </div>
    <div className="project panel">
      <h1 className="project__title">E Commerce</h1>
      <div className="project__inner">
        <div className="project__txt">
          <h3>E-Commerce</h3>
          <p>
            Flexibility, fluidity, and speed of an E-Commerce experience begins
            with fluency in React.
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
            Complex environments made simple. A social networking hub built with
            Next.js.
          </p>
          <p className="project__txt__skills">React.js, Next.js, Express.js</p>
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
            Breathing in the calm, unfolding for tomorrow. A full-fledged brand
            experience: brand identity and website design and website
            development.
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
  </>
);

export default Projects;
